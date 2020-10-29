import React from 'react';
import { Lpd8Name } from '../../molecules/lpd8Name';
import { Lpd8Description } from '../../molecules/lpd8Description';
import './lpd8Case.css';

const Lpd8Pads: React.FC<any> = ({children}) => (
  <section className="lpd8-pads">{children}</section>
)

const Lpd8Knobs: React.FC<any> = ({children}) => (
  <section className="lpd8-knobs">{children}</section>
)

interface Props {
  renderPads: () => void;
  renderKnobs: () => void;
  title: string;
}

export const Lpd8Case: React.FC<Props> = ({ renderPads, renderKnobs }) => (
  <section>
    <Lpd8Name />
    <Lpd8Description />
    <section className="lpd8-case">
      <Lpd8Pads>{renderPads()}</Lpd8Pads>
      <Lpd8Knobs>{renderKnobs()}</Lpd8Knobs>
    </section>
  </section>
)