import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigator from './src/config/Navigation/Navigation';


import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
var deviceWidth = Dimensions.get('window').width;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      isReady: false,

    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  on_Skip_slides = () => {
    this.setState({ showRealApp: true });
  };

  doneSlides = () => {
    setTimeout(() => {
      this.setState({ showRealApp: true })
    }, 500);
  }



  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 100
        }}>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this.setState({ showRealApp: true })}>
          <Text style={{ marginLeft: deviceWidth - 70, fontSize: 18, marginTop: 25, color: 'white', }}>Skip</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <SafeAreaView style={styles.SafeArea}>
          <StatusBar backgroundColor="#6B55C9" barStyle="light-content" />
          <Navigator />
        </SafeAreaView>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          renderDoneButton={this.doneSlides}
          showNextButton={false}
          activeDotStyle={styles.activeDot}
          onSkip={this._renderSkipButton}

        />
      );
    }
  }
}
const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    marginTop: 23
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 70
  },

  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginVertical: 15
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    backgroundColor: 'white',
    width: 20
  }
});

const slides = [
  {
    key: 'k1',
    title: 'Welcome',
    text: 'Welcome To Purple Care Your Carding dedicated app',
    image: require('./src/assests/slider.png'),

    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#6B55C9',
  },
  {
    key: 'k2',
    title: 'Reports',
    text:
      'Create Reports of treatments, symptoms and seizures and share it with your doctor',
    image: require('./src/assests/slider3.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#6B55C9',
  },
  {
    key: 'k3',
    title: 'Treatments',
    text: 'Receive treatment reminders and keep track of your medication usage',
    image: require('./src/assests/calendar.png'),

    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#6B55C9',
  },
  {
    key: 'k4',
    title: 'Connect to your Doctor',
    text: ' Get in touch with your doctor and get the advice you need',
    image: require('./src/assests/slider2.png'),

    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#6B55C9',
  },
];

