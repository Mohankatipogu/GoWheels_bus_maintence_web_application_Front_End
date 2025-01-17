import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAddexpensesMutation } from "../../services/gowheelsapi";
import { useNavigate } from "react-router-dom";

function ExpensesForm() {
    const aRef=React.useRef();
    const bRef=React.useRef();
    const cRef=React.useRef();
    const dRef=React.useRef();
    const eRef=React.useRef();
    const fRef=React.useRef();
    const [AddexpensFn]=useAddexpensesMutation()
  const navigate= useNavigate()
  const initialValues = {
    expenses: {
      amount: "",
      details: "",
      Driver_name: "",
      Bus_Number: "",
      image: "",
    },
  };
  const onSubmit = async (values) => {
    try {
      await AddexpensFn(values).then((res)=>{
        console.log(values)
        if(res.message='expenses added'){
          navigate("/expenses")
        }
        else{
          navigate("/expenses/expensesform")
        }
      }).catch((err)=>{
          console.log(err)
      })
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const validationSchema = yup.object({
    expenses: yup.object({
      Driver_name: yup.string().required("Please enter the driver's name"),
      Bus_Number: yup.string().required("Please enter the bus number"),
      details: yup.string().required("Please enter the expense details"),
      amount: yup
        .number()
        .typeError("Amount must be a number")
        .required("Please enter the expense amount"),
      image: yup.string().required("Please enter the image URL"),
    }),
  });
  useEffect(()=>{
    aRef.current.focus()
  },[])

  function Benterkey(ev){
    if(ev.key==='Enter'){
        bRef.current.focus()
    }
  } 
  
  function Centerkey(ev){
    if(ev.key==='Enter'){
      cRef.current.focus()
    }
  }
  
  function Denterkey(ev){
    if(ev.key==='Enter'){
      dRef.current.focus()
    }
  }
   
  function Eenterkey(ev){
    if(ev.key==='Enter'){
      eRef.current.focus()
    }
  }
   
  function Fenterkey(ev){
    if(ev.key==='Enter'){
      fRef.current.focus()
    }
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="text-center mb-4">Expense Form</h3>
                    <div className="mb-3">
                      <label htmlFor="Driver_name" className="form-label">
                        Driver Name
                      </label>
                      <Field
                        type="text"
                        id="expenses.Driver_name"
                        name="expenses.Driver_name"
                        className="form-control"
                        placeholder="Enter Driver's Name"
                        ref={aRef}
                        onKeyUp={((ev)=>{Benterkey(ev)})}
                      />
                      <ErrorMessage
                        name="expenses.Driver_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Bus_Number" className="form-label">
                        Bus Number
                      </label>
                      <Field
                        type="text"
                        id="expenses.Bus_Number"
                        name="expenses.Bus_Number"
                        className="form-control"
                        placeholder="Enter Bus Number"
                        ref={bRef}
                        onKeyUp={((ev)=>{Centerkey(ev)})}
                      />
                      <ErrorMessage
                        name="expenses.Bus_Number"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="details" className="form-label">
                        Expense Details
                      </label>
                      <Field
                        as="textarea"
                        id="expenses.details"
                        name="expenses.details"
                        className="form-control"
                        placeholder="Enter Expense Details"
                        ref={cRef}
                        onKeyUp={((ev)=>{Denterkey(ev)})}
                      />
                      <ErrorMessage
                        name="expenses.details"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        Expense Amount
                      </label>
                      <Field
                        type="text"
                        id="expenses.amount"
                        name="expenses.amount"
                        className="form-control"
                        placeholder="Enter Expense Amount"
                        ref={dRef}
                        onKeyUp={((ev)=>{Eenterkey(ev)})}
                      />
                      <ErrorMessage
                        name="expenses.amount"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Image URL
                      </label>
                      <Field
                        type="text"
                        id="expenses.image"
                        name="expenses.image"
                        className="form-control"
                        placeholder="Enter Image URL"
                        ref={eRef}
                        onKeyUp={((ev)=>{Fenterkey(ev)})}
                      />
                      <ErrorMessage
                        name="expenses.image"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3" ref={fRef}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ExpensesForm;
