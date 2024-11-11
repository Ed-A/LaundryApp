import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "react-native-reanimated-carousel";
import Services from "../components/Services";

const HomeScreen = () => {
  // const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
  //   "we are loading your location"
  // );
  // const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  // useEffect(() => {
  //   checkIfLocationEnabled();
  //   getCurrentLocation();
  // }, []);

  // const checkIfLocationEnabled = async () => {
  //   let enabled = await Location.hasServicesEnabledAsync();

  //   if (!enabled) {
  //     Alert.alert(
  //       "Location service is not enabled",
  //       "Please enable the location services",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         {
  //           text: "OK",
  //           onPress: () => console.log("OK Pressed"),
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   } else {
  //     setlocationServicesEnabled(enabled);
  //   }
  // };

  // const getCurrentLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();

  //   if (status !== "granted") {
  //     Alert.alert(
  //       "Permission denied",
  //       "Allow the app to use the location services",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         {
  //           text: "OK",
  //           onPress: () => console.log("OK Pressed"),
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   }

  //   const { coords } = await Location.getCurrentPositionAsync();

  //   if (coords) {
  //     const { latitude, longitude } = coords;

  //     let response = await Location.reverseGeocodeAsync({
  //       latitude,
  //       longitude,
  //     });

  //     for (let item of response) {
  //       let address = `${item.city} ${item.postalCode}`;
  //       setdisplayCurrentAddress(address);
  //     }
  //   }
  // };

  const data = [
    {
      image: require("../assets/image1.jpg")    
    },
    {
      image: require("../assets/image2.jpg")    
    },
    {
      image: require("../assets/image3.jpg")    
    },
    
  ];

  const { width } = Dimensions.get("window");

  return (
    <SafeAreaView>
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingLeft: 7 }}
      >
        <Entypo name="location-pin" size={24} color="#EF0107" />

        <View style={{ marginLeft: 3 }}>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Home</Text>
          {/* <Text>{displayCurrentAddress}</Text> */}
          <Text>Ghar ko Address</Text>
        </View>

        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <FontAwesome
            name="user-circle"
            size={30}
            color="black"
            style={{ margin: 10 }}
          />
        </Pressable>
      </View>

      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.8,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search for items or More" />
        <Ionicons name="search" size={24} color="#EF0107" />
      </View>

     <View style={{ alignItems: "center" }}>
        <Carousel
          loop
          width={400} // Width of each slide
          height={200} // Height of each slide
          autoPlay={true} // Enables auto-play
          data={data} // Data array for items
          scrollAnimationDuration={1000} // Speed of transition
          renderItem={({ item }) => (
            <View>
              <Image
                source={ item.image }
                style={{ width: 400, height: 200 }}
              /> 
            </View>
          )}
        />
      </View>

      <Services/>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
