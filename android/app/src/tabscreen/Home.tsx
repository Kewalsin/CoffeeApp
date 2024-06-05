import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



// C67C4E
// F3F3F3

const Home = props => {
  const [data, setData] = useState([]);
  const [isLoader,setLoader]= useState(false)
  // const [colorChange,setColorChange]=useState("Cappucino")
  const [activeTab,setActiveTab] = useState({
    title:'Cappuccino',
    id:1
  })
const [tabArray,setTabArray] = useState([{
  title:'Cappuccino',
  id:1
},{
  title:'Machiato',
  id:2
},
{
  title:'Latte',
  id:3
},
{
  title:'Americano',
  id:4
}])

useEffect(()=>{
  coffeApi(activeTab)
},[])
  


  const coffeApi = async (item) => {
    setActiveTab(item);
    setLoader(true)

    try {
      const url = `http://192.168.0.147:3000/${item?.title}`;
      const res = await fetch(url);
      const result = await res.json();
      setLoader(false)

      // console.log(result,"resultresultresultresult")
      setData(result);


    
    } 
    catch (error) {
      setLoader(false)

      console.log(error);
    }
  };
 

  // const MachiatoCoffeApi= async()=>{
  //   try {
  //     const url="http://192.168.204.146:3000/Machiato";
  //     const res=await fetch(url);
  //     const result=await res.json();
  //     const item=await result  ;
  //     setData(item)
  //     setColorChange("Machiato");

      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  // const LatteCoffeApi=async()=>{
  //   try {
  //   const url="http://192.168.204.146:3000/Latte";
  //   const res=await fetch(url);
  //   const result=await res.json();
  // const item=await result;
  // setData(item);
  // setColorChange("Latte");


      
  //   } catch (error) {
  //     console.log(error)
      
  //   }

  // };
  // const AmericanoCoffeApi=async()=>{
  //   try {
  //     const url="http://192.168.204.146:3000/Americano";
  //     const res=await fetch(url);
  //     const result=await res.json();
  //     const item=await result;
  //     setData(item);
  //     setColorChange("Americano");

      
  //   } catch (error) {
  //     console.log(error)
      
  //   }
  // }


console.log(data,"datadatadatadatadatadatadata")





  return (
    <ScrollView 
    style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <LinearGradient
        colors={['rgba(19, 19, 19, 1) 0%', 'rgba(49, 49, 49, 1) 100%']}
        style={{height: 250, width: '100%'}}>
        <View style={{height: 250, width: '100%', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <View style={{marginBottom: 60}}>
              <Text style={{color: '#FFFFFF'}}>Location</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#DDD'}}>Bilzen,Tanjungbalai </Text>

                <TouchableOpacity>
                  <AntDesign
                    name="down"
                    size={15}
                    color="#FFFFFF"
                    marginHorizontal={5}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={{height: 44, width: 44, borderRadius: 10}}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/aa11/8dea/9cd4db42075547f8170c49b4da693767?Expires=1693785600&Signature=mXbVEbxFVVyysUYOg8k8D-fLZOk-EmeWEznPLCbcEklxn4gJyVaqmhPT5t22EuK1AxRZIIHru-LuYMsgnbCOmrsajAoPwU42TEdJX1JVl-C2j-oGE4RqoW9BxiYN0blpVkvw1YFEneFQWG55JD-C8~goViCy6bzUUGhLVJ3ow4p1tfMrn2wlhezpp1SxuHKpn8uiIw0pGte3uCQgcrOwbnyXAKYspQFve-ut1Rlp7SyCzgNiRE2yhtvRppM9gujCAoDfFGNog6rR6DnNqDlN1feujrPqQ8h4F~nZ2xYZgIu3sImM47AOgKCn8OnShHzt7JVZYwc4QaJP3tM16ghqzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}
            />
          </View>
          <View
            style={{
              height: 55,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 30,
              backgroundColor: '#313131',
              marginHorizontal: 20,
              borderRadius: 20,
              marginBottom: 30,
            }}>
            {/* <View style={{height:50,width:30,marginRight:50,backgroundColor:'#313131'}}> */}
            <EvilIcons name="search" size={40} color="#FFFFFF" ma />

            {/* </View> */}
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor={'#989898'}
              
              
              style={{
                height: 50,
                width: '100%',
                // backgroundColor: '#313131',
                // paddingLeft: 40,
                borderRadius: 10,
                color:'white',

              }}
            />
            <View
              style={{
                height: 40,
                width: 40,
                marginLeft: -60,
                backgroundColor: '#C67C4E',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <EvilIcons
                name="chart"
                size={40}
                color="#FFFFFF"
                // marginLeft={-60}
                backgroundColor="C67C4E"
                alignItems="center"
                justifyContent="center"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            height: 145,
            width: 300,
            marginHorizontal: 80,
            // marginTop: -40,
            alignItems: 'center',
            borderRadius: 10,
            // overflow: 'hidden',
            position:'absolute'
          }}>
          <ImageBackground
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/930e/7617/51b0ae1b9d482060e7fba014a59a01c9?Expires=1693785600&Signature=Kzy8-yuGL-uNFr3gLmT9YMroiPTNC1OdWxss52YEC89AZh9fS9SBY8i-DpBofZZKCtwDI2Y~pVtaz3NYOMYriI-Rcn3Z1S1siy75sqMx2yw8WFqRckWcv4O2N4TG2aqBB-0tW9cyWxnDUG7DzipZtKsZAejifUeC~gKDysEfv2DUcA4iG7Ye55bbZ63z0BbRWEMEc3SGeqcnbzfRIABfgfHduhtIGzyvGrLZAkFkjM0DFKJPHY9Xn3urketxGYU4ugRqk9SNFJOT~1v1-bhrHmcDr8sLbuuNO6O9JcGzSVUHYnRLoLJGL3ZQdpsemX9~K3PAbo5kZreraryEJltjDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={{
              height: 145,
              width: 300,
              borderRadius: 20,
              top:-145/3,
              // shadowColor:"rgba(0, 0, 0, 0.25)",
              overflow: 'hidden',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 14,
                fontWeight: '600',
                fontStyle: 'normal',
                backgroundColor: '#ED5151',
                height: 28,
                width: 60,
                borderRadius: 8,
                textAlign: 'center',
                justifyContent: 'center',
                padding: 4,
                marginHorizontal: 25,
                marginTop: 15,
              }}>
              Promo
            </Text>
            <View
              style={{
                height: 80,
                width: '60%',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{color: '#FFF', fontSize: 32, fontWeight: '600'}}>
                Buy one get one Free
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/*  */}

        <View style={{ marginTop: 120,height:48,}}>
          <FlatList
          horizontal={true}
data={tabArray}
keyExtractor={(item,index)=>index+'inggg'}
renderItem={({item,index})=>{
           return <TouchableOpacity
              onPress={()=>coffeApi(item)}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: activeTab?.id === item?.id ? 'white':'#2F4B4E',
                  backgroundColor: activeTab?.id === item?.id  ?  "#C67C4E": '#F3F3F3' ,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 12,
                  marginLeft: 30,
                }}>
                {item?.title}
              </Text>
            </TouchableOpacity>





}}
/>
          
        </View>
      </View>
      {/*  */}


      <View style={{flex: 1,}}>
        {isLoader ? <View 
        style={{
          height:200,
          justifyContent:'center'

        }}
        
        ><ActivityIndicator color={'blue'} size={'large'}/></View> : null}
        {!isLoader && (
          <FlatList
            data={data}
            numColumns={2}
            ListEmptyComponent={()=><View 
            style={{justifyContent:'center',alignItems:'center',paddingTop:100}}
            >
              <Text style={{
                color:'black',fontSize:16
              }}>No data found!</Text>
            </View>}
            renderItem={({item}:any) => (
              <View
                style={{
                  flex: 1 / 2,
                  height: 250,
                  alignItems: 'center',
                  margin: 10,
                  backgroundColor: '#FFF',
                  borderRadius: 20,
                }}>
                <Image
                  source={{uri: item.img}}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    marginHorizontal: 20,
                    marginTop: 10,
                  }}
                />
                {/*  */}
                <View
                  style={{
                    height: 100,
                    width: 150,
                  }}>
                  <Text
                    style={{
                      color: '#2F2D2C',
                      fontSize: 16,
                      fontWeight: '600',
                      paddingHorizontal: 10,
                      marginTop: 8,
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      color: '#9B9B9B',
                      paddingHorizontal: 10,
                      fontSize: 12,
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    {item.title}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      height: 30,
                      marginTop: 5,
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      style={{
                        color: '#2F4B4E',
                        fontSize: 18,
                        fontWeight: '600',
                      }}>
                      {item.price}
                    </Text>
                  <View style={{height:30,width:30,backgroundColor:'#C67C4E',borderRadius:10,justifyContent:'center',alignItems:'center'}}>

<TouchableOpacity onPress={()=>props.navigation.navigate("detail",{item})}>

                    <AntDesign
                      name="plus"
                      size={16}
                      color="#FFFFFF"
                    />
</TouchableOpacity>

                  </View>

                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
