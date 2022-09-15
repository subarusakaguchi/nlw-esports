import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
  TouchableOpacity,
  Text
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles';
import { THEME } from '../../theme';

export interface IGameCardProps {
  id: string
  name: string
  _count: {
    Ads: number
  }
  image_url: string
}

interface GameCardProps extends TouchableOpacityProps {
  data: IGameCardProps
}

export function GameCard({ data, ...rest }: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.image_url}}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.name}
          </Text>

          <Text style={styles.ads}>
            {data._count.Ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
