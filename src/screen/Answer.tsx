import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LoadingSpinner } from '../component/LoadingSpinner';
import { Question } from "../component/Question";
import { Selection } from "../component/Selection";
import { Problem } from '../interface/models';

// TOOD: propsに型付けをする
export const Answer = (props: any) => {
  // TODO: any型なので型付けをする
  const { route } = props;
  const { navigation } = props;

  const [count, setCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [questions, setQuestions] = useState<Problem[]>(route.params.props);

  useEffect(() => {
    // ユーザーが回答が終了していた場合スピナーを表示させて1秒後に結果画面へ遷移させる
    if (questions.length <= count) {
      setTimeout(() => {
        gotoAnswer();
      }, 1000);
    }
  }, [count]);

  // 正答数を判別・カウント、次の問題へ進むためのカウントを追加
  // 問題を配列で持たせて、ユーザーが回答するたびにインデックス番号を１つづ増やして、次の問題を表示させる仕組み
  const checkAnswerAndAddCount = (flag: boolean) => {
    // 正答数のカウント
    if (flag) {
      setCorrectCount(correctCount+1)
    };
    setCount(count+1);
  }

  const gotoAnswer = () => {
    navigation.navigate('Result', {
      props: correctCount,
    });
  }
  
  return (
      <View style={styles.container}>
        {questions.length - 1 >= count ? (
          <View style={styles.container}>
            <View>
              <Text style={styles.countText}>{count + 1}/10</Text>
            </View>

            <Question questionText={questions[count].question}/>

            <View style={styles.selectionBox}>
              <View style={styles.childBox}>
                <Selection
                  selections={questions[count].selections}
                  checkAnswer={checkAnswerAndAddCount}/>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        ) : (
          <View style={styles.spinnerContainer}>
            <LoadingSpinner />
          </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  selectionBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    width: '90%',
  },
  childBox: {
    position: 'relative'
  },
  spinnerTextStyle: {
    color: 'black',
    fontSize: 15,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
