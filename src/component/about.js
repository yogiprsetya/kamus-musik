import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={{ margin: 15 }}>
        <Text style={{ marginBottom: 10 }}>
          Kamus musik adalah direktori offline kumpulan istilah dalam dunia musik berbahasa Indonesia.
        </Text>
        <Text>
          Berbagai istilah dikumpulkan dari berbagai sumber.
        </Text>
      </View>
    )
  }
}
