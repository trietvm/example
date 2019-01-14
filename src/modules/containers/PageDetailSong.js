
import { connect } from 'react-redux'
import PageDetailSong from '../components/PageDetailSong'
import { MODULE_NAME } from '../models'
import { getSongDetail, getFavoriteMusic } from '../actions'

const mapDispatchToProps = (dispatch, props) => ({
    getSongDetail: async (songCode) => {
    var lists = []
    var singers = [] 
    var data = require('../../assets/Resources/Singers/Data.json')
    lists = data.viSongs.filter(item => 
        item.songCode === songCode
    )
    if(lists.length === 0){
        lists = data.enSongs.filter(item => 
            item.songCode === songCode
        )
    }
    singers = data.singers.filter(item => 
        item.singerId === lists[0].singerId
    )
    lists[0].singer = singers[0]

    dispatch(getSongDetail(lists[0]))
  },
  toggleLike: async (songCode, favoriteMusicList) => {
    var lists = []
    var data = require('../../assets/Resources/Singers/Data.json')
    lists = data.viSongs.filter(item => 
        item.songCode === songCode
    )
    if(lists.length === 0){
        lists = data.enSongs.filter(item => 
            item.songCode === songCode
        )
    }
    console.log("favoriteMusicList", favoriteMusicList)
    console.log("songDetail", lists[0])
    favoriteMusicList.length >= 0 && favoriteMusicList.push(lists[0])
    console.log("favorite after push", favoriteMusicList)
    dispatch(getFavoriteMusic(favoriteMusicList))
  },
  toggleNotLike: async (songCode, favoriteMusicList) => {
    // var lists = []
    // var data = require('../../assets/Resources/Singers/Data.json')
    // lists = data.viSongs.filter(item => 
    //     item.songCode === songCode
    // )
    // if(lists.length === 0){
    //     lists = data.enSongs.filter(item => 
    //         item.songCode === songCode
    //     )
    // }
    console.log("favoriteMusicList", favoriteMusicList)
    // console.log("songDetail", lists[0])
    favoriteMusicList = favoriteMusicList.filter(function( obj ) {
        return obj.songCode !== songCode;
    })
    // var idx = favoriteMusicList.indexOf(lists[0])
    // if( idx !== -1 ) {
    //     favoriteMusicList.splice(idx, 1)
    // }
    // console.log("index", idx)
    console.log("favorite after splice", favoriteMusicList)
    dispatch(getFavoriteMusic(favoriteMusicList))
  }
})

const mapStateToProps = state => ({
    songDetail: state[MODULE_NAME].songDetail,
    favoriteMusicList: state[MODULE_NAME].favoriteMusicList
})

export default connect(mapStateToProps, mapDispatchToProps)(PageDetailSong)
