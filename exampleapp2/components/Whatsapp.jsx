import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Whatsapp() {
  const contacts = [
    { id: 1, name: 'Alice Johnson', phone: '555-1234', email: 'alice@example.com',url:'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Bob Smith', phone: '555-5678', email: 'bob@example.com',url:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Charlie Brown', phone: '555-8765', email: 'charlie@example.com' ,url:'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'David Williams', phone: '555-4321', email: 'david@example.com' ,url:'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600'},
    { id: 5, name: 'Eva Adams', phone: '555-6789', email: 'eva@example.com' ,url:'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600'},
  ];

  return (
    <View>
      <Text style={styles.heading}>Contact List</Text>
      <View style={[styles.about, styles.elevation]}>
      {contacts.map(({id,name,phone,email,url})=>(
            <View style={styles.brand} key={id} > 
              <Image source={{ uri:url}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text numberOfLines={2} style={styles.name}>{name}</Text>
            <Text style={styles.details}>Gmail:{email} {'\n'}phone:{phone} </Text>
          </View>
            </View>          

))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  about: {
    height: 580,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 12,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  elevation: {
    elevation: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginHorizontal: 5,
    marginTop: 25,
  },
  brand: {
    flex:1,
    flexDirection: 'row',
    marginHorizontal: 9,
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor:"#25D366",
    borderRadius:5,
    borderWidth:5,
    borderColor:"white",
    borderRadius:20
    // elevation: 2,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
  },
  textContainer: {
    marginLeft: 10,
    marginTop: 25,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5B7B7A',
  },
  details: {
    marginHorizontal:5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5B7B7A',
  },
});
