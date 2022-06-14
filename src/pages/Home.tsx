import styled from 'styled-components';
import GroupList from '../components/homePage/GroupList';

const H2 = styled.h2`
  margin-top: 10%;
  margin-left: 10%;
`

function Home() {
  return (
    <>
    <H2>My Groups</H2>
      <GroupList/>
    </>
  )
}

export default Home;