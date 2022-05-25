import styled from "styled-components";

// ------styled-------

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`


// ------component-------

const TotalPrice = ({sum}) => {
  return (
      <>
      <div>
        <p>{sum.sumOfPrice}</p>
        <p>{sum.sumOfShippingFee}</p>
        <p>{sum.totalPrice}</p>
      </div>
       
      </>
  )
}

export default TotalPrice;