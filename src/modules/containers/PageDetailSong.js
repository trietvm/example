
import { connect } from 'react-redux'
import PageDetailSong from '../components/PageDetailSong'
import { MODULE_NAME } from '../models'
import { getSongDetail } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getSongDetail: async (songCode) => {
    var lists = []
    var data = require('../../assets/Resources/Singers/Data.json')
    lists = data.vi-songs.filter(item => {
        item.song-code === songCode
    })
    if(lists.length === 0){
        lists = data.en-songs.filter(item => {
            item.song-code === songCode
        })
    }
    dispatch(getSongDetail(lists[0]))
  }
})

const mapStateToProps = state => ({
    songDetail: state[MODULE_NAME].songDetail
})

export default connect(mapStateToProps, mapDispatchToProps)(PageDetailSong)
