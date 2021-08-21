import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export const Result = (props: any) => {
  // TODO: any型なので型付けをする
  const { route } = props;
  const { navigation } = props;
  const correctCount = route.params.props;

  const gotoTitle = () => navigation.navigate('Title');

  return (
    <View style={styles.container}>
      <Text>結果表示</Text>
      <Text>10問中 {correctCount}問正解！</Text>

      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={() => gotoTitle()}>タイトルへ戻る</Text>
      </TouchableOpacity>
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
