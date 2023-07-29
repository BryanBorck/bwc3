import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout() {
    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] flex flex-row overflow-hidden'>
            <Header />
            <main className='w-[100%] overflow-y-scroll'>
                <Outlet />
            </main>
        </div>
    )
}