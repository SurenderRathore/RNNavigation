import React, { Component } from "react";
import { StyleSheet, View, Text ,TouchableOpacity} from "react-native";

export default class LocationPicker extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.locationBg} />
        <TouchableOpacity onPress={this.props.onClickHandler} style={styles.locationButton}>
            <Text style={styles.location}>{this.props.title}</Text>
            <Text style={styles.locationOnMaterial}></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  locationBg: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(231,231,231,1)",
    position: "absolute",
    opacity: 0.9,
    borderRadius: 10
  },
  locationButton:{
    top: "25.71%",
  },
  location: {
    top: "25.71%",
    left: "12.84%",
    width:"80%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "lato-regular"
  },
  locationOnMaterial: {
    top: "28.57%",
    left: "3.58%",
    backgroundColor: "transparent",
    color: "rgba(147,146,146,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "lato-regular"
  }
});