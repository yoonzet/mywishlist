import styled  from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from 
"react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import { IList } from "./WishList";


// ------styled-------

const Div = styled.div`
  min-width: 800px;
  background-color: #fff;
  box-shadow:0 0 20px 0px #3331;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 30px auto;  
  overflow: auto;
`
const ImgWrap = styled.div`

`
const Img = styled.img`
  width: 150px;
  padding: 20px;
  border-radius: 30px;
  margin-right: 10px;
`

const StoreWrap = styled.div`
  margin-right: 50px;
`
const Store = styled.div`
  opacity: 0.5;
  font-size: 14px;
  margin-bottom: 20px;
`
const Name = styled.div`
  font-weight: bold;
  margin: 20% 0;
  color: #111;
`
const ATag = styled.a`
  all: unset;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
const MemoWrap = styled.div`  
  margin-right: 10px;
  line-height: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0 -10px 0 auto;
  text-align: center;
`
const TxtShippingFee = styled.p`
  font-size: 13px;
  color: #777;
`
const TxtTotal = styled.p`
  font-size: 18px;
  font-weight: bold; 
  padding : 0 50px ;
`
const Edit = styled.div`
  margin: 0 30px 0 0;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`
const DeleteBtn = styled.div`
  margin: 10px 10px auto 0;
  color: #ddd;
  font-size: 30px;
  cursor: pointer;
  &:hover{
    transform: scale(95%);
    color: #444;
  }
  
`

// ------component-------
interface Props{
  item: IList;
  handleEditClick: any;
  handleDeleteClick: any;
}

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}: Props) => {
  
  function priceToString(price: number | string) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
  function stringToPrice(str: string) {
    return Number(str.replace(/,/g, ""));
}

  const price = stringToPrice(item.price)
  const ShippingFee = stringToPrice(item.shippingFee)
  const sum = price + ShippingFee;
  
  const commaPrice = priceToString(price)
  const commaShippingFee = priceToString(ShippingFee)
  const commaTotalPrice = priceToString(sum) 



  return (
    
    <Div>
        <ImgWrap>
           {item.imgURL === '' ? 
             (<Img src={item.img} />) :
             (<Img src={item.imgURL} />)
           }
          {/* <Img src={item.imgURL || item.img} /> */}
        </ImgWrap>
        <StoreWrap>
           <Store>판매처: {item.store}</Store>
          {item.storeLink === '' ?         
            (<Name>{item.name}</Name>) :
            (<Name><ATag href={item.storeLink}>
              {item.name} <IoOpenOutline/>
            </ATag></Name>)
         }
        </StoreWrap>
        <MemoWrap>
          {item.memo}
        </MemoWrap>
        <PriceWrap>
          <div>
            <p>가격: {commaPrice}원</p>
            <TxtShippingFee>(배송비: {commaShippingFee}원)</TxtShippingFee>
          </div>          
          <TxtTotal>총 {commaTotalPrice} 원</TxtTotal>
        </PriceWrap>

          <Edit 
            onClick={(e)=> handleEditClick(e, item)}
            ><MdOutlineModeEditOutline/>
          </Edit>
          
          <DeleteBtn 
            onClick={() => handleDeleteClick(item.id)}
            ><IoCloseCircleOutline/>
          </DeleteBtn>        
    </Div>
  )
}

export default ReadOnlyRow;