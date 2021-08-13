import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

interface Question {
  sentence: string;
}

export const Question = (question: Question) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.sentence}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    overflow: 'scroll',
    width: 300,
  }
});
