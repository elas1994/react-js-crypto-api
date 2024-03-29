import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins/Coins";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin/Coin";
import CoinItem from "./components/CoinItem/CoinItem";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        //*console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path="/:coinId" element={<Coin />} />
        </Route>
        <Route path="/" element={<CoinItem />} />
      </Routes>
    </>
  );
}

export default App;
