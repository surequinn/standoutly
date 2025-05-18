import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const FEEDBACK_OPTIONS = [
  "Too boring",
  "Too AI",
  "Not funny enough",
  "Too cliche",
];

export default function FeedbackPopup({
  visible,
  onClose,
  onSubmit,
  onChangeTone,
}) {
  const [selected, setSelected] = useState(null);
  const [input, setInput] = useState("");

  return (
    <Modal visible={visible} transparent animationType="fade">
      {/* Blurred/Dimmed Background */}
      <LinearGradient
        colors={["#E2C8FD", "#DFDEF4", "#D2FCE8", "#F5EBEC", "#F8CEFC"]}
        style={styles.gradientBg}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.overlay} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.popupCard}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={onClose}
              hitSlop={16}
            >
              <Ionicons
                name="close"
                size={screenWidth * 0.08}
                color="#23172A"
              />
            </TouchableOpacity>
            {/* Headline */}
            <Text style={styles.headline}>I need a glow up!</Text>
            {/* Feedback Options */}
            <View style={styles.optionsRow}>
              {FEEDBACK_OPTIONS.map((opt, idx) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.optionBtn,
                    selected === idx && styles.optionBtnSelected,
                  ]}
                  onPress={() => setSelected(idx)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected === idx && styles.optionTextSelected,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Change Tone Link */}
            <TouchableOpacity
              style={styles.changeToneBtn}
              onPress={onChangeTone}
            >
              <Text style={styles.changeToneText}>change tone</Text>
            </TouchableOpacity>
            {/* Input Field */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Slide your thoughts here ..."
                placeholderTextColor="#B0B0B0"
                value={input}
                onChangeText={setInput}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
                autoCorrect={false}
                autoCapitalize="sentences"
                returnKeyType="done"
              />
            </View>
            {/* Submit Button */}
            <TouchableOpacity
              style={[
                styles.submitBtn,
                { opacity: selected !== null || input.trim() ? 1 : 0.5 },
              ]}
              activeOpacity={0.85}
              disabled={selected === null && !input.trim()}
              onPress={() => {
                onSubmit &&
                  onSubmit({
                    feedback:
                      selected !== null ? FEEDBACK_OPTIONS[selected] : null,
                    extra: input.trim(),
                  });
                setSelected(null);
                setInput("");
              }}
            >
              <LinearGradient
                colors={["#A259FF", "#5FD3FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.submitBtnGradient}
              >
                <Text style={styles.submitBtnText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </Modal>
  );
}

const cardRadius = screenWidth * 0.09;

const styles = StyleSheet.create({
  gradientBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    opacity: 0.18,
    zIndex: 1,
  },
  popupCard: {
    width: "90%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: cardRadius,
    paddingVertical: screenWidth * 0.08,
    paddingHorizontal: screenWidth * 0.07,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    alignItems: "flex-start",
    zIndex: 2,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: screenWidth * 0.045,
    right: screenWidth * 0.045,
    zIndex: 3,
  },
  headline: {
    fontSize: screenWidth * 0.07,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "left",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
    marginBottom: screenWidth * 0.06,
    marginTop: screenWidth * 0.01,
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: screenWidth * 0.025,
    marginBottom: screenWidth * 0.03,
  },
  optionBtn: {
    backgroundColor: "#F3EFFF",
    borderRadius: cardRadius * 0.5,
    paddingVertical: screenWidth * 0.018,
    paddingHorizontal: screenWidth * 0.045,
    marginRight: screenWidth * 0.025,
    marginBottom: screenWidth * 0.025,
    borderWidth: 1.5,
    borderColor: "#F3EFFF",
    shadowColor: "#A259FF",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  optionBtnSelected: {
    backgroundColor: "#A259FF",
    borderColor: "#A259FF",
  },
  optionText: {
    color: "#3A2466",
    fontSize: screenWidth * 0.045,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
  optionTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  changeToneBtn: {
    marginBottom: screenWidth * 0.03,
    marginTop: -screenWidth * 0.01,
  },
  changeToneText: {
    color: "#3A2466",
    fontSize: screenWidth * 0.045,
    fontWeight: "600",
    textDecorationLine: "underline",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Medium" : undefined,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderRadius: cardRadius * 0.7,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginBottom: screenWidth * 0.04,
    minHeight: screenWidth * 0.18,
    justifyContent: "flex-start",
  },
  input: {
    width: "100%",
    fontSize: screenWidth * 0.048,
    color: "#3A2466",
    paddingVertical: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.04,
    borderRadius: cardRadius * 0.7,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : undefined,
    textAlign: "left",
  },
  submitBtn: {
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
  submitBtnGradient: {
    borderRadius: screenWidth * 0.12,
    paddingVertical: screenWidth * 0.045,
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
});
