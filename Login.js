import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';
import {baseUrl, register, login} from './constants';
import GlobalContext from './App';

const postUser = ({ username, password, isCreate, onSuccess }) => {
  const url = `${baseUrl}${isCreate ? register : login}`;
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      // type
    }),
  }).then((resp) => {
    console.log(resp);
    onSuccess && onSuccess(resp);
  }).catch((err) => console.log(err));
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreate: true,
      username: '',
      password: '',
      type: '',
    }
  }

  render() {
    const { isCreate } = this.state;
    console.log('context in login', this.context)
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Allan</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput style={styles.input} onChangeText={(username) => this.setState({ username })} value={this.state.username} />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
        </View>

        {/* <Picker
          selectedValue={this.state.type}
          mode={'dropdown'}
          style={styles.picker}
          onValueChange={(type) => this.setState({ type })}>
          <Picker.Item label="lord" value="Landlord" />
          <Picker.Item label="peasant" value="Tenant" />
        </Picker> */}
        <Button title={isCreate ? 'Create!' : 'Log in'} onPress={() => postUser({...this.state })}></Button>

        <Text style={styles.inputLabel}>{isCreate ? 'Already have an account?' : 'New to Gary?'}</Text>
        <Button title={isCreate ? 'Sign in': 'Create my account!'} onPress={() => this.setState({isCreate: !isCreate})}></Button>
      </View>
    );
  }
}

Login.contextType = GlobalContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
  },
  titleContainer: {
    height: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputContainer: {
    // alignContent: 'space-around'
  },
  input: {
    height: 40,
    width: 250,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputLabel: {
    color: 'blue',
  },
  picker: {
    // justifyContent: 'flex-start',
    height: 50,
    width: 100,
  }
});
