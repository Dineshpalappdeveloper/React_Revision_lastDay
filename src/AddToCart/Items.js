import React from 'react'

const Item = (id,title,image) => {
  return (
    <div style={{display:"flex",flexDirection:"column" , justifyContent:"center"}}>
       <h1>{title}</h1>
       <img src={image} alt='not found'  height={150} width={100} />
       <button>Add to cart </button>
    </div>
  )
}

export default Item
