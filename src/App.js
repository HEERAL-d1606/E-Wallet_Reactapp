import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { buyMovie } from './Actions/walletAction';
import store from './store';
import Container from './Container';
import { Provider } from 'react-redux';
function App() {
  store.subscribe(()=>console.log(store.getState()))
    return (
      <div>
          <Provider store={store}>
              <Container/>
          </Provider>
      </div>
    )
  
}

export default App;
