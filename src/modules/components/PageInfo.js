import React, { Component } from 'react'
import {
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import { Icon } from 'react-native-elements'
import ImageSlider from 'react-native-image-slider'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 100

export default class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentWillMount() {
  }
  

  render() {
    const { refreshing } = this.state
    const { informationList } = this.props
    const temp = 'http://hashtaglegend.com/storage/app/media/will-i-am-dec-cover-story-6.jpg'

    return (
      <View
        style={{
          width: '100%',
        //   backgroundColor: '#ffffff',
          flex: 1,
          paddingBottom: 5
        }}
      >
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={informationList}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={{height: 200, width: 200}}>
              <Image source={{ uri: temp }} style={{width: '100%', height: '100%'}} />
              <View style={{width: '100%', height: 50, opacity: 0.5}}>
                {/* <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>{item.singerName.toUpperCase()}</Text> */}
              </View>
            </View>)}
        />
      </View>
      )
  }
}
