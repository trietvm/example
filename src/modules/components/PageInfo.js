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
import Carousel, { Pagination } from 'react-native-snap-carousel'

const { width } = Dimensions.get('window')
const ITEM_WITDH = width
const ITEM_HEIGHT = 100
const temp = 'http://hashtaglegend.com/storage/app/media/will-i-am-dec-cover-story-6.jpg'

export default class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      activeSlide: 0
    }
  }

  componentWillMount() {
    const { getInfo } = this.props
    this.setState({ refreshing: true }, async () => {
      await getInfo()
      this.setState({ refreshing: false })
    })
  }

  get pagination () {
    const { activeSlide } = this.state
    const { informationList } = this.props
    return (
        <Pagination
        containerStyle={{
          flexDirection : 'row',
          height : 50,
          paddingTop : 0,
          paddingBottom : 0
        }}
        renderDots={ activeIndex => (
          informationList.map((ioniconName, i) => (
            <View
              style={{ flex : 1, alignItems : 'center' }}
              key={ i }
            >
              <Icon
                name='circle'
                type='font-awesome'
                color={ i === activeIndex ? 'black' : 'black' }
              />
            </View>
          ))
        )}
        activeDotIndex={ activeSlide }
        dotsLength={ informationList.length }
        tappableDots={ !!this.carouselRef }
        carouselRef={ this.carouselRef }
      />
    );
}

  _renderItem ({item, index}) {
      return (
        <View
        style={{
          height: ITEM_WITDH - 80,
          overflow: 'visible'
        }}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{uri: temp}}
        />
        <View style={{ marginTop: -39,justifyContent: 'center', alignItems: 'center', backgroundColor:'#35A85A', padding: 5, opacity: 0.5 }}>
          <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}>
            {`${item.singerName.toUpperCase()}`}
          </Text>
        </View>
      </View>
      );
  }

  render() {
    const { refreshing, activeSlide } = this.state
    const { informationList } = this.props

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          paddingBottom: 5
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
          }}
        >
          <Text style={{ marginLeft: 15, color: '#35A85A', fontSize: 22 }}>Nhóm ABC</Text>
          <Text style={{ marginRight: 15, color: 'black', fontSize: 22, fontWeight: 'bold' }}>IOS21137</Text>
        </View>
        <View style={{marginTop: 50, alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
          <Carousel
            ref={(c) => { this.carouselRef = c; }}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            data={informationList}
            renderItem={this._renderItem}
            sliderWidth={ITEM_WITDH - 60}
            itemWidth={ITEM_WITDH - 60}
          />
          {/* <Pagination
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            renderDots={ activeIndex => (
              informationList.map((ioniconName, i) => (
                <View
                  style={{ flex : 1, alignItems : 'center' }}
                  key={ i }
                >
                  <Icon
                    name='circle'
                    type='font-awesome'
                    color={ i === activeIndex ? 'black' : 'black' }
                  />
                </View>
              ))
            )}
            activeDotIndex={ activeSlide }
            dotsLength={ informationList.length }
            tappableDots={ !!this.carouselRef }
            carouselRef={ this.carouselRef }
          /> */}
        </View>
      </View>
      )
  }
}
