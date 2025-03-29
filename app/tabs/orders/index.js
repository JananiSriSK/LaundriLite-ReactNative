import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { getDocs, collection, query } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

const Index = () => {
  const router = useRouter();
  const userUid = auth?.currentUser?.uid;
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        console.log("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Open Order Summary Popup
  const openOrderSummary = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  // Generate PDF for Order Summary
  const generatePDF = async () => {
    if (!selectedOrder) return;

    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="text-align: center;">Order Summary</h2>
          <p><strong>Order ID:</strong> ${selectedOrder.id}</p>
          <p><strong>Name:</strong> ${selectedOrder.name}</p>
          <p><strong>Mobile:</strong> ${selectedOrder.mobile}</p>
          <p><strong>Address:</strong> ${selectedOrder.address.houseNo}, ${selectedOrder.address.landmark}, ${selectedOrder.address.city}</p>
          <p><strong>Pickup Time:</strong> ${selectedOrder.pickuptime}</p>
          <p><strong>Delivery Time:</strong> ${selectedOrder.deliveryTime}</p>
          <p><strong>Order Total:</strong> ₹${selectedOrder.total}</p>
        </body>
      </html>
    `;

    const { uri } = await Print.printToFileAsync({ html: htmlContent });
    await shareAsync(uri);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header Section */}
      <View style={{ backgroundColor: "#dbddff" }}>
        <View style={{ height: 140, padding: 12 }}>
          <Image
            style={{ width: 240, height: 60, resizeMode: "cover" }}
            source={require("../../../assets/logo_final.png")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Ionicons
              onPress={() => router.push("/tabs/home/")}
              name="arrow-back"
              size={24}
              color="black"
            />
            <Text style={{ fontSize: 17, fontWeight: "500", marginLeft: 10 }}>
              My Orders
            </Text>
          </View>
        </View>
      </View>

      {/* Orders List */}
      <ScrollView contentContainerStyle={{ padding: 12 }}>
        {orders.map((order, index) => (
          <Pressable key={index} style={styles.orderContainer}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.label}>Order ID</Text>
                <Text style={styles.value}>{order.id}</Text>
              </View>
              <View>
                <Text style={styles.label}>Payment</Text>
                <Text style={styles.value}>Cash on Delivery</Text>
              </View>
            </View>

            <View style={styles.orderBody}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.sectionTitle}>Pickup</Text>
                  <Text style={styles.value}>{order.pickuptime}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.sectionTitle}>Delivery</Text>
                  <Text style={styles.value}>{order.deliveryTime}</Text>
                </View>
              </View>
            </View>

            <View style={styles.orderActions}>
              <Pressable onPress={() => openOrderSummary(order)}>
                <MaterialCommunityIcons
                  name="note-outline"
                  size={24}
                  color="black"
                />
                <Text style={styles.actionText}>Order Summary</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Order Summary Modal */}
      {selectedOrder && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="black" />
              </Pressable>
              <Text style={styles.modalTitle}>Order Summary</Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Order ID:</Text> {selectedOrder.id}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Name:</Text> {selectedOrder.name}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Mobile:</Text> {selectedOrder.mobile}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Address:</Text>{" "}
                {selectedOrder.address.houseNo},{" "}
                {selectedOrder.address.landmark}, {selectedOrder.address.city}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Pickup:</Text>{" "}
                {selectedOrder.pickuptime}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Delivery:</Text>{" "}
                {selectedOrder.deliveryTime}
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.bold}>Total:</Text> ₹{selectedOrder.total}
              </Text>

              <Pressable style={styles.downloadButton} onPress={generatePDF}>
                <Text style={styles.downloadText}>Share</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    marginVertical: 12,
  },
  orderHeader: {
    backgroundColor: "#e2f7c3",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderBody: { padding: 10 },
  address: { fontSize: 14, fontWeight: "500", color: "gray" },
  orderActions: { alignItems: "center", marginBottom: 10 },
  actionText: { textAlign: "center", fontSize: 13, fontWeight: "500" },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalText: { fontSize: 14, marginBottom: 5 },
  bold: { fontWeight: "bold" },
  downloadButton: {
    backgroundColor: "#dbddff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  downloadText: { color: "black", fontSize: 14 },
  closeText: { textAlign: "center", color: "black" },
  closeButton: { position: "absolute", top: 10, right: 10, zIndex: 1 },
});

export default Index;
