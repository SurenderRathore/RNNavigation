import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class TutorItemCell extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle26} />
        <View style={styles.rectangle28}>
          <Image
            source={require("../assets/images/face.jpg")}
            style={styles.imageBG}
          />
        </View>
        <Text style={styles.sofiaAlcocer}>{this.props.tutor.name}</Text>
        <View style={styles.rectangle29} />
        <View style={styles.rectangleCopy26} />
        <Text style={styles.style12}>{this.props.tutor.price}</Text>
        <Text style={styles.style13}>{this.props.tutor.rating}</Text>
        <Text style={styles.reviews6}>{this.props.tutor.reviews} Reviews</Text>
        <Text style={styles.starMaterial6}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white"
  },
  rectangle26: {
    backgroundColor: "white",
    margin:10,
    height:100,
    borderRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(194,194,194,0.5)",
    shadowOpacity: 1,
    shadowRadius: 19
  },
  rectangle28: {
    top: "16.22%",
    left: "71.56%",
    width: "22.46%",
    height: "67.57%",
    backgroundColor: "transparent",
    position: "absolute",
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 1,
    shadowRadius: 3
  },
  imageBG: {
    width:80,
    height:80
  },
  sofiaAlcocer: {
    top: "22.52%",
    left: "6.59%",
    backgroundColor: "transparent",
    color: "rgba(42,42,42,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "lato-regular",
    letterSpacing: 1
  },
  rectangle29: {
    top: "59.46%",
    left: "5.99%",
    width: "14.67%",
    height: "22.52%",
    backgroundColor: "rgba(235,235,235,1)",
    position: "absolute",
    opacity: 0.58,
    borderRadius: 3
  },
  rectangleCopy26: {
    top: "59.46%",
    left: "52.10%",
    width: "14.37%",
    height: "22.52%",
    backgroundColor: "rgba(235,235,235,1)",
    position: "absolute",
    opacity: 0.58,
    borderRadius: 3
  },
  style12: {
    top: "63.96%",
    left: "10.18%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "lato-regular"
  },
  style13: {
    top: "63.96%",
    left: "54.79%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "lato-regular"
  },
  reviews6: {
    top: "63.96%",
    left: "26.35%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "lato-regular"
  },
  starMaterial6: {
    top: "65.77%",
    left: "60.48%",
    backgroundColor: "transparent",
    color: "rgba(208,2,27,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "lato-regular"
  }
});