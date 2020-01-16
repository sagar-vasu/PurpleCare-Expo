import React from 'react';
import { View, Text, Radio } from 'native-base';
import {
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Button, Input } from '../../components';

class Step3 extends React.Component {
  constructor() {
    super();
    this.state = {
      patient: false,
      caregiver: false,
      margin: 200,
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
          onPress={() => this.props.goBack(1)}
        />
        <View style={styles.imgConatiner}>
          <Image
            style={styles.img}
            source={require('../../assests/teddybear.jpg')}
          />
          <Text style={[styles.txt, { fontWeight: 'bold', fontSize: 25 }]}>
            Patient or Caregiver?
          </Text>
          <Text style={[styles.txt, { marginTop: 10 }]}>Step 2/3</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.radioConatiner}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                this.setState({ patient: true, caregiver: false, margin: 15 })
              }
              style={{ flexDirection: 'row' }}>
              <Radio selected={this.state.patient} />
              <Text style={{ marginLeft: 10, color: '#223345', marginRight: 35 }}>
                Patient
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                this.setState({
                  caregiver: true,
                  patient: false,
                  margin: 15,
                })
              }
              style={{ flexDirection: 'row' }}>
              <Radio selected={this.state.caregiver} />
              <Text style={{ marginLeft: 10, color: '#223345' }}>Caregiver</Text>
            </TouchableOpacity>
          </View>

          {/* Caregiver Inputs */}

          {this.state.caregiver ? (
            <View
              style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              <KeyboardAvoidingView behavior="padding-top" enabled>
                <Input placeholder="Patient first name" />
                <Input placeholder="Patient last name" />
                <Input placeholder="Your name" />
                <Input placeholder="Your phone" />
              </KeyboardAvoidingView>
            </View>
          ) : null}

          {/* Patient Inputs */}

          {this.state.patient ? (
            <View
              style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              <KeyboardAvoidingView behavior="padding-top" enabled>
                <Input placeholder="Your first name" />
                <Input placeholder="Your last name" />
                <Input placeholder="Your phone" />
              </KeyboardAvoidingView>
            </View>
          ) : null}
          <View style={{ marginTop: this.state.margin, marginBottom: 15 }}>
            <Button
              background="#AEA1D7"
              name="NEXT"
              color="white"
              border="#AEA1D7"
              onPress={() => this.props.goBack(3)}

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
