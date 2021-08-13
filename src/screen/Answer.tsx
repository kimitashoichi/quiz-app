import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
  const { route } = props;

  return (
      <View style={styles.container}>
        <Text>Main Screen</Text>

          <Question sentence={route.params.question}/>

          <View style={styles.selectionBox}>
            {route.params.selection.map((val: any) => {
              return (
                <View style={styles.childBox}>
                  <Selection
                    sentence={val.sentence}
                    flag={val.flag} />
                </View>
              )
            })}
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
  selectionBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    width: '90%',
  },
  childBox: {
    position: 'relative'
  }
});
