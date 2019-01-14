
import { connect } from 'react-redux'
import PageSingerSong from '../components/PageSingerSong'
import { MODULE_NAME } from '../models'
import { getSingerSong } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getSingerSong: async (singerId) => {
    var data = require('../../assets/Resources/Singers/Data.json')
    var singerSongs = []
    data.viSongs.map(item => {
        if(item.singerId === singerId){
            console.log(item)
            singerSongs.push(item)
        }
    })
    if(singerSongs.length === 0){
        data.enSongs.map(item => {
            if(item.singerId === singerId){
                console.log(item)
                singerSongs.push(item)
            }
        })
    }
    dispatch(getSingerSong(singerSongs))
  }
})

const mapStateToProps = state => ({
    singerSongs: state[MODULE_NAME].singerSongs
})

export default connect(mapStateToProps, mapDispatchToProps)(PageSingerSong)
