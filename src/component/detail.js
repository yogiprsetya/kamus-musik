import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Clipboard,
  Button,
  ToastAndroid
} from 'react-native'
import s from '../style'
import Istilah from '../data-istilah'
const KEYS_TO_FILTERS = ['id']

export default class Detail extends Component<{}> {
  writeToClipboard = (istilah) => {
    Clipboard.setString(istilah)
    ToastAndroid.show('Copied to Clipboard', ToastAndroid.SHORT);
  }

  render() {
    return (
      <SafeAreaView style={s.body}>
        {Istilah.filter(value => value.id == JSON.stringify(this.props.navigation.getParam('itemId')))
          .map(value => (
            <View key={value.id} style={{marginHorizontal: 15}}>
              <Text style={s.heading}>{value.istilah}</Text>
              <Text style={{marginBottom: 20}}>{value.arti}</Text>

              <View style={{width: 130}}>
                <Button
                  onPress={() => this.writeToClipboard(value.arti)}
                  title="Copy text"
                />
              </View>
            </View>
          ))
        }
      </SafeAreaView>
    )
  }
}
