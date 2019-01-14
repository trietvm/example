import React, { Component } from 'react'
import {
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'
import DefaultPage from '../../common/hocs/defaultPage'
import HeaderTitle from '../../common/components/elements/HeaderTitle'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 100

export default class PageDetailSong extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      focused: false
    }
  }

  componentWillMount() {
    const { getSongDetail, songCode, favoriteMusicList } = this.props
    getSongDetail(songCode)

    favoriteMusicList.length > 0 && favoriteMusicList.map(item => {
      if(item.songCode === songCode){
        this.setState({focused: true})
      }
    })
    // if(songDetail.isLike){
    //   this.setState({focused: true})
    // }
  }

  onBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  // toggle = () => {
  //   const { songDetail, favoriteMusicList, toggleLike, toggleNotLike } = this.props
  //   const { focused } = this.state
  //   console.log(focused)
  //   if(focused){
  //     toggleLike(songDetail.songCode, favoriteMusicList)
  //   }
  //   else{
  //     toggleNotLike(songDetail.songCode, favoriteMusicList)
  //   }
  // }

  onLike = () => {
    const { songCode, favoriteMusicList, toggleLike, toggleNotLike } = this.props
    const { focused } = this.state
    if(!focused){
      toggleLike(songCode, favoriteMusicList)
    }
    else{
      toggleNotLike(songCode, favoriteMusicList)
    }
    this.setState({
      focused: !focused
    })
  }

  render() {
    const { refreshing } = this.state
    const { songDetail } = this.props

    return (

      <DefaultPage
        styles={{ flexDirection: 'column' }}
      >
        <View style={{ width: '100%' }}>
          <HeaderTitle onBack={this.onBack} onLike={this.onLike} focused={this.state.focused}/>
        </View>
        <ScrollView
          style={{
            width: '100%',
            backgroundColor: '#E6E0E0',
            flex: 1,
            paddingBottom: 5,
            flexDirection: 'column'
          }}
        >
          <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', alignContent: 'center', marginRight: 10}}>
            <Text style={{backgroundColor: '#ffffff', color: '#35A85A', fontSize: 25, fontWeight: 'bold', padding: 10}}>
            {songDetail && songDetail.songCode || ''}</Text>
            <Text style={{color: '#35A85A', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginRight: 10}}>
            {songDetail && songDetail.songName && songDetail.songName.toUpperCase() || ''}</Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 15, flexDirection: 'column', marginRight: 30}}>
            <Text style={{color: '#19760D', fontSize: 18}}>
            {`Ca sĩ: ${songDetail && songDetail.singer && songDetail.singer.singerName.toUpperCase() || ''}`}</Text>
            <Text style={{color: '#19760D', fontSize: 15, marginTop: 15, marginLeft: 10}}>
            {songDetail && songDetail.lyrics || ''}</Text>
          </View>

        </ScrollView>
      </DefaultPage>
      )
  }
}
