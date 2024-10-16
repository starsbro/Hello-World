import React, { useState } from 'react';
import './PasswordVerification.css';

function PasswordVerification({className}) {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);

    // Regular expressions for password validation
    const hasUppercase = /[A-Z]/.test(inputValue);
    const hasLowercase = /[a-z]/.test(inputValue);
    const hasNumber = /\d/.test(inputValue);
    const isLengthValid = inputValue.length >= 8;

    setIsValid(hasUppercase && hasLowercase && hasNumber && isLengthValid);
  };

  return (
    <div>
      <label className="password__label">Password: 
        <input 
          id="password__field"
          className={className}
          type="password" 
          value={password} 
          onChange={handleChange} 
          placeholder="Enter your password" 
        />
      </label>
      
      {/* Password verification */}
      {password && (
        <p style={{ color: isValid ? 'green' : 'red', display: 'inline-block', marginLeft: '5px' }}>
          {isValid ? '✔' : '✘'}
        </p>
      )}

      {/* Password error show password rule */}
      {password && !isValid && (
        <p style={{ color: 'gray', marginTop: '5px' }}>
          Password must contain at least 8 characters, including uppercase, lowercase, and number
        </p>
      )}

    </div>
  );
}

export default PasswordVerification;
