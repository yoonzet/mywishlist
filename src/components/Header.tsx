import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  margin-top: 50px;
`

function Header() {
  return (
    <Link 
    to={'/'}
    style={{all:'unset', cursor:'pointer'}}
      >    
      <H1 >My Wish List</H1>
    </Link>
  )
}

export default Header;