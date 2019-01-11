import React, { Component } from 'react'
import {
  View
} from 'react-native'
import DefaultPage from '../common/hocs/defaultPage'
import HeaderTitle from '../common/components/elements/HeaderTitle'
import PageSingerSong from '../modules/containers/PageSingerSong'

export default class SingerSongListPage extends Component {

    onBack = () => {
        const { navigation } = this.props
        navigation.goBack()
      }

  render () {
    const { navigation } = this.props
    const singerId = navigation.getParam('singerId', {})

    return (
      <DefaultPage
        styles={{ flexDirection: 'column' }}
      >
        <View style={{ width: '100%' }}>
          <HeaderTitle onBack={this.onBack}/>
        </View>
        <View style={{ width: '100%', flex: 1 }}>
          <PageSingerSong navigation={navigation} singerId={singerId}/>
        </View>
      </DefaultPage>
    )
  }
}
