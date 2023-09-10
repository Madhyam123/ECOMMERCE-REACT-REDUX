import React from 'react'
import {Outlet} from 'react-router-dom';
import NavBar from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';
import Login from './Login';
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Login/>
    <NavBar />
    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default RootLayout