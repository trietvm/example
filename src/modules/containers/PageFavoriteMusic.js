import { connect } from 'react-redux'
import PageFavoriteMusic from '../components/PageFavoriteMusic'
import { MODULE_NAME } from '../models'
import { getForeignMusic } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
  getVietNamMusic: () => {
    var data = require('../../assets/Resources/Singers/Data.json')
    dispatch(getForeignMusic(data.enSongs))
  }
})

const mapStateToProps = state => 
// (
  {
    return {
      musicLists: state[MODULE_NAME].favoriteMusicList
    }
  }
// )

export default connect(mapStateToProps, mapDispatchToProps)(PageFavoriteMusic)
