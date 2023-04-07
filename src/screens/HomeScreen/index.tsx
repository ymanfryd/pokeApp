import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {getPokemonList} from '../../api/api';
import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemName: {
    color: '#333',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default function HomeScreen() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    loadPokemonList();
  }, []);

  async function loadPokemonList() {
    const response = await getPokemonList(20, offset);
    setPokemonList(prevList => [...prevList, ...response.results]);
    setNextUrl(response.next);
    setOffset(prevOffset => prevOffset + 20);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => <ListItem name={item.name} url={item.url} />}
        keyExtractor={item => item.name}
        onEndReachedThreshold={0.5}
        onEndReached={loadPokemonList}
        ListFooterComponent={
          loading ? null : (
            <Text style={{textAlign: 'center', marginVertical: 20}}>
              No more Pokemon to show!
            </Text>
          )
        }
      />
    </View>
  );
}
