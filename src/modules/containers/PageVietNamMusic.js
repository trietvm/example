
import { connect } from 'react-redux'
import PageVietNamMusic from '../components/PageVietNamMusic'
import { MODULE_NAME } from '../models'
import { getVietNamMusic } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
  getVietNamMusic: () => {
    var data = require('../../assets/Resources/Singers/Data.json')
    dispatch(getVietNamMusic(data.viSongs))
  }
})

const mapStateToProps = state => ({
  musicLists: state[MODULE_NAME].vietNamMusicList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageVietNamMusic)
