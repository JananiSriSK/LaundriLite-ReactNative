import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";
import coupon1 from "../../../assets/Coupon1111.png";
import coupon2 from "../../../assets/Coupon211.jpg";
import coupon3 from "../../../assets/Coupon3w.jpg";

const SwiperView = () => {
  const router = useRouter();
  return (
    <View style={styles.swiperContainer}>
      <Swiper autoplay showsPagination={true} loop>
        <View style={styles.slide}>
          <Image source={coupon1} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={coupon3} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={coupon2} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: 200,
    width: 340,
    borderRadius: 10,
    overflow: "hidden",
  },
  slide: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SwiperView;
