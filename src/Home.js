
import React, {Fragment,Component} from 'react';
import {
   
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';


class HomeScreen extends Component {
    render() {
      return (
        <View style = {styles.container}>
            <Text style = {styles.heading}>Home Page</Text>
            <Button 
            title = 'Click Me'
            onPress = {() => this.props.navigation.push('DetailPage')}

            ></Button>
        </View>
      );
    }
  }



  const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    heading:{

    }
  })

  export default HomeScreen;