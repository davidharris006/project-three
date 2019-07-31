import React, { Component } from "react";
import Individualcard from "../components/individualCard";
import TotalBalanceCard from "../components/totalBalance";
import Tripmaker from "../pages/Tripmaker";


let totalOwed = 0;

function Ledger(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-5 center" />
        <div className="col-md-2~ center">
          {props.owed.forEach(user => {
            return (totalOwed += user.amount);
          })}
          <TotalBalanceCard userOwes={totalOwed} />
        </div>
        <Tripmaker />

        <div className="col-md-5~ center" />
      </div>
      <h2 className="text-left">Your Ledger: </h2>
      {props.owed.map(user => {
        console.log(user);
        return (
          <Individualcard
            username={user.userId}
            amount={user.amount}
            img={user.img}
          />
        );
      })}
    </div>
  );
}

export default Ledger;
