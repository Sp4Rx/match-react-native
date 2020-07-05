import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: "#263238",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    }, subTitle: {
        color: "#f4511e",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },
});


function Status(props) {

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
    );
}

export { Status };