
import { connect } from 'react-redux'
import PageSinger from '../components/PageSinger'
import { MODULE_NAME } from '../models'
import { getSinger } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getSinger: async () => {
    var data = require('../../assets/Resources/Singers/Data.json')
    dispatch(getSinger(data.singers))
  }
})

const mapStateToProps = state => ({
    singerList: state[MODULE_NAME].singerList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageSinger)
