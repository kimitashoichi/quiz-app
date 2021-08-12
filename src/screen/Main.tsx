import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export const Main = () => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <StatusBar style="auto" />
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
});
