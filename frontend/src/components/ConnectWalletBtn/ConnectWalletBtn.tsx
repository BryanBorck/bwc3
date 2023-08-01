import React from 'react';

export default function ConnectWalletBtn({ isMetamaskInstalled, connectWallet, account, provider, signer }: { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; provider: any; signer: any}) {

    return (
        <>
            {
                isMetamaskInstalled ? (
                    <div
                        onClick={connectWallet}
                        className='absolute w-[12vw] right-[3vw] top-[3vh] p-3 bg-secondary-color hover:bg-primary-color text-white rounded-full cursor-pointer transition duration-600 ease-in-out'
                    >
                        <h3 className='flex justify-center'>{account ? "Wallet Connected: " +
                            account.substring(0, 5) +
                            "..." +
                            account.substring(39, 42) : "Connect Wallet"}</h3>
                    </div>
                ) : (
                    <div
                        className='absolute w-[12vw] right-[3vw] top-[3vh] p-3 bg-secondary-color hover:bg-primary-color text-white rounded-full cursor-pointer transition duration-600 ease-in-out'
                    >
                        <a href="https://metamask.io/download/">Install Metamask</a>
                    </div>
                )
            }
        </>
    )
}