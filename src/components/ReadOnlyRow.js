import styled  from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";




const Div = styled.div`
  width: 55vw;
  min-width: 800px;
  background-color: #fff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  margin: 30px auto;
  
  position: relative;
  white-space: nowrap;
  overflow: auto;
`
const ImgWrap = styled.div`
  /* width: 20%; */
  
`
const Img = styled.img`
  width: 150px;
  padding: 20px;
  border-radius: 30px;
`

const StoreWrap = styled.div`
  margin-right: 50px;
`
const Store = styled.div`
  opacity: 0.5;
`
const Name = styled.div`
  font-weight: bold;
  margin: 20% 0;
  color: #111;
`
const MemoWrap = styled.div`
`
const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  right: 10%;
  /* transform: translateX(-100%); */
`
const Ptotal = styled.p`
  font-size: 18px;
  font-weight: bold; 
  padding : 0 50px ;
`
const Edit = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  font-size: 20px;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`
const DeleteBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ddd;
  font-size: 30px;
  cursor: pointer;
  &:hover{
    transform: scale(95%);
  }
`

const ReadOnlyRow = ({priceToString, stringToPrice, item, handleEditClick, handleDeleteClick}) => {

  const sum = () => {
      const price = stringToPrice(item.price)
      const ShippingFee = stringToPrice(item.shippingFee)

    return price + ShippingFee
  }

  const totalPrice = priceToString(sum())  

  return (
    <Div>
        <ImgWrap>
          <Img src={item.img} />
          <Img src={item.imgURL} />
        </ImgWrap>
        <StoreWrap>
          <Store>{item.store}</Store>
          {item.storeLink === '' ?         
         (<Name>{item.name}</Name>) :
        (<Name><a href={item.storeLink}>{item.name}</a></Name>)
        }
        </StoreWrap>
        <MemoWrap>{item.memo}</MemoWrap>
        <PriceWrap>
          <div>
            <p>{item.price}원</p>
            <p>{item.shippingFee}원</p>
          </div>          
          <Ptotal>{totalPrice} 원</Ptotal>
        </PriceWrap>
        <div>
          <Edit 
            onClick={(e)=> handleEditClick(e, item)}
            ><MdOutlineModeEditOutline/>
            </Edit>

          <DeleteBtn 
            onClick={() => handleDeleteClick(item.id)}
            ><IoCloseCircleOutline/>
            </DeleteBtn>        
        </div>
    </Div>
  )
}

export default ReadOnlyRow;