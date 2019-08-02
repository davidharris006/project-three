import React, { Component } from "react";
import Individualcard from "../components/individualCard";
import TotalBalanceCard from "../components/totalBalance";
import axios from "axios"


let totalOwed = 0;
let totalPaid = 0;
let totalBalance;


class Ledger extends Component {
  state ={
    owed: [],
    paid:[]
  }

  componentDidMount() {
   
    this.getNewEvent()
    // this.getPaidData()
    // this.setTotals()
  
  }

  getNewEvent() {
    console.log(this.props.username)

    axios.get("/user/findOwedByUserId/" + this.props.username)
    .then((response) => {
      this.setState({
              ...this.state,
              owed: response.data
         })
     return axios.get("/user/findPaidByUserId/" + this.props.username)
    })
    .then((res) => {
      this.setState({
        ...this.state,
        paid: res.data
     })
    })
    
}
//   getPaidData() {
//     console.log(this.props.username)

//     axios.get("/user/findPaidByUserId/" + this.props.username).then(response => {
    //   this.setState({
    //     ...this.state,
    //     paid: response.data
    //  })
//     })
// }
 setTotals() {
  this.state.owed.forEach(user => {
   return (totalOwed += user.amount)
 })
 this.state.paid.forEach(user => {
  return (totalPaid += user.amount)
})
}

  render() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5" />
        <div className="col-md-2">
      
          { /* {this.state.paid.forEach(user => {
            return (totalPaid += user.amount)
          })}
              {this.state.owed.forEach(user => {
                return (totalOwed += user.amount);
              })} */}
        
          <TotalBalanceCard userOwes={totalOwed} userIsOwed={totalPaid} balance={totalPaid - totalOwed} />
        </div>

        <div className="col-md-5" />
      </div>
      <h2 className="text-left">Your Ledger: </h2>
      {console.log(this.state)}
      {this.state.owed.map(user => {
        totalOwed += user.amount
        console.log(user);
        return (
          <Individualcard
          color = "danger"
            username={user.youOwedTo}
            amount={user.amount}
            img={user.img}
          />
        );
      })}
      {this.state.paid.map(user => {
        totalPaid += user.amount
        console.log(user);
        return (
          <Individualcard
          color = "success"
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
