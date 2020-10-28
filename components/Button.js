import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export class Button extends React.Component {
  static defaultProps = {
    onPress: function() {},
    title: "",
    color: "white",
    backgroundColor: "black",
    style: {},
  }

  render() {
    const { backgroundColor, color, title, style, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, {backgroundColor}, {...style}]}
      >
        <Text style={[styles.text, {color}]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    marginTop: 10,
    width: 80 ,
    height: 80 ,
    borderRadius: 40,
  },
  text: {fontSize: 30},
});
