import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{"\n\n"}O que você gostaria de ler?</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar"
          placeholderTextColor="#B4B6B9"
        />
        <Ionicons
          name="search"
          size={24}
          color="#B4B6B9"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.bookContainer}>
        <View style={[styles.book, styles.marginLeft34]}>
          <Image
            source={require('./assets/images/images.jpg')}
            style={styles.bookImage}
          />
          <Text style={styles.bookNumber}>1</Text>
        </View>
        <View style={[styles.book, styles.marginLeft31]}>
          <Image
            source={require('./assets/images/download.jpg')}
            style={styles.bookImage}
          />
          <Text style={styles.bookNumber}>2</Text>
        </View>
        <View style={[styles.book, styles.marginLeft27]}>
          {/* Adicione a terceira imagem aqui */}
          <Text style={styles.bookNumber}>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#242A32',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B4B6B9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#3A3F47',
    color: '#242A32',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  searchIcon: {
    // Estilos para o ícone da lupa
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  book: {
    width: 140,
    height: 210,
    backgroundColor: '#242A32',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  bookNumber: {
    color: '#B4B6B9',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Estilos para as margens ao redor das imagens
  marginLeft34: {
    marginLeft: 22,
  },
  marginLeft31: {
    marginLeft: 31,
  },
  marginLeft27: {
    marginLeft: 31,
  },
});

export default HomeScreen;
