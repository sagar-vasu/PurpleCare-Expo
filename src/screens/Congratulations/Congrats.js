import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'native-base';
import { Button } from '../../components';

import Icon from 'react-native-vector-icons/Feather';
import PrivacyIcon from 'react-native-vector-icons/FontAwesome5';

class Welcome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>

                    <Image style={[styles.img, { alignSelf: 'center' }]} source={require('../../assests/star.png')} />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.txt}>
                            Congratulations! You have created your account successfully
                     </Text>
                    </View>
                    <Icon
                        name="activity"
                        size={25}
                        style={[styles.icon, { alignSelf: 'center' }]}
                    />

                    <View style={styles.descriptionContainer}>
                        <Text style={[styles.txt, { fontSize: 14 }]}>
                            Please complete your profile with the patients medical data and photo.
                        </Text>
                    </View>
                    <Button
                        name="COMPLETE NOW"
                        onPress={() => this.props.navigation.navigate('Login')}
                        color="#6B737C"
                        background="#FFFFFF"
                    />
                    <View style={{ marginTop: 15 }}>
                        <Button
                            name="COMPLETE LATER"
                            onPress={() => alert("Complete Later")}
                            background=""
                            color="white"
                            border='#FFFFFF'
                        />
                    </View>

                    <View style={{ flexDirection: 'row', padding: 15, marginTop: 5 }}>
                        <View style={{ width: "10%" }}>
                            <PrivacyIcon
                                name="exclamation-circle"
                                size={25}
                                style={{ color: '#E8657E', marginTop: 7 }}
                            />
                        </View>
                        <View style={{ width: "90%" }}>

                            <Text style={{ fontSize: 15, color: 'white' }}>
                                Remember, your data is safe and visibile only
                                to your current doctor.
                                Read &nbsp;
                            <Text style={{ color: "lightgrey", width: 80, fontSize: 13, borderBottomWidth: 1, borderColor: 'white' }} >
                                    Privacy Policy
                            </Text>
                            </Text>
                        </View>

                    </View>



                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#6B55C9",
    },
    img: {
        marginBottom: 20,
        marginVertical: 30
    },
    descriptionContainer: {
        padding: 25,
    },
    icon: {
        color: 'white'
    },
    txt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
});

export default Welcome;
