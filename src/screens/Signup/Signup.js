import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { CustomScrolView } from '../../components';


//  Logic to move between components without any library


//  Custom Scroll help us to create many components in one screen with per device width and height 
// i created 4 components in signup folder in each component one step of ui is designed 
// we are not able to use this.props.navigation in those components because we never used these components in navigation
// so i used props in path variable and using this i am able mmove back and forth
// in each component on arrow back will call and function which will provide index to custom slider to move between components





import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

var deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      back: 0,
    };
  }

  goBack = val => {
    this.setState({
      back: val,
    });
  };

  render() {
    return (
      <CustomScrolView back={this.state.back}>
        <View style={styles.firstView}>
          <Step1 goBack={this.goBack} path={this.props} />
        </View>

        <View style={styles.secondView}>
          <Step2 goBack={this.goBack} />
        </View>

        <View style={styles.thirdView}>
          <Step3 goBack={this.goBack} />
        </View>

        <View style={styles.forthView}>
          <Step4 goBack={this.goBack} path={this.props} />
        </View>
      </CustomScrolView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
  },

  firstView: {
    width: deviceWidth,
  },
  secondView: {
    width: deviceWidth,
  },
  thirdView: {
    width: deviceWidth,
  },
  forthView: {
    width: deviceWidth,
  },
});
