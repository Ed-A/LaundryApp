import { Pressable, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const Services = () => {
  
    const services = [
        {
            id: "1",
            image: require("../assets/services/laundry.png"),
            name: "Laundry"
        },
        {
            id: "2",
            image: require("../assets/services/washiron.png"),
            name: "Wash & Iron"
        },
        {
            id: "3",
            image: require("../assets/services/cleaning.png"),
            name: "Cleaning"
        }
    ]
  
    return (

    // <View style={styles.container}>
    //   <FlatList
    //     data={services}
    //     renderItem={({ item }) => (
    //       <Image source={ item.image } style={styles.image} />
    //     )}
    //     keyExtractor={(item) => item.id}
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //     contentContainerStyle={styles.listContainer}
    //   />
    // </View>

    <></>
  )
}

export default Services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    paddingHorizontal: 10,
  },
  
  image: {
    width: 40, // Adjust width as needed
    height: 10, // Adjust height as needed
    borderRadius: 10,
    marginHorizontal: 10,
  },
})