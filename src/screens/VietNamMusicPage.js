import React, { Component } from 'react'
import {
  View
} from 'react-native'
import DefaultPage from '../common/hocs/defaultPage'
import HeaderTitle from '../common/components/elements/HeaderTitle'
import PageVietNamMusic from '../modules/containers/PageVietNamMusic'

export default class VietNamMusicPage extends Component {
  render () {
    const { navigation } = this.props
    return (
      <DefaultPage
        styles={{ flexDirection: 'column' }}
      >
        <View style={{ width: '100%' }}>
          <HeaderTitle/>
        </View>
        <View style={{ width: '100%', flex: 1 }}>
          <PageVietNamMusic navigation={navigation} />
        </View>
      </DefaultPage>
    )
  }
}
