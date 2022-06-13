import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

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
    z-index: 9;
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
function EditGroup({handleEditFormChange, editFormData, handleCancelClick,handleEditFormSubmit}) {
  return (
    <>
        <ModalBg>
            <AddGroupWrap>
                <CloseIcon onClick={handleCancelClick}/>
                <h2>그룹 수정하기</h2>
                <form onSubmit={handleEditFormSubmit}>
                    <InputTitle 
                        type="text" 
                        name="title"
                        value={editFormData.title}          
                        onChange={handleEditFormChange}
                        /> 
                    <InputSubmit type="submit" value="완료" on/> 
                </form>
            </AddGroupWrap>
        </ModalBg>
    </>
  )
}

export default EditGroup;