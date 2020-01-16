import React from 'react';
import { View, Text } from 'native-base';
import {
    StyleSheet,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { List, Card } from '../../components';


class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#6B55C9" barStyle="light-content" />
                <View style={styles.headerContainer} >
                    <Icon
                        name="more-vertical"
                        size={20}
                        style={[styles.icon]}
                        onPress={() => this.props.path.navigation.goBack()}
                    />
                </View>
                <View style={styles.imgConatiner}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assests/avatar.png')}
                    />
                    <Text style={[styles.txt, { fontWeight: 'bold', fontSize: 24 }]}>
                        Good morning John
                    </Text>
                    <Icon
                        name="activity"
                        size={15}
                        style={[styles.icon, { alignSelf: 'center' }]}
                        onPress={() => this.props.path.navigation.goBack()}
                    />
                    <View style={[styles.congrats, { marginLeft: 40, }]}>
                        <View >
                            <Image
                                style={[styles.img, { width: 55, height: 70 }]}
                                source={require('../../assests/star.png')}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Congratulations!</Text>
                            <Text style={{ color: '#AEA2E1', fontSize: 14, marginTop: 7 }}>
                                You have created your account successfully.
                            </Text>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: -120, paddingTop: 15, backgroundColor: "#" }}>
                    <Card />
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.activityTxt}>SET YOUR ACTIVITIES:</Text>
                        <List onPress={() => alert("item is clicked")} name="Complete your medical data" iconName="credit-card" info="Visible to your doctor" />
                        <List onPress={() => alert("item is clicked")} name="Add your treatments" iconName="tablet" info="Set your reminders" />
                        <List onPress={() => alert("item is clicked")} name="Schedule the health diary" iconName='book' info="Note symptoms and seizures" />
                    </View>
                </ScrollView>




            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row-reverse',
        backgroundColor: "#6B55C9",
        paddingLeft: 17
    },
    img: {
        alignSelf: 'center',
        width: 70,
        height: 70
    },
    icon: {
        backgroundColor: '#6B55C9',
        paddingLeft: 20,
        color: 'white',
        marginTop: 5,
        marginBottom: 8
    },
    imgConatiner: {
        width: 375,
        height: 270,
        backgroundColor: '#6B55C9',
        alignSelf: 'center'
    },
    txt: {
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',
    },
    congrats: {
        flexDirection: 'row',
        padding: 20,
        marginTop: -30,
        justifyContent: "center",
        alignItems: "center",
    }
    ,
    bodyContainer: {
        marginBottom: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 5,
        backgroundColor: "#f1edf6",
    },
    activityTxt: {
        alignSelf: 'flex-start',
        color: "#6B55C9",
        fontSize: 12,
        marginBottom: 10
    }

});

export default Home;
