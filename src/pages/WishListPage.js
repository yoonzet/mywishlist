import { useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { groupListState } from '../Atom';
import WishList from '../components/wishlistPage/WishList';

const Title = styled.h3`
    text-align: center;
`

function WishListPage() {
    const { id } = useParams();
    const [test, setTest] = useState([]);
    const [groupList, setGroupList] = useRecoilState(groupListState);
    // const index = groupList.findIndex((item)=> item.id === listId);
   console.log(groupList)
  return (
    <>
        <Title>{id}</Title>
        <WishList/>
    </>

    )
}

export default WishListPage;