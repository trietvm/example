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
const ITEM_HEIGHT = 100

export default class PageFavoriteMusic extends Component {
  constructor(props) {
    super(props)
    this.onEndReachedCalledDuringMomentum = null
    this.state = {
      refreshing: false
    }
  }

  _onRefresh = () => {
  }

  componentWillMount() {
  }

  _onLoadMore = async () => {
  }

  _keyExtractor = (item) => item.id

  _renderItem = ({ item }) => {
    return  (
    <SongItem
      item={item}
      itemWith={ITEM_WITDH}
      itemHeight={ITEM_HEIGHT}
      isFavorite={true}
    />
    )}

  

  render() {
    const { refreshing } = this.state
    const { musicLists } = this.props
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
          data={musicLists}
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
