import React from 'react';
import { Header, Footer } from './components/atoms';
import { NoMidi } from './components/molecules';
import { Main } from './components/main';
import { ConfigContextProvider, MidiContextProvider } from './context';
// import './app.css';

function App() {
  if (navigator.requestMIDIAccess === undefined) {
    return (
      <>
        <Header />
        <NoMidi />
        <Footer />
      </>
    )
  }
  return (
    <MidiContextProvider>
      <ConfigContextProvider>
        <Header />
        <Main />
        <Footer />
      </ConfigContextProvider>
    </MidiContextProvider>
  );
}

export default App;
