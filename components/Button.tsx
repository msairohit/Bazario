import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/theme";

export const Button = ({ title, onPress, style }) => (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    txt: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
