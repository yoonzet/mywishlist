import { useParams } from 'react-router';
import styled from 'styled-components';
import WishList from '../components/wishlistPage/WishList';

const Title = styled.h3`
    text-align: center;
`

function WishListPage() {
    const { id } = useParams();
  return (
    <>
        <Title>{id}</Title>
        <WishList/>
    </>

    )
}

export default WishListPage;