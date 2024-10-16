import React, { useState } from 'react';
import './EmailVerification.css';

function EmailVerification({className}) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputValue));
  };

  return (
    <div>
      <label className="email__label">Email: 
        <input 
          id={className}
          className={className}
          type="text" 
          value={email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
        />
      </label>
      
    
    {email && (
        <p style={{ color: isValid ? 'green' : 'red', display: 'inline-block', marginLeft: '5px' }}>
            {isValid ? '✔' : '✘'}
        </p>
    )} 

    </div>
  );
}

export default EmailVerification;
