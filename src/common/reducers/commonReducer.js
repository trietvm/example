import { handleActions } from 'redux-actions'
import * as actions from '../actions/common'

const defaultState = {
  userLanguage: null,
  setting: {},
  notifications: {}
}

const handlers = {
  [actions.setUserLanguage]: (state, action) => ({
    ...state,
    ...{ userLanguage: action.payload }
  }),
  [actions.updateSetting]: (state, action) => ({
    ...state,
    ...{
      setting: action.payload
    }
  }),
  [actions.updateSettingProperties]: (state, action) => ({
    ...state,
    setting: {
      ...state.setting,
      ...action.payload
    }
  })
}

export default handleActions(handlers, defaultState)
