import React from 'react';
import './Inputs.css';

export function Inputs({
  className,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  labelClassName,
}) {
  return (
    <>
      <input
        id={id}
        className='input-text'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}
