import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useConnection } from '../../context';
import { SplitColumnLayout } from '../../components/layouts';

export const ConnectPage: React.FC<any> = (props) => {
  const [token, setToken] = useState('');
  const { setConnectionToken, loadConfigurations, connectionToken } = useConnection();
  // @ts-ignore

  const updateToken = (target: HTMLInputElement) => {
    setToken(target.value as string)
  }

  useEffect(() => {
    setToken(connectionToken);
  }, [connectionToken])

  return (
    <SplitColumnLayout
      className="page-connect"
      title="LPD-Connect"
      leftColumn={
        <>
          <p>
            You can store your editor settings in the cloud. All you need to do is submit the form and you're done.
            I do not ask for an email address or a password.
          </p>
          <p>
            After submitting your personal key will be displayed. This is all you need to authenticate, so store it
            in a good place like a password manager.
          </p>
          <p>
            Is this secure? Well, no personal data will be stored, so this data will be of no value at all.
            Which hacker cares about LDP8 configs anyway.
          </p>
          <p>
            Donate a coffee so this feature can stay alive
          </p>
        </>
      }
      rightColumn={
        <>
          <p>
            <input
              name="lpd8-token"
              value={token || ''}
              type="text"
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => updateToken(target as HTMLInputElement)}
            />
          </p>
          <p>
            <button className="button" onClick={() => {
              setConnectionToken(token)
            }}>Set token</button>
            <button
              disabled={!Boolean(connectionToken)}
              className="button"
              onClick={() => loadConfigurations()}
            >
              Load configuration
            </button>
          </p>
          <p>
            {/* <button className="button" onClick={createTodo}>Request a storage key</button> */}
          </p>
          <p>
            {token && token}
          </p>
          <Link to="/">Editor</Link>
        </>
      }
    />
  );
};
