import React from 'react';
import './splitColumn.css';

interface Props {
  className?: string,
  title: string;
  leftColumn: JSX.Element;
  rightColumn: JSX.Element;
}

export const SplitColumnLayout: React.FC<Props> = ({ title, leftColumn, rightColumn, className }) => (
  <main className={`split-column ${className}`}>
    <section className="split-column-header">
      <h1>{title}</h1>
    </section>
    <section className="split-column-left">
      {leftColumn}
    </section>
    <section className="split-colum-right">
      {rightColumn}
    </section>
  </main>
);