import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const googleLogo = require("../../assets/images/google_logo.png"); // Place a PNG logo in assets/images

export default function AccountCreationScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#E2C8FD", "#DFDEF4", "#D2FCE8", "#F5EBEC", "#F8CEFC"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={() => navigation.navigate("Result")}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.centeredContent}>
            {/* Brand Name */}
            <Text style={styles.brandName}>Standoutly</Text>
            {/* Headline */}
            <Text style={styles.headline}>Account Creation</Text>
            {/* Subtext */}
            <Text style={styles.subtext}>
              We'll use AI to pick the perfect prompt to help you stand
              out—effortlessly.
            </Text>
            {/* Instruction */}
            <Text style={styles.instruction}>
              We will write three prompts for you. {"\n"}Let's start the first
              one. You will have option to improve or change prompt after.
            </Text>
            {/* Login Buttons */}
            <View style={styles.loginBtnContainer}>
              <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={screenWidth * 0.07}
                  color="#23172A"
                  style={styles.loginIcon}
                />
                <Text style={styles.loginBtnText}>Log In with Phone</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85}>
                <Image source={googleLogo} style={styles.loginIconImg} />
                <Text style={styles.loginBtnText}>Log In with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85}>
                <Ionicons
                  name="logo-apple"
                  size={screenWidth * 0.07}
                  color="#23172A"
                  style={styles.loginIcon}
                />
                <Text style={styles.loginBtnText}>Log In with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: "relative",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.06,
    width: "100%",
  },
  brandName: {
    fontSize: screenWidth * 0.09,
    fontWeight: "bold",
    color: "#23172A",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.03,
    marginTop: screenWidth * 0.01,
  },
  headline: {
    fontSize: screenWidth * 0.08,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.03,
  },
  subtext: {
    fontSize: screenWidth * 0.048,
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: screenWidth * 0.02,
    marginTop: screenWidth * 0.01,
  },
  instruction: {
    fontSize: screenWidth * 0.045,
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: screenWidth * 0.06,
    marginTop: screenWidth * 0.01,
  },
  loginBtnContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: screenWidth * 0.01,
  },
  loginBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: screenWidth * 0.09,
    paddingVertical: screenWidth * 0.045,
    paddingHorizontal: screenWidth * 0.06,
    marginBottom: screenWidth * 0.045,
    width: "100%",
    maxWidth: 420,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  loginIcon: {
    marginRight: screenWidth * 0.04,
  },
  loginIconImg: {
    width: screenWidth * 0.07,
    height: screenWidth * 0.07,
    marginRight: screenWidth * 0.04,
    resizeMode: "contain",
  },
  loginBtnText: {
    color: "#23172A",
    fontSize: screenWidth * 0.05,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
});
