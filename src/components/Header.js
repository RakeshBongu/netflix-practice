import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
    const user = useSelector(store => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user
                dispatch(addUser({uid, email, displayName}))
                navigate('/browse')
            } else {
               dispatch(removeUser())
               navigate('/')
            }
        });
         return () => unsubscribe();
    }, [])

    return (
        <div className='absolute z-10 w-full py-2 px-8 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-32'
                src='https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg'
                alt='netflixlogo'
            />
            {user && <div>
                <button className='bg-red-600 p-2 rounded-lg' onClick={handleSignout}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header
