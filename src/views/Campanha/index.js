import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, ActivityIndicator, Button, View }
    from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../../themes'
import Api from '../../resources/api/Api'

export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.campanha :
        {
            titulo: '', sobre: '', dataInicio: '', DataTermino: '',
            endereco: '', categoria: '', observacoes: '', linkFoto: '', numero: '', voluntarios: '',
            descricaoAtividades: ''
        }

    const [campanha, setCampanha] = useState(registroInicial)

    const salvarPrestador = async (dadosCampanha) => {
        let salvar = dadosCampanha.hasOwnProperty('_id') ? await Api.alteraCampanha(dadosCampanha) : await Api.incluiCampanha(dadosCampanha)
        if(salvar.hasOwnProperty('errors')){
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if(salvar.hasOwnProperty('acknowledged')){
            Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
            navigation.navigate('Campanhas')
        }
    }

    async function confirmaExclusaoRegistro(idCampanha){
        if(Platform.OS !== 'web'){
            try{
                Alert.alert('Atenção', 'Deseja mesmo excluir?', [
                    {text: 'Não', style: 'cancel'},
                    {text: 'Sim', onPress: async() => {
                        apagaCampanha(idCampanha)
                    }}
                ])
            }
            catch(response){
                Alert.alert(response.data.error)
            }
        }
        if(confirm('Atenção!\nDeseja mesmo excluir?')){
            apagaCampanha(idCampanha)
        }
    }

    const apagaCampanha = async(idCampanha) => {
        let apagar = await Api.removeCampanha(idCampanha)

        if(apagar.hasOwnProperty('errors')){
            PLatform.OS === 'web' 
            ? alert (`Erro: ${apagar.errors[0].msg}`)
            : Alert.alert(`Erro: ${apagar.errors[0].msg} `)
        }
        else if(apagar.hasOwnProperty('acknowledged')){
            Platform.OS === 'web' ? alert ('Registro removido')
            : Alert.alert('Ok', 'Registro removido')
            navigation.navigate('Campanhas')
        }
    }




    
}