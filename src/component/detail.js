import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView
} from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter'
import s from '../style'
import Istilah from '../data-istilah'
const KEYS_TO_FILTERS = ['id']

export default class Detail extends Component<{}> {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     space: Istilah.filter(x => x.id == 1)
  //   }
  // }

  state = { dataIstilah: [] };

  componentDidMount() {
    // this.state.space = Istilah.filter(x => x.id == 1);
    // let newMarkers = Istilah.map(el => (
    //   el.id==='1'? {...el, key: value}: el
    // ))
    // this.setState({ Istilah });
  }

  render() {
    // const daftar = Istilah.filter(
    //   createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    // )

// const x = Istilah.filter( (item) => {
//   return item.id.toLowerCase().match('1')
// })
    return (
      <SafeAreaView style={s.body}>
        <View>
          {/* {Istilah.filter(createFilter(1, 'id')).map(item => {
            return ( */}
              {/* <View style={s.container}>
                <Text>
                  {pizzerie.arti}
                </Text>
              </View> */}
            {/* )
          })} */}
           {Istilah.filter(value => value.id == '1')
                .map(value => (<Text key={value.id}>{value.arti}</Text>))}
          <Text>HEHE</Text>
          {/* <Text>{x.istilah}</Text> */}
        </View>
      </SafeAreaView>
    )
  }
}
