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
    navigation.navigate(SCREENS.SingerSongListPage, { singerId: item.singer-id })
  }

  componentDidMount() {
  }

  render() {
    const {
      item,
      itemWidth,
      itemHeight
    } = this.props

    const url = `../../../assets/Resources/Singers/${item.singer-avatar}`

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
          source={{uri: url}}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginBottom: 0, textAlign: 'center' }}>
            {`${item.singer-name}`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(SingerItem)
