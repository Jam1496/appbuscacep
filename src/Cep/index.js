import React, {useState} from 'react';

import {StylesSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard} from 'react-native';

import api from '../services/api';

function Cep(){

    //criando nosso state para armazenar o cep
    let [cep, setCep] = useState('');
    let [cepUsuario, setCepUsuario] = useState(null);

    return(

        <View style={styles.container}>

            <Image
                source={{uri: 'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-47-512.png'}}
                style={{width: 128, height: 128, marginTop: 50}}
                resizeMode='cover'
            />
            <Text style={styles.titulo}>Busca de CEP</Text>
                <TextInput style={styles.bsuca}
                keyboardType='numeric'
                placeholder='Digite um CEP (ex: 12345100)'
                value={cep}
                onChangeText={ (valor) => setCep(valor)}
            />

                <TouchableOpacity style={styles.botao} >
                    <Text style={styles.textoBotao}>Pesquisar</Text>

                </TouchableOpacity>

                <View style={styles.resultado}>
                    <Text style={styles.TextoResultado}>Cep:18133-400</Text>
                    <Text style={styles.TextoResultado}>Rua: Rua da Silva Sauro</Text>
                    <Text style={styles.TextoResultado}>Bairro: Centro</Text>
                    <Text style={styles.TextoResultado}>Cidade: São Roque</Text>
                    <Text style={styles.TextoResultado}>Uf: SP</Text>

                </View>
        </View>

    )
}

export default Cep;

const styles = StylesSheet.create({

    container:{
        backgroundColor:'#0099CC',
        flex:1,
        alignItems:'center',
    },

    titulo:{
        marginTop:25,
        color:'white',
        marginBottom:15,
        fontSize:25,
        fontWeight:'bold'
    },

    bsuca:{
        fontSize:20,
        color:'#FFF',
        width: '90%',
        padding:20,
        borderColor:'white',
        borderWidth:1
    },

    botao:{
        backgroundColor:'#333399',
        height:50,
        width:'90%',
        justifyContent:'center',
        alignItems: 'center',
        padding:10,
        borderRadius:20,
        marginTop:20
    },

    textoBotao:{
        fontSize:15,
        color:'#FFF'
    },

    resultado:{
        marginTop:50,
        marginLeft:20,
        alignItems:'center',
    },

    TextoResultado:{
        fontSize:20,
        color:'#FFF',   
    }
    
 });