import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Lists from './src/component/list'
import Abouts from './src/component/about'
import Details from './src/component/detail'

class AboutButton extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
          <Image
            source={require('./assets/icon/info.png')}
            style={{ width: 25, height: 25, marginRight: 6 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    List: { screen: Lists,
    navigationOptions: ({ navigation }) => ({
      title: 'Kamus Musik',
      headerRight: <AboutButton navigation={navigation} />
    })
  },
    About: { screen: Abouts,
    navigationOptions: ({ navigation }) => ({
      title: 'About'
    })
  },
    Detail: { screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: 'Kamus Musik',
      headerRight: <AboutButton navigation={navigation} />
    })}
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTintColor: '#2b2b2b',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const App = createAppContainer(RootStack)
export default App;
