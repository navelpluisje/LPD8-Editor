import React, { SyntheticEvent } from 'react';
import './select.css';

interface Props {
  id: string;
  label: string;
  onChange: (val: any) => void,
  value?: string
}

export const Select: React.FC<Props> = ({ id, label, onChange, value, children }) => (
  <div className="select-group">
    <label htmlFor={id}>{label}</label>
    <select
      value={value}
      id={id}
      onChange={(evt: SyntheticEvent<HTMLSelectElement>) => onChange(evt.currentTarget.selectedOptions[0].value)}
      className="select"
    >
      <option value="">&hellip;</option>
      {children}
    </select>
  </div>
)