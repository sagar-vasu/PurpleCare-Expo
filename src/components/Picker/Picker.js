import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native';
import {Item} from 'native-base';

export default class SwitchExample extends Component {
  state = {
    choosenIndex: 0,
  };

  render() {
    return (
      <Item
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderBottomWidth: 2,
        }}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.selected}
          onValueChange={this.props.onValueChange}>
          {this.props.list
            ? this.props.list.map((val, i) => {
                return (
                  <Picker.Item label={val.value} value={val.value} key={i} />
                );
              })
            : null}
        </Picker>
      </Item>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle: {
    width: '100%',
    color: '#344953',
  },
});
