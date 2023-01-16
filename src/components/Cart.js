import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import Table from 'react-bootstrap/Table';
import { Clear, deletefromcart } from '../rtk/Slices/CartSlice';
import { Container} from 'react-bootstrap';
function Cart() {
  const cart = useSelector(state=>state.cart)


  const totalprice =cart.reduce(
    (acc, cart) => {acc += cart.price * cart.quantity
    return acc
    }
  ,0);
console.log(totalprice)

  const dispatch = useDispatch()


  return (
    <div>
    <h2>I hope you like our products</h2>
    <button className='Clear' onClick={()=>dispatch(Clear())}>Clear</button>
    <Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>image</th>
        <th>price</th>
        <th>Quantity</th>
        <th>Del</th>
      </tr>
    </thead>
    <tbody>
    {cart.map((item)=>(
      <tr key={item.id}>

      <td><img style={{ width: '5rem' }} src={item.image} /></td>
      <td style={{ width: 'rem' , padding:'0'  }} >{item.price} $</td>
      <td style={{ width: '0.5rem', padding:'0' }} >{item.quantity} </td>
      <td style={{ width: '1rem', padding:'50px 0px'}}  ><button  onClick={()=>{dispatch(deletefromcart(item.id))}}> X</button></td>

    </tr>

    ))}
  
    </tbody>
  </Table>
  <p className='totp'>total price ({totalprice.toFixed(2)}$) </p>
    </div>
  )
}

export default Cart