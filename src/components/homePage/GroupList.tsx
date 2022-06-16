import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { groupListState } from '../../Atom';
import AddGroup from './AddGroup';
import EditGroup from './EditGroup';
import Group from './Group';
import axios from 'axios';
import { useParams } from 'react-router';


const GroupListWrap = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2.5rem;
    padding: 40px 10%;
`

function GroupList() {
  const { id } = useParams();
    // const [groupList, setGroupList] = useState([]);
    const [groupList, setGroupList] = useRecoilState(groupListState);

    const [addFormData, setAddFormData] = useState({
      title:''
    });
    const [editFormData, setEditFormData] = useState({
      title:''
    })
    const [editListId, setEditListId] = useState(null); 

    const axios = require('axios');
    const [groupTest, setGroupTest] = useState([]);

    const getList = () =>{
      axios.get("http://localhost:4000/groupData")
    .then((resp:any) =>  {
      console.log(resp.data)
      setGroupTest(resp.data)
    }).catch((error:any) => {
      console.log('error!!')

    }).then(() => {
    });
  }

    useEffect(()=>{
      getList()
    },[])

    

    // const json = groupTest.map((item)=> (
    //   console.log(item.group.title)
    // ))



    //그룹 추가하기
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

        const group = newGroup;        
        axios.post(`http://localhost:4000/groupData`, {
          group
        }).then((resp:any) => {
            // console.log(resp);
        }).catch((error:any) => {
            console.log(error);
        });
      }

      //그룹이름 수정하기
      const handleEditFormChange = (event: any) => {
        event.preventDefault();
    
        const fieldName:string = event.target.getAttribute('name');
        const fieldValue = event.target.value;
    
        const newFormData:any = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      }

      const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault();
    
        const editedList = {
          id:editListId,
          title: editFormData.title,
        }
    
        const newList = [...groupList];
        
        const index = groupList.findIndex((item) => item.id === editListId);
    
        newList[index] = editedList;
    
        setGroupList(newList);
        setEditListId(null);

        axios.put(`http://localhost:4000/groupData/1`, {
          editedList
        }).then((resp:any) => {
            console.log(resp);
        }).catch((error:any) => {
            console.log(error);
        });
      };
    
      const handleEditClick = (e: React.FormEvent<HTMLFormElement>, item:any) => {
        e.preventDefault();
        setEditListId(item.id);
    
        const formValues = {
          title: item.title,
        }
    
        setEditFormData(formValues);
      }
      
      // 수정취소버튼 
      const handleCancelClick = () => {
        setEditListId(null);
      }
      
      // 삭제버튼
      const handleDeleteClick = (listId:number) => {
        const newList = [...groupList];

        const index = groupList.findIndex((item)=> item.id === listId);
        // const index = groupTest.findIndex((item)=> item.group.id === listId);
        const Listid = groupTest.findIndex((item)=> item.id  );

        newList.splice(index, 1);

        setGroupList(newList);
        console.log(id)

        axios.delete(`http://localhost:4000/groupData/${id}`, {
        }).then((resp:any) => {
            console.log(resp);
        }).catch((error:any) => {
            console.log(error!!!);
        })         
      }
  return (
    <GroupListWrap>            
        <AddGroup
          groupAddFormChange={groupAddFormChange}
          handleAddFormSubmit={handleAddFormSubmit}
          />
        {groupTest.map((item) => (
          <>
            {editListId === item.id ? (
              <>

                <EditGroup
                key={item.id}
                handleEditFormChange = {handleEditFormChange}
                handleCancelClick = {handleCancelClick}
                editFormData = {editFormData} 
                handleEditFormSubmit = {handleEditFormSubmit}
              />
              <Group
                key={item.id}
                item={item}
                handleDeleteClick={handleDeleteClick}
                handleEditClick = {handleEditClick}
                // jsonId={jsonId}
                />

              </>
              ):(
                <Group
                key={item.id}
                item={item}
                handleDeleteClick={handleDeleteClick}
                handleEditClick = {handleEditClick}
                />                
              )            
            }
          </>
          
        ))}
    </GroupListWrap>
  )
}

export default GroupList;