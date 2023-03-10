import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle, BsQrCodeScan } from 'react-icons/bs'
import { TransactionContext } from "../context/TransactionContex";
import React, { useContext, useEffect, useState } from 'react';
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import { HiQrcode } from "react-icons/hi";
import Compo from "./QR/Compo";
import eth from "../../images/ethereum.png"
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
const Input = ({ placeholder, name, type, value, handleChange }) => {
    return (
        <input placeholder={placeholder}
            type={type}
            step="0.0001"
            value={value}
            onChange={(e) => { handleChange(e, name); }}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
    )
}
const Welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading, QrResult, setQrResult, isScanning, setIsScanning } = useContext(TransactionContext);

    const scanQr = () => {
        setIsScanning(true);
    }
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if (!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }
    return (
        <div className="flex w-full justify-center item-center">
            <div className="flex mf:flex-row flex-col items-center justify-between w-5/6 md:p-20 py-12 px-4 ">
                <div className="flex flex-1 w-full justify-start flex-col">
                    {!currentAccount && (
                        <div className="flex flex-1 justify-start flex-col">
                            <h1 className="text-white text-3xl sm:text-5xl  text-gradient py-1">
                                Send Crypto
                                <br />
                                Across the world
                            </h1>
                            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                                Explore Crypto world. Buy and sell crypto
                            </p>
                            <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 w-5/6 max-w-[50%] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                <p className="text-white text-base font-semibold">
                                    Connect
                                </p>
                            </button>
                        </div>
                    )
                    }
                    {
                        currentAccount && (
                            <div className="flex flex-1 w-full justify-start flex-col items-center mf:mr-10">
                                {
                                    !isScanning && (
                                        <div className="flex flex-1 justify-start items-center flex-col">
                                         <h1 className="text-white text-center text-3xl sm:text-5xl p-4 text-gradient py-1">
                                                 Blockchain Wallet
                                            </h1>
                                            <img src={eth} className="w-3/6 justify-center my-2"/>
                                            <p className="text-center mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                                                Explore Crypto world. Buy and sell crypto in few clicks
                                            </p>
                                            
                                        </div>
                                    )

                                }
                                {
                                    isScanning && (<div className="items-center w-full justify-center flex-col">
                                        <Compo />
                                        <button type="button" onClick={()=>{ setIsScanning(false)}} className="flex flex-row justify-center items-center my-5 w-5/6 xl:max-w-[50%] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                                
                                                <HiQrcode color="white" size={40} />
                                                <p className="text-white text-base font-semibold">
                                                    Stop
                                                </p>
                                            </button>
                                    </div>)
                                }
                                {
                                    !isScanning && (
                                        <button type="button" onClick={scanQr} className="flex flex-row justify-center items-center my-5 w-5/6 xl:max-w-[50%] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                            {/* <BsQrCodeScan/> */}
                                            <HiQrcode color="white" size={40} />
                                            <p className="text-white text-base font-semibold">
                                                Scan Address
                                            </p>
                                        </button>
                                    )
                                }
                            </div>

                        )
                    }
                    {/* chart to write features : */}
                    {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliable
                        </div>
                        <div className={commonStyles}>Secured</div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>Blockchain</div>

                    </div> */}


                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" value={QrResult} name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount ETH" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                        <div className="h-[1px] w-full bg-gray-400 my-2"> </div>
                        {
                            isLoading ? (
                                <Loader />
                            ) : (
                                <button type="button"
                                    onClick={handleSubmit}
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer "
                                >
                                    Send Now
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome;