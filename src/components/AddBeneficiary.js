import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { createBeneficiary, updateBeneficiary } from "../actions/beneficiary";

const AddBeneficiary = (props) => {
  const { setShowAddComp, selectedBeneficiary, setselectedBeneficiary } = props;

  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();

  const dispatch = useDispatch();
  const beneficiary = useSelector(state => state.beneficiary);

  useEffect(() => {
    setBeneficiaryDetails(selectedBeneficiary)
  }, [selectedBeneficiary])

  const setBeneficiaryDetails = (ele) => {

    if (ele) {
      Object.entries(ele).forEach(([name, value]) => setValue(name, value));
      // setselectedBeneficiary(ele)
    }
  }

  const onSubmit = data => {



    if (!selectedBeneficiary) {
      const formvalue = {
        ...data,
        id: beneficiary.length + 1 || 1
      }

      dispatch(createBeneficiary(formvalue))
        .then(data => {

          reset();
          setShowAddComp(false)
        
        })
        .catch(e => {
          console.log(e);
        });
    } else {
    
      let updatedData = []
      beneficiary.map((ele) => {
        console.log(ele)
        if (ele.id === data.id) {
          updatedData.push(data)
        } else {
          updatedData.push(ele)
        }
      })
     
      dispatch(updateBeneficiary(updatedData))
        .then(response => {
          reset();
          setselectedBeneficiary(null)
          setShowAddComp(false)
        })
        .catch(e => {
          console.log(e);
        });
    }


  }


  return (
    <div className="submit-form">
      <form>
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input className="form-control" {...register("name", {
            required: true,
            pattern: /^[a-zA-Z ]+$/,
          })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === 'required' && <p role="alert" className="error">name is required</p>}
          {errors.name?.type === 'pattern' && <p role="alert" className="error">Allow Only String</p>}
        </div>

        <div className="form-group">
          <label htmlFor="title">Account Number</label>
          <input className="form-control" {...register("acnumber", {
            required: true,
            pattern: /^[0-9]+$/,
          })}
            aria-invalid={errors.acnumber ? "true" : "false"}
          />
          {errors.acnumber?.type === 'required' && <p role="alert" className="error">Account Number is required</p>}
          {errors.acnumber?.type === 'pattern' && <p role="alert" className="error">Allow Only Numbers</p>}
        </div>

        <div className="form-group">
          <label htmlFor="title">Bank Name</label>
          <input className="form-control" {...register("bankname", { required: true, pattern: /^[a-zA-Z ]+$/, })}
            aria-invalid={errors.bankname ? "true" : "false"}
          />
          {errors.bankname?.type === 'required' && <p role="alert" className="error">Bank Name is required</p>}
          {errors.bankname?.type === 'pattern' && <p role="alert" className="error">Allow Only String</p>}
        </div>

        <div className="form-group">
          <label htmlFor="title">Select Account Type</label>
          <select className="form-control" {...register("actype", { required: true })} aria-invalid={errors.actype ? "true" : "false"}>
            <option value="">Select Account Type</option>
            <option value="saving">Saving</option>
            <option value="current">Current</option>
            <option value="other">other</option>
          </select>
          {errors.actype?.type === 'required' && <p role="alert" className="error">Account Type is required</p>}
        </div>
        <div className="text-right">
          <Button type="submit" className="btn btn-success" onClick={handleSubmit(onSubmit)}>{selectedBeneficiary ? 'Update' : 'Submit'}</Button>
        </div>
      </form>




    </div>
  );
};

export default AddBeneficiary;
