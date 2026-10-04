import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { languages } from '../utils/languages'

const GptSearchComponent = () => {
    const language = useSelector(store => store.config.language)
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <img 
                className='fixed'
                 src='https://assets.nflxext.com/ffe/siteui/vlv3/ab1fe332-993a-44d1-b60b-cd4f8d11b96e/web/IN-en-20260928-TRIFECTA-perspective_85aef51c-94d6-41ea-a1ea-1e77199158f1_medium.jpg'
                />  
            </div>
            <div className='pt-[6%] flex justify-center'>
                <form className='bg-cyan-900 text-white absolute p-4 m-6 rounded-lg w-1/2 grid grid-cols-12 bg-opacity-50' onSubmit={(e)=>e.preventDefault()}>
                    <input className='p-2 rounded-lg col-span-9' type='text' placeholder={languages[language].searchPlaceholder} />
                    <button className='col-span-3 bg-red-500 rounded-lg p-2 ml-2'>{languages[language].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchComponent
