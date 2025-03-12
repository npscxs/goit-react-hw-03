import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const UserShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Must be max 50 chars")
    .required(),
  number: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Must be max 50 chars")
    .required(),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserShema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
