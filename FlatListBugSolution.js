```javascript
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const FlatListBugSolution = () => {
  const memoizedItem = useMemo(() => Item, []); // Memoize Item component

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const getItemLayout = (data, index) => (
    {
      length: 50,
      offset: 50 * index,
      index
    }
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      getItemLayout={getItemLayout} // Significantly improves rendering performance
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
  },
});

export default FlatListBugSolution;
```