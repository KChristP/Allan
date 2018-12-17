import React from 'react';
import Router from './Router';
import Login from './Login';
const initialState = {
  route: 'Login',
  user: {},
  properties: {},
}
const GlobalContext = React.createContext('light');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  goTo (route) {
    this.setState({route})
  }
  setUser (user) {
    this.setState({user})
  }
  render() {
    return (
      <GlobalContext.Provider value={'dark'}>
        <Router />
      </GlobalContext.Provider>
    );
  }
}
