import React, { PureComponent } from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { SCREENS } from '../../screens'

class SongItem extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      count: null,
    }
  }

  onPress = () => {
    const { navigation, item } = this.props
    navigation.navigate(SCREENS.SongDetailPage, { song: item })
  }

  componentDidMount() {
  }

  render() {
    const {
      item,
      itemWidth,
      itemHeight,
      isFavorite
    } = this.props

    return (
      <TouchableOpacity
        style={{
          width: itemWidth,
          height: itemHeight,
          flexDirection: 'row',
          margin: 5,
          backgroundColor: '#FFFFFF'
        }}
        onPress={this.onPress}
      >
        <View
          style={{ height: itemHeight, width: itemHeight, 
            backgroundColor: '#35A85A', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16}}>
            {`${item.song-code}`}
          </Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>
            {`${item.song-name}`}
          </Text>
          <Text style={{ marginBottom: 0, textAlign: 'center', width: itemWidth/3 }}>
            {`${item.lyrics}`}
          </Text>
        </View>
        {isFavorite &&
          <Image
            style={{marginRight: 5, width: itemHeight * 2 /3, height: itemHeight * 2 / 3, backgroundColor: '#35A85A'}}
            source={require('../../../assets/Resources/icon_tabbar_like_normal.png')}
          />
        }

      </TouchableOpacity>
    )
  }
}

export default withNavigation(SongItem)
