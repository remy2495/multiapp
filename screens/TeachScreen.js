import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';
import plan from '../assets/documents/TP BENC3443 2019-2020.pdf'


export default function TeachScreen() {
  
  return (
    <ScrollView style={styles.container}>
    <View><Text>lalalala</Text></View>
      
    </ScrollView>
  );
}

TeachScreen.navigationOptions = {
  title: 'Teaching Plan',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
