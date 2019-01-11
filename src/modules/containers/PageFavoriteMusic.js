import { connect } from 'react-redux'
import PageFavoriteMusic from '../components/PageFavoriteMusic'
import { MODULE_NAME } from '../models'

const mapDispatchToProps = (dispatch, props) => ({
})

const mapStateToProps = state => ({
  musicLists: state[MODULE_NAME].favoriteMusicList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageFavoriteMusic)
