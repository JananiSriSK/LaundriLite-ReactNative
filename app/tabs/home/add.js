import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "expo-router";

const add = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const userUid = auth?.currentUser.uid;
  const addAddress = async () => {
    try {
      const addressCollectionRef = collection(
        db,
        "users",
        userUid,
        "userAddresses"
      );
      const addresssDocRef = await addDoc(addressCollectionRef, {
        name: name,
        houseNo: houseNo,
        landmark: landmark,
        postalCode: postalCode,
        city:city,
      });
      console.log("address added ", addresssDocRef.id);
      router.push("/tabs/home/address");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#dbddff",
          padding: 18,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => router.push("/tabs/home/address")}
            style={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
        </View>
        <Text style={{ flex: 1, fontSize: 17, fontWeight: "500" }}>
          Add a new address
        </Text>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ padding: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Name</Text>

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter your name"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Flat, House No, Building
            </Text>

            <TextInput
              value={houseNo}
              onChangeText={(text) => setHouseNo(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter your house number"
            />
          </View>

          <Text style={{ fontSize: 16, fontWeight: "bold" }}>City</Text>

          <TextInput
             value={city}
             onChangeText={(text) => setCity(text)}
            placeholder="Enter your city name"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Locality</Text>

            <TextInput
              value={landmark}
              onChangeText={(text) => setLandmark(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter your street or area name"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>

            <TextInput
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
              placeholderTextColor={"black"}
              style={{
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
              placeholder="Enter Pincode"
            />
          </View>

          <Pressable
            onPress={addAddress}
            style={{
              backgroundColor: "#d9f6b1",
              padding: 19,
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text>Add Address</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default add;

const styles = StyleSheet.create({});
