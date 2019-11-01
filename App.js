import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import List from './src/component/list'
import Detail from './src/component/detail'

class RootBase extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
          <Image
            source={require('./assets/icon/home.png')}
            style={{ width: 33, height: 33, marginLeft: 6, opacity: 0.8 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
};

const RootStack = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: ({ navigation }) => ({
        title: 'Kamus Musik',
        headerLeft: <RootBase navigationProps={navigation} />
      })
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        title: 'Kamus Musik',
        headerLeft: <RootBase navigationProps={navigation} />
      })
    }
  },
  {
    initialRouteName: 'Detail',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: '500'
      },
    },
  }
)

const App = createAppContainer(RootStack)
export default App;
