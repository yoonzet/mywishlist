import React from 'react'
import styled  from "styled-components";


const Td = styled.td`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  background-color: transparent;
`
const Img = styled.img`
  width: 300px;
`

const ReadOnlyRow = ({image, item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
        <Td><Img src={image} alt="" /></Td>
        <Td>{item.name}</Td>
        <Td>{item.store}</Td>
        <Td>{item.price} 원</Td>
        <Td>{item.shippingFee} 원</Td>
        <Td>{item.memo}</Td>
        <Td>
          <button 
            type='button' 
            onClick={(e)=> handleEditClick(e, item)}>수정
            </button>
          <button type='button' onClick={() => handleDeleteClick(item.id)}>Delete</button>        
        </Td>
    </tr>
  )
}

export default ReadOnlyRow;