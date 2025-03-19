import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      Alert.alert(
        "Verify Your Email",
        "A verification email has been sent. Please verify your email before logging in."
      );

      // Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        verified: false, // Track verification status
      });

      setEmail("");
      setPassword("");

      // ✅ Redirect to login after registration (DO NOT GO TO HOME)
      router.replace("/authenticate/login");
    } catch (error) {
      console.error("Registration error:", error.message);
      Alert.alert("Registration Failed", error.message);
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
            Register your Account
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

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
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
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/authenticate/login")}
          style={{ marginTop: 12 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Already have an account?{" "}
            <Text
              style={{ color: "#007FFF", textAlign: "center", fontSize: 15 }}
            >
              Log in
            </Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
