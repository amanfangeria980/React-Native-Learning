/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView,  View, Text, StyleSheet, useColorScheme} from 'react-native';

const AppPro:JSX.Element= () =>{
    const isDarkMode = useColorScheme() === "dark";
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello Aman! 
                </Text>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    You're system is in {useColorScheme()} mode.
                </Text>
            </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText:{
        color: '#FFFFFF',
        fontSize: 24,
    },
    darkText: {
        color: '#000000',
        fontSize: 24
    }
});

export default AppPro;