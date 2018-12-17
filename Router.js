import React from 'react';
import { StyleSheet, View } from 'react-native';

import Login from './Login';
import LandlordProperties from './LandlordProperties';
import TenantProperty from './TenantProperty';
import GlobalContext from './App';

export default class Router extends React.Component {
  render() {
    console.log('context in router', this.context);
    const { route } = this.context;
    let Active;
    switch (true) {
      case /Login/.test(route):
        Active = Login
        break;
      case /LandlordProperties/.test(route):
        Active = LandlordProperties
        break;
      case /TenantProperty/.test(route):
        Active = TenantProperty
        break;
      default:
        Active = Login
    }

    return (
      <View style={styles.router}>
        <Active />
      </View>
    );
  }
}

Router.contextType = GlobalContext;

const styles = StyleSheet.create({
  router: {
    flex: 1,
  }
});
