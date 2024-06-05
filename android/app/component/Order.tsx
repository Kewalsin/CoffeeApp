import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const Order = (props) => {
const {item}=props.route.params;
const [count,setCount]=useState(0);






  return (
    <View style={{flex: 1, width: '100%', backgroundColor: '#F9F9F9'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            //   height: 40,
            width: '100%',
            flexDirection: 'row',
            marginTop: 20,
          }}>
            <TouchableOpacity onPress={()=>props.navigation.goBack('')}>

          <AntDesign
            name="left"
            size={30}
            color="#2F2D2C"
            marginHorizontal={20}
            />
            </TouchableOpacity>
          <View style={{alignItems: 'center', flex: 1, marginRight: 30}}>
            <Text style={{color: '#2F2D2C', fontWeight: '600', fontSize: 18}}>
              Order
            </Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            height: 60,
            width: '85%',
            alignItems: 'center',
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
                fontWeight: '600',
                height: 50,
                width: 150,
                backgroundColor: '#C67C4E',
                textAlign: 'center',
                padding: 10,
                borderRadius: 20,
              }}>
              Deliver
            </Text>
            <Text
              style={{
                color: '#2F2D2C',
                fontSize: 16,
                fontWeight: '600',
                height: 50,
                width: 150,
                textAlign: 'center',
                padding: 10,
                borderRadius: 20,
              }}>
              Pick Up
            </Text>
          </View>
        </View>
        {/*  */}

        <View
          style={{
            height: 170,
            width: '85%',
            marginTop: 20,
            borderBottomWidth: 2,
            borderColor: '#EAEAEA',
          }}>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '600',
            }}>
            Delivery Address
          </Text>
          <Text
            style={{
              color: '#303336',
              fontSize: 14,
              fontWeight: '600',
              marginTop: 15,
              fontStyle: 'italic',
            }}>
            Jl. Kpg Sutoyo
          </Text>
          <Text
            style={{
              color: '#808080',
              fontSize: 15,
              fontWeight: '400',
              marginTop: 10,
            }}>
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>
          {/*  */}
          <View style={{height: 50, width: '85%', marginTop: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 40,
                  width: 130,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  gap: 4,
                  flexDirection: 'row',
                }}>
                <Feather name="edit" size={15} color="#303336" />
                <Text
                  style={{color: '#303336', fontSize: 15, fontWeight: '400'}}>
                  Edit Address
                </Text>
              </View>

              <View
                style={{
                  height: 40,
                  width: 130,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  padding: 10,
                  gap: 4,
                }}>
                <Feather name="file-text" size={15} color="#303336" />

                <Text
                  style={{color: '#303336', fontSize: 15, fontWeight: '400'}}>
                  Add Note
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', marginTop: -70}}>
        <View
          style={{
            height: 60,
            width: '80%',
            marginHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 60, width: 60, borderRadius: 20}}
            source={{
              uri:item.img
            }}
          />
          <View>
            <Text style={{color: '#2F2D2C', fontSize: 20, fontWeight: '600'}}>
{item.name}
            </Text>
            <Text style={{color: '#9B9B9B', fontSize: 15, fontWeight: '400'}}>
{item.title}
            </Text>
          </View>

          <View
            style={{
              height: 35,
              width: 35,
              backgroundColor: '#FFF',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#EAEAEA',
            }}>
            <TouchableOpacity
  onPress={()=> { if(count > 0){
      setCount(count -1)
    }
  }}>
              <AntDesign name="minus" size={20} color="#AAADB0" />
            </TouchableOpacity>
          </View>

          <Text style={{color: '#2F2D2C', fontSize: 15, fontWeight: '600'}}>
            {count}
          </Text>
          <View
            style={{
              height: 35,
              width: 35,
              backgroundColor: '#FFF',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#EAEAEA',
            }}>
            <TouchableOpacity onPress={()=>setCount(count +1)}>
              <AntDesign name="plus" size={20} color="#AAADB0" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 4,
            width: '100%',
            backgroundColor: '#F4F4F4',
            marginTop: 10,
          }}></View>

        <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: '80%',
              backgroundColor: '#FFF',
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#EAEAEA',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <AntDesign
              name="tags"
              size={30}
              color="#C67C4E"
              marginHorizontal={40}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: '#2F2D2C',
                marginRight: 70,
              }}>
              1 Discount is applied
            </Text>
            <AntDesign
              name="right"
              size={20}
              color="#2F2D2C"
              marginHorizontal={40}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: -130,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, width: '80%'}}>
            <Text style={{color: '#2F2D2C', fontSize: 16, fontWeight: '600'}}>
              Payment Summary
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '400'}}>
                Price
              </Text>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '400'}}>
              {item.price}
              </Text>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '400'}}>
                Delivery Fee
              </Text>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '400'}}>
                $ 2.0
                <Text
                  style={{color: '#2F2D2C', fontSize: 14, fontWeight: '600'}}>
                  $ 1.0
                </Text>
              </Text>
            </View>
            <View
              style={{
                height: 2,
                width: '100%',
                backgroundColor: '#EAEAEA',
                marginTop: 8,
                
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '400'}}>
                Total Payment
              </Text>
              <Text style={{color: '#2F2D2C', fontSize: 14, fontWeight: '600'}}>
                $ 5.53
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: 100,
              width: '100%',
              marginTop: 25,
              borderWidth: 1,
              borderColor: '#F1F1F1',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: '80%',
                flexDirection: 'row',
                justifyContent:'space-between',
                marginTop:10
              }}>
                <View style={{flexDirection:'row',height:30,width:"60%",justifyContent:'space-between'}}>

              <Entypo name="popup" size={30} color="#C67C4E" />
              <Text
                style={{
                  height: 30,
                  width: 80,
                  color: '#FFF',
                  fontSize: 12,
                  fontWeight: '400',
                  backgroundColor: '#C67C4E',
                  borderRadius:15,textAlign:'center',padding:5
                }}>
                Cash
              </Text>
              <Text style={{color:'2F2D2C',fontSize:15,fontWeight:'400',textAlign:'center'}}>$ 5.53</Text>
                  </View>
                  <View style={{height:30,width:30,backgroundColor:'#808080',borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                    <AntDesign name="ellipsis1" size={25} color="#FFF"/>
                  </View>
            </View>
            <View style={{height:50,width:"80%",backgroundColor:'#C67C4E',justifyContent:'center',alignItems:'center',borderRadius:10,
          marginTop:10}}>
              <Text style={{color:'#FFF',fontSize:16,fontWeight:'600'}}>Order</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
