
import { connect } from 'react-redux'
import PageInfo from '../components/PageInfo'
import { MODULE_NAME } from '../models'
import { getInfo } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getInfo: async () => {
    var data = require('../../assets/Resources/Singers/Data.json')
    dispatch(getInfo(data.singers.slice(0,6)))
  }
})

const mapStateToProps = state => ({
    informationList: state[MODULE_NAME].informationList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageInfo)
