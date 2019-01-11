import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const getVietNamMusic = createAction(`${MODULE_NAME}_getVietNamMusic`)
export const getForeignMusic = createAction(`${MODULE_NAME}_getForeignMusic`)
export const getFavoriteMusic = createAction(`${MODULE_NAME}_getFavoriteMusic`)
export const getSinger = createAction(`${MODULE_NAME}_getSinger`)
export const getInfo = createAction(`${MODULE_NAME}_getInfo`)
export const getSingerSong = createAction(`${MODULE_NAME}_getSingerSong`)
export const getSongDetail = createAction(`${MODULE_NAME}_getSongDetail`)