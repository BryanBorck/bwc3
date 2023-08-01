import React from 'react';
import Confetti from 'react-confetti';

export default function Success() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-7xl text-primary-color mb-4">Congratulations!</h1>
            <p className='font-bold text-3xl mb-4'>You received a Creator NFT</p>
            <img
                src="https://i.ibb.co/WxypJxx/nft-goodstream.png"
                alt="Creator NFT"
                className='w-1/4 h-1/4 border-4 border-primary-color rounded-lg p-1'
            />
            <Confetti
                width={window.innerWidth * 0.84}
                height={window.innerHeight}
                recycle={false}
            />
        </div>
    )
}