import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import GptSearchComponent from './GptSearchComponent'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/', element: <Login />
        },
        {
            path: '/browse', element: <Browse />
        },
        {
            path: '/gptSearch', element: <GptSearchComponent />
        },
    ])

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body
