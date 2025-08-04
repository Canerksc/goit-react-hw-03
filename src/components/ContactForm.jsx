import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 karakter')
      .max(50, 'Maksimum 50 karakter')
      .required('Zorunlu alan'),
    number: Yup.number()
      .min(3, 'Minimum 3 karakter')
      .max(50, 'Maksimum 50 karakter')
      .required('Zorunlu alan'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name <br />
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button className="addContact" type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
