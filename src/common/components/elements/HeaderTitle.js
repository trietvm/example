
import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
// import ProgressBar from '../widgets/ProgressBar'

export default ({
  navigation,
  onBack = null,
  title = 'MY KARA',
  iconName = 'chevron-left',
  iconType = 'font-awesome',
  onLike = null,
  focused = false
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {onBack && <Icon
          name={iconName}
          size={26}
          type={iconType}
          color='#ffffff'
          containerStyle={styles.icon}
          onPress={onBack} />}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {
            title.length > 25
            ? title.slice(0, 25) + '...'
            : title
          }
        </Text>
      </View>
      {onLike && (
        <TouchableOpacity onPress={onLike}>
          <Image
            style={[styles.iconRight]}
            source={focused ? require('../../../assets/Resources/icon_navigation_bar_already_like.png')
              : require('../../../assets/Resources/icon_navigation_bar_not_like.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35A85A'
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    zIndex: 99
  },
  titleContainer: {
    flex: 1,
    height: 40,
    marginLeft: -26,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 10
  },
  iconRight: {
    marginRight: 10,
    zIndex: 99,
    width: 25,
    height: 25
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF'
  }
})
