import styled from "styled-components";
import { CgSoftwareUpload } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRef, useState } from "react";

// ------styled-------
const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    transition: 0.6s;
    z-index: 88;
    &.active{
        opacity: 0;
        transform: scaleZ(0);
    }
`
const AddBarWrap = styled.div`
    width: 550px;
    height: 700px; 
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #fff;
    box-shadow:0 0 20px 0px #3331;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(0deg);
    z-index: 99;
    transition: 0.6s;
    &.active{
        border-top-right-radius: 500px;
        transform: translate(-112%, -50%) rotate(45deg);
    }
    /* &.active:hover{
        transform: translate(-110%, -50%) rotate(45deg);
    } */
`
const CloseBtn = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.6s;
    &.active{
        transform: scale(1.4);
    }
    &:hover{
        transform: scale(1.2);
    }
`
const Wrap = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
`
const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto ;
    margin-bottom: 20px;
`
const Label = styled.div`
    text-align: center;
    font-size: 20px;
    line-height: 35px;  
`
const InputFile = styled.input`
    width: 90px;
    margin-bottom: 20px;
    &::file-selector-button{
        display: none;
    }
`
const Img = styled.img`
    width: 100px; 
    max-height:200px ;
    border-radius: 10px;
`
const P = styled.p`
    text-align : left ;
    line-height: 10px;
    font-size: 14px;
`
const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
const InputWrap = styled.div`
    margin: 5px ;
`
const Input = styled.input`
    all: unset;
    width: 400px; 
    height: 35px;
    background-color: #fff;
    border-radius : 50px;
    padding-left: 12px;
    box-sizing: border-box;
    border: 1px solid #eee;
    font-size: 12px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`
const InputHalf = styled(Input)`
    width: 190px;
`
const AddBtn = styled.button`
    all: unset;
    cursor: pointer;
    width: 190px;
    height: 50px;
    background-color: #ddd;
    border-radius: 12px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
`
// ------component-------

const  Modal = ({item, image, handleAddFormSubmit, handleAddFormChange, fileInput}) => {
    const [addBar, setAddBar] = useState(true);
    const ClickShowAddBar = () => setAddBar(!addBar);
    
  return (  
      <>    
        <Bg className={addBar ? '' : 'active'}></Bg>
        <AddBarWrap className={addBar ? '' : 'active'}>
    
        <CloseBtn onClick={ClickShowAddBar} className={addBar ? '' : 'active'}>
            <IoCloseCircleOutline/>
        </CloseBtn>
        <h2>추가하기</h2>

        <form onSubmit={handleAddFormSubmit}>
            <Wrap>
            <P>이미지</P>
            <ImgWrap> 
                {/* <Img src={item.imgURL} alt="" />  */}
                <>
                    <Label>
                        <label for="files" style={{cursor:'pointer'}}> <CgSoftwareUpload/></label>  
                    </Label>
                    <InputFile
                        id="files"
                        type='file'
                        accept='image/*' //이미지파일만 불러오기
                        name='img'
                        // style={{display:'none'}} 
                        onChange={handleAddFormChange}
                        ref={fileInput}
                        />
                </>
                    <Input
                        type='text'
                        name='imgURL'
                        placeholder = '또는 이미지URL 붙여넣기'
                        onChange={handleAddFormChange}
                    />          
             
            </ImgWrap>

            <FlexWrap>
                <InputWrap>
                    <P>상품명 <span style={{color:'orangered'}}>*</span> </P> 
                    <InputHalf  
                    required 
                    type="text" 
                    name='name' 
                    placeholder='상품명을 입력해주세요' 
                    onChange={handleAddFormChange}
                    />
                </InputWrap>
                <InputWrap>                
                    <P>판매처 <span style={{color:'orangered'}}>*</span> </P>
                    <InputHalf 
                    required 
                    type="text" 
                    name='store' 
                    placeholder='판매처를 입력해주세요' 
                    onChange={handleAddFormChange}
                    />
               </InputWrap>
               
            </FlexWrap>
                <InputWrap>
                    <P>상품링크</P>
                    <Input 
                    type="text" 
                    name='storeLink' 
                    placeholder='상품링크(선택)' 
                    onChange={handleAddFormChange}
                    />          
                </InputWrap>
            <FlexWrap>
                <InputWrap>
                    <P>가격 <span style={{color:'orangered'}}>*</span> </P>
                    <InputHalf 
                    required 
                    type="number" 
                    name='price' 
                    placeholder='가격'
                    onChange={handleAddFormChange}
                    />
                </InputWrap>
                <InputWrap>
                <P>배송비 <span style={{color:'orangered'}}>*</span> </P>
                    <InputHalf 
                        required 
                        type="number" 
                        name='shippingFee' 
                        placeholder='배송비'
                        onChange={handleAddFormChange}
                        />
                </InputWrap>
            </FlexWrap>
            <InputWrap>
                 <P>memo</P>
                 <Input 
                    type="text" 
                    name='memo' 
                    placeholder='메모' 
                    onChange={handleAddFormChange}
                 />
            </InputWrap>

            
            <AddBtn type="submit">Add</AddBtn>
            </Wrap>
        </form>
    </AddBarWrap>
      </>    

  )
}

export default Modal;