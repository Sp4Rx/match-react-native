import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    roundedRectangleGreen: {
        borderRadius: 10,
        backgroundColor: '#388e3c',
        flex: 1,
        height: 250,
        borderWidth: 2,
        borderColor: '#388e3c',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedRectangleWhiteBlackBorder: {
        borderRadius: 10,
        backgroundColor: '#fff',
        flex: 1,
        height: 250,
        borderColor: '#000',
        borderWidth: 2,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedRectangleWhiteBlueBorder: {
        borderRadius: 10,
        backgroundColor: '#fff',
        flex: 1,
        height: 250,
        borderColor: '#03a9f4',
        borderWidth: 2,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    value: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
    },
})

function Card(props) {
    return (
        <TouchableOpacity
            style={
                props.state == null || props.state == CardStates.INITIAL ?
                    styles.roundedRectangleGreen :
                    props.state == CardStates.SELECTED ?
                        styles.roundedRectangleWhiteBlackBorder :
                        styles.roundedRectangleWhiteBlueBorder}
            onPress={() => props.onSelect(props.id)} >
            <View >
                <Text style={styles.value}>{props.state == null || props.state == CardStates.INITIAL ? '' : props.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const CardStates = {
    INITIAL: 'initial',
    SELECTED: 'selected',
    MATCHED: 'matched'
}

export { Card, CardStates };