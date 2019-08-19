import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Modal,
    Text,
    FlatList,
    Button,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    Animated
} from 'react-native'


export default class PlaceModel extends Component {

    constructor(props)
    {
        super(props);
        //this.Animation = new Animated.Value(0);
    }
    state = {
        places: [],
        showModel: this.props.visible,
        selectedPlace: null,
        Animation: new Animated.Value(0),
    }

    componentDidMount()
    {
        // If you want to Start the animation on button click then call this function on button onPress event.
        console.log("componentDidMount")
        //this.StartBackgroundColorAnimation();

    }
 
 
    StartBackgroundColorAnimation = () =>
    {
        Animated.timing(
            this.state.Animation,
            {
                toValue: 1,
                duration: 5000
            }
        ).start(() => { });
    }

    componentWillMount() {
        this.fetchPlaces()
    }


    fetchPlaces = async () => {

        fetch("http://localhost:3000/place")
            .then((response) => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse);
                this.setState({
                    places: jsonResponse
                })
                //return jsonResponse
            }).catch((error) => {
                console.log(error);

            })
    }

    _closeButtonClicked = () => {
        this.props.onClose()

    }

    _rowClicked = (item) => {
        console.log("Row Item", item);
        this.setState({
            selectedPlace: item
        }, () => {
            console.log("Selected Place Updated ", this.state.selectedPlace)
            this.props.onClose(item)
        })
    }

    _renderRow = ({ item }) => {
        console.log("Item", item);
        return (
            <TouchableWithoutFeedback onPress={() => this._rowClicked(item)}>
                <View style={styles.rowContainer}>
                    <Text style={styles.location}>{item.title}</Text>
                    <Text style={styles.locationAddress}>{item.address}</Text>
                    {(this.state.selectedPlace && this.state.selectedPlace.id == item.id) ? <Image
                        source={require("../assets/images/tick.png")}
                        style={styles.checkmark}
                    /> : null}

                </View>
            </TouchableWithoutFeedback>

        )
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.visible}>
                    <Animated.View style={[styles.modelContainer
                    ]
                    }
                    >
                        <View style={styles.modelBG}>
                            <Text style={styles.title}>Choose meeting location</Text>
                            <View style={styles.listContainer}>
                                {console.log("Flat List")}
                                <FlatList
                                    data={this.state.places}
                                    extraData={this.state.selectedPlace}
                                    renderItem={this._renderRow}
                                >

                                </FlatList>

                            </View>
                            <View style={styles.closeButtonBG}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={this._closeButtonClicked}
                                >
                                    <Image
                                        source={require("../assets/images/Cancel.png")}

                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Animated.View>

                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modelContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "transparent",
        

    },
    modelBG: {
        backgroundColor: "#518ED4",
        height: "60%",
        width: "100%",
        borderRadius: 40

    },
    title: {

        //top:"5%",
        // left:"10%",  
        // position: "absolute",
        marginTop: 20,
        marginLeft: 30,
        fontSize: 18,
        fontFamily: "lato-regular",
        color: "#A7CDFA",
        //height:40
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
        marginLeft: 25,
        //backgroundColor: "red"
    },
    rowContainer: {
        height: 44,
        margin: 5
    },
    location: {
        top: "0.00%",
        left: "0.00%",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "lato-bold"
    },
    locationAddress: {
        top: "65.91%",
        left: "0.00%",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,1)",
        position: "absolute",
        fontSize: 12,
        fontFamily: "lato-regular"
    },
    checkmark: {
        top: "10%",
        right: "5.00%",
        position: "absolute",
    },
    closeButtonBG: {
        //justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    closeButton: {
        //justifyContent: 'center',


    }
})