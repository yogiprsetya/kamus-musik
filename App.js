import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Lists from './src/component/list'
import Abouts from './src/component/about'
import Details from './src/component/detail'

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/icon/drawer.png')}
            style={{ width: 33, height: 33, marginLeft: 6 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const List = createStackNavigator({
  First: {
    screen: Lists,
    navigationOptions: ({ navigation }) => ({
      title: 'Kamus Musik',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
})

const About = createStackNavigator({
  Second: {
    screen: Abouts,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
})

const Detail = createStackNavigator({
  Third: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
})

const RootStack = createDrawerNavigator(
  {
    List: { screen: List },
    About: { screen: About },
    Detail: { screen: Detail }
  },
  {
    initialRouteName: 'Detail'
  }
)

const App = createAppContainer(RootStack)
export default App;
