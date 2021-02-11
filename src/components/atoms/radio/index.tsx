import React from 'react';
import styles from './radio.module.css';

interface Props {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onClick: () => void;
}

export const Radio: React.FC<Props> = ({name, label, value, checked, onClick}) => (
  <>
    <input className={styles.radio} type="radio" name={name} value={value} checked={checked} onChange={() => {}} />
    <label onClick={onClick}>{label}</label>
  </>
)
