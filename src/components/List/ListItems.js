import React, { Component } from 'react';
import { List, ListItem, Text, Left, Body, Right, Button, View, } from 'native-base';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const Width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Feather';

export default class ListThumbnailExample extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={.7}>

                <List style={styles.list} >

                    <ListItem thumbnail onPress={this.props.onPress}>
                        <Left>
                            <View style={styles.iconContainer} >
                                <Icon
                                    name={this.props.iconName}
                                    size={25}
                                    style={styles.icon}
                                />

                            </View>

                        </Left>
                        <Body>
                            <Text style={{ fontSize: 14 }}>{this.props.name}</Text>
                            <Text note numberOfLines={1}>{this.props.info}</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.props.onPress} style={{ backgroundColor: '#6B55C9', borderRadius: 50, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name="chevron-right"
                                    size={20}
                                    style={{ alignSelf: 'center', color: "white", }}
                                />
                            </Button>
                        </Right>
                    </ListItem>

                </List >
            </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({
    list: {
        width: Width - 30,
        marginBottom: 10,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 10
    },
    iconContainer: {
        width: 60,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        height: 78,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3CCEF",
        marginLeft: -18
    },
    icon: {
        alignSelf: 'center',
        color: "#6B55C9"
    }
})