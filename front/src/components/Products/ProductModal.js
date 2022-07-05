import React from 'react'
import Modal from 'react-modal';

 function ProductModal(props) {
  return (
    <Modal isOpen={props.isOpenObj} onRequestClose={props.onRequestCloseFunc}>
    <span className='close_icon' onClick={props.onRequestCloseFunc}>&times;</span>
    <div className='product_info'>
        {props.isOpenObj?<img src={require(`../../images/${props.isOpenObj.imageUrl}`)} />:true}
        <p>{props.isOpenObj.name}</p>
        <p>{props.isOpenObj.desc}</p>
    </div>
</Modal>
  )
}

export default ProductModal;