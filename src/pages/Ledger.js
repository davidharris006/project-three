import React, { Component } from "react";
import Individualcard from "../components/individualCard";
import TotalBalanceCard from "../components/totalBalance";
import Tripmaker from "../pages/Tripmaker";
import axios from "axios"


let totalOwed = 0;


class Ledger extends Component {
  state ={
    owed: []
  }

  componentDidMount() {
    this.getNewEvent()
  }

  getNewEvent() {
    console.log(this.props.username)

    axios.get("/user/findOwedByUserId/" + this.props.username).then(response => {
      this.setState({

        owed: response.data
     
      })
        
       
        console.log("here");
        console.log(this.state);

    })
}


  render() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5" />
        <div className="col-md-2">
       
          {this.state.owed.forEach(user => {
            return (totalOwed += user.amount);
          })}
          <TotalBalanceCard userOwes={totalOwed} />
        </div>
        <Tripmaker />

        <div className="col-md-5" />
      </div>
      <h2 className="text-left">Your Ledger: </h2>
      {/* {this.getNewEvent()} */}
      {this.state.owed.map(user => {
        console.log(user);
        return (
          <Individualcard
          color = "danger"
            username={user.userId}
            amount={user.amount}
            img={user.img}
          />
        );
      })}
    </div>
  );
}
}

export default Ledger;
