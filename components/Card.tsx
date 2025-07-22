import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme";

export const Card = ({ title, price, image, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        {image && <Image source={{ uri: image }} style={styles.img} />}
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>₹ {price}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginBottom: 12,
        borderRadius: 8,
        overflow: "hidden",
        elevation: 2,
    },
    img: { height: 150, width: "100%" },
    info: { padding: 12 },
    title: { fontSize: 18, marginBottom: 4, color: COLORS.text },
    price: { fontSize: 16, fontWeight: "bold", color: COLORS.primary },
});
