import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export const Title = (props: any) => {
  const { navigation } = props;

  const goToMune = () => {
    navigation.navigate('Menu');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>タイトルがここに入ります</Text>
          <TouchableOpacity style={styles.button} onPress={goToMune}>
            <Text style={styles.buttonText}>スタート</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    textAlign: 'center',
    flex: 1,
    height: 50,
    marginTop: 200,
  },
  title: {
    fontSize: 50,
  },
  button: {
    margin: 'auto',
    marginTop: 70,
    backgroundColor: 'rgb(29, 161, 242)',
    width: 150,
    height: 100,
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 35,
  },
});
