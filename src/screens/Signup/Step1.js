
import React from 'react';
import { View, Text } from 'native-base';
import {
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,

} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Button, Input, Dropdown } from '../../components';


const country = [{ value: 'Country' }, { value: 'Pakistan' }, { value: 'India' }];
const city = [{ value: 'City' }, { value: 'Mithi' }, { value: 'Karachi' }];
const language = [{ value: 'Language' }, { value: 'Urdu' }, { value: 'Sindhi' }];


class Step1 extends React.Component {
  constructor() {
    super();
    this.state = {
      country: '',
      city: '',
      language: '',
    };
  }


  // country picker function
  countryHandlePicker = v => {
    this.setState({
      country: v,
    });
  };

  // City picker function

  cityHandlePicker = v => {
    this.setState({
      city: v,
    });
  };

  // language picker function

  languageHandlePicker = v => {
    this.setState({
      language: v,
    });
  };


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
            source={require('../../assests/globe.png')}
          />
          <Text style={[styles.txt, { fontWeight: 'bold', fontSize: 25 }]}>
            Country & Language
          </Text>
          <Text style={[styles.txt, { marginTop: 10 }]}>Step 1/3</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <View style={{ marginTop: 10, padding: 20, paddingTop: 5 }}>
              <Text style={{ textAlign: 'left', color: '#6B737C', fontSize: 14 }}>
                Please select the country where you live and the language of the app
              </Text>
            </View>
            <Dropdown
              selected={this.state.country}
              onValueChange={value => this.countryHandlePicker(value)}
              list={country}
            />
            <Dropdown
              selected={this.state.city}
              onValueChange={value => this.cityHandlePicker(value)}
              list={city}
            />
            <Dropdown
              selected={this.state.language}
              onValueChange={value => this.languageHandlePicker(value)}
              list={language}
            />
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Button
                background="#AEA1D7"
                name="NEXT"
                color="white"
                border="#AEA1D7"
                onPress={() => this.props.goBack(2)}

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
  radioConatiner: {
    marginTop: 30,
    paddingTop: 5,
    paddingLeft: 30,
    flexDirection: 'row',
  },
});

export default Step1;
