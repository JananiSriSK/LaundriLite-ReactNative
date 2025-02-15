import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const dressItem = ({ item, selectedOption }) => {
  return (
    <View>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "white",
          marginVertical: 13,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={{ uri: item?.image }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{item?.name}</Text>
          <Text style={{ marginTop: 3 }}>
            ₹{" "}
            {selectedOption == "Wash + Iron"
              ? item.price + 20
              : selectedOption == "Steam Iron"
              ? item.price + 35
              : selectedOption == "Dry Clean"
              ? item.price + 45
              : item.price}
          </Text>
        </View>
        <Pressable>
          <AntDesign name="pluscircleo" size={24} color="grey" />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default dressItem;

const styles = StyleSheet.create({});
