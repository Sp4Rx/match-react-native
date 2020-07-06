import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Header } from './components/header.js';
import { Status } from './components/status.js';
import { Card, CardStates } from './components/card.js';

export default function App() {
  const MAX_LEVEL = 10;
  const [selected, setSelected] = useState(new Map());
  const [data, setData] = useState(generateRandomCards(4));
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [columnCount, setColumnCount] = useState(2);
  const [clearSelected, setClearSelected] = useState(false);
  const [time, setTime] = useState('00:00');


  useEffect(() => {
    if (clearSelected) {
      selected.clear();
      setClearSelected(false);
    }
  });

  const onSelect = React.useCallback(
    (index) => {
      const newSelected = new Map(selected);
      if (selected.get(index) == null || selected.get(index) == CardStates.INITIAL) {
        newSelected.set(index, CardStates.SELECTED);
      }

      const selectedIndexes = getIndexesByState(newSelected, CardStates.SELECTED);

      //Can't think of a better logic now
      if (selectedIndexes.length == 2) {
        if (data[selectedIndexes[0]] == data[selectedIndexes[1]]) {
          newSelected.set(selectedIndexes[0], CardStates.MATCHED);
          newSelected.set(selectedIndexes[1], CardStates.MATCHED);
          setScore(score + 1);

          if (getIndexesByState(newSelected, CardStates.MATCHED).length == data.length) {
            if (level >= MAX_LEVEL) {
              alert('You won the game');
            } else {
              nextLevel();
            }
          }

        } else {
          newSelected.set(selectedIndexes[0], CardStates.INITIAL);
          newSelected.set(selectedIndexes[1], CardStates.INITIAL);
        }
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
        <Status title="Level" subTitle={level} />
        <Status title="Score" subTitle={score} />
      </View>

      <View style={{ paddingBottom: 40 }}>
        <Status title="Time Left" subTitle={time} />
      </View>
      <FlatList
        key={columnCount}
        numColumns={columnCount}
        data={data}
        renderItem={({ item, index }) => <Card item={item} index={index} onSelect={onSelect} state={selected.get(index)} />}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );

  function getIndexesByState(itemMap, state) {
    let indexes = [];
    for (const key of itemMap.keys()) {
      if (itemMap.get(key) === state) {
        indexes.push(key);
      }
    }
    return indexes;
  }

  function updateTime() {
    setTime(time + 1);

  }

  function nextLevel() {
    const newData = generateRandomCards(data.length + 2);
    setData(newData);
    setSelected(selected.clear());
    setLevel(level + 1);
    setColumnCount(newData.length % 3 == 0 ?
      3 :
      newData.length % 4 == 0 ?
        4 :
        2);

    setClearSelected(true);

  }
}

function generateRandomCards(length) {
  if (length % 2 != 0) {
    throw new Error('length must be even')
  }

  let data = new Array(length);

  for (let i = 0; i < data.length; i += 2) {
    data[i] = Math.floor(Math.random() * 100) + 1;
    data[i + 1] = data[i];
  }

  return shuffle(data);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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


