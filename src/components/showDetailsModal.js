import React from 'react';
import { Modal } from 'antd';

const ShowDetailsModal = (props)=>{
    const {visibleModal,setVisibleModal,selectedViewBeneficiary} = props;

    return(
        <>
        <Modal title="" open={visibleModal} onCancel={()=> setVisibleModal(false)} footer={null}>
            <p><strong>Name:</strong> {selectedViewBeneficiary.name}</p>
            <p><strong>Account Number:</strong> {selectedViewBeneficiary.acnumber}</p>
            <p><strong>Bank Name:</strong> {selectedViewBeneficiary.bankname}</p>
            <p><strong>Accont Type:</strong> {selectedViewBeneficiary.actype}</p>
        </Modal>
        </>
    )
}

export default ShowDetailsModal;