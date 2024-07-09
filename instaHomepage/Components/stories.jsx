import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Stories = () => {
  const contacts = [
    { id: 1, name: 'Alice Johnson', phone: '555-1234', email: 'alice@example.com', url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Zendaya', phone: '555-5678', email: 'bob@example.com', url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Charlie Brown', phone: '555-8765', email: 'charlie@example.com', url: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'David Williams', phone: '555-4321', email: 'david@example.com', url: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Eva Adams', phone: '555-6789', email: 'eva@example.com', url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Divya', phone: '555-6789', email: 'eva@example.com', url: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true} style={styles.container}>
      {contacts.map(({ id, name, url }) => (
        <TouchableOpacity key={id} style={styles.touchable}>
          <LinearGradient
            colors={['#C22163','#E8236B','#EC4D26','#FB6705','#FEAE01']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}>
            <Image source={{ uri: url }} style={styles.image} />
          </LinearGradient>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touchable: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  gradientBorder: {
    padding: 4, 
    borderRadius: 50,
    marginTop: 80,
  },
  image: {
    height: 94,
    width: 94,
    borderRadius: 46,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
