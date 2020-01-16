import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'




class Diary extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>
                    Hello i am  Diary
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

export default Diary