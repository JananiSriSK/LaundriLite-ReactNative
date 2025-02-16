import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SwiperView from "./SwiperView.js";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <ScrollView>
      {/* Header */}
      <View style={{ padding: 12, height: 200, backgroundColor: "#dbddff" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 240, height: 60, resizeMode: "cover" }}
            source={require("../../../assets/logo_final.png")}
          />
          <Octicons name="three-bars" size={24} color="black" />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 13, fontFamily: "Kailasa-Bold" }}>
              Hi Janani !!
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: "Kailasa-Bold",
                color: "black",
              }}
            >
              Home | Chennai - 600041
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text
              style={{
                width: 60,
                fontSize: 12,
                color: "#0066b2",
                fontFamily: "KohinoorTelugu-Medium",
              }}
            >
              QUICK HELP
            </Text>
          </View>
        </View>
      </View>

      {/* QUICK ORDER (Same layout for Mobile & Web) */}
      <View style={[styles.quickOrderContainer, { marginTop: -40 }]}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text style={styles.quickOrderTitle}>QUICK ORDER</Text>
            <Text style={{ marginTop: 4 }}>
              Book a pickup and a delivery option
            </Text>
            <Text>We will be at your doorstep on time</Text>

            <View style={styles.quickOrderBottom}>
              <Pressable
                onPress={() => router.push("/tabs/home/address")}
                style={styles.bookNowButton}
              >
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  BOOK NOW
                </Text>
              </Pressable>
              <View style={{ width: 120 }}>
                <MaterialCommunityIcons name="truck" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Swiper View */}
      <View style={styles.container}>
        {/* <Pressable onPress={() => router.push("/tabs/home/address")}>
          
        </Pressable> */}
        <SwiperView />
      </View>

      {/* Order Section */}
      <View style={styles.orderSection}>
        <View style={styles.orderCard}>
          <Text style={styles.orderTitle}>
            Place Your{" "}
            <Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>
              Order{"  "}
            </Text>
            <View style={{ marginBottom: 10 }}>
              <Ionicons name="basket" size={22} color="black" />
            </View>
          </Text>
          <Text style={styles.orderDescription}>
            Choose from the catalogue below and book your order. It's about
            time.
          </Text>
        </View>
      </View>

      {/* Additional Features Section */}
      <View style={styles.featuresSection}>
        {/* Affordable Prices */}
        <View style={styles.priceCard}>
          <View>
            <Text style={styles.priceTitle}>AFFORDABLE PRICES</Text>
            <Text style={{ marginTop: 4 }}>Get our Price List</Text>
          </View>
          <Entypo name="triangle-right" size={18} color="#034694" />
        </View>

        {/* Next Available Slot */}
        <View style={styles.slotCard}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text>Next Available</Text>
          </View>
          <Text style={styles.slotText}>
            Order Within 15 mins to catch this pickUp Slot
          </Text>
          <Pressable style={styles.addItemButton}>
            <Text>ADD ITEMS</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    marginTop: 20, // Adjusted to avoid overlapping
  },
  quickOrderContainer: {
    padding: 15,
    backgroundColor: "white",
    width: 340,
    alignSelf: "center",
    borderRadius: 10,
    zIndex: 10,
  },
  quickOrderTitle: {
    fontSize: 15,
    color: "#0066b2",
    fontFamily: "Kailasa-Bold",
  },
  quickOrderBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
  bookNowButton: {
    backgroundColor: "#d9f6b1",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
  orderSection: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  orderCard: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 340,
  },
  orderTitle: {
    color: "#244774",
    fontSize: 18,
    fontWeight: "500",
  },
  orderDescription: {
    fontSize: 14,
    fontWeight: "400",
    width: 320,
    marginTop: 10,
  },
  featuresSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 10,
    padding: 10,
  },
  priceCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
    height: 121,
  },
  priceTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#034694",
  },
  slotCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 7,
    flex: 1,
    marginLeft: 5,
  },
  slotText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
    color: "#034694",
    width: 150,
  },
  addItemButton: {
    backgroundColor: "#d9f6b1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 8,
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   Pressable,
// } from "react-native";
// import React from "react";
// import Octicons from "@expo/vector-icons/Octicons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import SwiperView from "./SwiperView.js";
// import { useRouter } from "expo-router";

// const index = () => {
//   const router = useRouter();
//   return (
//     <ScrollView>
//       <View style={{ padding: 12, height: 200, backgroundColor: "#dbddff" }}>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <View>
//             <Image
//               style={{ width: 240, height: 60, resizeMode: "cover" }}
//               source={require("../../../assets/logo_final.png")}
//             />
//           </View>
//           <Octicons name="three-bars" size={24} color="black" />
//         </View>

//         <View
//           style={{
//             marginTop: 20,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 13, fontFamily: "Kailasa-Bold" }}>
//               Hi Janani !!
//             </Text>
//             <Text
//               style={{
//                 marginTop: 2,
//                 fontFamily: "Kailasa-Bold",
//                 color: "black",
//               }}
//             >
//               Home | Chennai - 600041
//             </Text>
//           </View>

//           <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
//             <Ionicons
//               name="information-circle-outline"
//               size={24}
//               color="black"
//             />
//             <Text
//               style={{
//                 width: 60,
//                 fontSize: 12,
//                 color: "#0066b2",
//                 fontFamily: "KohinoorTelugu-Medium",
//               }}
//             >
//               QUICK HELP
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           padding: 10,
//           backgroundColor: "white",
//           width: 340,
//           marginLeft: "auto",
//           marginRight: "auto",
//           borderRadius: 10,
//           position: "absolute",
//           top: 150,
//           left: "50%",
//           transform: [{ translateX: -170 }],
//         }}
//       >
//         <View style={{ flexDirection: "row", gap: 10 }}>
//           <Ionicons name="notifications-outline" size={24} color="black" />
//           <View>
//             <Text
//               style={{
//                 fontSize: 15,
//                 color: "#0066b2",
//                 fontFamily: "Kailasa-Bold",
//               }}
//             >
//               QUICK ORDER
//             </Text>
//             <Text style={{ marginTop: 4 }}>
//               Book a pickup and a delivery option
//             </Text>
//             <Text>We will be at your doorstep on time</Text>

//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginTop: 7,
//               }}
//             >
//               <Pressable
//                 onPress={() => router.push("/tabs/home/address")}
//                 style={{
//                   backgroundColor: "#d9f6b1",
//                   paddingHorizontal: 10,
//                   paddingVertical: 5,
//                   borderRadius: 4,
//                 }}
//               >
//                 <Text style={{ fontSize: 13, fontWeight: "400" }}>
//                   BOOK NOW
//                 </Text>
//               </Pressable>
//               <View style={{ width: 120 }}>
//                 <MaterialCommunityIcons name="truck" size={24} color="black" />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>

//       <View style={styles.container}>
//         <Pressable
//           onPress={() => router.push("/tabs/home/address")}
//           style={{
//             paddingHorizontal: 10,
//             paddingVertical: 5,
//             borderRadius: 4,
//           }}
//         >
//           <SwiperView />
//         </Pressable>
//       </View>

//       <View
//         style={{
//           marginTop: 10,
//           marginHorizontal: 10,
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 10,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "white",
//             paddingHorizontal: 12,
//             paddingVertical: 10,
//             borderRadius: 10,
//             marginRight: 10,
//             width: 340,
//           }}
//         >
//           <View style={{ width: 200 }}>
//             <Text style={{ color: "#244774", fontSize: 18, fontWeight: "500" }}>
//               Place Your{" "}
//               <Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>
//                 Order{"  "}
//               </Text>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: 8,
//                   marginTop: 10,
//                 }}
//               >
//                 <Ionicons name="basket" size={22} color="black" />
//               </View>
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: "400",
//                 width: 320,
//                 marginTop: 10,
//               }}
//             >
//               Choose from the catalogue below and book your order. It's about
//               time
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           marginVertical: 10,
//           padding: 10,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "white",
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 12,
//             padding: 10,
//             borderRadius: 10,
//             flex: 1,
//             marginRight: 5,
//             height: 121,
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}>
//               AFFORDABLE PRICES
//             </Text>
//             <Text style={{ marginTop: 4 }}>Get our Price List</Text>
//           </View>
//           <Entypo name="triangle-right" size={18} color="#034694" />
//         </View>

//         <View
//           style={{
//             backgroundColor: "white",
//             padding: 10,
//             borderRadius: 7,
//             flex: 1,
//             marginLeft: 5,
//           }}
//         >
//           <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
//             <Ionicons name="notifications-outline" size={24} color="black" />
//             <Text>Next Available</Text>
//           </View>
//           <Text
//             style={{
//               fontSize: 14,
//               fontWeight: "500",
//               marginTop: 5,
//               color: "#034694",
//               width: 150,
//             }}
//           >
//             Order Within 15 mins to catch this pickUp Slot
//           </Text>
//           <Pressable
//             style={{
//               backgroundColor: "#d9f6b1",
//               borderColor: "#d9f6b1",
//               paddingHorizontal: 10,
//               paddingVertical: 4,
//               justifyContent: "center",
//               alignItems: "center",
//               borderWidth: 0.7,
//               width: 130,
//               marginTop: 8,
//               borderRadius: 5,
//             }}
//           >
//             <Text>ADD ITEMS</Text>
//           </Pressable>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default index;

// // const styles = StyleSheet.create({});

// const styles = StyleSheet.create({
//   container: {
//     flex: 10,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: "80",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
// });
