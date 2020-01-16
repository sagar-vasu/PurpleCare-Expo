import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { CheckBox, Text, Header, Left, Body, Right, Icon, Title } from 'native-base';
import { Button, Input } from '../../components';
var deviceWidth = Dimensions.get('window').width;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      rememberPassword: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header style={{ width: deviceWidth, backgroundColor: 'white' }}>
          <Left>
            <Icon name='arrow-back' style={{ color: 'black', }} onPress={() => this.props.navigation.goBack()} />
          </Left>
          <Body>
          </Body>

        </Header>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Image
            style={styles.logo}
            source={require('../../assests/logo.png')}
          />
          <View style={{ alignSelf: 'center' }}>
            <KeyboardAvoidingView behavior="padding-top" enabled>
              <Input placeholder="E-mail" />
              <Input placeholder="Password" password={true} />
            </KeyboardAvoidingView>
            <View style={{ marginVertical: 25, marginHorizontal: -9 }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    rememberPassword: !this.state.rememberPassword,
                  })
                }
                activeOpacity={0.7}
                style={{ flexDirection: 'row' }}>
                <CheckBox
                  checked={this.state.rememberPassword}
                  color="#6B737C"
                />
                <Text style={[styles.txt, { marginLeft: 24 }]}>
                  Remember my password
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={[
                styles.txt,
                {
                  borderBottomColor: '#6B737C',
                  borderBottomWidth: 0.7,
                  marginTop: 10,
                },
              ]}>
              Forget your password?
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 20 }}>
            <Button
              name="LOGIN"
              onPress={() => this.props.navigation.navigate('Home')}
              color="white"
              background="#6B55C9"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 232,
    height: 164,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },

  txt: {
    fontSize: 14,
    alignSelf: 'flex-start',
    color: '#6B737C',
  },
});

export default Login;
