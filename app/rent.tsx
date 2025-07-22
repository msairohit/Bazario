import { Button } from "@/components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export default function RentPage() {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(20);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 500 });
        translateY.value = withTiming(0, { duration: 500 });
    }, []);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Rent an Item" }} />
            <Animated.View style={[styles.content, animatedStyle]}>
                <FontAwesome5 name="key" size={80} color="#f39c12" />
                <Text style={styles.title}>Coming Soon!</Text>
                <Text style={styles.subtitle}>
                    Our rental marketplace is being built. Soon you'll be able to rent
                    items with ease.
                </Text>
                <Button title={"Go Back"} onPress={() => router.back()} />

            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: 20,
    },
    content: {
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#1c1e21",
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#606770",
        textAlign: "center",
        maxWidth: "90%",
        marginBottom: 40,
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 2,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});