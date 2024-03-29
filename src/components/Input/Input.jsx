import React from 'react';

const Input = ({
  size,
  onChange,
  width = '100%',
  type,
  placeholder,
  ...rest
}) => (
  <input
    type={type || 'text'}
    style={{
      width,
      padding:
        size === 'lg' ? '25px 10px' : size === 'md' ? '18px 10px' : '10px',
    }}
    className="block h-[35px] text-[12px] rounded-[10px] border-[1px] outline-none border-b-[lightgrey]"
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
);

export default Input;
