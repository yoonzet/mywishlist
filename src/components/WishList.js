import React, { useState, Fragment, useRef } from 'react'
import { nanoid } from 'nanoid';
import styled from "styled-components";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Modal from './Modal';
import TotalPrice from './TotalPrice';


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
    // 천단위 콤마찍기(string타입)
    function priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
    // 천단위 콤마없애기(number로 변환)
    function stringToPrice(str) {
      return Number(str.replace(/,/g, ""));
  }
  
  const [list, setList] = useState([]);
  const [image, setImage] = useState("https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg");
  const fileInput = useRef(null);
  const [addFormData, setAddFormData] = useState({
    img:'',
    imgURL:'',
    name:'',
    store:'',
    storeLink:'',
    price:priceToString(''),
    shippingFee:'',
    memo:''
  })

  const [editFormData, setEditFormData] = useState({
    img:'',
    imgURL:'',
    name:'',
    store:'',
    storeLink:'',
    price:'',
    shippingFee:'',
    memo:''
  })

  const [editListId, setEditListId] = useState(null); 


  
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;
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
      img: image,
      imgURL: addFormData.imgURL,
      name: addFormData.name,
      store:addFormData.store,
      storeLink:addFormData.storeLink,
      price:priceToString(addFormData.price),
      shippingFee:priceToString(addFormData.shippingFee),
      memo:addFormData.memo
    };


    const newWishList = [...list, newWishItem];
    setList(newWishList)

  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id:editListId,
      img: image,
      imgURL: editFormData.imgURL,
      name: editFormData.name,
      store: editFormData.store,
      storeLink: editFormData.storeLink,
      price: priceToString(editFormData.price),
      shippingFee: priceToString(editFormData.shippingFee),
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
      img: image,
      imgURL: item.imgURL,
      name: item.name,
      store: item.store,
      storeLink: item.storeLink,
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

  //합계 계산
 
    const sumOfPrice = () => {
      const priceArry = list.map((item) => stringToPrice(item.price))        
      return priceArry.reduce((acc, cur)=>{
        return acc + cur;
      }, 0)
    }

    const sumOfShippingFee = () => {
      const shippingFeeArry = list.map((item) => stringToPrice(item.shippingFee))           
      return shippingFeeArry.reduce((acc, cur)=>{
        return acc + cur;
      }, 0)
    }
    
    const totalPrice = () => sumOfPrice() + sumOfShippingFee()

    const sum = {
      sumOfPrice: sumOfPrice(),
      sumOfShippingFee: sumOfShippingFee(),
      totalPrice: totalPrice()
    }
  


  return (
    <>
    <Div>
        <Modal
        handleAddFormSubmit = {handleAddFormSubmit}
        handleAddFormChange = {handleAddFormChange}
        fileInput = {fileInput}
        image = {image}
        // item = {item}
        />

      <form onSubmit={handleEditFormSubmit}>
          <div>
            {list.map((item) => (
              <>   
                {editListId === item.id ? (
                <EditableRow 
                  image = {image}
                  item = {item} 
                  fileInput = {fileInput}
                  editFormData = {editFormData} 
                  handleEditFormChange = {handleEditFormChange}
                  handleCancelClick = {handleCancelClick}/> 
                ): (
                <ReadOnlyRow 
                  image = {image}
                  item = {item} 
                  handleEditClick = {handleEditClick}
                  handleDeleteClick = {handleDeleteClick}
                  priceToString = {priceToString}
                  stringToPrice = {stringToPrice}/>
                  
                )}         
               
              </>
            ))}          
          </div>
        
      </form>
      <TotalPrice
        sum = {sum}
        totalPrice = {totalPrice}/>
    </Div>
    </>
  )
}

export default WishList;