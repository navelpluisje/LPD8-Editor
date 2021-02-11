import React from 'react';
import styles from './editor.module.css';
import {
  EditorControls,
  Lpd8Pad,
  Lpd8Knob,
} from '@molecules';
import { EditorDrawer, Lpd8Case } from '@organisms';
import { Editor } from '@atoms';
import { ConfigContextProvider, useConfig } from '../../context';
import { Page } from '@layouts/page';
import { getCookies } from '@utils/getCookies';

const EditorPage: React.FC<any> = ({banks, bank}) => {
  return(
    <Page>
      <main className={styles['page-editor']}>
        <ConfigContextProvider bank={bank}>
          <EditorControls />
          <Editor>
            <Lpd8Case />
          </Editor>
          <EditorDrawer banks={banks} />
        </ConfigContextProvider>
      </main>
    </Page>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/bank/get-by-user', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'lpd8_token': '5fe3b585b47b5a1b6de4f446',
    },
  });

  const banks = await response.json();

  return {
    props: {
      banks,
    },
  };
};

export default EditorPage;