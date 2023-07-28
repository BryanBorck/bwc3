import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                layout 
                <Outlet />
            </main>
        </div>
    )
}