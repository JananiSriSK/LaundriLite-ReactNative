// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TextInput,
//   Pressable,
//   Alert
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import * as Location from 'expo-location';
// import { Ionicons } from "@expo/vector-icons";
// import { auth, db } from "../../../firebase";
// import { addDoc, collection } from "firebase/firestore";
// import { useRouter } from "expo-router";

// const add = () => {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [houseNo, setHouseNo] = useState("");
//   const [landmark, setLandmark] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [city, setCity] = useState("");

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Denied', 'Allow location access to auto-fill address');
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     fetchAddress(location.coords.latitude, location.coords.longitude);
//   };

//   const fetchAddress = async (lat, lon) => {
//     try {
//       const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
//       const data = await response.json();
//       if (data.address) {
//         setHouseNo(data.address.house_number || "");
//         setLandmark(data.address.road || "");
//         setCity(data.address.city || data.address.town || "");
//         setPostalCode(data.address.postcode || "");
//       }
//     } catch (error) {
//       console.error("Error fetching address:", error);
//     }
//   };

//   const userUid = auth?.currentUser?.uid;
//   const addAddress = async () => {
//     try {
//       const addressCollectionRef = collection(db, "users", userUid, "userAddresses");
//       await addDoc(addressCollectionRef, {
//         name,
//         houseNo,
//         landmark,
//         postalCode,
//         city,
//       });
//       router.push("/tabs/home/address");
//     } catch (error) {
//       console.error("Error adding address:", error);
//     }
//   };


//   return (
//     <>
//       <View
//         style={{
//           backgroundColor: "#dbddff",
//           padding: 18,
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//         }}
//       >
//         <View
//           style={{
//             width: 36,
//             height: 36,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Pressable
//             onPress={() => router.push("/tabs/home/address")}
//             style={{
//               width: 30,
//               height: 30,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Ionicons name="chevron-back" size={24} color="black" />
//           </Pressable>
//         </View>
//         <Text style={{ flex: 1, fontSize: 17, fontWeight: "500" }}>
//           Add a new address
//         </Text>
//       </View>
//       <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//         <View style={{ padding: 10 }}>
//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ fontSize: 15, fontWeight: "bold" }}>Name</Text>

//             <TextInput
//               value={name}
//               onChangeText={(text) => setName(text)}
//               placeholderTextColor={"black"}
//               style={{
//                 padding: 10,
//                 borderColor: "#D0D0D0",
//                 borderWidth: 1,
//                 marginTop: 10,
//                 borderRadius: 5,
//               }}
//               placeholder="Enter your name"
//             />
//           </View>

//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ fontSize: 15, fontWeight: "bold" }}>
//               Flat, House No, Building
//             </Text>

//             <TextInput
//               value={houseNo}
//               onChangeText={(text) => setHouseNo(text)}
//               placeholderTextColor={"black"}
//               style={{
//                 padding: 10,
//                 borderColor: "#D0D0D0",
//                 borderWidth: 1,
//                 marginTop: 10,
//                 borderRadius: 5,
//               }}
//               placeholder="Enter your house number"
//             />
//           </View>

//           <Text style={{ fontSize: 16, fontWeight: "bold" }}>City</Text>

//           <TextInput
//              value={city}
//              onChangeText={(text) => setCity(text)}
//             placeholder="Enter your city name"
//             placeholderTextColor={"black"}
//             style={{
//               padding: 10,
//               borderColor: "#D0D0D0",
//               borderWidth: 1,
//               marginTop: 10,
//               borderRadius: 5,
//             }}
//           />

//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ fontSize: 15, fontWeight: "bold" }}>Locality</Text>

//             <TextInput
//               value={landmark}
//               onChangeText={(text) => setLandmark(text)}
//               placeholderTextColor={"black"}
//               style={{
//                 padding: 10,
//                 borderColor: "#D0D0D0",
//                 borderWidth: 1,
//                 marginTop: 10,
//                 borderRadius: 5,
//               }}
//               placeholder="Enter your street or area name"
//             />
//           </View>

//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>

//             <TextInput
//               value={postalCode}
//               onChangeText={(text) => setPostalCode(text)}
//               placeholderTextColor={"black"}
//               style={{
//                 padding: 10,
//                 borderColor: "#D0D0D0",
//                 borderWidth: 1,
//                 marginTop: 10,
//                 borderRadius: 5,
//               }}
//               placeholder="Enter Pincode"
//             />
//           </View>

//           <Pressable
//             onPress={addAddress}
//             style={{
//               backgroundColor: "#d9f6b1",
//               padding: 19,
//               borderRadius: 6,
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 20,
//             }}
//           >
//             <Text>Add Address</Text>
//           </Pressable>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// export default add;

// const styles = StyleSheet.create({});



import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
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

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Allow location access to auto-fill address');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    fetchAddress(location.coords.latitude, location.coords.longitude);
  };

  const fetchAddress = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      if (data.address) {
        setHouseNo(data.address.house_number || "");
        setLandmark(data.address.road || data.address.neighbourhood || "");
        setCity(data.address.city || data.address.town || data.address.village || "");
        setPostalCode(data.address.postcode || "");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const userUid = auth?.currentUser?.uid;
  
  const addAddress = async () => {
    if (!userUid) {
      Alert.alert("Error", "User not authenticated");
      return;
    }

    try {
      const addressCollectionRef = collection(db, "users", userUid, "userAddresses");
      await addDoc(addressCollectionRef, {
        name,
        houseNo,
        landmark,
        postalCode,
        city,
      });
      router.push("/tabs/home/address");
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.push("/tabs/home/address")}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Add a new address</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <InputField label="Name" value={name} onChangeText={setName} placeholder="Enter your name" />
          <InputField label="Flat, House No, Building" value={houseNo} onChangeText={setHouseNo} placeholder="Enter your house number" />
          <InputField label="City" value={city} onChangeText={setCity} placeholder="Enter your city name" />
          <InputField label="Locality" value={landmark} onChangeText={setLandmark} placeholder="Enter your street or area name" />
          <InputField label="Pincode" value={postalCode} onChangeText={setPostalCode} placeholder="Enter Pincode" />

          <Pressable onPress={addAddress} style={styles.addButton}>
            <Text>Add Address</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const InputField = ({ label, value, onChangeText, placeholder }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="black"
      style={styles.input}
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#dbddff",
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  form: {
    padding: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#d9f6b1",
    padding: 19,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default add;
