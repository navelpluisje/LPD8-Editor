import React from 'react';
import { Notes } from '@constants';
import styles from './noteSelect.module.css';

interface Props {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

export const NoteSelect: React.FC<Props> = ({ value, label, onChange }) => (
  <div className={styles['editor-input']}>
    <label>{label}</label>
    <select
      value={value}
      onChange={onChange}
      className={styles['note-select']}
      dir="rtl"
    >
      {Object.entries(Notes).map(([value, note]) => (
        <option key={value} value={value}>{note}</option>
      ))}
    </select>
  </div>
)