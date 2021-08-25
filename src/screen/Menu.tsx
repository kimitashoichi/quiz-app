import React, { useState ,useEffect } from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';

import { useGetQuestions } from '../customHook/GetQuestionHook';

export const Menu = (props: any) => {
  const { navigation } = props;
  const { adjustmentData, setLevel } = useGetQuestions();

  // 問題データ取得完了フラグ
  const [load, setLoad] = useState(false);

  // 問題データの取得先コレクション指定
  const [correction, setCorrection] = useState('');

  useEffect(() => {
    if (adjustmentData.length > 0) {
      setLoad(true);
    }
  }, [adjustmentData]);

  // loadが変更されたらgotoAnswerを再度呼び出す
  useEffect(() => {
    gotoAnswer(correction);
  }, [load])
  
  // issue/https://github.com/kimitashoichi/quiz-app/issues/18
  // 問題データの取得前にボタンが押されるといきなり結果表示画面へ遷移してしまう
  function gotoAnswer (level: string) {
    setCorrection(level)
    if (load) {
      navigation.navigate('Answer', {
        props: adjustmentData
      });
    } else {
      setLevel(level);
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Menu</Text>
          <Button
            buttonStyle={styles.button}
            title="初級"
            raised
            titleStyle={styles.buttonText}
            onPress={() => gotoAnswer('first')}/>
          <Button
            buttonStyle={styles.button}
            title="中級"
            raised
            titleStyle={styles.buttonText}
            onPress={() => gotoAnswer('first')}/>
          <Button
            buttonStyle={styles.button}
            title="上級"
            raised
            titleStyle={styles.buttonText}
            onPress={() => gotoAnswer('first')}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(29, 161, 242)',
    width: 150,
    height: 80,
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
  }
});
