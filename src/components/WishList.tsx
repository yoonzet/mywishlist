import React, { useState, useRef } from 'react'
import { nanoid } from 'nanoid';
import { motion, AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import Modal from './Modal';
import TotalPrice from './TotalPrice';
import { useRecoilState } from 'recoil';
import { listState } from '../Atom';



// ------styled-------

const Header = styled.h1`
  text-align: center;
  margin-top: 50px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20vw;
`
// ------component-------
export interface IData {
  img: string,
  imgURL:string,
  name:string,
  store:string,
  storeLink:string,
  [price:string]: string | number,
  shippingFee:string | number,
  memo:string
}
export interface IList extends IData{
  id: string,
  price:string,
  shippingFee:string,
}
export interface ISum{
  sumOfPrice: string,
  sumOfShippingFee:string,
  totalPrice:string,
}

function WishList() {
    // 천단위 콤마찍기(string타입)
    function priceToString(price: number | string) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
    // 천단위 콤마없애기(number로 변환)
    function stringToPrice(str:string) {
      return Number(str.replace(/,/g, ""));
  }
  
  // const [list, setList] = useState([]);
  const [list, setList] = useRecoilState(listState);
  const [image, setImage] = useState("https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg");
  const fileInput = useRef(null);

  
  const [addFormData, setAddFormData] = useState<IData>({
    img:'',
    imgURL:'',
    name:'',
    store:'',
    storeLink:'',
    price:'',
    shippingFee:'',
    memo:''
  })

  const [editFormData, setEditFormData] = useState<IData>({
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

  // 이미지 올리기
  const imgFormChange = (e: { target: HTMLInputElement }) => {
    let reader = new FileReader();
  
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  
    reader.onloadend = () => {
      const previewImgUrl = reader.result
  
      if(typeof previewImgUrl === 'string') {
        setImage(previewImgUrl);
      }
    }

  }

  
  const handleAddFormChange = (e:any) => {
    e.preventDefault();

    const fieldName:string = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData:IData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName:string = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData:IData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();

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


    const newList = [newWishItem, ...list,];
    setList(newList);

  }

  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
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

    const newList = [...list];
    
    const index = list.findIndex((item) => item.id === editListId);

    newList[index] = editedList;

    setList(newList);
    setEditListId(null);
  };

  const handleEditClick = (e: React.FormEvent<HTMLFormElement>, item:any) => {
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
  const handleDeleteClick = (listId:number) => {
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
      }, 0);
    }

    const sumOfShippingFee = () => {
      const shippingFeeArry = list.map((item) => stringToPrice(item.shippingFee))           
      return shippingFeeArry.reduce((acc, cur)=>{
        return acc + cur;
      }, 0)
    }
    
    const totalPrice = () => sumOfPrice() + sumOfShippingFee();

    const sum: ISum = {
      sumOfPrice: priceToString(sumOfPrice()),
      sumOfShippingFee: priceToString(sumOfShippingFee()),
      totalPrice: priceToString(totalPrice())
    } 
  return (
    <>
    <Header>My Wish List</Header>

    <Div>
        <Modal
        imgFormChange = {imgFormChange}
        handleAddFormSubmit = {handleAddFormSubmit}
        handleAddFormChange = {handleAddFormChange}
        fileInput = {fileInput}
        list = {list}
        />

        
          <form onSubmit={handleEditFormSubmit}>
              <div>
              <motion.div 
                      // initial={{opacity:0,scale:1}}
                      // animate={{opacity:1,scale:1 }}
                      // exit={{opacity:0,scale:0}}
                      // transition={{ duration:1}}
                      // layout
                      >
                  <AnimatePresence>            
                {list.map((item) => (
                  <>                        
                    {editListId === item.id ? (               
                    <EditableRow 
                      key={item.id}
                      imgFormChange = {imgFormChange}
                      fileInput = {fileInput}
                      editFormData = {editFormData} 
                      handleEditFormChange = {handleEditFormChange}
                      handleCancelClick = {handleCancelClick}/> 
                    ): (
                   
                    <ReadOnlyRow 
                      key={item.id}
                      item = {item} 
                      handleEditClick = {handleEditClick}
                      handleDeleteClick = {handleDeleteClick}
                      />
                      )}         
                  
                  </>
                ))} 
                 </AnimatePresence>   
           </motion.div> 
                        
              </div>            
          </form>
       {list.length === 0 ? '' : <TotalPrice
        sum = {sum}
        />} 
      
    </Div>
    </>
  )
}

export default WishList;