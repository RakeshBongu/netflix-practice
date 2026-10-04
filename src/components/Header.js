import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {languages} from '../utils/languages'
import { addLanguageConfiguration } from '../utils/configSlice';

const Header = () => {
    const user = useSelector(store => store.user)
    const language = useSelector(store => store.config.language)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const langRef = useRef(null);
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleGptNavigation = () => {
        navigate('/gptSearch')
    }

    const handleLanguage = () => {
        dispatch(addLanguageConfiguration(langRef.current.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user
                dispatch(addUser({uid, email, displayName}))
                if (window.location.pathname === '/') navigate('/browse')
            } else {
               dispatch(removeUser())
               navigate('/')
            }
        });
         return () => unsubscribe();
    }, [])

    return (
        <div className='absolute z-10 w-full py-2 px-8 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-32 cursor-pointer'
                onClick={() => navigate(user ? '/browse' : '/')}
                src='https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg'
                alt='netflixlogo'
            />
            
            {user &&
                <>
                    <div className='text-white'>
                        {window.location.pathname === '/gptSearch' && <select ref={langRef} className='p-2 mr-2 bg-purple-500 rounded-lg' onChange={handleLanguage} value={language}>
                            {
                                Object.values(languages)?.map(language => <option key={language.key} value={language.key} className='bg-'>{language.label}</option>)
                            }
                        </select>}
                        {window.location.pathname !== '/gptSearch' && <button className='bg-purple-600 p-2 rounded-lg mr-2' onClick={handleGptNavigation}>GPT Search</button>}
                        <button className='bg-red-600 p-2 rounded-lg' onClick={handleSignout}>Sign Out</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Header
