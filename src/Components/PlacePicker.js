import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ReactNativePicker from 'react-native-picker-module'

export default class PlacePicker extends Component {

    _chooseSubject = () => {
        console.log("Choose Subject Button Action")
        this.pickerRef.show()
    }

    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <View style={styles.locationBg} />
                <TouchableOpacity onPress={this._chooseSubject} style={styles.locationButton}>
                    <Text style={styles.location}> {this.props.title} </Text>
                    <Text style={styles.locationOnMaterial}></Text>
                </TouchableOpacity>

                <ReactNativePicker
                    pickerRef={e => this.pickerRef = e}
                    value={"Nothing"}
                    title={"Select a subject"}
                    items={this.props.values}
                    onCancel={() => { console.log('Cancelled') }}
                    onValueChange={this.props.onConfirm}
                />

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
    locationButton: {
        top: "25.71%",
    },
    location: {
        top: "25.71%",
        left: "12.84%",
        backgroundColor: "transparent",
        width:"80%",
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