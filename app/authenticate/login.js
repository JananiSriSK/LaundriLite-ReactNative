import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, doc, updateDoc } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth");
        if (token) {
          router.replace("/tabs/home");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert(
          "Email Not Verified",
          "Please verify your email before logging in."
        );
        return;
      }

      // ✅ Update Firestore for verification status
      await updateDoc(doc(db, "users", user.uid), { verified: true });

      // ✅ Store token
      await AsyncStorage.setItem("auth", user.uid);

      // ✅ Navigate to home
      router.replace("/tabs/home");
    } catch (error) {
      console.error("Login error:", error.message);
      Alert.alert("Login Failed", "Invalid email or password. Please try again.");
    }
  };


  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ height: 130, backgroundColor: "#dbddff", width: "100%" }}>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 250,
              height: 100,
              resizeMode: "cover",
              padding: 30,
            }}
            source={require("../../assets/login1.png")}
          />
        </View>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 50,
              color: "black",
            }}
          >
            Log in to your Account
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#dbddff",
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "black",
                width: 300,
                marginVertical: 10,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your email"
              placeholderTextColor={"grey"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#dbddff",
              paddingVertical: 2,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Fontisto
              name="locked"
              size={24}
              color="black"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "black",
                width: 300,
                marginVertical: 10,
                fontSize: password ? 17 : 17,
              }}
              placeholder="Enter your password"
              placeholderTextColor={"grey"}
            />
          </View>
        </View>

        {/* <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View> */}

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "#d9f6b1",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/authenticate/register")}
          style={{ marginTop: 12 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Don't have an account?{" "}
            <Text
              style={{ color: "#007FFF", textAlign: "center", fontSize: 15 }}
            >
              Sign up
            </Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
