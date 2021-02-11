import React, { useState, useEffect } from 'react';
import styles from './lpd8Knob.module.css';
import { EditorInput } from '@atoms';
import { useConfig } from '@context';

interface Props {
  id: string,
  cc: number,
  min: number,
  max: number,
};

export const Lpd8Knob: React.FC<Props> = ({ id, cc, min, max }) => {
  const [_cc, setCC] = useState(cc);
  const [_min, setMin] = useState(min);
  const [_max, setMax] = useState(max);
  const { setKnobValue } = useConfig();

  const updateCC = (cc: number) => {
    setCC(cc);
    setKnobValue(id, 'cc', cc);
  }

  const updateMin = (min: number) => {
    setMin(min);
    setKnobValue(id, 'min', min);
  }

  const updateMax = (max: number) => {
    setMax(max);
    setKnobValue(id, 'max', max);
  }

  useEffect(() => {
    setCC(cc);
    setMin(min);
    setMax(max);
  }, [cc, min, max]);

  return (
    <div className={styles['lpd8-knob']}>
      <div className={styles['lpd8-knob-label']}>{`Knob ${id}`}</div>
      <EditorInput label="CC" value={_cc} onChange={evt => updateCC(parseInt(evt.target.value, 10))} />
      <EditorInput label="Min" value={_min} onChange={evt => updateMin(parseInt(evt.target.value, 10))} />
      <EditorInput label="Max" value={_max} onChange={evt => updateMax(parseInt(evt.target.value, 10))} />
    </div>
  );
};