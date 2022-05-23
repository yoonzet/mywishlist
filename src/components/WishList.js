import React, { useState, Fragment, useRef } from 'react'
import { nanoid } from 'nanoid';
import WishItem from './WishItem';
import styled from "styled-components";
import Modal from './Modal';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

// ------styled-------

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
// ------component-------

function WishList() {
  const [list, setList] = useState([]);
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const fileInput = useRef(null);
  const [addFormData, setAddFormData] = useState({
    img:'',
    name:'',
    store:'',
    price:'',
    shippingFee:'',
    memo:''
  })

  const [editFormData, setEditFormData] = useState({
    img:'',
    name:'',
    store:'',
    price:'',
    shippingFee:'',
    memo:''
  })
  console.log(editFormData)


  const [editListId, setEditListId] = useState(null); 
  
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

    // img올리기
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

    // img올리기
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWishItem = {
      id: nanoid(), 
      img: addFormData.img,
      name: addFormData.name,
      store:addFormData.store,
      price:addFormData.price,
      shippingFee:addFormData.shippingFee,
      memo:addFormData.memo
    };


    const newWishList = [...list, newWishItem];
    setList(newWishList)

  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id:editListId,
      img: editFormData.img,
      name: editFormData.name,
      store: editFormData.store,
      price: editFormData.price,
      shippingFee: editFormData.shippingFee,
      memo: editFormData.memo
    }

    const newList = [...list]
    
    const index = list.findIndex((item)=> item.id === editListId);

    newList[index] = editedList;

    setList(newList);
    setEditListId(null);
  };

  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditListId(item.id);

    const formValues = {
      img: item.img,
      name: item.name,
      store: item.store,
      price: item.price,
      shippingFee: item.shippingFee,
      memo: item.memo,
    }

    setEditFormData(formValues);
  }

  // 수정취소버튼 
  const handleCancelClick = () => {
    setEditListId(null);
  }
 
  // 삭제버튼
  const handleDeleteClick = (listId) => {
    const newList = [...list];

    const index = list.findIndex((item)=> item.id === listId);

    newList.splice(index, 1);

    setList(newList);
  } 


  return (
    <>
    <Div>
      <h2>추가하기</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
            type='file'
            accept='image/*' //이미지파일만 불러오기
            name='img' 
            onChange={handleAddFormChange}
            ref={fileInput}
            />
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
        <button type="submit">Add</button>
    </form>
    
      <form onSubmit={handleEditFormSubmit}>
        <Table>
          <thead>
            <tr>
              <Th>이미지</Th>
              <Th>상품명</Th>
              <Th>판매처</Th>
              <Th>가격</Th>
              <Th>배송비</Th>
              <Th>메모</Th>
              <Th>수정 삭제</Th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <Fragment>   
                {editListId === item.id ? (
                <EditableRow 
                  image = {image}
                  fileInput = {fileInput}
                  editFormData = {editFormData} 
                  handleEditFormChange = {handleEditFormChange}
                  handleCancelClick = {handleCancelClick}/> 
                ): (
                <ReadOnlyRow 
                  image = {image}
                  item = {item} 
                  handleEditClick = {handleEditClick}
                  handleDeleteClick = {handleDeleteClick}/>
                )}         
               
              </Fragment>
            ))}          
          </tbody>
        </Table>
      </form>
    </Div>

      <Modal/>
      <WishItem/>

    </>
  )
}

export default WishList;