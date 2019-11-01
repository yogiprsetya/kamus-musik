import React from 'react-native'

var { StyleSheet } = React

module.exports = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1
  },

  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },

  flexColumn: {
    flex: 1,
    flexDirection: 'column'
  },

  searchView: {
    marginVertical: 22
  },

  searchInput: {
    height: 42,
    paddingHorizontal: 15,
    paddingVertical: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999'
  },

  container: {
    flex: 1,
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 2
  },

  istilah: {
    fontSize: 19,
    fontWeight: '500'
  },
})
