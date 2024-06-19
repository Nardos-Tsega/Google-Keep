import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
