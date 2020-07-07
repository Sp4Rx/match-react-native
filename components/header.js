import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#03a9f4',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

function Header(props) {
  return <Text style={styles.header}>{props.value}</Text>;
}

export { Header };
