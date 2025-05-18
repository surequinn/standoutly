import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Clipboard,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import FeedbackPopup from "./FeedbackPopup";

const { width: screenWidth } = Dimensions.get("window");

const prompts = [
  "Dating Me Like comforting, a little surprising, and best when shared.",
  "a well-cooked meal—comforting, a little surprising, and best when shared.",
  "Dating Me Like comforting, a little surprising, and best when shared.",
];

export default function ResultScreen({ navigation }) {
  const [copied, setCopied] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackIdx, setFeedbackIdx] = useState(null);

  const handleCopy = async (text) => {
    if (Platform.OS === "android") {
      await Clipboard.setString(text);
      ToastAndroid.show("Copied", ToastAndroid.SHORT);
    } else {
      await Clipboard.setString(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  const openFeedback = (idx) => {
    setFeedbackIdx(idx);
    setShowFeedback(true);
  };

  const closeFeedback = () => {
    setShowFeedback(false);
    setFeedbackIdx(null);
  };

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
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.centeredContent}>
            {/* Headline with sparkles */}
            <View style={styles.headlineRow}>
              <Text style={styles.sparkle}>✨✨</Text>
              <Text style={styles.headline}>Magic's done!</Text>
            </View>
            {/* Dropdown card for section title */}
            <View style={styles.dropdownCard}>
              <Text style={styles.dropdownText}>Dating Me Like</Text>
              <Ionicons
                name="chevron-down"
                size={screenWidth * 0.07}
                color="#3A2466"
                style={styles.dropdownIcon}
              />
            </View>
            {/* Prompt cards */}
            {prompts.map((prompt, idx) => (
              <View style={styles.promptCard} key={idx}>
                <Text style={styles.quoteMarkLeft}>“</Text>
                <Text style={styles.promptText}>{prompt}</Text>
                <Text style={styles.quoteMarkRight}>”</Text>
                <View style={styles.promptActions}>
                  <TouchableOpacity onPress={() => handleCopy(prompt)}>
                    <Ionicons
                      name="copy-outline"
                      size={screenWidth * 0.06}
                      color="#3A2466"
                      style={styles.actionIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openFeedback(idx)}>
                    <Ionicons
                      name="create-outline"
                      size={screenWidth * 0.06}
                      color="#3A2466"
                      style={styles.actionIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* Edit Button */}
        <View style={styles.editBtnContainer}>
          <TouchableOpacity
            style={styles.editBtn}
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <LinearGradient
              colors={["#A259FF", "#5FD3FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.editBtnGradient}
            >
              <Text style={styles.editBtnText}>Edit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* Copied Snackbar for iOS */}
        {copied && Platform.OS === "ios" && (
          <View style={styles.copiedToast}>
            <Text style={styles.copiedToastText}>Copied</Text>
          </View>
        )}
        {/* Feedback Popup */}
        <FeedbackPopup
          visible={showFeedback}
          onClose={closeFeedback}
          onSubmit={closeFeedback}
          onChangeTone={() => {
            closeFeedback();
            // Optionally navigate to vibe selection or another flow
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const cardRadius = screenWidth * 0.09;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: screenWidth * 0.1,
  },
  centeredContent: {
    alignItems: "center",
    width: "100%",
    marginTop: screenWidth * 0.08,
    marginBottom: screenWidth * 0.04,
  },
  headlineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenWidth * 0.04,
    width: "100%",
  },
  sparkle: {
    fontSize: screenWidth * 0.09,
    marginRight: screenWidth * 0.02,
  },
  headline: {
    fontSize: screenWidth * 0.09,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  dropdownCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: cardRadius,
    paddingVertical: screenWidth * 0.035,
    paddingHorizontal: screenWidth * 0.07,
    marginBottom: screenWidth * 0.04,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    minWidth: "70%",
    maxWidth: "90%",
    justifyContent: "space-between",
  },
  dropdownText: {
    fontSize: screenWidth * 0.06,
    fontWeight: "600",
    color: "#3A2466",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
    fontStyle: "italic",
  },
  dropdownIcon: {
    marginLeft: screenWidth * 0.03,
  },
  promptCard: {
    backgroundColor: "#fff",
    borderRadius: cardRadius,
    paddingVertical: screenWidth * 0.05,
    paddingHorizontal: screenWidth * 0.07,
    marginBottom: screenWidth * 0.045,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    position: "relative",
  },
  quoteMarkLeft: {
    position: "absolute",
    top: screenWidth * 0.04,
    left: screenWidth * 0.045,
    fontSize: screenWidth * 0.09,
    color: "#3A2466",
    opacity: 0.7,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  quoteMarkRight: {
    position: "absolute",
    bottom: screenWidth * 0.04,
    right: screenWidth * 0.045,
    fontSize: screenWidth * 0.09,
    color: "#3A2466",
    opacity: 0.7,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  promptText: {
    fontSize: screenWidth * 0.052,
    color: "#3A2466",
    textAlign: "left",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    marginVertical: screenWidth * 0.01,
    marginLeft: screenWidth * 0.07,
    marginRight: screenWidth * 0.07,
    minHeight: screenWidth * 0.09,
  },
  promptActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: screenWidth * 0.03,
  },
  actionIcon: {
    marginLeft: screenWidth * 0.05,
  },
  editBtnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: screenWidth * 0.08,
  },
  editBtn: {
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
  editBtnGradient: {
    borderRadius: screenWidth * 0.12,
    paddingVertical: screenWidth * 0.045,
    alignItems: "center",
    justifyContent: "center",
  },
  editBtnText: {
    color: "#fff",
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  copiedToast: {
    position: "absolute",
    bottom: screenWidth * 0.18,
    alignSelf: "center",
    backgroundColor: "#23172A",
    borderRadius: 18,
    paddingHorizontal: 28,
    paddingVertical: 12,
    zIndex: 100,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  copiedToastText: {
    color: "#fff",
    fontSize: screenWidth * 0.045,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
});
