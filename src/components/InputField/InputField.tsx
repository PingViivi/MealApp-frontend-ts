import React from 'react'
import './InputField.scss'

export interface IInputField {
    label: string,
    name: string,
    type: string,
    required: boolean,
}

const InputField: React.FC<{ field: IInputField }> = ({ field }) => {
  const { label, name, type, required } = field;
  return (
    <label className='flex-item six flex column input'>
        {label}
        <input required={required} className='flex-item' type={type} name={name}  />
    </label>
  )
}

export default InputField