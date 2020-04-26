import React from 'react';
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import styled from 'styled-components'

import configureStore from "./store/configureStore";
import backgroundImage from './assets/starwars.jpg';
import SpeciesContainer from './views/SpeciesContainer';
const history = createBrowserHistory();
const store = configureStore();

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    background-image: url('${backgroundImage}');
`;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
          <div>
            <Background>
              <Route exact path="/" component={SpeciesContainer} />
              <Route path="/species" component={SpeciesContainer} />
            </Background>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
