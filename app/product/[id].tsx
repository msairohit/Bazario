import { Button } from "@/components/Button";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import products from "../../constants/dummyProducts";

export default function ProductDetailsPage() {
    const { id } = useLocalSearchParams();
    console.log(id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product not found!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product.title }} />
            <ScrollView>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <Button title={"Add to cart"} style={styles.button} onPress={() => {
                /* Add to cart logic */
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
    button: {
        padding: 15,
        margin: 20,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

