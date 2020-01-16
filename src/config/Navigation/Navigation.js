import React from 'react'

import { Text, View } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Encrypto from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// We import our screens from screens folder

import { Welcome, Signup, Login, Congratulation, HomeScreen, MainScreen, ReportScreen, DiaryScreen, ConsultScreen } from '../../screens';



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <FontAwesome name="globe" size={20} color={tintColor} style={{ alignSelf: 'center' }} />
            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Home
            </Text>
          </View>
        )
      }
    },
    Diary: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarLabel: "Diary",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="book" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Diary
          </Text>
          </View>)
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#6B55C9', marginBottom: 15, paddingBottom: 5, justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ fontSize: 45, fontWeight: "900", color: "white", }}>
                +
            </Text>

            </View>
          ) : (
              <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#6B55C9', marginBottom: 15, paddingBottom: 5, justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ fontSize: 45, fontWeight: "900", color: "white", }}>
                  +
              </Text>
              </View>
            )
      }
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) => (
          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="poll" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Report
            </Text>
          </View>
        )
      }
    },
    Consult: {
      screen: ConsultScreen,
      navigationOptions: {
        tabBarLabel: "Consult",
        tabBarIcon: ({ tintColor }) => (

          <View style={{ justifyContent: 'center' }}>
            <Encrypto name="chat" size={20} color={tintColor} style={{ alignSelf: "center" }} />

            <Text style={{ fontSize: 12, fontWeight: "900", color: tintColor, }}>
              Consult
          </Text>
          </View>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6B55C9",
      inactiveTintColor: "#959CA7",
      tabStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);




const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: '',
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  Congrats: {
    screen: Congratulation,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },


}, {
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);
