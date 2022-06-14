import { useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { groupListState } from '../Atom';
import WishList from '../components/wishlistPage/WishList';

function WishListPage() {
    const { groupName } = useParams();
    const [test, setTest] = useState([]);
    const [groupList, setGroupList] = useRecoilState(groupListState);
    // const index = groupList.findIndex((item)=> item.id === listId);
   console.log(groupList)
  return (
    <>
        <h1>{groupName}</h1>
        <WishList/>
    </>

    )
}

export default WishListPage;