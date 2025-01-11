# React Native FlatList Performance Issue

This repository demonstrates a common performance problem in React Native when using `FlatList` with large datasets and complex components. The initial implementation suffers from slow scrolling and potential crashes.  The solution focuses on optimization techniques to improve performance.

## Problem

The `FlatListBug.js` file contains a `FlatList` rendering a large number of complex items.  This leads to performance degradation due to inefficient rendering and unnecessary re-renders.

## Solution

The `FlatListBugSolution.js` file shows optimized code using techniques like `keyExtractor`, `ItemSeparatorComponent`, `getItemLayout`, and `useMemo` to significantly improve performance.  Detailed explanations of each optimization are included in the comments within the file.

## Running the Example

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`. 