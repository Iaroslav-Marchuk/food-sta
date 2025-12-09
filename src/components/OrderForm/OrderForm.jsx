import toast from 'react-hot-toast';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

const phoneRegExp = /^\+?3?8?0\d{9}$/;

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Miminum 3 symboles')
    .max(16, 'Maximum 16 symboles')
    .required('This field is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Incorect phone number')
    .required('This field is required'),
  email: Yup.string()
    .email('Not a valid email address (example@email.com)')
    .required('This field is required'),
});

function OrderForm({ onClose }) {
  const handleSubmit = async (values, actions) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Order successfully sent!');
      console.log(values);
      actions.resetForm();
      onClose();
    } catch (error) {
      toast.error('Failed to order: ' + error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl text-center mb-5 leading-[1.2]">
        Order Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={OrderSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, handleSubmit }) => (
          <Form className="flex flex-col text-(--black) gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-0.5 pl-3 font-medium leading-[1.4]"
              >
                Name
              </label>
              <Field
                className={`bg-(--white) p-3 border-[rgba(18,18,18,0.12)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] outline-none
              border rounded-[30px] placeholder-[#c4c4c4] placeholder:font-normal placeholder:leading-tight placeholder:text-base
               ${touched.name && errors.name && 'border-red-400'}
            ${touched.name && !errors.name && 'border-green-500'}`}
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <ErrorMessage name="name">
                {msg => (
                  <div className="flex gap-1 items-center font-medium text-[13px] leading-[1.4] text-(--pink) pl-3">
                    <svg className="h-3 w-3">
                      <use href="/icons.svg#icon-error"></use>
                    </svg>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-0.5 pl-3 font-medium leading-[1.4]"
              >
                Phone number
              </label>
              <Field
                className={`bg-(--white) p-3 border-[rgba(18,18,18,0.12)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] outline-none
              border rounded-[30px] placeholder-[#c4c4c4] placeholder:font-normal placeholder:leading-tight placeholder:text-base
               ${touched.phone && errors.phone && 'border-red-400'}
            ${touched.phone && !errors.phone && 'border-green-500'}`}
                type="text"
                name="phone"
                id="phone"
                placeholder="+38(0_ _) _ _ _   _ _   _ _"
              />
              <ErrorMessage name="phone">
                {msg => (
                  <div className="flex gap-1 items-center font-medium text-[13px] leading-[1.4] text-(--pink) pl-3">
                    <svg className="h-3 w-3">
                      <use href="/icons.svg#icon-error"></use>
                    </svg>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-0.5 pl-3 font-medium leading-[1.4]"
              >
                E-mail
              </label>
              <Field
                className={`bg-(--white) p-3 border-[rgba(18,18,18,0.12)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] outline-none
              border rounded-[30px] placeholder-[#c4c4c4] placeholder:font-normal placeholder:leading-tight placeholder:text-base
               ${touched.email && errors.email && 'border-red-400'}
            ${touched.email && !errors.email && 'border-green-500'}`}
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
              <ErrorMessage name="email">
                {msg => (
                  <div className="flex gap-1 items-center font-medium text-[13px] leading-[1.4] text-(--pink) pl-3">
                    <svg className="h-3 w-3">
                      <use href="/icons.svg#icon-error"></use>
                    </svg>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>

            <button
              type="button"
              className={`
          mt-8 py-2.5 px-5 w-[106px] mx-auto rounded-[30px] bg-(--white) border-2 border-(--dark-green)
          ${
            Object.keys(errors).length > 0
              ? 'border-2 border-red-400'
              : 'bg-lime-300'
          } 
        `}
              onClick={() => {
                if (!isValid) {
                  toast.error('Please fill in all fields correctly!');
                } else handleSubmit();
              }}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;
