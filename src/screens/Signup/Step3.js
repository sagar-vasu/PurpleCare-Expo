import React from 'react';
import { View, Text, ListItem, CheckBox, Body } from 'native-base';
import {
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Button, Input } from '../../components';

class Step3 extends React.Component {
  constructor() {
    super();
    this.state = {
      privacyPolicy: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6B55C9" barStyle="light-content" />
        <Icon
          name="arrow-left"
          size={20}
          style={[styles.icon]}
          onPress={() => this.props.goBack(2)}
        />
        <View style={styles.imgConatiner}>
          <Image
            style={styles.img}
            source={require('../../assests/message.png')}
          />
          <Text style={[styles.txt, { fontWeight: 'bold', fontSize: 25 }]}>
            E-mail & Password
          </Text>
          <Text style={[styles.txt, { marginTop: 10 }]}>Step 3/3</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
            <KeyboardAvoidingView behavior="padding-top" enabled>
              <Input placeholder="E-mail" />
              <Input placeholder="Password" password={true} />
              <Input placeholder="Confirm password" password={true} />
            </KeyboardAvoidingView>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  privacyPolicy: !this.state.privacyPolicy,
                })
              }
              activeOpacity={0.7}
              style={{ flexDirection: 'row' }}>
              <CheckBox
                style={{ marginLeft: 16 }}
                checked={this.state.privacyPolicy}
                color="#6B737C"
              />
              <Text style={{ color: '#6B737C', marginLeft: 24 }}>
                I accept the privacy policy
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Button
              background="#6B55C9"
              name="NEXT"
              color="white"
              border="#6B55C9"
              onPress={() => this.props.goBack(4)}

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
  },
  img: {
    width: 100,
    height: 105,
    alignSelf: 'center',
  },
  icon: {
    backgroundColor: '#6B55C9',
    paddingLeft: 20,
    paddingTop: 20,
    color: 'white',
  },
  imgConatiner: {
    width: 375,
    height: 220,
    backgroundColor: '#6B55C9',
    alignSelf: 'center',
  },
  txt: {
    alignSelf: 'center',
    marginTop: 25,
    color: 'white',
  },
  radioConatiner: {
    marginTop: 30,
    paddingTop: 5,
    paddingLeft: 30,
    flexDirection: 'row',
  },
});

export default Step3;










// const styles = StyleSheet.create({
//   container: {
//     width: SCREEN_WIDTH,
//   },
//   img: {
//     width: 100,
//     height: 105,
//     alignSelf: 'center',
//   },
//   icon: {
//     backgroundColor: '#6B55C9',
//     paddingLeft: 20,
//     paddingTop: 20,
//     color: 'white',
//   },
//   imgConatiner: {
//     width: 375,
//     height: 220,
//     backgroundColor: '#6B55C9',
//     alignSelf: 'center',
//   },
//   txt: {
//     alignSelf: 'center',
//     marginTop: 25,
//     color: 'white',
//   },
// });

// export default Header;

















