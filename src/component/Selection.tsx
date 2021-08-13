import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// 問題文のprops(仮置き)
export interface Answer {
  selection: {
    sentence: string;
    flag: boolean;
  }[];
  setCount: any; // TODO:型付けする
}

export const Selection = (props: Answer) => {
  const { setCount } = props;
  const [selections, setSelections] = useState(props.selection);

  return (
    <SafeAreaView>
      <View style={styles.container}>
          { selections.map((val) => {
            return (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={setCount}>
                  {val.sentence}
                </Text>
              </TouchableOpacity>
            )
            })
          }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    width: '55%',
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
