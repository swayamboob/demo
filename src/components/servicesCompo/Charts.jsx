import Axios from "axios";
import { useEffect, useState } from "react";
import Iframe from 'react-iframe'
const Coin = ({ name, icon, price, symbol }) => {
    return (
        <div className='bg-[#181918] m-4 flex flex-1 
      2xl:min-w-[150px]
      2xl:max-w-[250px]
      sm:min-w-[150px]
      sm:max-w-[200px]
      min-w-[100px]
      flex-col p-3 rounded-md hover:shadow-2xl'>
            <h1>Name: {name} </h1>
            <img src={icon} alt={name} />
            <h3>Price: {price.toFixed(3)}$ </h3>
            <h3>Symbol: {symbol} </h3>
        </div>
    )
}
const Charts = () => {
    const [listOfCoins, setListOfCoins] = useState([])
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
            (response) => {
                setListOfCoins(response.data.coins);
            }
        )
    }, []);

    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    return (
        <div className="text-white gradient-bg-services w-full flex flex-col md:p-12 py-12 px-4" id="Crypto">
            <h3 className='text-white text-3xl text-center my-2 '><span className='border-2 border-[#2952e3] px-16 my-1 rounded-full font-semibold'>Crypto</span></h3>
            <div className="my-4 mx-4 ">
                <input className="text-[#2952e3] border rounded-full md:w-2/6 xl:w-2/6 " type="text" placeholder="Search Crypto"
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }}
                />
            </div>
            
            <div className='w-full grid grid-rows-1 text-white md:grid-cols-2'>
          <div className='w-full p-4  flex flex-wrap gradient-bg-Transactions  overflow-y-scroll centered h-[520px]'>
          {filteredCoins.map((coin) => {
                        return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} key={coin.id} />
                    })}  

          </div>

          {/* page 2 */}
          {/* <div className='w-full flex flex-wrap bg-black overflow-y-scroll centered h-[520px]'>
          
          </div> */}
          <div className='justify-item-center w-full flex flex-wrap  overflow-y-scroll centered  '>
          {/* <iframe class=" 2xl:w-full h-full pt-32 pl-4 pr-0  " src="https://www.coindesk.com/embedded-chart/FrhbhH6Wchjcb" width="100%" frameborder="0"></iframe> */}
            {/* <div class="nomics-ticker-widget" data-name="Ethereum" data-base="ETH" data-quote="USD"></div> */}
            {/* <Demo/> */}
            <iframe  class="w-full h-[500px]  my-14 rounded-3xl" src="https://techika-cryptocurrency-chart.netlify.app/"  title="description"></iframe>
          </div>
      </div>
        </div>
    )
}
export default Charts;