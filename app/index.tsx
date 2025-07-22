import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export default function Index() {
  // Animation values
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(30);
  const optionsOpacity = useSharedValue(0);

  // Animated styles
  const headerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
    transform: [{ translateY: headerTranslateY.value }],
  }));

  const optionsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: optionsOpacity.value,
  }));

  // Trigger animation on mount
  useEffect(() => {
    headerOpacity.value = withTiming(1, { duration: 800 });
    headerTranslateY.value = withTiming(0, { duration: 800 });
    optionsOpacity.value = withDelay(400, withTiming(1, { duration: 800 }));
  }, []);

  const options = [
    { title: "Buy", icon: "shopping-bag", screen: "/browse" },
    { title: "Sell", icon: "cash-register", screen: "/sell" }, // Placeholder
    { title: "Rent", icon: "key", screen: "/rent" }, // Placeholder
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
        <Text style={styles.title}>Welcome to Bazario</Text>
        <Text style={styles.subtitle}>
          Your one-stop marketplace for buying, selling, and renting anything.
        </Text>
      </Animated.View>

      <Animated.View style={[styles.optionsContainer, optionsAnimatedStyle]}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionCard}
            onPress={() => router.push(option.screen)}
          >
            <FontAwesome5 name={option.icon} size={32} color="#007bff" />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f2f5",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1c1e21",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#606770",
    textAlign: "center",
    maxWidth: "90%",
  },
  optionsContainer: {
    width: "100%",
  },
  optionCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  optionText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginLeft: 20,
  },
});