import React from 'react';

export default function ConnectWalletBtn({ isMetamaskInstalled, connectWallet, account }: { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; }) {

    return (
        <>
            {
                isMetamaskInstalled ? (
                    <div
                        onClick={connectWallet}
                        className='fixed right-6 top-3 p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full cursor-pointer'
                    >
                        <h3>{account ? "Wallet Connected: " +
                            account.substring(0, 5) +
                            "..." +
                            account.substring(39, 42) : "Connect Wallet"}</h3>
                    </div>
                ) : (
                    <div
                        className='fixed right-6 top-3 p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full cursor-pointer'
                    >
                        <a href="https://metamask.io/download/">Install Metamask</a>
                    </div>
                )
            }
        </>
    )
}