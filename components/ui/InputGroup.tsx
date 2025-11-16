
import React from 'react';

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  prefix,
  suffix,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center rounded-md shadow-sm border border-gray-300 focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500">
        {prefix && (
          <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border-r border-gray-300 rounded-l-md">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full border-0 focus:ring-0 p-2 bg-white text-gray-900 placeholder:text-gray-400 sm:text-sm"
          style={{
            borderTopLeftRadius: prefix ? 0 : undefined,
            borderBottomLeftRadius: prefix ? 0 : undefined,
            borderTopRightRadius: suffix ? 0 : undefined,
            borderBottomRightRadius: suffix ? 0 : undefined,
          }}
        />
        {suffix && <div>{suffix}</div>}
      </div>
    </div>
  );
};

export default InputGroup;