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
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "More", value: "more" },
];

export default function GenderInputScreen({ navigation, route }) {
  const [selectedSelf, setSelectedSelf] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const name = route?.params?.name || "You";

  const canProceed = selectedSelf && selectedInterest;

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
        {/* Section 1: You are a... */}
        <Text style={styles.headline}>You are a...</Text>
        <View style={styles.optionsRow}>
          {OPTIONS.map((opt, idx) => (
            <TouchableOpacity
              key={opt.value + "-self"}
              style={[
                styles.optionBtn,
                selectedSelf === opt.value && styles.optionBtnSelected,
                idx === 1 && styles.optionBtnCenter,
              ]}
              activeOpacity={0.85}
              onPress={() => setSelectedSelf(opt.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedSelf === opt.value && styles.optionTextSelected,
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Section 2: You are interested in... */}
        <Text style={styles.headline}>You are interested in...</Text>
        <View style={styles.optionsRow}>
          {OPTIONS.map((opt, idx) => (
            <TouchableOpacity
              key={opt.value + "-interest"}
              style={[
                styles.optionBtn,
                selectedInterest === opt.value && styles.optionBtnSelected,
                idx === 1 && styles.optionBtnCenter,
              ]}
              activeOpacity={0.85}
              onPress={() => setSelectedInterest(opt.value)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedInterest === opt.value && styles.optionTextSelected,
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Next Button */}
        <TouchableOpacity
          style={[styles.nextBtn, { opacity: canProceed ? 1 : 0.5 }]}
          activeOpacity={0.85}
          disabled={!canProceed}
          onPress={() => navigation.navigate("Congrats", { name })}
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
  optionsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: screenWidth * 0.12,
    gap: screenWidth * 0.04,
  },
  optionBtn: {
    backgroundColor: "#F3F3F3",
    borderRadius: screenWidth * 0.09,
    paddingVertical: screenWidth * 0.045,
    paddingHorizontal: screenWidth * 0.07,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionBtnSelected: {
    borderColor: "#A259FF",
    backgroundColor: "#E9D7FF",
    shadowOpacity: 0.18,
  },
  optionBtnCenter: {
    marginHorizontal: screenWidth * 0.02,
  },
  optionText: {
    color: "#3A2466",
    fontSize: screenWidth * 0.05,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
  optionTextSelected: {
    color: "#A259FF",
    fontWeight: "bold",
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
