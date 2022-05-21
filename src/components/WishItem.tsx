import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 100px;
`
const Span = styled.span`
    margin: 0 20px;
    text-align: center;
`



function WishItem() {
  return (
    <>
        <Div>
            <input type="checkbox" name="" id="" />
            <Img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=940&hei=1112&fmt=png-alpha&.v=1631308881000" alt="" />
            <Span>아이패드</Span>
            <Span>애플</Span>
            <Span>1,000,000</Span>
            <Span>0</Span>
            <Span>살까말까</Span>
            <button>삭제</button>
            <button>수정</button>


        </Div>
    </>
  )
}

export default WishItem;