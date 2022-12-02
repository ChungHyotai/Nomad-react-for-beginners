import {useState, useEffect} from "react";
import CoinList from "./CoinList";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers', {method : "GET"})
    .then(res => res.json())
    .then(res => {
      setLoading(false)
      setCoins(res.map((item, index)=> <CoinList key={index} rank={item.rank} name={item.name} symbol={item.symbol} price={item.quotes.USD.price} />))
      // console.log(res.map((item, index)=> 'a'));
      // console.log(res.filter((data) => data.name.includes("Bitcoin") > 0))
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>{coins}</ul>
      )}
      
    </div>
  )
}

export default App