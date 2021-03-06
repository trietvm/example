import React, { Component } from 'react'
import {
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal
} from 'react-native'
import { Icon } from 'react-native-elements'

import SongItem from '../../common/components/widgets/SongItem'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 80

export default class PageSingerSong extends Component {
  constructor(props) {
    super(props)
    this.onEndReachedCalledDuringMomentum = null
    this.state = {
      refreshing: false
    }
  }

  _onRefresh = () => {
    const { getSingerSong, singerId } = this.props
    this.setState({ refreshing: true }, async () => {
      await getSingerSong(singerId)
      this.setState({ refreshing: false})
    })
  }

  componentWillMount() {
    const { getSingerSong, singerId } = this.props
    this.setState({ refreshing: true }, async () => {
      await getSingerSong(singerId)
      this.setState({ refreshing: false })
    })
  }

  _onLoadMore = async () => {
  }

  _keyExtractor = (item) => item.songCode

  _renderItem = ({ item, index }) => {
    return  (
    <SongItem
      index={index}
      item={item}
      itemWith={ITEM_WITDH}
      itemHeight={ITEM_HEIGHT}
    />
    )}

  

  render() {
    const { refreshing } = this.state
    const { singerSongs } = this.props
    return (
      <View
        style={{
          width: '100%',
        //   backgroundColor: '#ffffff',
          flex: 1,
          paddingBottom: 5
        }}
      >

        <FlatList
          data={singerSongs}
          refreshing={refreshing}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onRefresh={this._onRefresh}
          onEndReached={this._onLoadMore}
          onEndReachedThreshold={0.3}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false
          }}
        />

      </View>)
  }
}
