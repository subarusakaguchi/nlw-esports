import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, IGameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<IGameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, name, image_url }: IGameCardProps) {
    navigation.navigate("game", { id, name, image_url })
  }

  useEffect(() => {
    fetch('http://192.168.100.68:8888/games/all')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
