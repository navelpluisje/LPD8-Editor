import React from 'react';
import { Link } from 'react-router-dom';
import { MidiSettings } from '../../components/organisms';
import { SplitColumnLayout } from '../../components/layouts';

export const SettingsPage: React.FC<any> = (props) => {
  return (
    <SplitColumnLayout
      className="page-settings"
      title="Settings"
      leftColumn={
        <MidiSettings />
      }
      rightColumn={
        <>
          <Link to="/">Editor</Link><br />
          <Link to="/">Connect</Link>
        </>
      }
    />
  );
};
