import styled from "styled-components";
import { ISum } from "./WishList";

// ------styled-------

const Div = styled.div`
    width: 500px;
    height: 350px;
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
    margin: 0 0 30px auto;
`
const TxtWrap = styled.div`
    width: 300px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


// ------component-------
interface PropType {
  sum: ISum
}

const TotalPrice = ({sum}:PropType) => {
  return (
      <>
      <Div>
          <h2>TOTAL</h2>
          <TxtWrap>
            <span>상품가격</span>
            <span>{sum.sumOfPrice} 원</span>
          </TxtWrap>
          <TxtWrap>
            <span>배송비</span>
            <span>{sum.sumOfShippingFee} 원</span>
          </TxtWrap>
          <hr/>
          <TxtWrap>
            <span>총 금액</span>
            <h1>{sum.totalPrice} 원</h1>
          </TxtWrap>

      </Div>
       
      </>
  )
}

export default TotalPrice;