import React from 'react';

const FormField = React.memo(({ field, value, onChange }) => {
  const {
    id,
    label,
    type,
    placeholder,
    autoComplete,
    gridSpan,
  } = field;

  return (
    <div className={`${gridSpan === 2 ? 'sm:col-span-2' : ''}`}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
      >
        {label}
      </label>
      <div className="mt-2.5">
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            rows={4}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
});

FormField.displayName = 'FormField';

export default FormField; 