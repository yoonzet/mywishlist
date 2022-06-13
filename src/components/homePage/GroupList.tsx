import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { groupListState } from '../../Atom';
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
    // const [groupList, setGroupList] = useState([]);
    const [groupList, setGroupList] = useRecoilState(groupListState);

    const [addFormData, setAddFormData] = useState({
      title:''
    });

    const groupAddFormChange = (e: any) => {
        e.preventDefault();
    
        const fieldName:string = e.target.getAttribute('name');
        const fieldValue = e.target.value;
    
        const newFormData:any = {...addFormData};
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      }

      const handleAddFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
    
        const newGroup = {
          id: nanoid(), 
          title: addFormData.title
        };
    
    
        const newList = [newGroup, ...groupList,];
        setGroupList(newList);
    
      }
console.log(groupList)
  return (
    <GroupListWrap>
      {groupList.map((item) => (
        <Group
          item={item}
          />
      ))}
        
        <AddGroup
          groupAddFormChange={groupAddFormChange}
          handleAddFormSubmit={handleAddFormSubmit}
          />
    </GroupListWrap>
  )
}

export default GroupList;