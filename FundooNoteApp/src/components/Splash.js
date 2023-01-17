import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../utility/Theme'

const Splash = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
      <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          
        />
        <Text style={styles.funtext}>Fundoo Notes!</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
//backgroundColor:COLOR.THIRD_COLOR,
borderWidth:20,
borderColor:COLOR.THIRD_COLOR,
flex:1,
alignItems:'center',
    justifyContent:'space-around',
  },
  logoContainer:{
    alignItems:'center',
  },

    logo: {
      
        height:120,
        width:120,
      },
      funtext:{
        fontSize:22,
        fontWeight:'bold',
        paddingTop:30,
        color:COLOR.BACKGROUND_COLOR,
      },
})
export default Splash