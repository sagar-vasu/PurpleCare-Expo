import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'native-base';
import {Button} from '../../components';

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assests/logo.png')} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.txt}>
            PurpleCare helps you in your daily seizure tracking, assists on your
            treatment management, allowing to take care of loved ones and safely
            connects to your doctor.
          </Text>
        </View>
        <Button
          name="Register"
          onPress={() => this.props.navigation.navigate('Signup')}
          color="white"
          background="#6B55C9"
        />
        <View style={{marginTop: 15}}>
          <Button
            name="Login"
            onPress={() => this.props.navigation.navigate('Login')}
            background="white"
            color="#6B55C9"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 232,
    height: 164,
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionContainer: {
    padding: 25,
  },
  txt: {
    textAlign: 'center',
    color: '#6B737C',
    fontSize: 15,
  },
});

export default Welcome;
