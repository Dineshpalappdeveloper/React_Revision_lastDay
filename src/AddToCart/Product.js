import React from 'react'
import logo from "./instagram.png"
import Image1 from "./facebook.png"
import Item from './Items'
const Product = () => {
  return (
    <>
    <div style={{display:"flex" ,justifyContent:"space-around"}}>
    <img src={logo}  height={150} width={100} alt='not found' />
    <h2>count : 0</h2>
    </div>
    <div style={{display:"flex" ,justifyContent:"space-around"}}>
    <Item id="1" title="watch" src={Image1} />
    <Item id="2" title="Clock" src={Image1} />
    <Item id="3" title="Phone" src={Image1} />
    </div>
    </>
  )
}

export default Product
