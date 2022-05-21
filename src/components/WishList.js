import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import WishItem from './WishItem';
import styled from "styled-components";
import Modal from './Modal';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`
const Th = styled.th`
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  background-color: #eee;
`

const Td = styled(Th)`
background-color: transparent;
`

function WishList() {
  const [list, setList] = useState([]);
  const [addFormData, setAddFormData] = useState({
    name:'',
    store:'',
    price:'',
    shippingFee:'',
    memo:''
  })

 
  
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWishItem = {
      id: nanoid(), 
      name: addFormData.name,
      store:addFormData.store,
      price:addFormData.price,
      shippingFee:addFormData.shippingFee,
      memo:addFormData.memo
    };

    const newWishList = [newWishItem];
    setList(newWishList)
  }

  return (
    <>
    <h2>추가하기</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input  
        required 
        type="text" 
        name='name' 
        placeholder='상품명' 
        onChange={handleAddFormChange}
        />
      <input 
        required 
        type="text" 
        name='store' 
        placeholder='판매처' 
        onChange={handleAddFormChange}
        />
      <input 
        required 
        type="text" 
        name='price' 
        placeholder='가격'
        onChange={handleAddFormChange}
         />
      <input 
        required 
        type="text" 
        name='shippingFee' 
        placeholder='배송비'
        onChange={handleAddFormChange}
         />
      <input 
        type="text" 
        name='memo' 
        placeholder='메모' 
        onChange={handleAddFormChange}
        />
      <input 
        type="submit" /> 
    </form>
    <Div>
      <Table>
        <thead>
          <Th>상품명</Th>
          <Th>판매처</Th>
          <Th>가격</Th>
          <Th>배송비</Th>
          <Th>메모</Th>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr>
              <Td>{item.name}</Td>
              <Td>{item.store}</Td>
              <Td>{item.price} 원</Td>
              <Td>{item.shippingFee} 원</Td>
              <Td>{item.memo}</Td>
            </tr>
          ))}          
        </tbody>
      </Table>
    </Div>

      <Modal/>
      <WishItem/>

    </>
  )
}

export default WishList;