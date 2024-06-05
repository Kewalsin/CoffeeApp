import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
const WellcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../src/images/img1.png')}
        style={{
          flex: 1,
          height: 750,
          width: '336px',
          // marginTop: -154,
          // marginRight: -46,
          // marginLeft: -47,
          // marginBottom: 264,
        }}></ImageBackground>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.0) 0%', 'rgba(0, 0, 0, 1) 100%']}>
          <View style={styles.viewStyle}>
            {/* <ImageBackground style={styles.viewStyle}
                 source={require('../src/images/Rectangle1.png')}
> */}

            <Text style={styles.coffeText}>
              Coffee so good, your taste buds will love it.
            </Text>
            <Text style={styles.textStyl}>
              The best grain, the finest roast, the powerful flavor.
            </Text>
            <View
              style={{
                height: 50,
                width: '80%',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: '#FFF',
                alignItems: 'center',
                marginHorizontal: 30,
                borderRadius: 10,
              }}>
              <EvilIcons name="sc-google-plus" size={50} color="blue" />
              <TouchableOpacity onPress={()=>navigation.navigate("/")}>

              <Text
                style={{
                  color: 'rgba(0, 0, 0, 0.54)',
                  fontSize: 20,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  textAlign:'center'
                }}>
                Continue with Google
              </Text>
              </TouchableOpacity>

            </View>
            {/* </ImageBackground> */}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  textStyl: {
    color: '#A9A9A9',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Sora',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    // marginRight: 30,
    marginHorizontal:25,
    // marginLeft: 31,
    marginBottom: 17,
    letterSpacing: 0.14,
    paddingHorizontal: 70,
  },
  coffeText: {
    height: 130,
    width: '100%',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'sora',
    fontSize: 34,
    fontStyle: 'normal',
    flexShrink: 0,
    paddingHorizontal:50,

    fontWeight: '600',
    marginTop: 30,
    // marginLeft: 24,
    // marginRight: 15,
    marginHorizontal:25,
    marginBottom: 17,
    letterSpacing: 0.34,
  },

  viewStyle: {
    height: 300,
    width: '100%',
    justifyContent:'center',alignItems:'center',marginBottom:20,
    // borderWidth:1,
    // borderColor:'white'
  },
});
