import React from 'react';
import styles from './button.module.css';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  onClick,
  disabled = false,
  children,
}) => (
  <button className={styles.button} onClick={onClick} disabled={disabled} type="button">{children}</button>
)