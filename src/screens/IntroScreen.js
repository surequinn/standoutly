import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
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

// Add import for the logo
const aiLogo = require("../../assets/images/AI_chat_logo.png");
const twoHearts = require("../../assets/images/two_hearts.png");

function GradientText({ style, children, colors }) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  return (
    <View
      onLayout={(e) => setSize(e.nativeEvent.layout)}
      style={{ alignSelf: "flex-start" }}
    >
      {size.width > 0 && size.height > 0 ? (
        <MaskedView
          maskElement={
            <Text style={[style, { backgroundColor: "transparent" }]}>
              {children}
            </Text>
          }
        >
          <LinearGradient
            colors={colors || ["#8655d6", "#a58bf7", "#5fd3ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ width: size.width, height: size.height }}
          />
        </MaskedView>
      ) : (
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      )}
    </View>
  );
}

export default function IntroScreen({ navigation }) {
  const headlineGradient = [
    "#4BC4FF", // 0%
    "#1A9AFF", // 14%
    "#9676FF", // 27%
    "#BE64FE", // 44%
    "#E157CB", // 58%
    "#EF5794", // 69%
    "#FD683F", // 83%
    "#FE7C2B", // 94%
    "#FFA10B", // 100%
  ];

  return (
    <LinearGradient
      colors={["#E2C8FD", "#DFDEF4", "#D2FCE8", "#F5EBEC", "#F8CEFC"]}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Status Bar */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {/* App Name */}
        <Text style={styles.appName}>Standoutly</Text>
        {/* Main Content */}
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <View style={styles.mainContent}>
            <View style={styles.headlineBlock}>
              {/* Hearts image absolutely positioned, behind text */}
              <Image source={twoHearts} style={styles.heartsImage} />
              <View style={{ position: "relative", zIndex: 2 }}>
                <GradientText
                  style={styles.headline1}
                  colors={headlineGradient}
                >
                  Stand
                </GradientText>
                <GradientText
                  style={styles.headline2}
                  colors={headlineGradient}
                >
                  Out on
                </GradientText>
                <GradientText
                  style={styles.headline3}
                  colors={headlineGradient}
                >
                  Hinge
                </GradientText>
              </View>
            </View>
            <Text style={styles.effortless}>~Effortlessly</Text>
          </View>
          <View style={styles.buttonBottomRow}>
            <TouchableOpacity
              style={styles.getStartedBtn}
              activeOpacity={0.85}
              onPress={() => navigation.navigate("Testimonial")}
            >
              <LinearGradient
                colors={["#A259FF", "#5FD3FF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.getStartedGradient}
              >
                <Text style={styles.getStartedText}>Get started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {/* Footer */}
        <View style={styles.footerRow}>
          <Image source={aiLogo} style={styles.footerLogo} />
          <Text style={styles.instructionText}>
            Describe yourself in a few words,{"\n"}We'll do the rest.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const CIRCLE_SIZE = screenWidth * 0.7;
const CIRCLE_BOTTOM_SIZE = screenWidth * 1.1;

const styles = StyleSheet.create({
  appName: {
    fontSize: screenWidth * 0.065,
    fontWeight: "bold",
    color: "#000",
    marginTop: screenWidth * 0.08,
    marginLeft: screenWidth * 0.07,
    marginBottom: screenWidth * 0.02,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.07,
    paddingTop: screenWidth * 0.02,
  },
  headlineBlock: {
    width: "100%",
    marginBottom: screenWidth * 0.045,
    position: "relative",
    minHeight: screenWidth * 0.55,
    justifyContent: "flex-start",
  },
  headline1: {
    fontSize: screenWidth * 0.23,
    fontWeight: "bold",
    lineHeight: screenWidth * 0.25,
    fontFamily: "SpaceGrotesk-Bold",
    textAlign: "left",
    marginBottom: -screenWidth * 0.01,
  },
  headline2: {
    fontSize: screenWidth * 0.23,
    fontWeight: "bold",
    lineHeight: screenWidth * 0.25,
    fontFamily: "SpaceGrotesk-Bold",
    textAlign: "left",
    marginBottom: -screenWidth * 0.01,
  },
  headline3: {
    fontSize: screenWidth * 0.23,
    fontWeight: "bold",
    lineHeight: screenWidth * 0.25,
    fontFamily: "SpaceGrotesk-Bold",
    textAlign: "left",
    marginBottom: 0,
  },
  heartsImage: {
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 2, height: 6 },
    resizeMode: "contain",
  },
  effortless: {
    color: "#23172A",
    fontSize: screenWidth * 0.055,
    fontStyle: "italic",
    textAlign: "left",
    marginTop: screenWidth * 0.03,
    marginBottom: screenWidth * 0.09,
    marginLeft: screenWidth * 0.005,
  },
  getStartedBtn: {
    alignSelf: "center",
    borderRadius: 32,
    marginTop: screenWidth * 0.06,
    shadowColor: "#A259FF",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    width: "90%",
    maxWidth: screenWidth * 0.95,
  },
  getStartedGradient: {
    borderRadius: 32,
    paddingVertical: screenWidth * 0.045,
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedText: {
    color: "#fff",
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : undefined,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: screenWidth * 0.06,
    paddingBottom: screenWidth * 0.08,
    width: "100%",
  },
  logoCircle: {
    width: screenWidth * 0.275,
    height: screenWidth * 0.275,
    borderRadius: screenWidth * 0.1375,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: screenWidth * 0.07,
    shadowColor: "#A259FF",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  footerLogo: {
    width: screenWidth * 0.175,
    height: screenWidth * 0.175,
    resizeMode: "contain",
  },
  instructionText: {
    color: "#23172A",
    fontSize: screenWidth * 0.045,
    fontStyle: "italic",
    fontWeight: "400",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "left",
    lineHeight: screenWidth * 0.06,
  },
  buttonBottomRow: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: screenWidth * 0.06,
  },
});
