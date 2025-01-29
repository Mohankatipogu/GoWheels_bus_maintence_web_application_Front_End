import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddleadMutation } from "../../services/gowheelsapi";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function DriverExpensesForm() {
  const [preview, setPreview] = useState(null);
  const [fieldValue,setFieldValue]=useState();
     const aRef=React.useRef();
     const bRef=React.useRef();
     const cRef=React.useRef();
     const dRef=React.useRef();
     const eRef=React.useRef();
     const fRef=React.useRef();
     const gRef=React.useRef();


     React.useEffect(()=>{
         aRef.current.focus();
     },[])

    const [AddDriverFn]=useAddleadMutation()
    var navigate=useNavigate()
    const initialValues = {
    driver:{
      name:"",
      salary:"",
      email:"",
      mobile:"",
      address:"",
      image:"",
      advance:"",
      date:"",
    }
  };
  const validationSchema = Yup.object({
    driver: Yup.object({
      name: Yup.string().required("Driver name is required"),
      salary: Yup.number()
        .required("Salary is required")
        .positive("Salary must be positive"),
      email:Yup.string().required("please Enter Mail Id"),
      mobile:Yup.number().min(10,'ten numbers required').required("please Enter a mobile Number"),
      address:Yup.string().required("please Enter address"),
      advance:Yup.string().required('please enter a advance'),
    }),
  });
  const onSubmit =async (values) => {
    console.log(values)
  var res= await AddDriverFn(values).then((res)=>{
      try{
        if(res.data.message==='driver added'){
            navigate("/drivers")
        }
        else{
          navigate("/drivers/registation")
          alert('wrong credentials')
        }
      }
      catch(err){
        console.log(err)
      }
    })
  };
  
   function Benterkey(e){
    if(e.key==='Enter'){
      bRef.current.focus();
    }
   }
   function  Centerkey(e){
    if(e.key==='Enter'){
      cRef.current.focus();
    }
   }
   function Denterkey(e){
    if(e.key==='Enter'){
      dRef.current.focus();
    }
   }
   function Eenterkey(e){
    if(e.key==='Enter'){
      eRef.current.focus();
    }
   }
   function  Fenterkey(e){
    if(e.key==='Enter'){
      fRef.current.focus();
    }
   }
   function  Genterkey(e){
    if(e.key==='Enter'){
      gRef.current.focus();
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
                    <h3 className="text-center mb-4">Driver's Registation Form</h3>
                    <div className="mb-3">
                      <label htmlFor="driver.name" className="form-label">
                        Driver Name
                      </label>
                      <Field
                        type="text"
                        id="driver.name"
                        name="driver.name"
                        className="form-control"
                        placeholder="Enter Driver's Full Name"
                        ref={aRef}
                        onKeyUp={((ev)=>{Benterkey(ev)})}
                      />
                      <ErrorMessage
                        name="driver.name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="driver.salary" className="form-label">
                        Salary
                      </label>
                      <Field
                        type="number"
                        id="driver.salary"
                        name="driver.salary"
                        className="form-control"
                        placeholder="Enter Salary"
                        ref={bRef}
                        onKeyUp={((ev)=>{Centerkey(ev)})}
                      />
                      <ErrorMessage
                        name="driver.salary"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="driver.email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="text"
                        id="driver.email"
                        name="driver.email"
                        className="form-control"
                        placeholder="Enter A Email"
                        ref={cRef}
                        onKeyUp={((ev)=>{Denterkey(ev)})}
                      />
                      <ErrorMessage
                        name="driver.email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="driver.mobile" className="form-label">
                      Mobile Number
                      </label>
                      <Field
                        type="number"
                        id="driver.mobile"
                        name="driver.mobile"
                        className="form-control"
                        placeholder="Enter Advance"
                        ref={dRef}
                        onKeyUp={((ev)=>{Eenterkey(ev)})}
                      />
                      <ErrorMessage
                        name="diver.mobile"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="driver.address" className="form-label">
                        Address
                      </label>
                      <Field
                        type="text"
                        id="driver.address"
                        name="driver.address"
                        className="form-control"
                        placeholder="Enter address"
                        ref={eRef}
                        onKeyUp={((ev)=>{Fenterkey(ev)})}
                      />
                      <ErrorMessage
                        name="driver.address"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  <div className="mb-3">
                      <label htmlFor="driver.advance" className="form-label">
                        Advance
                      </label>
                      <Field
                        type="text"
                        id="driver.advance"
                        name="driver.advance"
                        className="form-control"
                        placeholder="Enter Your advance"
                        ref={fRef}
                        onKeyUp={((ev)=>{Genterkey(ev)})}
                      />
                      <ErrorMessage
                        name="driver.advance"
                        component="div"
                        className="text-danger"
                      />
                    <div className="mb-3">
                    <label htmlFor="driver.image" className="form-label">
                        image
                      </label>
                      <label htmlFor="driver.image" className="form-label">Upload Image</label>
                      <input
                        type="file"
                        id="driver.image"
                        className="form-control"
                        accept="image/*"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          setFieldValue("driver.image", file);
                          setPreview(URL.createObjectURL(file));
                        }}
                      />
                      <ErrorMessage name="driver.image" component="div" className="text-danger" />
                      {preview && <img src={preview} alt="Preview" width="100" className="mt-2" />}
                    </div>
                      <ErrorMessage
                        name="driver.image"
                        component="div"
                        className="text-danger"
                      />
                      <div className="mb-3 m-3">
                      <Field 
                      type='date' 
                      id="driver.date"
                      name="driver.date"
                      >
                      </Field>
                      </div>
                    </div>
                     <button type="submit" className="btn btn-lg w-100 mt-4 registerbtn bg-primary text-light" ref={gRef}>
                      Register
                    </button>
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

export default DriverExpensesForm;
