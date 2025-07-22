import { router, Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card } from "../components/Card";
import products from "../constants/dummyProducts";

export default function BrowsePage() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Browse Products" }} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        onPress={() => router.push(`/product/${item.id}`)}
                    />
                )}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 8, backgroundColor: "#f9f9f9" },
});