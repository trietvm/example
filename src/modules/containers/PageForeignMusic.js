
import { connect } from 'react-redux'
import PageForeignMusic from '../components/PageForeignMusic'
import { MODULE_NAME } from '../models'
import { getForeignMusic } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getForeignMusic: async () => {
    var data = require('../../assets/Resources/Singers/Data.json')
    dispatch(getForeignMusic(data.en-songs))
  }
})

const mapStateToProps = state => ({
  musicLists: state[MODULE_NAME].foreignMusicList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageForeignMusic)
