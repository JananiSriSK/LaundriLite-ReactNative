import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
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
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      const token = user?.stsTokenManager.accessToken;

      AsyncStorage.setItem("auth", token);
    });

    router.replace("/tabs/home");
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

        <View
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
        </View>

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

export default login;

const styles = StyleSheet.create({});

// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   KeyboardAvoidingView,
//   TextInput,
//   Pressable,
//   Alert,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import Fontisto from "@expo/vector-icons/Fontisto";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const token = await AsyncStorage.getItem("auth");
//         if (token) {
//           router.replace("/tabs/home");
//         }
//       } catch (error) {
//         console.log("Error", error);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password.");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Save authentication state
//       await AsyncStorage.setItem("auth", user.uid); // Store user ID instead of token

//       router.replace("/tabs/home");
//     } catch (error) {
//       console.log("Login Error:", error.message);
//       Alert.alert("Login Failed", error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={{ height: 130, backgroundColor: "#dbddff", width: "100%" }}>
//         {" "}
//         <View style={styles.header}>
//           <Image
//             style={styles.logo}
//             source={require("../../assets/login1.png")}
//           />
//         </View>
//       </View>

//       <KeyboardAvoidingView>
//         <View style={{ alignItems: "center" }}>
//           <Text style={styles.title}>Log in to your Account</Text>
//         </View>

//         <View>
//           {/* Email Input */}
//           <View style={styles.inputContainer}>
//             <MaterialIcons
//               style={styles.icon}
//               name="email"
//               size={24}
//               color="black"
//             />
//             <TextInput
//               value={email}
//               onChangeText={setEmail}
//               style={styles.input}
//               placeholder="Enter your email"
//               placeholderTextColor={"grey"}
//               keyboardType="email-address"
//             />
//           </View>

//           {/* Password Input */}
//           <View style={styles.inputContainer}>
//             <Fontisto
//               name="locked"
//               size={24}
//               color="black"
//               style={styles.icon}
//             />
//             <TextInput
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//               style={styles.input}
//               placeholder="Enter your password"
//               placeholderTextColor={"grey"}
//             />
//           </View>
//         </View>

//         {/* Keep Me Logged In & Forgot Password */}
//         <View style={styles.row}>
//           <Text>Keep me logged in</Text>
//           <Text style={styles.forgotPassword}>Forgot Password</Text>
//         </View>

//         {/* Login Button */}
//         <Pressable onPress={handleLogin} style={styles.loginButton}>
//           <Text style={styles.loginText}>Login</Text>
//         </Pressable>

//         {/* Sign-up Link */}
//         <Pressable
//           onPress={() => router.replace("/authenticate/register")}
//           style={{ marginTop: 12 }}
//         >
//           <Text style={{ textAlign: "center", fontSize: 15 }}>
//             Don't have an account?{" "}
//             <Text style={styles.signupText}>Sign up</Text>
//           </Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//   },
//   header: {
//     height: 130,
//     backgroundColor: "#dbddff",
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 25,
//   },
//   logo: {
//     width: 250,
//     height: 100,
//     resizeMode: "cover",
//     padding: 30,
//   },
//   title: {
//     fontSize: 17,
//     fontWeight: "bold",
//     marginTop: 50,
//     color: "black",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#dbddff",
//     paddingVertical: 8,
//     borderRadius: 5,
//     marginTop: 20,
//     width: 320,
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   input: {
//     color: "black",
//     width: 270,
//     marginVertical: 10,
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   row: {
//     marginTop: 12,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: 320,
//   },
//   forgotPassword: {
//     color: "#007FFF",
//     fontWeight: "500",
//   },
//   loginButton: {
//     width: 200,
//     backgroundColor: "#d9f6b1",
//     borderRadius: 6,
//     padding: 15,
//     marginTop: 50,
//     alignItems: "center",
//   },
//   loginText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "black",
//   },
//   signupText: {
//     color: "#007FFF",
//     fontSize: 15,
//   },
// });
