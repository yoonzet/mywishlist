import styled from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    &.active{  
        display: block;
    }
`
const LinkSt = styled(Link)`
    all: unset;
    width: 300px;
    height: 100px;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    transition: 0.3s;

    &:hover{
        transform: scale(102%);
    }
`
const Box = styled.div`
    width: 300px;
    height: 100px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;
`
const IconWrap = styled.div`
       
`
const ThreeDots = styled(BsThreeDotsVertical)`
    position: absolute;
    right: 10px;
    top: 15px; 
    transition: 0.3s;
    color: #fff;
    padding: 2px;
    &:hover{
        transform: scale(1.2);
    } 
    ${Box}:hover &{
        transform: scale(1.2);
    } 
`
const EditMenu = styled.div`
    background-color: #fff;
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
    z-index: 2;
    &.active{  
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
    color: #444;
    &:hover{
        color: #111;
        background-color: #ddd;
    }
`

function Group({jsonId, item, handleEditClick, handleDeleteClick}:any) {
    const [editMenu, setEditMenu] = useState(false);
    const clickBtn = () => setEditMenu(!editMenu);
    const close = () => {
        if(editMenu === true){
            setEditMenu(!editMenu)
        }};
    
    // console.log(setEditMenu)

    const backgroundRef = useRef<HTMLDivElement>();
  return (
    <> 
    <Bg ref={backgroundRef} onClick={close}
        className={editMenu? 'active' : ''}>
    </Bg> 
        <Box>
            <LinkSt to={`/wishlist/${item.title}`}>
                <h2>{item.title}</h2>
            </LinkSt> 
            <IconWrap>
                    <ThreeDots onClick={clickBtn}/>
                    <EditMenu className={editMenu? 'active' : ''}>
                        <P onClick={(e)=>handleEditClick(e,item)}>수정</P>
                        <P onClick={() => handleDeleteClick(item.id)}>삭제</P>
                    </EditMenu>
            </IconWrap>
        </Box>
    </>
  )
}

export default Group;