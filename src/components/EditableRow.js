import React from 'react'
import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
`

const EditableRow = ({image, fileInput, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
            <Img 
                src={image}
                name="img" 
                value={editFormData.img}
                onChange={handleEditFormChange}
                ref={fileInput} />
            <input 
                type="file" 
                name="img" 
                accept='image/*'
                // value={editFormData.img}          
                onChange={handleEditFormChange}
                ref={fileInput}
            />
            <input
                type='text'
                name='imgURL'
                placeholder='이미지 주소' 
                value={editFormData.imgURL}          
                onChange={handleEditFormChange}
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
                name="price" 
                placeholder='가격 수정' 
                value={editFormData.price}          
                onChange={handleEditFormChange}

            />
        </td>
        <td>
            <input  
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