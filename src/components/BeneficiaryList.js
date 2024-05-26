import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm } from "antd";
import {
  retrieveBeneficiary,
  deleteBeneficiary,
} from "../actions/beneficiary";
import './style.css';
import { Link } from "react-router-dom";
import ShowDetailsModal from "./showDetailsModal";


const BeneficiaryList = (props) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedViewBeneficiary, setSelectedViewBeneficiary] = useState(null);
  const { getBeneficiaryDetails } = props;
  const beneficiary = useSelector(state => state.beneficiary);
  const dispatch = useDispatch();
  

  const handleEditBeneficiary = (e, ele, index) => {
    e.stopPropagation()
    getBeneficiaryDetails(ele)
  }


  const handleDeleteBeneficiary = (e, ele, index) => {
    e.stopPropagation()
    dispatch(deleteBeneficiary(ele.id))
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleVeiwBeneficiary = (e,ele) => {
    e.stopPropagation()
    setVisibleModal(true)
    setSelectedViewBeneficiary(ele)
  }

  return (
    <>
    <div className="list row">

      <div className="col-md-12">
        <h4>Beneficiary List</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>
              Actions
            </th>
          </tr>
          {beneficiary && beneficiary.length ? 
          (
          <>
          {beneficiary.map((ele, index) => (
              <tr key={index}>
                <td>{ele.name}</td>
                <td>
                  <div className="actionwrapper">
                    
                    <Button onClick={(e) => handleVeiwBeneficiary(e, ele)} className="viewaction">View</Button> 
                    <Popconfirm
                      title="Edit the Beneficiary"
                      description="Are you sure to Edit this Beneficiary?"
                      onConfirm={(e) => handleEditBeneficiary(e, ele, index)}
                      // onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                     
                    >
                      <Button className="editaction">Edit</Button>
                    </Popconfirm>

                    <Popconfirm
                      title="Delete the Beneficiary"
                      description="Are you sure to delete this Beneficiary?"
                      onConfirm={(e) => handleDeleteBeneficiary(e, ele, index)}
                      // onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button danger className="deleteaction">Delete</Button>
                    </Popconfirm>
                  </div>
                </td>

              </tr>

            ))}
          </>)
          : <td className="text-center" colSpan={2}>No Data Found</td>
          }
          

        </table>



      </div>

    </div>
    {visibleModal && <ShowDetailsModal {...{visibleModal,setVisibleModal,selectedViewBeneficiary}}/>}
    </>
  );
};

export default BeneficiaryList;
