import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useGetQuestions } from '../customHook/GetQuestionHook';

import { mockData } from '../mock/questions-mock';

export const Menu = (props: any) => {
  const { navigation } = props;
  const { questions, selections } = useGetQuestions();

  useEffect(() => {
    console.log(questions, selections);
  }, [questions, selections]);
  
  function gotoAnswer () {
    navigation.navigate('Answer', {
      props: mockData
    });
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => gotoAnswer()} >
            <Text style={styles.buttonText}>初級</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => gotoAnswer()}>
            <Text style={styles.buttonText}>中級</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => gotoAnswer()}>
            <Text style={styles.buttonText}>上級</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(29, 161, 242)',
    width: 150,
    height: 80,
    marginBottom: 30,
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});
