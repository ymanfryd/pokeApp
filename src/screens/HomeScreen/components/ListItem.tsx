import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getPokemonImage} from '../../../api/api';

interface ListItemProps {
  name: string;
  url: string;
}

const ListItem: React.FC<ListItemProps> = ({name, url}) => {
  const pokemonId = url.split('/')[6];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{uri: imageUrl}} />
      <Text style={styles.itemName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffcb05',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: '100%',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ListItem;
