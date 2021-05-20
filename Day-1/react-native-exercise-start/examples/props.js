import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <Text style={{ fontSize: 18, paddingBottom: 20 }}>Props let you customize React components. For example, here you pass each <Text style={{backgroundColor: 'lightgray'}}>{'<'}Cat{'>'}</Text> a different <Text style={{backgroundColor: 'lightgray'}}>name</Text> for <Text style={{backgroundColor: 'lightgray'}}>Cat</Text> to render:</Text>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, paddingTop: 10 }}>PropsDemo</Text>
      <Cafe />
    </View>
  );
}