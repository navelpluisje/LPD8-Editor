import React from 'react';
import './button.css';

interface Props {
  onClick: () => void;
  disabled: boolean,
}

export const Button: React.FC<Props> = ({onClick, disabled, children}) => (
  <button onClick={onClick} disabled={disabled}>{children}</button>
)