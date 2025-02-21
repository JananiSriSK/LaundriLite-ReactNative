import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons, AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import dryclean from "../../../assets/dryclean.png";
import DressItem from "../../../components/dressItem";
import { useRouter } from "expo-router";

const select = () => {
  const router = useRouter();
  const [option, setOption] = useState("Men");
  //const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Wash + fold");

  const menData = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/776/776623.png",
      name: "Pant Standard Pack",
      price: 75,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/2806/2806045.png",
      name: "Dhoti Standard Pack",
      price: 80,
    },

    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "Half T-Shirt Standard Pack",
      price: 60,
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/3531/3531849.png",
      name: "Shirt Standard Pack",
      price: 85,
    },
    {
      id: "8",
      image: "https://cdn-icons-png.flaticon.com/128/2405/2405604.png",
      name: "Men Shorts",
      price: 85,
    },
  ];
  const womenData = [
    {
      id: "10",
      image: "https://cdn-icons-png.flaticon.com/128/1348/1348247.png",
      name: "Women Jeans Pack",
      price: 75,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/6183/6183080.png",
      name: "Women Kurta",
      price: 80,
    },

    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/5980/5980963.png",
      name: "Women Sweatshirt Pack",
      price: 60,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Women Leggings Cloth",
      price: 85,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/8491/8491258.png",
      name: "Women Cloth Tops",
      price: 85,
    },
  ];
  const kidsData = [
    {
      id: "20",
      image: "https://cdn-icons-png.flaticon.com/128/6609/6609556.png",
      name: "Kids Dress",
      price: 75,
    },
    {
      id: "21",
      image: "https://cdn-icons-png.flaticon.com/128/1083/1083825.png",
      name: "Kids Frock Dress",
      price: 80,
    },

    {
      id: "22",
      image: "https://cdn-icons-png.flaticon.com/128/405/405130.png",
      name: "Kids T-Shirt Cloth",
      price: 60,
    },
    {
      id: "23",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Kids Sweater",
      price: 85,
    },
  ];
  const houseData = [
    {
      id: "30",
      image: "https://cdn-icons-png.flaticon.com/128/11543/11543825.png",
      name: "Home Apron",
      price: 75,
    },
    {
      id: "31",
      image: "https://cdn-icons-png.flaticon.com/128/5696/5696987.png",
      name: "Home Bath Towel",
      price: 80,
    },

    {
      id: "32",
      image: "https://cdn-icons-png.flaticon.com/128/1026/1026562.png",
      name: "Home Mats",
      price: 60,
    },
    {
      id: "33",
      image: "https://cdn-icons-png.flaticon.com/128/9096/9096915.png",
      name: "Home Pillow covers",
      price: 85,
    },
  ];

  const shoesData = [
    {
      id: "34",
      image: "https://cdn-icons-png.flaticon.com/128/11543/11543825.png",
      name: "Home Apron",
      price: 75,
    },
    {
      id: "35",
      image: "https://cdn-icons-png.flaticon.com/128/5696/5696987.png",
      name: "Home Bath Towel",
      price: 80,
    },

    {
      id: "36",
      image: "https://cdn-icons-png.flaticon.com/128/1026/1026562.png",
      name: "Home Mats",
      price: 60,
    },
    {
      id: "37",
      image: "https://cdn-icons-png.flaticon.com/128/9096/9096915.png",
      name: "Home Pillow covers",
      price: 85,
    },
  ];

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#dbddff", padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable
              onPress={() => router.push("/tabs/basket/")}
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </Pressable>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Laundry list</Text>
          </View>
          {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="search" size={24} color="black" />
            <Octicons name="three-bars" size={24} color="black" />
          </View> */}
        </View>
      </View>

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          onPress={() => setSelectedOption("Wash + fold")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Wash + fold" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7769/7769829.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Wash + fold
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Wash + Iron")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Wash + Iron" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/802/802826.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Wash + Iron
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Steam Iron")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Steam Iron" ? "#0066b2" : "transparent",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/12299/12299913.png",
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Steam Iron
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedOption("Dry Clean")}
          style={{
            backgroundColor: "white",
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor:
              selectedOption == "Dry Clean" ? "#0066b2" : "transparent",
          }}
        >
          <Image style={{ width: 40, height: 40 }} source={dryclean} />
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 5 }}>
            Dry Clean
          </Text>
        </Pressable>
      </View>

      <ScrollView horizontal>
        <View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "space-around",
            }}
          >
            <Pressable
              onPress={() => setOption("Men")}
              style={{
                padding: 10,
                backgroundColor: option == "Men" ? "#0066b2" : "white",
                width: 60,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  color: option == "Men" ? "white" : "gray",
                }}
              >
                Men
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setOption("Women")}
              style={{
                padding: 10,
                backgroundColor: "white",
                width: 70,
                backgroundColor: option == "Women" ? "#0066b2" : "white",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  color: option == "Women" ? "white" : "gray",
                }}
              >
                Women
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setOption("Kids")}
              style={{
                padding: 10,
                backgroundColor: "white",
                width: 60,
                backgroundColor: option == "Kids" ? "#0066b2" : "white",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  color: option == "Kids" ? "white" : "gray",
                }}
              >
                Kids
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setOption("Household")}
              style={{
                padding: 10,
                backgroundColor: "white",
                backgroundColor: option == "Household" ? "#0066b2" : "white",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  color: option == "Household" ? "white" : "gray",
                }}
              >
                Household
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setOption("Shoes")}
              style={{
                padding: 10,
                backgroundColor: "white",
                backgroundColor: option == "Shoes" ? "#0066b2" : "white",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                  color: option == "Shoes" ? "white" : "gray",
                }}
              >
                Shoes
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={{ marginHorizontal: 10 }}>
        {option == "Men" && (
          <View>
            {menData?.map((item, index) => (
              <DressItem
                item={item}
                selectedOption={selectedOption}
                key={index}
              />
            ))}
          </View>
        )}
      </View>

      <View style={{ marginHorizontal: 10 }}>
        {option == "Women" && (
          <View>
            {womenData?.map((item, index) => (
              <Pressable
                key={index}
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
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item?.name}
                  </Text>
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
            ))}
          </View>
        )}
      </View>
      <View style={{ marginHorizontal: 10 }}>
        {option == "Kids" && (
          <View>
            {kidsData?.map((item, index) => (
              <Pressable
                key={index}
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
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item?.name}
                  </Text>
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
            ))}
          </View>
        )}
      </View>

      <View style={{ marginHorizontal: 10 }}>
        {option == "Household" && (
          <View>
            {houseData?.map((item, index) => (
              <Pressable
                key={index}
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
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item?.name}
                  </Text>
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
            ))}
          </View>
        )}
      </View>

      <View style={{ marginHorizontal: 10 }}>
        {option == "Shoes" && (
          <View>
            {shoesData?.map((item, index) => (
              <Pressable
                key={index}
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
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item?.name}
                  </Text>
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
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default select;

const styles = StyleSheet.create({});
