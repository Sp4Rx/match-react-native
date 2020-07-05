import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    roundedRectangle: {
        borderRadius: 10,
        backgroundColor: '#388e3c',
   flex: 1,
   height:250,
   margin: 4,
    },
})

function Card(props) {
    return (<View style={styles.roundedRectangle}></View>);
}

export { Card };