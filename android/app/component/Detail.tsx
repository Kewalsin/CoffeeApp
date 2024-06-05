import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Detail = props => {
  const {item} = props.route.params;
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <View style={{flex: 1, width: '100%', backgroundColor: '#F9F9F9'}}>
      <View
        style={{
          height: 40,
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack('')}>
          <AntDesign
            name="left"
            size={30}
            color="#2F2D2C"
            marginHorizontal={20}
          />
        </TouchableOpacity>

        <Text style={{color: '#2F2D2C', fontWeight: '600', fontSize: 18}}>
          Detail
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Heart')}>
          <AntDesign
            name="hearto"
            size={30}
            color="#2F2D2C"
            marginHorizontal={20}
          />
        </TouchableOpacity>
      </View>

      <View style={{height: 250, alignItems: 'center'}}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            height: 250,
            width: '80%',
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{height: 250}}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 20,
              fontWeight: '600',
              marginHorizontal: 42,
              marginTop: 20,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#9B9B9B',
            fontSize: 12,
            fontWeight: '400',
            marginHorizontal: 42,
            marginTop: 8,
          }}>
          {item.title}
        </Text>

        {/*  */}
        <View
          style={{
            height: 40,
            width: '100%',
            justifyContent: 'flex-end',

            flexDirection: 'row',
            marginTop: -20,
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#FFF0F0',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: 20,
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/359d/ac57/5876b2a68ec7a91927b803269b2445b6?Expires=1693785600&Signature=UrkzHEQVgZjpeah8Iaytyy9v19LhkIGaL-7NssDy1c83jZspNSOnkZnzlc9gUNCyzSwNp7LvbfzHn0Md6THEsIc-v9Dqv5jIx4isAUI3B-TiBid86yzxWjXgraycJ7OvLQoT1n-nij25rHpEUH09wtrGBLZGmpigzlBW7prIl5KPa8jDCOHgI8PKeH4UqBLi9oIJLBgQ2W-KFzeKj02XJ1o22wOfXd~4kyMWoyCIlHcfqFZfIo1Ffc6V19Tl5C1y13ZPFjjK7ujk0NJc5mJPlQOqjsBmudO67DoqTvsOco4M5ORqEuEPO2PzpKCK7onkbh3VZXqCTRJe2HRCqvhf3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={{height: 30, width: 30, tintColor: '#C67C4E'}}
            />
          </View>
          {/*  */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#FFF0F0',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: 0,
              marginRight: 40,
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/0c66/e2ce/356ca64067d1347e8c6049524a3f6326?Expires=1693785600&Signature=AkcR9uifk0TqNCepBLA7Nj609H4xocj0C9a7NRjOd2iaNBd9Ecvk6jXzrCTi-LO5upWw1JmlAR5gA-u~U76aJ3KNe32DsmmrOpDuu5figgML82i09o2zO3~fWetb3cNEiWmO-A-6jqhYe6rrQxJijBqJbZLN2TNqptsxUnNDku~elY-6a6JNvyrlR58q~BNAvjWOVYLtwtrP-Lbf-njcsd~dbuMJTT0jacJg1aYguFFWSc~RJnj7ie2dWTRamJ594CF9J5stY229r1UB2iRaRsKoVx5wX01UNKHHHnqy6c-cRITiaCzoycuTn7BNTdzH4PWDriitpgGx7uUZkPpDnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
              style={{height: 20, width: 20, tintColor: '#C67C4E'}}
            />
          </View>
        </View>
        {/*  */}

        <View
          style={{
            height: 60,
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            marginTop: -15,
            marginHorizontal: 40,
            borderColor: '#EAEAEA',
          }}>
          <AntDesign name="star" size={30} color="#FBBE21" marginBottom={20} />
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            4.8{' '}
            <Text style={{color: '#808080', fontSize: 10, fontWeight: '400'}}>
              (230)
            </Text>
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#2F2D2C',
              fontSize: 15,
              fontWeight: '600',
              marginHorizontal: 40,
              marginTop: 15,
            }}>
            Description
          </Text>

          <Text
            style={{
              color: '#9B9B9B',
              fontSize: 15,
              fontWeight: '400',
              marginHorizontal: 40,
              marginTop: 10,
            }}>
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml
            of espresso coffee and 85ml of fresh milk the fo..
            <Text style={{color: '#C67C4E', fontSize: 14, fontWeight: '600'}}>
              Read More
            </Text>{' '}
          </Text>

          <Text
            style={{
              color: '#2F2D2C',
              fontWeight: '600',
              fontSize: 15,
              marginHorizontal: 40,
            }}>
            Size
          </Text>

          <View
            style={{
              marginHorizontal: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => setSelectedSize('S')}
              style={{
                height: 40,
                width: 80,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: selectedSize === 'S' ? '#C67C4E' : '#DEDEDE',

                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#2F2D2C',
                  fontSize: 14,
                  fontWeight: '400',

                  alignItems: 'center',
                  padding: 10,
                  textAlign: 'center',
                }}>
                S
              </Text>
            </TouchableOpacity>

            {/*  */}

            <TouchableOpacity
              onPress={() => setSelectedSize('M')}
              style={{
                width: 80,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: selectedSize === 'M' ? '#C67C4E' : '#DEDEDE',

                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',

                  alignItems: 'center',
                  padding: 10,
                  textAlign: 'center',
                }}>
                M
              </Text>
            </TouchableOpacity>

            {/*  */}
            <TouchableOpacity
              onPress={() => setSelectedSize('L')}
              style={{
                width: 80,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: selectedSize === 'L' ? '#C67C4E' : '#DEDEDE',

                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#2F2D2C',
                  fontSize: 14,
                  fontWeight: '400',

                  alignItems: 'center',
                  padding: 10,
                  textAlign: 'center',
                }}>
                L
              </Text>
            </TouchableOpacity>
          </View>

          {/*  */}
          <View
            style={{
              height: 150,
              width: '100%',
              backgroundColor: '#F9F9F9',
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#F1F1F1',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                marginHorizontal: 20,
                justifyContent: 'center',
              }}>
              <View style={{marginHorizontal: 35}}>
                <Text
                  style={{
                    color: '#9B9B9B',
                    fontSize: 20,
                    fontWeight: '400',
                    marginTop: 5,
                  }}>
                  Price
                </Text>
                <Text
                  style={{
                    color: '#C67C4E',
                    fontSize: 20,
                    fontWeight: '600',
                    // marginTop:5
                  }}>
                  {item.price}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('order', {item: item})}
                style={{
                  height: 60,
                  width: 200,
                  backgroundColor: '#C67C4E',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 35,
                }}>
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: 25,
                    fontWeight: '600',
                    padding: 10,
                  }}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
