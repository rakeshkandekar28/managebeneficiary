import React, { useState } from "react";
import { Button } from "antd";
import BeneficiaryList from "./BeneficiaryList";
import AddBeneficiary from "./AddBeneficiary";

const ManageBeneficiary = (props) => {

    const [showAddComp, setShowAddComp] = useState(false)
    const [selectedBeneficiary, setselectedBeneficiary] = useState(null)
    // const {history} = props;
    // function handleClick() {
    //     history.push("/add");
    //   }
    const getBeneficiaryDetails = (ele)=>{
        setselectedBeneficiary(ele)
        setShowAddComp(true)
      }

      const handleAddNewBeneficiary = ()=>{
        setselectedBeneficiary(null)
        setShowAddComp(true)
      }
    return(
        <>
            <div className="text-center">
            {!showAddComp ? 
                <Button onClick={() => handleAddNewBeneficiary()}>Add New Beneficiary</Button>
             :  <Button onClick={() => setShowAddComp(false)}>Back to Manage</Button>}
             </div>
            {showAddComp ? 
            <AddBeneficiary {...{setShowAddComp, selectedBeneficiary, setselectedBeneficiary}}/> : 
            <BeneficiaryList
             {...{getBeneficiaryDetails}}
             />}
        </>
    )
  
  
};

export default ManageBeneficiary;
