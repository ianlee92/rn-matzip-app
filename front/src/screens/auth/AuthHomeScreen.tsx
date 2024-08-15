import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View, SafeAreaView, Image, Dimensions} from 'react-native';

import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {authNavigations} from '@/constants';
import CustomButton from '@/components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 2,
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
