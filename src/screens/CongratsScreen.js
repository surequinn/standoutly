import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function CongratsScreen({ navigation, route }) {
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
      <SafeAreaView style={styles.safeArea}>
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
        {/* Centered Content */}
        <View style={styles.centerContent}>
          <Text style={styles.headline}>Awesome, {name}!</Text>
          <Text style={styles.subtext}>
            Now, let me ask you a few questions so{"\n"}I can craft the best
            profile for you!
          </Text>
        </View>
        {/* Next Button */}
        <View style={styles.nextBtnContainer}>
          <TouchableOpacity
            style={styles.nextBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("VibeInput", { name })}
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
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: "relative",
  },
  backArrow: {
    position: "absolute",
    top: Platform.OS === "ios" ? screenWidth * 0.04 : screenWidth * 0.02,
    left: screenWidth * 0.04,
    zIndex: 2,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.04,
  },
  headline: {
    fontSize: screenWidth * 0.09,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.03,
  },
  subtext: {
    fontSize: screenWidth * 0.05,
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: 0,
  },
  nextBtnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: screenWidth * 0.08,
  },
  nextBtn: {
    alignSelf: "center",
    borderRadius: screenWidth * 0.12,
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
