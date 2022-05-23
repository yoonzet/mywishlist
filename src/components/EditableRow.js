import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 300px;
`

const EditableRow = ({image, fileInput, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <Img src={image} alt="" />
            <input 
                type="file" 
                name="image" 
                accept='image/*'
                // value={editFormData.img}          
                onChange={handleEditFormChange}
                ref={fileInput}
            />
        </td>
        <td>
            <input 
                type="text" 
                name="name" 
                placeholder='상품명 수정'
                value={editFormData.name}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
            <input 
                type="text" 
                name="store" 
                placeholder='판매처 수정'      
                value={editFormData.store}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
            <input 
                type="text" 
                name="price" 
                placeholder='가격 수정' 
                value={editFormData.price}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
            <input 
                type="text" 
                name="shippingFee" 
                placeholder='배송비 수정'                
                value={editFormData.shippingFee}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
            <input 
                type="text" 
                name="memo" 
                placeholder='memo 수정'                
                value={editFormData.memo}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
          <button type='submit'>Save</button>  
          <button type='button' onClick={handleCancelClick}>cancel</button>  
        </td>           
        
    </tr>
  )
}

export default EditableRow;