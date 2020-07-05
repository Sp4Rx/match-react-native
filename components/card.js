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

function Card({ index, item, state, onSelect }) {
    return (
        <TouchableOpacity
            style={
                state == null || state == CardStates.INITIAL ?
                    styles.roundedRectangleGreen :
                    state == CardStates.SELECTED ?
                        styles.roundedRectangleWhiteBlackBorder :
                        styles.roundedRectangleWhiteBlueBorder}
            onPress={() => onSelect(index)} >
            <View >
                <Text style={styles.value}>{state == null || state == CardStates.INITIAL ? '' : item}</Text>
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