/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @floww
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-searchbar';
import {connect} from 'react-redux';
import store from './../redux/store';
import ItemUserList from './../components/ItemUserList';
import TipsCarrusel from './../components/TipsCarrusel';
import Button from 'apsl-react-native-button';
import {db} from './../commons/constants';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  TouchableHighlight,
  Modal
} from 'react-native';


export default class HomeView extends Component{

  
  constructor(){
    super();
    this.state = {
      listaOdontologos: [],
      refreshing: false,
      modalVisible: false
    }
    this._onRefresh();
  }

  //Brayan: Funcion que se ejecuta al hacer scroll hacia abajo
  _onRefresh = () => {
    this.setState({refreshing: true});
    let that = this;
    //Obtenemos la lista de notas creadas por el usuario
    db.collection("odontologos/").get()
      .then(function(querySnapshot) {
        let odontologos = [];
        querySnapshot.forEach(function(doc) {
          odontologos.push(doc.data());
        });
        that.setState({listaOdontologos: odontologos});
        that.setState({refreshing: false});
      })
      .catch(function(error) {
          alert('Ha ocurrido un error, intentelo mas tarde')
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
         style={{flex: 1}}>
          <TipsCarrusel/>
          <View style={styles.rootContainer}>
            <FlatList
              data={this.state.listaOdontologos}
              style={{paddingLeft: 15, flex: 1, paddingBottom: 30}}
              numColumns={3}
              renderItem={({item}) => <ItemUserList user={item}/>}
            />
          </View>
        </ScrollView>
        <View style={styles.floatButton}>
            <View style={styles.float1}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon style={styles.icon1} name="md-school"/>
                <Text style={styles.txt1}>Universidad</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txt3}>|</Text>
            <View style={styles.float2}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon style={styles.icon2} name="md-options"/>
                <Text style={styles.txt2}>Servicio</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt3: {
    fontSize: 22,
    marginLeft: 10,
    color: '#37BC9B'
  },
  txt1: {
    marginLeft: 5,
    fontSize: 13,
    color: '#37BC9B',
    fontWeight: '600'
  },
  txt2: {
    marginLeft: 5,
    fontSize: 13,
    color: '#37BC9B',
    fontWeight: '600'
  },
  icon1: {
    fontSize: 18,
    color: '#37BC9B'
  },
  icon2: {
    fontSize: 18,
    color: '#37BC9B'
  },
  float1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  float2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatButton: {
    position: 'fixe',
    width: 230,
    height: 45,
    alignSelf: 'center',
    bottom: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
    borderColor: '#37BC9B', 
    borderWidth: 1.2,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20
  },
  searchBar: {
    position: 'absolute',
  }
});
