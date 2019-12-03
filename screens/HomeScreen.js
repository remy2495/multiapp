import * as WebBrowser from 'expo-web-browser';
import React from 'react';


import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen(props) {
 console.log(props)
 
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/multi.png')} />
      <ScrollView
        style={styles.container1}
        contentContainerStyle={styles.contentContainer}>
        

        <View style={styles.getStartedContainer}>
         

     
    <TouchableOpacity
        onPress={() => props.navigation.navigate('TeachScreen')}
           style={styles.Button}>
           <Image
             style={{
               width: 55,
               height:55,

             }}
             source={require('../assets/images/plan.png')}
           />

        </TouchableOpacity>
    <TouchableOpacity
        onPress ={() => props.navigation.navigate('NotesScreen')}
           style={styles.Button}>
           <Image
             style={{
               width: 45,
               height:45,

             }}
             source={require('../assets/images/notes.jpg')}
           />

        </TouchableOpacity>
    <TouchableOpacity
        onPress ={() => props.navigation.navigate('TutorialScreen')}
           style={styles.Button}>
           <Image
             style={{
               width: 45,
               height:45,

             }}
             source={require('../assets/images/tutorial.jpg')}
           />

        </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
    <TouchableOpacity
        onPress ={() => props.navigation.navigate('ExamScreen')}
           style={styles.Button}>
           <Image
             style={{
               width: 45,
               height:45,

             }}
             source={require('../assets/images/doc.png')}
           />

        </TouchableOpacity>
    <TouchableOpacity
        onPress ={() => props.navigation.navigate('QuizScreen')}
           style={styles.Button}>
           <Image
             style={{
               width: 45,
               height:45,

             }}
             source={require('../assets/images/Quiz.jpg')}
           />

        </TouchableOpacity>

         
        </View>

        
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions =( {
  header: null,
  

});

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop :40,
    flex: 1,
    backgroundColor: '#fff',
   
  },
  container1: {
    paddingTop :40,
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor: '#050505',
    alignContent: 'center',
  },
  Button :{
    backgroundColor: '#04ca93',

    justifyContent:'center',
    alignItems: 'center',
   
    height:100,
    width:100,
    borderRadius:35,
  

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    flex :1,
    
    paddingTop:20 ,
    
    
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    
    flexDirection : 'row',
    justifyContent : 'space-between',
    height:150,
  },
  nextContainer: {
    height : 125,
    flexDirection : 'row',
    justifyContent:'space-evenly',
   
    

  
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
