import React, { useState ,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useGetQuestions } from '../customHook/GetQuestionHook';
import { LoadingSpinner } from '../component/LoadingSpinner';

export const Menu = (props: any) => {
  const { navigation } = props;
  const { adjustmentData, setLevel } = useGetQuestions();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (adjustmentData.length > 0) {
      setLoad(true);
    } else {
      setLoad(true);
    }
  }, [adjustmentData, load]);
  
  // issue/https://github.com/kimitashoichi/quiz-app/issues/18
  // 問題データの取得前にボタンが押されるといきなり結果表示画面へ遷移してしまう
  function gotoAnswer () {
    setLevel('first');
    navigation.navigate('Answer', {
      props: adjustmentData
    });
  }

  return (
      <View style={styles.container}>
        { load ?
          <View>
            <Text style={styles.title}>Menu</Text>
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
        :
          <View style={styles.spinnerContainer}>
            <LoadingSpinner />
          </View>
        }
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});
