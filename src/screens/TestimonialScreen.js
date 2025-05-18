import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const profileImg = require("../../assets/images/james.png");
const twoHearts = require("../../assets/images/two_hearts.png");

export default function TestimonialScreen({ navigation }) {
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
        {/* Headline and Heart */}
        <View style={styles.headlineRow}>
          <Text style={styles.headline}>Testimonial</Text>
          <Text style={styles.heartEmoji}>💗</Text>
        </View>
        {/* Testimonial Cards */}
        <View style={styles.cardsContainer}>
          {[1, 2].map((_, idx) => (
            <View style={styles.card} key={idx}>
              <Image source={profileImg} style={styles.profileImg} />
              <View style={styles.textBlock}>
                <Text style={styles.name}>James</Text>
                <Text style={styles.testimonialText}>
                  My dating life literally exploded!!
                </Text>
              </View>
            </View>
          ))}
        </View>
        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("NameInput")}
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
    paddingTop: screenWidth * 0.18,
    paddingHorizontal: screenWidth * 0.04,
  },
  headlineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenWidth * 0.08,
    width: "100%",
  },
  headline: {
    fontSize: screenWidth * 0.1,
    fontWeight: "bold",
    color: "#3A2466",
    textAlign: "center",
    fontFamily: "Inter-Bold",
    flex: 0,
  },
  heartEmoji: {
    fontSize: screenWidth * 0.07,
    marginLeft: screenWidth * 0.02,
    textShadowColor: "#e0a0c0",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  cardsContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: screenWidth * 0.1,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: screenWidth * 0.06,
    flexDirection: "row",
    alignItems: "center",
    padding: screenWidth * 0.05,
    marginBottom: screenWidth * 0.06,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  profileImg: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    borderRadius: screenWidth * 0.075,
    marginRight: screenWidth * 0.04,
  },
  textBlock: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: screenWidth * 0.055,
    fontWeight: "bold",
    color: "#222",
    fontFamily: "Inter-Bold",
    marginBottom: screenWidth * 0.01,
  },
  testimonialText: {
    fontSize: screenWidth * 0.045,
    color: "#222",
    fontFamily: "Inter-Regular",
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
    fontFamily: "Inter-Bold",
  },
});
