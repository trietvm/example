import React, { Component } from 'react'
import {
  View
} from 'react-native'
import PageDetailSong from '../modules/containers/PageDetailSong'

export default class SongDetailPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }

  render () {
    const { navigation } = this.props
    const songCode = navigation.getParam('songCode', {})

    return (
      <View style={{ width: '100%', flex: 1 }}>
        <PageDetailSong 
        navigation={navigation} 
        songCode={songCode}
        />
      </View>
    )
  }
}
