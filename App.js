import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Header } from './components/header.js';
import { Status } from './components/status.js';
import { Card, CardStates } from './components/card.js';

export default function App() {
  const DATA = [1, 1, 2, 2];

  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      if (selected.get(id) == null || selected.get(id) == CardStates.INITIAL) {
        newSelected.set(id, CardStates.SELECTED);
      }
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header value="Memory Game" />
      <View style={styles.row} >
        <Status title="Level" subTitle="1" />
        <Status title="Score" subTitle="0" />
      </View>

      <View style={{ paddingBottom: 40 }}>
        <Status title="Time Left" subTitle="0:57" />
      </View>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item, index }) => <Card value={item} id={index} onSelect={onSelect} state={selected.get(index)} />}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 28,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
});


