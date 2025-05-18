import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AccountCreationScreen from "./src/screens/AccountCreationScreen";
import AgeInputScreen from "./src/screens/AgeInputScreen";
import AIPromptScreen from "./src/screens/AIPromptScreen";
import CongratsScreen from "./src/screens/CongratsScreen";
import GenderInputScreen from "./src/screens/GenderInputScreen";
import InterestsInputScreen from "./src/screens/InterestsInputScreen";
import IntroScreen from "./src/screens/IntroScreen";
import NameInputScreen from "./src/screens/NameInputScreen";
import ResultScreen from "./src/screens/ResultScreen";
import TestimonialScreen from "./src/screens/TestimonialScreen";
import UniqueTraitInputScreen from "./src/screens/UniqueTraitInputScreen";
import VibeInputScreen from "./src/screens/VibeInputScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Testimonial" component={TestimonialScreen} />
        <Stack.Screen name="NameInput" component={NameInputScreen} />
        <Stack.Screen name="AgeInput" component={AgeInputScreen} />
        <Stack.Screen name="GenderInput" component={GenderInputScreen} />
        <Stack.Screen name="Congrats" component={CongratsScreen} />
        <Stack.Screen name="VibeInput" component={VibeInputScreen} />
        <Stack.Screen name="InterestsInput" component={InterestsInputScreen} />
        <Stack.Screen
          name="UniqueTraitInput"
          component={UniqueTraitInputScreen}
        />
        <Stack.Screen name="AIPrompt" component={AIPromptScreen} />
        <Stack.Screen
          name="AccountCreation"
          component={AccountCreationScreen}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
