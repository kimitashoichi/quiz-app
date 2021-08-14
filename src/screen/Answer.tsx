import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Question } from "../component/Question";
import { Selection } from "../component/Selection";

export interface Problem {
  selection: {
    sentence: string;
    flag: boolean;
  }[];
  question: string;
}

export const Answer = (props: any) => {
  // TODO: any型なので型付けをする
  const { route } = props;

  const [count, setCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [questions, setQuestions] = useState<Problem[]>(route.params.props);

  // 正答数を判別・カウント、次の問題へ進むためのカウントを追加
  const checkAnswerAndAddCount = (flag: boolean) => {
    setCount(count+1);
    if (flag) {
      setCorrectCount(correctCount+1)
    }
    console.log(correctCount);
  }

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.countText}>{count}/10</Text>
        </View>

        <Question sentence={questions[count].question}/>

        <View style={styles.selectionBox}>
          <View style={styles.childBox}>
            <Selection
              selection={questions[count].selection}
              checkAnswer={checkAnswerAndAddCount}/>
          </View>
        </View>

        <StatusBar style="auto" />
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
  }
});
