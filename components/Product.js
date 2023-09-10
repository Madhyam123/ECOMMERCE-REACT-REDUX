import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {
  const dispatch = useDispatch();
  const [products,getProducts] = useState([])
  useEffect(()=>{ 
     fetch('https://fakestoreapi.com/products')
     .then(data=>data.json())
     .then(result=>getProducts(result))
  },[]);

  const addToCart = (product)=>{
  dispatch(add(product))
  }
  const notify = () => toast.success('Sucessfully Added to Cart ✔', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const cards = products.map(product=>(
    <div className='col-md-3'>
        <Card key={product.id} className='h-100'>
          <div className='text-center'>
      <Card.Img  style={{width:'100px' ,height:"130px"}} src={product.image} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR.{product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer onClick={notify} style={{backgroundColor:"white"}}>
        {/* <button  onClick={notify}>Notify</button> */}
      <Button  onClick={()=>addToCart(product)} variant="primary">ADD To Cart</Button>
      <ToastContainer />
      </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <>
    <h1>Product Dashboard</h1>
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Product