import styled from 'styled-components';
import { IoCheckmarkSharp, IoClose } 
from "react-icons/io5";
import { CgSoftwareUpload } from "react-icons/cg";

// ------styled-------

const Div = styled.div`
  min-width: 800px;
  height: 180px;
  background-color: #fff;
  box-shadow:0 0 20px 0px #3331;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;  
`
const Input = styled.input`
    all: unset;
    width: 100%; 
    height: 30px;
    background-color: #fff;
    padding-left: 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #888;
    font-size: 12px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const InputDiv = styled.div`
    display: flex;
    white-space: nowrap;
`
const P = styled.p`
    font-size: 12px;
`
const ImgWrap = styled.div`
    width: 150px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Label = styled.div`
    text-align: center;
    font-size: 20px;
    line-height: 35px;  
`
const InputFile = styled.input`
    width: 90px;
    margin-bottom: 20px;
    cursor: pointer;
    &::file-selector-button{
        display: none;
    }
`
const InputWrap = styled.div`
    display: flex;
    flex-direction: column; 
`
const MemoWrap = styled.div`
`
const BtnWrap = styled.div`
     margin-right: 20px ;
`
const Button = styled.button`
    all: unset;
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
    &:hover:first-child{
        color: green;
    }
    &:hover:last-child{
        color: orangered;
    }
`

// ------component-------

const EditableRow = ({imgFormChange, fileInput, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <Div>
        <ImgWrap>
            {/* <Img 
                src={image}
                name="img" 
                value={editFormData.img}
                onChange={handleEditFormChange}
                ref={fileInput} /> */}
            <Label>
                <label 
                htmlFor="files"                                >  
                   <CgSoftwareUpload/>
                </label>  
            </Label>
            <InputFile 
                id='files'
                type="file" 
                name="img" 
                accept='image/*'         
                onChange={imgFormChange}
                ref={fileInput}
            />
            <Input
                type='text'
                name='imgURL'
                placeholder='이미지 URL' 
                value={editFormData.imgURL}          
                onChange={handleEditFormChange}
            />
        </ImgWrap>
        <InputWrap>
            <InputDiv>
                <P>판매처</P>          
                <Input 
                    type="text" 
                    name="store" 
                    placeholder='판매처 수정'      
                    value={editFormData.store}          
                    onChange={handleEditFormChange}
                    />          
            </InputDiv>
            <InputDiv>
                <P>상품명</P>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder='상품명 수정'
                    value={editFormData.name}          
                    onChange={handleEditFormChange}
                />         
            </InputDiv>
            <InputDiv>
                <P>판매링크</P>
                <Input 
                    type="text" 
                    name="storeLink" 
                    placeholder='판매처링크 수정'      
                    value={editFormData.storeLink}          
                    onChange={handleEditFormChange}
                />          
            </InputDiv>
            
            
        </InputWrap>
        <MemoWrap>
            <P>memo</P>
            <Input 
                type="text" 
                name="memo" 
                placeholder='memo 수정'                
                value={editFormData.memo}          
                onChange={handleEditFormChange}

            />
        </MemoWrap>

        <InputWrap>        
            <InputDiv>
                <P>상품가격</P>
                <Input 
                    name="price" 
                    type="number"            placeholder='상품가격 수정' 
                    value={editFormData.price}          
                    onChange={handleEditFormChange}
                />     
            </InputDiv>
            <InputDiv>
                <P>배송비</P>    
                <Input  
                    name="shippingFee" 
                    type="number"
                    placeholder='배송비 수정'                     
                    value={editFormData.shippingFee}          
                    onChange={handleEditFormChange}
                />          
            </InputDiv>
        </InputWrap>
        <BtnWrap>  
             <Button       
                    type='submit'>
                    <IoCheckmarkSharp/>
            </Button>  
            <Button 
                    type='button' 
                    onClick={handleCancelClick}>
                    <IoClose/>
            </Button>  
        </BtnWrap>
          
                  
    </Div>
  )
}

export default EditableRow;