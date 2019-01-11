import React, { PureComponent } from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import Migrator from '../migrator'
import storage from '../utils/storage'
import { SETTING_KEYS, SETTING_STORE } from '../models'
import { updateSetting } from '../actions/common'
import Navigator from '../screens'
import PageLoading from '../components/widgets/PageLoading'
import ModalLoading from '../components/widgets/ModalLoading'

class InitialPage extends PureComponent {
  async componentDidMount () {
    const { dispatch } = this.props
    let settings = {}
    try {
      // TODO: Load setting from asyncStorage
      await storage.init(SETTING_STORE)
      settings = storage.getCurrentStore()
      dispatch(updateSetting(settings))
      // TODO: Migration system start
      await Migrator.init()
    } catch (error) {
      console.log('Faital Error. Cannot Initialize.', error)
    }
  }

  render () {
    const { dispatch } = this.props
    // TODO: Loading page
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch
    })
    return [
      <Navigator key='main' navigation={navigation} />,
      <PageLoading.Component key='loading' global />,
      <ModalLoading.Component key='loading-modal' global />
    ]
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  dispatch
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)
