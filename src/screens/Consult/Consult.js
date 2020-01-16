import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'




class Consult extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>
                    Hello i am  Consult
                </Text>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default Consult