import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
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
        </td>           
        
    </tr>
  )
}

export default EditableRow;