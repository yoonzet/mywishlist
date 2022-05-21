import React, { useState } from 'react'

function Modal() {
  return (
    <>
    <form>
     <input type="text" placeholder='상품명' />
     <input type="text" placeholder='판매처' />
     <input type="text" placeholder='가격' />
     <input type="text" placeholder='배송비' />
     <input type="text" placeholder='메모' />
     <input type="submit" />    
    </form>
    </>
  )
}

export default Modal;