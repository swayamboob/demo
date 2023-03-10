import React from 'react';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContex';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';
const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });
    return (
        <div className='bg-[#181918] m-4 flex flex-1 
        2xl:min-w-[250px]
        2xl:max-w-[350px]
        sm:min-w-[200px]
        sm:max-w-[300px]
        flex-col p-3 rounded-md hover:shadow-2xl        
        '>
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className='text-white text-base'>
                            From: {shortenAddress(addressFrom)}
                        </p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className='text-white text-base'>
                            To: {shortenAddress(addressTo)}
                        </p>
                    </a>
                    <p className='text-white text-base'>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className='text-white text-base'> message:{message}</p>
                        </>
                    )}
                </div>
                <img src={gifUrl || url} alt="gif" className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover' />

                <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                    <p className='text-[#37c7da] font-bold'> {timestamp}</p>
                </div>

            </div>
        </div>
    );
}
const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <div className='flex w-full justify-center 2xl:px-20 gradient-bg-transactions' id="Transactions">
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ?
                    (<h3 className='text-white text-3xl text-center my-2 '><span className='border-2 border-[#2952e3] px-16 my-1 rounded-full font-semibold'>Transactions</span></h3>) :
                    (<h3 className='text-white text-3xl text-center my-2'>Connect Wallet</h3>)
                }
                {
                    currentAccount && (
                        <div className='flex flex-wrap border-2 rounded-lg border-[#2952e3] h-[520px] justify-center items-center mt-10 h-5/6 overflow-y-scroll'>
                    {transactions.reverse().map((transaction, i) =>
                    ( 
                            <TransactionCard key={i} {...transaction} /> 
                    )
                    )}
                </div>
                    )
                }
            </div>
        </div>
    )
}
export default Transactions;