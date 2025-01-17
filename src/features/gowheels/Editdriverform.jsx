import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUpdatedriverMutation } from "../../services/gowheelsapi";

function EditDriverForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [updateDriverFn] = useUpdatedriverMutation();

  const initialValues = state?.driver || {
    driver: {
      name: "",
      salary: "",
      email: "",
      mobile: "",
      address: "",
      advance: "",
    },
  };

  const validationSchema = Yup.object({
    driver: Yup.object({
      name: Yup.string().required("Driver name is required"),
      salary: Yup.number().required("Salary is required").positive("Must be positive"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.number().required("Mobile number is required"),
      address: Yup.string().required("Address is required"),
      advance: Yup.number().required("Advance is required"),
    }),
  });

  const onSubmit = async (values) => {
    try {
      await updateDriverFn({ id: state.driver._id, ...values }).unwrap();
      alert("Driver updated successfully!");
      navigate("/drivers");
    } catch (error) {
      console.error("Error updating driver:", error);
      alert("Failed to update driver.");
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <h2>Edit Driver</h2>
          <div>
            <label>Driver Name</label>
            <Field name="driver.name" className="form-control" />
            <ErrorMessage name="driver.name" component="div" className="text-danger" />
          </div>
          <div>
            <label>Salary</label>
            <Field name="driver.salary" type="number" className="form-control" />
            <ErrorMessage name="driver.salary" component="div" className="text-danger" />
          </div>
          <div>
            <label>Email</label>
            <Field name="driver.email" type="email" className="form-control" />
            <ErrorMessage name="driver.email" component="div" className="text-danger" />
          </div>
          <div>
            <label>Mobile</label>
            <Field name="driver.mobile" type="number" className="form-control" />
            <ErrorMessage name="driver.mobile" component="div" className="text-danger" />
          </div>
          <div>
            <label>Address</label>
            <Field name="driver.address" className="form-control" />
            <ErrorMessage name="driver.address" component="div" className="text-danger" />
          </div>
          <div>
            <label>Advance</label>
            <Field name="driver.advance" type="number" className="form-control" />
            <ErrorMessage name="driver.advance" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Update Driver</button>
        </Form>
      )}
    </Formik>
  );
}

export default EditDriverForm;
