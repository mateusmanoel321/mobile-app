import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

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
            source={require("./assets/images/images.jpg")}
            style={styles.bookImage}
          />
          <Text style={styles.bookNumber}>1</Text>
        </View>
        <View style={[styles.book, styles.marginLeft31]}>
          <Image
            source={require("./assets/images/download.jpg")}
            style={styles.bookImage}
          />
          <Text style={styles.bookNumber}>2</Text>
        </View>
        <View style={[styles.book, styles.marginLeft27]}>
          {/* Adicione a terceira imagem aqui */};
          <Text style={styles.bookNumber}>3</Text>
        </View>
      </View>
      <View>
        <Text>Populares</Text>
        <Text>Em breve</Text>
        <Text>Premiados</Text>
        <Text>Brasileiros</Text>
        <View style={styles.bookContainer}>
          <View style={[styles.book, styles.marginLeft34]}>
            <Image
              source={require("./assets/images/images.jpg")}
              style={styles.bookImage}
            />
            <Text style={styles.bookNumber}>1</Text>
          </View>
          <View style={[styles.book, styles.marginLeft31]}>
            <Image
              source={require("./assets/images/download.jpg")}
              style={styles.bookImage}
            />
            <Text style={styles.bookNumber}>2</Text>
          </View>
          <View style={[styles.book, styles.marginLeft27]}>
            <Text style={styles.bookNumber}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
