import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  const userUid = auth?.currentUser.uid;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollectionRef = collection(db, "users", userUid, "orders");
        const ordersQuery = query(ordersCollectionRef);
        const querySnapshot = await getDocs(ordersQuery);

        const fetchedOrders = [];
        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() });
        });

        setOrders(fetchedOrders);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Header Section */}
      <View style={{ backgroundColor: "#dbddff" }}>
        <View style={{ height: 140, padding: 12 }}>
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
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 12,
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                onPress={() => router.push("/tabs/home/")}
                name="arrow-back"
                size={24}
                color="black"
              />
            </View>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>My Orders</Text>
          </View>
        </View>
      </View>

      {/* Orders List */}
      <ScrollView contentContainerStyle={{ padding: 12 }}>
        {orders.map((item, index) => (
          <Pressable
            key={index}
            style={{
              marginVertical: 12,
              backgroundColor: "white",
              borderRadius: 7,
            }}
          >
            <View
              style={{
                backgroundColor: "#e2f7c3",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
              }}
            >
              <View>
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "500" }}
                >
                  Order Id
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontWeight: "400",
                    marginTop: 3,
                  }}
                >
                  {item.id}
                </Text>
              </View>

              <View>
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "500" }}
                >
                  Payment method
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontWeight: "400",
                    marginTop: 4,
                  }}
                >
                  Cash on delivery
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "white",
                marginHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: "500",
                    color: "gray",
                    width: 200,
                  }}
                >
                  {item.address.houseNo},{item.address.landmark},
                  {item.address.city}.
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 13, fontWeight: "600" }}>
                    PICK UP
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 4 }}>
                    {item.pickuptime}
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 13, fontWeight: "600" }}>
                    DELIVERY
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 4 }}>
                    {item.deliveryTime}
                  </Text>
                </View>
                <View style={{ marginBottom: 20 }} />
              </View>

              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "#F0F8FF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="note-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "500",
                  }}
                >
                  Order Summary
                </Text>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "#F0F8FF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <FontAwesome name="folder-open-o" size={24} color="black" />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "500",
                  }}
                >
                  Feedback
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;
