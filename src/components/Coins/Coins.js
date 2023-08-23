import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import Coin from "../../routes/Coin/Coin";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {props.coins.map((coins1) => {
          return (
            <Link
              to={`/react-js-crypto-api/coin/${coins1.id}`}
              element={<Coin />}
              key={coins1.id}
            >
              <CoinItem coins={coins1} key={coins1.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
