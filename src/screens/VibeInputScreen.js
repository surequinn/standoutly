import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
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

const VIBES = [
  { label: "Funny", value: "funny" },
  { label: "Cheesy", value: "cheesy" },
  { label: "Playful", value: "playful" },
  { label: "Flirty", value: "flirty" },
  { label: "Witty", value: "witty" },
  { label: "Chaotic", value: "chaotic" },
  { label: "Sarcastic", value: "sarcastic" },
  { label: "Serious", value: "serious" },
];

export default function VibeInputScreen({ navigation, route }) {
  const [selected, setSelected] = useState([]);

  const toggleVibe = (vibe) => {
    setSelected((prev) =>
      prev.includes(vibe) ? prev.filter((v) => v !== vibe) : [...prev, vibe]
    );
  };

  const canProceed = selected.length > 0;

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
        {/* Headline & Instruction */}
        <View style={styles.centerContent}>
          <Text style={styles.headline}>
            Pick your vibe <Text style={styles.sparkle}>✨</Text>
          </Text>
          <Text style={styles.instruction}>
            Choose one or more tones you like from the list below
          </Text>
          {/* Vibe Grid */}
          <View style={styles.vibeGrid}>
            {VIBES.map((vibe, idx) => (
              <TouchableOpacity
                key={vibe.value}
                style={[
                  styles.vibeBtn,
                  selected.includes(vibe.value) && styles.vibeBtnSelected,
                ]}
                activeOpacity={0.85}
                onPress={() => toggleVibe(vibe.value)}
              >
                <Text
                  style={[
                    styles.vibeBtnText,
                    selected.includes(vibe.value) && styles.vibeBtnTextSelected,
                  ]}
                >
                  {vibe.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Note */}
          <Text style={styles.note}>
            Go with whatever feels most "you"{"\n"}—we'll do the rest. 😎
          </Text>
        </View>
        {/* Next Button */}
        <View style={styles.nextBtnContainer}>
          <TouchableOpacity
            style={[styles.nextBtn, { opacity: canProceed ? 1 : 0.5 }]}
            activeOpacity={0.85}
            disabled={!canProceed}
            onPress={() =>
              navigation.navigate("InterestsInput", {
                name:
                  (typeof route !== "undefined" && route?.params?.name) ||
                  "You",
              })
            }
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
        {/* Progress Bar */}
        <View style={styles.progressBarRow}>
          <View style={styles.progressBarActive} />
          <View style={styles.progressBarInactive} />
          <View style={styles.progressBarInactive} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const btnHeight = screenWidth * 0.13;
const btnWidth = (screenWidth * 0.9 - screenWidth * 0.04) / 2;

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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.04,
    paddingTop: screenWidth * 0.13,
  },
  headline: {
    fontSize: screenWidth * 0.085,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.03,
  },
  sparkle: {
    fontSize: screenWidth * 0.085,
  },
  instruction: {
    fontSize: screenWidth * 0.045,
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: screenWidth * 0.06,
  },
  vibeGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: screenWidth * 0.06,
    gap: screenWidth * 0.03,
  },
  vibeBtn: {
    width: btnWidth,
    height: btnHeight,
    backgroundColor: "#fff",
    borderRadius: btnHeight / 2,
    borderWidth: 2,
    borderColor: "#C7BFE6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenWidth * 0.03,
  },
  vibeBtnSelected: {
    backgroundColor: "#A259FF",
    borderColor: "#A259FF",
  },
  vibeBtnText: {
    color: "#3A2466",
    fontSize: screenWidth * 0.05,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
  vibeBtnTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  note: {
    color: "#888",
    fontSize: screenWidth * 0.04,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Italic" : undefined,
    marginTop: screenWidth * 0.03,
    marginBottom: screenWidth * 0.03,
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
  progressBarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: screenWidth * 0.02,
    gap: screenWidth * 0.03,
  },
  progressBarActive: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#A259FF",
    width: "28%",
  },
  progressBarInactive: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E0D7F3",
    width: "28%",
  },
});
