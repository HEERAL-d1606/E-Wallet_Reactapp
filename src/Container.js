import React from 'react'
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Recharge, buyGroc, buyMovie, getmydata, showData } from './Actions/walletAction';
//import  Card  from "react-bootstrap/Card"
import store from './store';

function Container() {
  
    const wallet = useSelector((state)=>state.data.wallet)
    const user = useSelector((state)=>state.data.user)
    console.log(wallet)
    const dispatch = useDispatch()
    const [val,setVal] = useState(0);
    const handleChange=(e)=>{
            setVal(e.target.value)
    }
    let handleMovie=()=>{
        console.log(val);
        dispatch(buyMovie(val))
    }
    let handleGrocery=()=>{
        console.log(val);
        dispatch(buyGroc(val))
    }
    let handlRecharge=()=>{
        console.log(val);
        dispatch(Recharge(val))
    }
    let handleShow=()=>{
        const st=dispatch(getmydata())
        console.log(st)
    }
    //store.subscribe(()=>console.log(store.getState()))
    
    // store.subscribe(()=>console.log(store.getState()))
    // return (
    //   <div>
    //       <Provider store={store}>
    //           <Todo/>
    //       </Provider>
    //   </div>
    // )
  useEffect(()=>{
  const st=dispatch(getmydata());
  console.log(user)
  },[])
    return (
      <>
      
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">E-Wallet</span>
  </div>
</nav>
<h4 class='m-3'>Hi {user.name}</h4>
     <h3 class='mx-auto'>Wallet Balance: {JSON.stringify(wallet)} </h3>
    
      <div class="container m-3 mx-auto">
  <div class="row">
    <div class="col m-5">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg" style={{height:"14rem"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Buy Movie</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">Amount</span>
  <input   type='number' onChange={(e)=>handleChange(e)}class="form-control" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    <a  class="btn btn-primary mt-2" onClick={()=>handleMovie()}>Buy</a>
  </div>
</div>
    </div>
    <div class="col m-5">
     <div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HFgIPQ2ICrARb5Phw-WoFjnrNWctFitLVwCCNYFu&s"  style={{height:"14rem"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Buy Grocery</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">Amount</span>
  <input type='number' onChange={(e)=>handleChange(e)} class="form-control"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    <a  class="btn btn-primary mt-2" onClick={()=>handleGrocery()}>Buy</a>
  </div>
</div>
    </div>
    <div class="col m-5">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://selectra.in/sites/selectra.in/files/2021-04/mobile-recharge-plans.png" class="card-img-top" style={{height:"14rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Recharge Wallet</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">Amount</span>
  <input type='number' onChange={(e)=>handleChange(e)} class="form-control"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    <a  class="btn btn-primary mt-2" onClick={()=>handlRecharge()}>Recharge</a>
  </div>
</div>
    </div>
  </div>
</div>
      
        
      
      
      
      
      
      </>
    );
}

export default Container