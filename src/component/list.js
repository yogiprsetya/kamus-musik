import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter'
import Istilah from '../data-istilah'
import s from '../style'
const KEYS_TO_FILTERS = ['istilah']

export default class Fintech extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const daftar = Istilah.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )
    return (
      <SafeAreaView style={s.body}>
        <View style={s.searchView}>
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term)
            }}
            style={s.searchInput}
            placeholder="Search ..."
          />
          <Image
            style={{ marginTop: 8, right: 31, position: 'absolute' }}
            source={require('../../assets/icon/search.png')}
          />
        </View>
        <ScrollView>
          {daftar.map(item => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {itemId: item.id})}
                style={s.container} key={item.id}
              >
                <Text style={s.istilah}>
                  {item.istilah}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
