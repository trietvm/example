import React, { Component, PureComponent } from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'react-native-elements'

import SingerItem from '../../common/components/widgets/SingerItem'

const { width } = Dimensions.get('window')
const ITEM_WITDH = (width) / 3
const ITEM_HEIGHT = 190

class PageSinger extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showFilter: false,
      refreshing: false
    }
  }

  componentWillMount() {
    const { getSinger } = this.props
    this.setState({ refreshing: true }, async () => {
      await getSinger()
      this.setState({ refreshing: false })
    })
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({ item }) => {
    return (
      <SingerItem
        item={item}
        itemWidth={ITEM_WITDH}
        itemHeight={ITEM_HEIGHT}
      />
    )
  }

  _onRefresh = () => {
    const { getSinger } = this.props

    this.setState({ refreshing: true }, async () => {
      await getSinger()
      this.setState({ refreshing: false })
    })
  }

  _onLoadMore = () => {

  }

  render() {
    const { refreshing } = this.state
    const { singerList } = this.props
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          flex: 1,
          paddingBottom: 35
        }}>

        <FlatList
          data={singerList}
          numColumns={3}
          refreshing={refreshing}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onRefresh={this._onRefresh}
          onLoadMore={this._onLoadMore}
          onEndReachedThreshold={1}
        />

      </View>)
  }
}

export default withNavigation(PageSinger)