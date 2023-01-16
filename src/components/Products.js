import React, { useEffect } from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from "react-redux"
import { addCart } from '../rtk/Slices/CartSlice';
import {fetchdata} from '../rtk/Slices/ProductSlice'
import { ToastContainer, toast } from 'react-toastify';

function Products() {

const products = useSelector((state)=>state.products)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(fetchdata())
}, [])


const notify = () => toast("Added to cart");

  return (

<Container>
<ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLossb 
draggable
pauseOnHover
theme="dark"
/>
    <Row>
    
        {products.map((product)=>
          (
          
          <Col key={product.id}>
          <Card style={{ width: '14rem' , height:"446px", margin: "3px",}}>
          <Card.Img variant="top" src={product.image} style={{ width: '50%' ,padding:"7px"}} />
          <Card.Body style={{ padding: '10px' }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className='description'>
          {product.description}
          </Card.Text>
          <Card.Text  >
          Price: {product.price}$
        </Card.Text>
          <Button className='btn' onClick={
            ()=>{dispatch(addCart(product))
            notify()}}>Add cart</Button>
          </Card.Body>
          </Card>
        </Col>
  ))}
    </Row>
</Container>

  )
}

export default Products
