import styled from 'styled-components';

const Div = styled.div`
`
const Img = styled.img`
  width: 100px;
`

const EditableRow = ({image, fileInput, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <Div>
        <thumbnailWarp>
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
        </thumbnailWarp>
        <storeWarp>
            <input 
                type="text" 
                name="name" 
                placeholder='상품명 수정'
                value={editFormData.name}          
                onChange={handleEditFormChange}

            />
        </storeWarp>
        <td>
            <input 
                type="text" 
                name="store" 
                placeholder='판매처 수정'      
                value={editFormData.store}          
                onChange={handleEditFormChange}
            />
            <input 
                type="text" 
                name="storeLink" 
                placeholder='판매처링크 수정'      
                value={editFormData.storeLink}          
                onChange={handleEditFormChange}
            />
        </td>
        <priceWrap>
            <input 
                name="price" 
                placeholder='가격 수정' 
                value={editFormData.price}          
                onChange={handleEditFormChange}
            />       
            <input  
                name="shippingFee" 
                placeholder='배송비 수정'                          
                value={editFormData.shippingFee}          
                onChange={handleEditFormChange}
            />
        </priceWrap>
        <memoWrap>
            <input 
                type="text" 
                name="memo" 
                placeholder='memo 수정'                
                value={editFormData.memo}          
                onChange={handleEditFormChange}

            />
        </memoWrap>
        <td>
          <button type='submit'>Save</button>  
          <button type='button' onClick={handleCancelClick}>cancel</button>  
        </td>          
    </Div>
  )
}

export default EditableRow;