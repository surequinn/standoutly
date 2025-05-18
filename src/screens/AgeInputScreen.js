import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function AgeInputScreen({ navigation, route }) {
  const [age, setAge] = useState("");
  const isValid = !!age && /^\d{1,3}$/.test(age);
  const name = route?.params?.name || "You";

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
      <View style={styles.container}>
        {/* Back Arrow */}
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.goBack()}
          hitSlop={16}
        >
          <Ionicons
            name="chevron-back"
            size={screenWidth * 0.08}
            color="#3A2466"
          />
        </Pressable>
        {/* Subheader */}
        <Text style={styles.subheader}>Setting up your profile...</Text>
        {/* Headline */}
        <Text style={styles.headline}>What's your era?</Text>
        {/* Input Field */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Your age ..."
            placeholderTextColor="#B0B0B0"
            value={age}
            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))}
            keyboardType="number-pad"
            maxLength={3}
            returnKeyType="done"
            textAlign="center"
          />
        </View>
        {/* Next Button */}
        <TouchableOpacity
          style={[styles.nextBtn, { opacity: isValid ? 1 : 0.5 }]}
          activeOpacity={0.85}
          disabled={!isValid}
          onPress={() => navigation.navigate("GenderInput", { name })}
        >
          <LinearGradient
            colors={["#A259FF", "#5FD3FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.nextBtnGradient}
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: screenWidth * 0.13,
    paddingHorizontal: screenWidth * 0.04,
  },
  backArrow: {
    position: "absolute",
    top: Platform.OS === "ios" ? screenWidth * 0.13 : screenWidth * 0.09,
    left: screenWidth * 0.04,
    zIndex: 2,
  },
  subheader: {
    fontSize: screenWidth * 0.045,
    color: "#888",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: screenWidth * 0.13,
    marginTop: screenWidth * 0.01,
  },
  headline: {
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.07,
  },
  inputWrapper: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: screenWidth * 0.09,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: "auto",
  },
  input: {
    width: "100%",
    fontSize: screenWidth * 0.055,
    color: "#3A2466",
    paddingVertical: screenWidth * 0.045,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: screenWidth * 0.09,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    textAlign: "center",
  },
  nextBtn: {
    alignSelf: "center",
    borderRadius: screenWidth * 0.12,
    marginTop: "auto",
    marginBottom: screenWidth * 0.08,
    shadowColor: "#A259FF",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    width: "70%",
    maxWidth: 400,
  },
  nextBtnGradient: {
    borderRadius: screenWidth * 0.12,
    paddingVertical: screenWidth * 0.045,
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtnText: {
    color: "#fff",
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
});
