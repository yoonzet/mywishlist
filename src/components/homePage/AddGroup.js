import styled from "styled-components";
import { IoCloseCircleOutline, IoAdd } from "react-icons/io5";
import { useState } from "react";

const AddBox = styled.div`
    width: 300px;
    height: 100px;
    border-radius: 12px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transform: scale(102%);
    }
`
const AddIcon = styled(IoAdd)`
    font-size: 30px;
    color: #888;
    transition: 0.3s;
    ${AddBox}:hover &{
        transform: scale(1.2) rotate(90deg);
        color: #666;

    }
`

const ModalBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3339;
    position: absolute;
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    &.active{
        display: none;
    }
`
const AddGroupWrap = styled.div`
    width: 40vw;
    max-width: 500px;
    height: 250px;
    background-color: #eee;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const InputTitle = styled.input`
    all: unset;
    width: 30vw;
    max-width: 400px;
    background-color: #fff;
    padding: 10px;
    border-radius: 6px;
    margin-top: 20px;
`
const InputSubmit = styled.input`
    all: unset;
    background-color: #ddd;
    border-radius: 20px;
    padding: 10px;
    color: #777;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &:hover{
        background-color: #ddd9;
    }
`
const CloseIcon = styled(IoCloseCircleOutline)`
  margin: 10px 10px 0 auto;
  color: #888;
  font-size: 30px;
  cursor: pointer;
  &:hover{
    transform: scale(95%);
    color: #444;
  }
  
`

function AddGroup( {groupAddFormChange, handleAddFormSubmit} ) {
    const [addModal, setAddModal] = useState(false);
    const ClickBtn = () => setAddModal(!addModal)
  return (
      <>
        <AddBox onClick={ClickBtn}>
            <AddIcon/>
        </AddBox>
        <ModalBg className={addModal ? "" : 'active'}>
            <AddGroupWrap>
                <CloseIcon onClick={ClickBtn}/>
                <h2>그룹만들기</h2>
                <form onSubmit={handleAddFormSubmit}>
                    <InputTitle 
                        type="text" 
                        name="title"
                        placeholder="그룹이름을 입력하세요"
                        onChange={groupAddFormChange}/> 
                    <InputSubmit type="submit" value="만들기" on/> 
                </form>
            </AddGroupWrap>
        </ModalBg>
    </>
  )
}

export default AddGroup;