
import React from 'react'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  createBottomTabNavigator
} from 'react-navigation'
import { View, Animated, Easing, Dimensions, Image, StyleSheet } from 'react-native'
import { Icon, Badge } from 'react-native-elements'
import LoadingPage from '../screens/LoadingPage'

import VietNamMusicPage from '../screens/VietNamMusicPage'
import ForeignMusicPage from '../screens/ForeignMusicPage'
import FavoriteMusicPage from '../screens/FavoriteMusicPage'
import SingerListPage from '../screens/SingerListPage'
import InformationPage from '../screens/InformationPage'
import SingerSongListPage from '../screens/SingerSongListPage'
import SongDetailPage from '../screens/SongDetailPage'

const { width, height } = Dimensions.get('window')

export const SCREENS = {
  VietNamMusicPage: 'VietNamMusicPage',
  ForeignMusicPage: 'ForeignMusicPage',
  FavoriteMusicPage: 'FavoriteMusicPage',
  SingerListPage: 'SingerListPage',
  InformationPage: 'InformationPage',
  SingerSongListPage: 'SingerSongListPage',
  SongDetailPage: 'SongDetailPage',
  Loading: 'Loading',
  TabStack: 'TabStack',
  HomeStack: 'HomeStack',
  ForeignStack: 'ForeignStack',
  FavoriteStack: 'FavoriteStack',
  SingerStack: 'SingerStack',
  InformationStack: 'InformationStack'
}

const defaultStackConfig = {
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  })
}

const defaultTabConfig = {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#35A85A',
    labelStyle: {
      fontSize: 14,
      marginBottom: 2,
      fontWeight: '300',
      lineHeight: 19
    },
    style: {
      // backgroundColor: '#FFFFFF',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowColor: '#000',
      shadowRadius: 2,
      height: 70
    }
  },
  initialLayout: {
    width,
    height
  },
  tabBarComponent: ({ jumpToIndex, ...props, navigation }) => (
    <TabBarBottom
      {...props}
      jumpToIndex={index => {
        jumpToIndex(index)
      }}
    />
  )
}

export default ({ store = {} }) => {

  let HomeStack = StackNavigator({
    [SCREENS.VietNamMusicPage]: {
      screen: VietNamMusicPage
    }
  }, defaultStackConfig)

  let ForeignStack = StackNavigator({
    [SCREENS.ForeignMusicPage]: {
      screen: ForeignMusicPage
    }
  }, defaultStackConfig)

  let FavoriteStack = StackNavigator({
    [SCREENS.FavoriteMusicPage]: {
      screen: FavoriteMusicPage
    }
  }, defaultStackConfig)

  let SingerStack = StackNavigator({
    [SCREENS.SingerListPage]: {
      screen: SingerListPage
    }
  }, defaultStackConfig)

  let InformationStack = StackNavigator({
    [SCREENS.InformationPage]: {
      screen: InformationPage
    }
  }, defaultStackConfig)

  const TabNavigation = TabNavigator(
    {
      [SCREENS.HomeStack]: {
        screen: HomeStack,
        navigationOptions: {
          tabBarLabel: 'Nhạc Việt',
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              style={[styles.imageIcon]}
              source={focused ? require('../../src/assets/Resources/icon_tabbar_vietnam_selected.png')
                : require('../../src/assets/Resources/icon_tabbar_vietnam_normal.png')}
            />
          )
        }
      },
      
      [SCREENS.ForeignStack]: {
        screen: ForeignStack,
        navigationOptions: {
          tabBarLabel: 'Nhạc ngoại',
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              style={[styles.imageIcon]}
              source={focused ? require('../../src/assets/Resources/icon_tabbar_internatioal_selected.png')
                : require('../../src/assets/Resources/icon_tabbar_internatioal_normal.png')}
            />
          )
        }
      },

      [SCREENS.FavoriteStack]: {
        screen: FavoriteStack,
        navigationOptions: {
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              style={[styles.imageIcon]}
              source={focused ? require('../../src/assets/Resources/icon_tabbar_like_selected.png')
                : require('../../src/assets/Resources/icon_tabbar_like_normal.png')}
            />
          )
        }
      },

      [SCREENS.SingerStack]: {
        screen: SingerStack,
        navigationOptions: {
          tabBarLabel: 'Ca sĩ',
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              style={[styles.imageSinger]}
              source={focused ? require('../../src/assets/Resources/icon_tabbar_singer_selected.png')
                : require('../../src/assets/Resources/icon_tabbar_singer_normal.png')}
            />
          )
        }
      },
      [SCREENS.InformationStack]: {
        screen: InformationStack,
        navigationOptions: {
          tabBarLabel: 'Thông tin',
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              style={[styles.imageIcon]}
              source={focused ? require('../../src/assets/Resources/icon_tabbar_info_selected.png')
                : require('../../src/assets/Resources/icon_tabbar_info_normal.png')}
            />
          )
        }
      }
    }, defaultTabConfig)
  const AppNavigator = StackNavigator({
    [SCREENS.Loading]: {
      screen: LoadingPage
    },
    [SCREENS.TabStack]: {
      screen: TabNavigation
    },
    [SCREENS.SingerSongListPage]: {
      screen: SingerSongListPage
    },
    [SCREENS.SongDetailPage]: {
      screen: SongDetailPage
    }
  }, defaultStackConfig)

  return <AppNavigator />
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#E4574C'
  },
  imageIcon: {
    width: 40,
    height: 40
  },
  imageSinger: {
    width: 20,
    height: 40
  }
})
