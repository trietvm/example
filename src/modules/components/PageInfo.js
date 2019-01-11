import React, { Component } from 'react'
import {
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal
} from 'react-native'
import { Icon } from 'react-native-elements'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 100

export default class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentWillMount() {
  }
  

  render() {
    const { refreshing } = this.state
    const { musicLists } = this.props
    return (
      <View
        style={{
          width: '100%',
        //   backgroundColor: '#ffffff',
          flex: 1,
          paddingBottom: 5
        }}
      >

      </View>)
  }
}
