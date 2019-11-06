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
//  this.showToast()
    // ToastAndroid.show('Copied to Clipboard', ToastAndroid.SHORT)


  };

  showToast = (istilah) => {
    ToastAndroid.showWithGravity (
      "Copied to Clipboard !!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  render() {
    return (
      <SafeAreaView style={s.body}>
        {Istilah.filter(value => value.id == 1)
          .map(value => (
            <View key={value.id} style={{marginHorizontal: 15}}>
              <Text style={s.heading}>{value.istilah}</Text>
              <Text style={{marginBottom: 20}}>{value.arti}</Text>

              <View style={{width: 130}}>
                <Button
                  onPress={this.showToast}
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
