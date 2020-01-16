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
          onPress={() => this.props.goBack(3)}
        />
        <View style={styles.imgConatiner}>
          <Image
            style={styles.img}
            source={require('../../assests/message.png')}
          />
          <Text style={[styles.txt, { fontWeight: 'bold', fontSize: 25 }]}>
            Confirmation e-mail
          </Text>
          <Text style={[styles.txt, { marginTop: 10 }]}>Step 3/3</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 23 }}>
            <Text style={styles.accountTxt}>
              Check your e-mail and click on the link to confirm your account.
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <Text style={{ color: '#6B737C', fontSize: 14 }}>
              If you mistyped your email address, please correct it and click
              Resubmit.
            </Text>
            <KeyboardAvoidingView behavior="padding-top" enabled>
              <Input placeholder="john@gmail.com" />
            </KeyboardAvoidingView>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Button
                background="#6B55C9"
                name="RESUBMIT"
                color="white"
                border="#6B55C9"
                width={140}
              />
              <Button
                name="CANCEL"
                background="white"
                color="#6B55C9"
                border="#6B55C9"
                width={140}
                onPress={() => this.props.path.navigation.navigate("Congrats")}
              />
            </View>
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
  bodyContainer: {
    marginVertical: 90,
    padding: 23,
    paddingBottom: 0,
    paddingTop: 0,
  },

  accountTxt: {
    fontSize: 15,
    color: '#223345',
  },
});

export default Step3;
