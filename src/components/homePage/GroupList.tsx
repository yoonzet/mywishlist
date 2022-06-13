import React from 'react'
import styled from 'styled-components';
import AddGroup from './AddGroup';
import Group from './Group';

const GroupListWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(auto, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
    padding: 40px 10%;
`

function GroupList() {
  return (
    <GroupListWrap>
        <Group/>
        <AddGroup/>
    </GroupListWrap>
  )
}

export default GroupList;