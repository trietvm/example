import React, { Component } from 'react'
import {
  View
} from 'react-native'
import DefaultPage from '../common/hocs/defaultPage'
import HeaderTitle from '../common/components/elements/HeaderTitle'
import PageDetailSong from '../modules/containers/PageDetailSong'

export default class SongDetailPage extends Component {

    onBack = () => {
        const { navigation } = this.props
        navigation.goBack()
      }

  render () {
    const { navigation } = this.props
    const songCode = navigation.getParam('songCode', {})

    return (
      <DefaultPage
        styles={{ flexDirection: 'column' }}
      >
        <View style={{ width: '100%' }}>
          <HeaderTitle onBack={this.onBack}/>
        </View>
        <View style={{ width: '100%', flex: 1 }}>
          <PageDetailSong navigation={navigation} songCode={songCode}/>
        </View>
      </DefaultPage>
    )
  }
}
