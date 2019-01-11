import { createAction } from 'redux-actions'


export const loadStart = createAction('loading_start')
export const loadEnd = createAction('loading_end')

export const fetchStart = createAction('api_fetchStart')
export const fetchSuccess = createAction('api_fetchSuccess')
export const fetchFailure = createAction('api_fetchFailure')