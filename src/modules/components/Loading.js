import React, { Component } from 'react'
import {
} from 'react-native'
import { SCREENS } from '../../common/screens'
import FadeLoadingPage from '../../common/components/pages/FadeLoadingPage'

export default class Loading extends Component {
  async componentDidMount () {
    const {
      navigation
    } = this.props
    await Promise.all([
    ])
    navigation.navigate(SCREENS.TabStack)
  }
  render () {
    return (<FadeLoadingPage />)
  }
}
