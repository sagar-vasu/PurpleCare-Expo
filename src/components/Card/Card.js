import React, { Component } from 'react';
import { CardItem, Text, View, } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native'
import Circle from '../Circle/Circle'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            <View style={styles.container} >
                <CardItem header style={{ borderRadius: 7 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.txt}>
                            Only 3 steps to start
                        </Text>
                        <Text style={{ marginTop: 10, color: '#6B737C', fontSize: 14 }}>
                            0/3 completed
                        </Text>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Circle percent={25} startDegrees={0} bgRingWidth={18} ringColor="#6B55C9"  textFontSize={20} bgColor='#f3f4f5' ringBgColor='#f3f4f5' clockwise={false} />
                    </View>
                </CardItem>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 20,
        alignSelf: 'center',
        elevation: 1,
        marginTop: 45,
    },
    txt: {
        color: '#223345',
        fontSize: 18,
    }

})