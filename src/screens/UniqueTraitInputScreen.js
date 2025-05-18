import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function UniqueTraitInputScreen({ navigation, route }) {
  const [input, setInput] = useState("");
  const canProceed = input.trim().length > 0;

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              What is something unique about you?
            </Text>
            <Text style={styles.instruction}>
              This could be something oddly specific, low-key nerdy, or just
              delightfully random. The weirder or more personal, the
              better—we'll make it shine.
            </Text>
            {/* Input Box */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="E.g. I collect vintage maps ... I'm obsessed with fermentation ... I always cry during Pixar movies ..."
                placeholderTextColor="#B0B0B0"
                value={input}
                onChangeText={setInput}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                autoCorrect={false}
                autoCapitalize="sentences"
                returnKeyType="done"
              />
            </View>
          </View>
          {/* Next Button */}
          <View style={styles.nextBtnContainer}>
            <TouchableOpacity
              style={[styles.nextBtn, { opacity: canProceed ? 1 : 0.5 }]}
              activeOpacity={0.85}
              disabled={!canProceed}
              onPress={() =>
                navigation.navigate("AIPrompt", {
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
            <View style={styles.progressBarActive} />
            <View style={styles.progressBarActive} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.04,
    paddingTop: screenWidth * 0.13,
  },
  headline: {
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.03,
  },
  instruction: {
    fontSize: screenWidth * 0.045,
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginBottom: screenWidth * 0.04,
    marginTop: screenWidth * 0.01,
  },
  inputWrapper: {
    width: "92%",
    backgroundColor: "#fff",
    borderRadius: screenWidth * 0.07,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: screenWidth * 0.04,
    minHeight: screenWidth * 0.32,
    maxHeight: screenWidth * 0.5,
    justifyContent: "flex-start",
  },
  input: {
    width: "100%",
    fontSize: screenWidth * 0.048,
    color: "#3A2466",
    paddingVertical: screenWidth * 0.045,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: screenWidth * 0.07,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    textAlign: "left",
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
});
