import React from 'react';
import './inputBoxYellow.css';

interface inputBoxYellowProps {
  label: string;
  placeholder: string;
  required?: boolean;
  className?: string;
}

const inputBoxYellow: React.FC<inputBoxYellowProps> = ({
  label,
  placeholder,
  required = false,
}) => {
  return (
    <div className='input-box'>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        className='inputform' 
      />
    </div>
  );
};

export default inputBoxYellow;