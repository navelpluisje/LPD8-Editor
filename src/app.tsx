import React from 'react';
import { Footer, Main } from './components/atoms';
import { NoMidi } from './components/molecules';
import { Header } from './components/organisms';
import { EditorPage, ConnectPage, SettingsPage } from './pages';
import { ConfigContextProvider, MidiContextProvider, ConnectionProvider } from './context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  if (navigator.requestMIDIAccess === undefined) {
    return (
      <Router>
        <Header showMenu={false} />
        <NoMidi />
        <Footer />
      </Router>
    )
  }
  return (
    <ConnectionProvider>
      <MidiContextProvider>
        <ConfigContextProvider>
          <Router>
            <Main>
              <Header showMenu />
              <Switch>
                <Route exact path="/settings">
                  <SettingsPage />
                </Route>
                <Route exact path="/connect">
                  <ConnectPage />
                </Route>
                <Route path="/">
                  <EditorPage />
                </Route>
              </Switch>
              <Footer />
            </Main>
          </Router>
        </ConfigContextProvider>
      </MidiContextProvider>
    </ConnectionProvider>
  );
}

export default App;
