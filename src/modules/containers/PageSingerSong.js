
import { connect } from 'react-redux'
import PageSingerSong from '../components/PageSingerSong'
import { MODULE_NAME } from '../models'
import { getSingerSong } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getSingerSong: async (singerId) => {
    var data = require('../../assets/Resources/Singers/Data.json')
    var singerSongs = []
    singerSongs = data.viSongs.filter(item => {
        item.singerId === singerId
    })
    if(singerSongs.length === 0){
        singerSongs = data.enSongs.filter(item => {
            item.singerId === singerId
        })
    }
    dispatch(getSingerSong(singerSongs))
  }
})

const mapStateToProps = state => ({
    singerSongs: state[MODULE_NAME].singerSongs
})

export default connect(mapStateToProps, mapDispatchToProps)(PageSingerSong)
