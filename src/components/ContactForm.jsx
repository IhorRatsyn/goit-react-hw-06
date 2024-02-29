import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {

  const addContact = (values, {resetForm}) => {
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact)
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={addContact}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <br />
          <label htmlFor="number">Number:</label>
          <Field name="number" type="tel" />
          <ErrorMessage name="number" />
          <br />
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;


ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};


