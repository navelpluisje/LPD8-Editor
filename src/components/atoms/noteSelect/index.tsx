import React from 'react';
import { Notes } from '../../../constants';
import './noteSelect.css';

interface Props {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

export const NoteSelect: React.FC<Props> = ({ value, label, onChange }) => (
  <div className="editor-input">
    <label>{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="note-select"
      dir="rtl"
    >
      {Object.entries(Notes).map(([value, note]) => (
        <option value={value}>{note}</option>
      ))}
    </select>
  </div>
)