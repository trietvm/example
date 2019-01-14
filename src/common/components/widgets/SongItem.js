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
    navigation.navigate(SCREENS.SongDetailPage, { songCode: item.songCode })
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
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 'bold'}}>
            {`${item.songCode}`}
          </Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 10, alignSelf: 'center' }}>
          <Text style={{ fontSize: 17, marginBottom: 5, width: 230}}>
            {`${item.songName.charAt(0).toUpperCase() + item.songName.slice(1)}`}
          </Text>
          <Text
            numberOfLines= {1}
            style={{ marginBottom: 0, width: 230 }}
          >
            {`${item.lyrics}`}
          </Text>
        </View>
        {isFavorite &&
          <Image
            style={{marginLeft: 10, width: itemHeight /2 , height: itemHeight /2, tintColor: '#35A85A', 
            alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}
            source={require('../../../assets/Resources/icon_navigation_bar_already_like.png')}
          />
        }

      </TouchableOpacity>
    )
  }
}

export default withNavigation(SongItem)
