import React from 'react'
import {  useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';
import { remove } from '../store/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const notify1 = () => toast.success('Item Removed✔', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    const products = useSelector(state=>state.cart);
    const dispatch = useDispatch();
  const removeCart = (id) =>{
     dispatch(remove(id));
  }
    const cards = products.map(product=>(
      <div className='col-md-12'>
          <Card key={product.id} className='h-100'>
            <div className='text-center'>
        <Card.Img  style={{width:'100px' ,height:"130px" }} src={product.image} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR.{product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer onClick={notify1} style={{backgroundColor:"white"}}>
        <Button onClick={()=>removeCart(product.id)}  variant="danger">Remove Item</Button>
        <ToastContainer/>
        </Card.Footer>
      </Card>
      </div>
    ))
  return (
    <>
    <div className='row'>
      {cards}
      <div>
      <Button style={{marginTop:"20px"}}><a style={{color:"white",textDecoration:"none"}} href='https://buy.stripe.com/test_4gwdTJbUXcgOfpC8wy'>Procced To Pay</a></Button>
      </div>
    </div>
    </>
  )
}

export default Cart