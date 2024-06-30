import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={() => console.log('클릭됨!')} />
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    // margin: '10%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default App;
