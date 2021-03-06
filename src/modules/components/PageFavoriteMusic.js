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
import store from '../../common/store'
import SongItem from '../../common/components/widgets/SongItem'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 80

export default class PageFavoriteMusic extends Component {
  constructor(props) {
    super(props)
    this.onEndReachedCalledDuringMomentum = null
    this.state = {
      refreshing: false,
      items: []
    }
    store.store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.
      this.setState({
        items: store.store.getState().main.favoriteMusicList
      });
    });
  }

  _onRefresh = () => {
  }

  componentWillMount() {
    const { getVietNamMusic } = this.props
    getVietNamMusic()
  }

  _onLoadMore = async () => {
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.musicLists !== prevProps.musicLists) {
      this.setState(this.state)
    }
  }

  _keyExtractor = (item) => item.songCode

  _renderItem = ({ item, index }) => {
    return  (
    <SongItem
      index={index}
      item={item}
      itemWith={ITEM_WITDH}
      itemHeight={ITEM_HEIGHT}
      isFavorite={true}
    />
    )}

  

  render() {
    const { refreshing, items } = this.state
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
          data={items}
          refreshing={refreshing}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          extraData={this.props.musicLists}
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
