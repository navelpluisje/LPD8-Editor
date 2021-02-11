import React from 'react';
import { Lpd8Name } from '@molecules/lpd8Name';
import { Lpd8Description } from '@molecules/lpd8Description';
import styles from './lpd8Case.module.css';
import { useConfig } from '@context/configuration';
import { Lpd8Knob, Lpd8Pad } from '@molecules';

const Lpd8Pads: React.FC<{}> = ({children}) => (
  <section className={styles['lpd8-pads']}>{children}</section>
)

const Lpd8Knobs: React.FC<{}> = ({children}) => (
  <section className={styles['lpd8-knobs']}>{children}</section>
)

export const Lpd8Case: React.FC<{}> = () => {
  const { bank } = useConfig();

  return (
    <section>
      <Lpd8Name />
      <Lpd8Description />
      <section className={styles['lpd8-case']}>
        <Lpd8Pads>
          {
            Object.entries(bank.pads).map(([id, pad]) => (
              <Lpd8Pad key={id} id={id} {...pad} />
            ))
          }
        </Lpd8Pads>
        <Lpd8Knobs>
          {
            Object.entries(bank.knobs).map(([id, knob]) => (
              <Lpd8Knob key={id} id={id} {...knob} />
            ))
          }
        </Lpd8Knobs>
      </section>
    </section>
  );
};