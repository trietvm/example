import React, { PureComponent } from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { SCREENS } from '../../screens'

class SingerItem extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      count: null,
    }
  }

  onPress = () => {
    const { navigation, item } = this.props
    navigation.navigate(SCREENS.SingerSongListPage, { singerId: item.singerId, singerName: item.singerName })
  }

  componentDidMount() {
  }

  render() {
    const {
      item,
      itemWidth,
      itemHeight
    } = this.props

    const url = '../../../assets/Resources/Singers/' + item.singerAvatar
    const temp = 'http://hashtaglegend.com/storage/app/media/will-i-am-dec-cover-story-6.jpg'

    return (
      <TouchableOpacity
        style={{
          width: itemWidth,
          height: itemHeight,
          flexDirection: 'column',
          padding: 3
        }}
        onPress={this.onPress}
      >
        <Image
          style={{ height: 130, width: '100%' }}
          source={{uri: temp}}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#35A85A', padding: 5 }}>
          <Text style={{ marginBottom: 0, textAlign: 'center', color: '#ffffff' }}>
            {`${item.singerName}`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(SingerItem)
