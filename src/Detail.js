import React, { Fragment, Component } from 'react';
import {

    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    Picker,
    Modal
} from 'react-native';
import ReactNativePicker from 'react-native-picker-module'
import TutorItemCell from './cells/TutorItemCell.js'
import LocationPicker from './Components/LocationPicker'
import PlacePicker from './Components/PlacePicker'

export default class DetailScreen extends Component {

    constructor(props) {
        super(props)
        //this.placePicker = React.createRef()
    }
    state = {
        data: [],
        subjects:[],
        places:[],
        selectedPlace:null,
        selectedSubject:null,
        showPicker: false
    }


    componentDidMount() {

    }
    componentWillMount() {

        console.log("componentWillMount")
        this.fetchSubjects()
        this.fetchPlaces()
        fetch("http://localhost:3000/tutor")
            .then((response) => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse);
                this.setState({
                    data: jsonResponse
                })
                //return jsonResponse
            }).catch((error) => {
                console.log(error);

            })


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

    fetchSubjects = async () => {

        fetch("http://localhost:3000/subject")
            .then((response) => response.json())
            .then((jsonResponse) => {
                console.log(jsonResponse);
                this.setState({
                    subjects: jsonResponse
                })
                //return jsonResponse
            }).catch((error) => {
                console.log(error);

            })
    }


    _renderRowItem = ({ item }) => {
        console.log("Item", item)
        return (
            <View >
                <TutorItemCell style = {styles.tutorItemCell}
                 tutor = {item}/>
            </View>
        )
    }

    _choosePlace = () => {
        console.log("Choose Place Button Action")
        //this.pickerPlace.show()
        this.setState({
            showPicker:true
        })
       
    }
    _chooseSubject = () => {
        console.log("Choose Subject Button Action")
        this.pickerRef.show()
    }

    render() {

        console.log("Hello");
        const list = this.state.data

        return (
            <View style={styles.container}>
                <View style={styles.topViewContainer}>
                    <LocationPicker style={styles.locationPicker} 
                    onClickHandler = {this._choosePlace}/>
                    <PlacePicker style={styles.placePicker} 
                    values = {this.state.subjects.map(item => item.title)}
                    onConfirm = {(value, index) => {
                            console.log("value: ", value)
                            console.log("index: ", index)
                             this.setState({
                                 selectedSubject: value
                             })
                        }}
                    />
                    <ReactNativePicker
                        pickerRef={e => this.pickerPlace = e}
                        value = {this.state.selectedPlace}
                        title = {"Select a place"}
                        items = {this.state.places.map(item => item.title)}
                        onCancel = {()=>{console.log('Cancelled')}}
                        onValueChange = { (value,index) => {
                            console.log("value: ",value)
                            console.log("index: ",index)
                            this.setState({
                                selectedPlace:value
                            })
                        }}
                    />
                    <View>
                        <Modal
                        animationType = "slide"
                        transparent = {true}
                        visible = {this.state.showPicker}
                        >
                        <View style = {styles.modelContainer}>
                            <View style = {styles.modelBG}>
                                <Text>Hello World!</Text>
                            </View>
                        </View>    
                        
                        </Modal>
                    </View>
                </View>

                <View style={styles.tableContainer}>
                    <FlatList
                        data={list}
                        renderItem={this._renderRowItem}
                    />
                </View>

            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    topViewContainer: {
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: 100
    },
    picker: {
        margin: 5,
        backgroundColor: "grey",
        height: 40
    },
    tutorItemCell: {
        width: "100%",
        height: 120,
        backgroundColor: "transparent",

      },
    tableContainer: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'white',
        
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'blue'
    },

    locationPicker: {
        top: "10%",
        left: "2%",
        width: "96%",
        height: "40%",
        position: "absolute"
      },
      placePicker: {
        top: "60%",
        left: "2%",
        width: "96%",
        height: "40%",
        position: "absolute"
      },
      modelContainer: {
        flex:1,  
        justifyContent: 'flex-end',
      },
      modelBG: {
          backgroundColor: "blue",
          height: 500,
          width: "100%",
          
        
      }
})