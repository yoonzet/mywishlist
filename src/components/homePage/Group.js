import styled from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";


const Box = styled.div`
    width: 300px;
    height: 100px;
    border-radius: 12px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
`
const IconWrap = styled.div`
       
`
const ThreeDots = styled(BsThreeDotsVertical)`
    position: absolute;
    right: 10px;
    top: 15px;    
`
const EditMenu = styled.div`
    background-color: #ddd;
    padding: 5;
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    right: -15px;
    top:  0;
    cursor: pointer;
    opacity: 0;
    transform: scale(0) translate(0, 0);
    transition: 0.3s;
    ${IconWrap}:hover &{
        opacity: 1;
        transform: scale(1) translate(0, 0);
        right: 10px;
        top: 10px;

    }
`

const P = styled.p`
    padding: 5px 20px;
    margin: 0;
    
    font-size: 14px;
    color: black;
    cursor: pointer;
    &:hover{
        color: #777;
        background-color: #fff;

    }
`

function Group({item}) {
  return (
    <Box>
        <IconWrap>
            <ThreeDots/>
            <EditMenu>
                <P>수정</P>
                <P>삭제</P>
            </EditMenu>
        </IconWrap>
        <h2>{item.title}</h2>
    </Box>
  )
}

export default Group;