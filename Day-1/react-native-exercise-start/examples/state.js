import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { ceil } from "react-native-reanimated";

//https://reactnative.dev/docs/state
const StateDemo = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18, paddingBottom: 20 }}>Demonstration of <Text style={{backgroundColor: 'lightgray'}}>State</Text> in React with Hooks:</Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Count: {count}</Text>
      <Button title={'Press Here'} onPress={onPress}/>
      </View>
    </View>
  );
}

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>State Demo</Text>
      <StateDemo />
    </View>
  );
}