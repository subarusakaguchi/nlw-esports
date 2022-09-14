import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { GAMES } from '../../utils/games';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que quer jogar..."
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />


    </View>
  );
}