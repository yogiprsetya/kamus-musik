import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={{ margin: 15 }}>
        <Text style={{ marginBottom: 10 }}>
          Sampai dengan 30 September 2019, total jumlah penyelenggara fintech
          terdaftar dan berizin adalah sebanyak 127 perusahaan.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Terdapat penambahan enam penyelenggara fintech yang sebelumnya sudah
          terdaftar menjadi berizin yaitu, Modalku, KTA Kilat, Kredit Pintar,
          Maucash, Finmas, dan KlikACC.
        </Text>
        <Text>
          OJK mengimbau masyarakat untuk menggunakan jasa penyelenggaran fintech
          peer to peer lending yang sudah terdaftar/berizin dari OJK.
        </Text>
      </View>
    )
  }
}
