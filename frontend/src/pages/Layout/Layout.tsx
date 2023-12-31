import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ConnectWalletBtn from '../../components/ConnectWalletBtn/ConnectWalletBtn';

export default function Layout({ isMetamaskInstalled, connectWallet, account, provider, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; provider: any; signer: any;}) {

    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] flex flex-row overflow-hidden'>
            <Header />
            <main className='relative w-[100%] overflow-y-scroll'>
                <ConnectWalletBtn
                    isMetamaskInstalled={isMetamaskInstalled}
                    connectWallet={connectWallet}
                    account={account}
                    provider={provider}
                    signer={signer}
                />
                <Outlet />
            </main>
        </div>
    )
}