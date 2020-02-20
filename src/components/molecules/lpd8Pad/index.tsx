import React, { useState, useEffect } from 'react';
import './lpd8Pad.css';
import { EditorInput, NoteSelect } from '../../atoms';
import { useConfig } from '../../../context';

interface Props {
  id: string,
  note: number,
  cc: number,
  pc: number,
  type: number,
};

export const Lpd8Pad: React.FC<Props> = ({ id, note, cc, pc, type }) => {
  const [_note, setNote] = useState(note);
  const [_cc, setCC] = useState(cc);
  const [_pc, setPC] = useState(pc);
  const [_type, setType] = useState(type);
  const { setPadValue } = useConfig();

  const updateNote = (note: number) => {
    setNote(note);
    setPadValue(id, 'note', note);
  }

  const updateCC = (cc: number) => {
    setCC(cc);
    setPadValue(id, 'cc', cc);
  }

  const updatePC = (pc: number) => {
    setPC(pc);
    setPadValue(id, 'pc', pc);
  }

  const updateType = (type: number) => {
    setType(type);
    setPadValue(id, 'type', type);
  }

  useEffect(() => {
    setNote(note);
    setCC(cc);
    setPC(pc);
    setType(type);
  }, [note, cc, pc, type]);

  return (
    <div className="lpd8-pad">
      <div className="lpd8-pad-label">{`Pad ${id}`}</div>
      <NoteSelect label="Note" value={_note} onChange={evt => updateNote(parseInt(evt.target.value, 10))} />
      <EditorInput label="CC" value={_cc} onChange={evt => updateCC(parseInt(evt.target.value, 10))} />
      <EditorInput label="PC" value={_pc} onChange={evt => updatePC(parseInt(evt.target.value, 10))} />
      <EditorInput label="Toggle" min="0" max="1" step="1" value={_type} onChange={evt => updateType(parseInt(evt.target.value, 10))} />
    </div>
  );
};