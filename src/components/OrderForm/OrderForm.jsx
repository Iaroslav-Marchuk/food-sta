import { useState } from 'react';
import toast from 'react-hot-toast';

OrderForm;
function OrderForm({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const validateField = (name, value) => {
    if (name === 'name') return value.trim() === '';
    if (name === 'phone')
      return !/^\+?\d{10,15}$/.test(value.replace(/\D/g, ''));
    if (name === 'email') return !/^\S+@\S+\.\S+$/.test(value);
    return false;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Динамічна підсвітка
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Перевіряємо всі поля
    const newErrors = {
      name: validateField('name', form.name),
      phone: validateField('phone', form.phone),
      email: validateField('email', form.email),
    };
    setErrors(newErrors);

    const isValid = !Object.values(newErrors).some(Boolean);
    if (isValid) {
      console.log('Order sent:', form);
      toast.success('Order successfully sent!');
      onClose();
    }
  };

  const getInputClass = field => {
    if (errors[field])
      return 'border-2 border-red-500 shadow-[inset_0_2px_4px_0_rgba(255,0,0,0.15)]';
    if (form[field].trim() !== '')
      return 'border-2 border-green-500 shadow-[inset_0_2px_4px_0_rgba(0,128,0,0.15)]';
    return '';
  };

  return (
    <form className="flex flex-col text-(--black)" onSubmit={handleSubmit}>
      <h2 className="font-bold text-2xl text-center mb-5 leading-[1.2]">
        Order Form
      </h2>
      <ul
        className="flex flex-col gap-6
      [&>li>label]:flex [&>li>label]:flex-col [&>li>label]:gap-0.5 [&>li>label]:pl-3
      [&>li>label]:font-medium [&>li>label]:leading-[1.4]

      [&>li>label>span]:pl-3

      [&>li>label>input]:w-full [&>li>label>input]:ml-0 [&>li>label>input]:bg-(--white)
      [&>li>label>input]:p-3 [&>li>label>input]:border-[rgba(18,18,18,0.12)] [&>li>label>input]:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] [&>li>label>input]:border
      [&>li>label>input]:rounded-[30px] [&>li>label>input]:placeholder-[#c4c4c4] [&>li>label>input]:placeholder:font-normal [&>li>label>input]:placeholder:leading-tight [&>li>label>input]:placeholder:text-base
      
      "
      >
        <li>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              name="name"
              onChange={handleChange}
              className={getInputClass('name')}
            />
          </label>
        </li>
        <li>
          <label>
            <span>Phone number</span>
            <input
              type="text"
              placeholder="+38(0_ _) _ _ _   _ _   _ _"
              value={form.phone}
              name="phone"
              onChange={handleChange}
              className={getInputClass('phone')}
            />
          </label>
        </li>
        <li>
          <label>
            <span>E-mail</span>
            <input
              type="text"
              placeholder="example@gmail.com"
              value={form.email}
              name="email"
              onChange={handleChange}
              className={getInputClass('email')}
            />
          </label>
        </li>
      </ul>

      <button
        type="submit"
        className="mt-8 bg-(--white) py-2.5 px-5 w-[106px] mx-auto border-2 border-(--dark-green) rounded-[30px]"
      >
        Send
      </button>
    </form>
  );
}

export default OrderForm;
