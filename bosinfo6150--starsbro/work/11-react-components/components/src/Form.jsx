import { useId } from 'react';
import './Form.css';

function Form({id}) {
  const defaultId = useId();
  const finalId = id || defaultId;

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className="register" onSubmit={handleSubmit}>

      <p className="register__title">Welcome to Cat Family</p>

      <label className="register__label" htmlFor={`${finalId}-email`}>Email</label>
      <input id={`${finalId}-email`} type="email"/>

      <label className="register__label" htmlFor={`${finalId}-password`}>Password</label>
      <input id={`${finalId}-password`}/>

      <button className="register__submit" type="submit">Submit</button>
    </form>
); }

export default Form;