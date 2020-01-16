import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
class ButtonRoundedExample extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        rounded
        style={[
          Styles.btn,
          {
            backgroundColor: this.props.background,
            borderColor: this.props.border,
            width: this.props.width,
          },
        ]}>
        <Text style={[Styles.txt, {color: this.props.color}]}>
          {this.props.name}
        </Text>
      </Button>
    );
  }
}

export default ButtonRoundedExample;

const Styles = StyleSheet.create({
  btn: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    marginTop: 17,
    borderWidth: 1,
    borderColor: '#6B55C9',
  },
  txt: {
    width: '100%',
    textAlign: 'center',
  },
});
