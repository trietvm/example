import { handleActions } from 'redux-actions'

import * as actions from './actions'

const defaultState = {
  vietNamMusicList: [],
  foreignMusicList: [],
  singerList: [],
  favoriteMusicList: [],
  informationList: [],
  singerSongs: [],
  songDetail: {}
}

const handlers = {
  [actions.getVietNamMusic]: (state, action) => ({
    ...state,
    ...{ vietNamMusicList: action.payload }
  }),
  [actions.getForeignMusic]: (state, action) => ({
    ...state,
    ...{ foreignMusicList: action.payload }
  }),
  [actions.getSinger]: (state, action) => ({
    ...state,
    singerList: action.payload 
  }),
  [actions.getFavoriteMusic]: (state, action) => ({
    ...state,
    ...{ favoriteMusicList: action.payload }
  }),
  [actions.getInfo]: (state, action) => ({
    ...state,
    ...{ informationList: action.payload }
  }),
  [actions.getSingerSong]: (state, action) => ({
    ...state,
    ...{ singerSongs: action.payload }
  }),
  [actions.getSongDetail]: (state, action) => ({
    ...state,
    ...{ songDetail: action.payload }
  })
}

export default handleActions(handlers, defaultState)
