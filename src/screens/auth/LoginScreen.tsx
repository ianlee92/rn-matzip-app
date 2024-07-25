import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import InputField from '../../components/InputField';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력하세요'}
          inputMode="email"
          value={email}
          onChangeText={handleChangeEmail}
        />
        <InputField
          placeholder="비밀번호"
          error={'비밀번호를 입력하세요'}
          secureTextEntry
          value={password}
          onChangeText={handleChangePassword}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
