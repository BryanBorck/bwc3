import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ConnectWalletBtn from '../../components/ConnectWalletBtn/ConnectWalletBtn';

export default function Layout({ isMetamaskInstalled, connectWallet, account }: { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; }) {

    return (
        <div className='w-[100vw] h-[100vh] bg-secondary-color flex flex-row overflow-hidden'>
            <Header />
            <main className='w-[100%] overflow-y-scroll'>
                <Outlet />
            </main>
            <ConnectWalletBtn
                isMetamaskInstalled={isMetamaskInstalled}
                connectWallet={connectWallet}
                account={account}
            />
        </div>
    )
}