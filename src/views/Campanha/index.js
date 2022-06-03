import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Platform, Button, View }
    from 'react-native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'
import Api from '../../resources/api/Api'
import NavBar from '../../components/styled/NavBar'
import {Container, Title} from './styles'
import {InputArea} from '../../components/styled/Others'

export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.campanha :
        {
            titulo: '', endereco: '', sobre: '', dataInicio: '', dataTermino: '',
            categoria: '', observacoes: '', numero: '', voluntarios: '',
        }

        const [campanha, setCampanha] = useState(registroInicial)

        const salvarCampanha = async (dadosCampanha) => {
            console.log(dadosCampanha)
            let salvar = dadosCampanha.hasOwnProperty('_id') ? await Api.alteraCampanha(dadosCampanha) : await Api.incluiCampanha(dadosCampanha)
            if(salvar.hasOwnProperty('errors')){
                Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
            } else if(salvar.hasOwnProperty('acknowledged')){
                Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
                navigation.navigate('Home')
            }
        }
    
        async function confirmaExclusaoRegistro(idCampanha){
            if(Platform.OS !=='web'){
                try{
                    Alert.alert('Atenção!', 'Deseja mesmo excluir?',[
                        {text:'Não', style:'cancel'},
                        {text:'Sim', onPress: async()=>{apagaCampanha(idCampanha)}}
                    ])
                }catch(response){
                    Alert.alert(response.data.error)
                }
            }
            if(confirm('Atenção!\nDeseja mesmo excluir?')){
                apagaCampanha(idCampanha)
            }
        }
    
        const apagaCampanha= async(idCampanha)=>{
            console.log(idCampanha)
            let apagar = await Api.removeCampanha(idCampanha)
            if (apagar.hasOwnProperty('errors')){
                Platform.OS === 'web' ? alert(`Erro:  ${apagar.errors[0].msg}`) : Alert.alert('Erro', apagar.errors[0].msg)
            }else if(apagar.hasOwnProperty('acknowledged')){
                Platform.OS === 'web' ? alert('Registro removido') : Alert.alert('OK', 'Registro removido')
                navigation.navigate('Home')
            }
        }

    return(
        <>
        <NavBar/>
        <Container>
        <Title>Campanha</Title>
        <InputArea>
        
            <View>
                
                <Text style={styles.label}>Título</Text>
                <TextInput
                    name='titulo'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, titulo: text })}
                    value={campanha.titulo}
                    keyboardType='default'
                    placeholder='Título'
                    maxLength={100}
                />
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    name='endereco'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, endereco: text })}
                    value={campanha.endereco}
                    keyboardType='default'
                    placeholder='Endereço de coleta da campanha'
                    maxLength={100}
                />
                <Text style={styles.label}>Sobre</Text>
                <TextInput
                    name='sobre'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, sobre: text })}
                    value={campanha.sobre}
                    keyboardType='default'
                    placeholder='Sobre'
                    maxLength={300}
                />
                <Text style={styles.label}>Data Início</Text>
                <TextInput
                    name='dataInicio'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, dataInicio: text })}
                    value={campanha.dataInicio}
                    keyboardType='default'
                    placeholder='Data de Inicio da campanha'
                    maxLength={14}
                />
                <Text style={styles.label}>Data Término</Text>
                <TextInput
                    name='dataTermino'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, dataTermino: text })}
                    value={campanha.dataTermino}
                    keyboardType='default'
                    placeholder='Data de Término da campanha'
                    maxLength={14}
                />
                <Text style={styles.label}>Categoria da campanha</Text>
                <TextInput
                    name='categoria'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, categoria: text })}
                    value={campanha.categoria}
                    keyboardType='default'
                    placeholder='Categoria da campanha: Alimentos, Brinquedos, Livros, Escolar, Roupas, Eletrônicos, Limpeza, Higiene,  Dinheiro, Outro'
                    maxLength={100}
                />
                <Text style={styles.label}>Observações</Text>
                <TextInput
                    name='observacoes'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, observacoes: text })}
                    value={campanha.observacoes}
                    keyboardType='default'
                    placeholder='Observações sobre os itens'
                    maxLength={100}
                />
                <Text style={styles.label}>Telefone de Contato</Text>
                <TextInput
                    name='numero'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, numero: text })}
                    value={campanha.numero}
                    keyboardType='default'
                    placeholder='Telefone para Contato'
                    maxLength={100}
                />
                <Text style={styles.label}>Voluntários</Text>
                <TextInput
                    name='voluntarios'
                    style={styles.input}
                    onChangeText={(text) => setCampanha({ ...campanha, voluntarios: text })}
                    value={campanha.voluntarios}
                    keyboardType='default'
                    placeholder='Aceita voluntários? Sim ou Não'
                    maxLength={3}
                />

            </View> 
            </InputArea> 
            </Container>

            <Button
                    onPress={() => salvarCampanha(campanha)}
                    title='Salvar a Campanha'
                    color={themes.padrao.colors.rosa}
                    accessibilityLabel='Salvar os dados'
                />
                 <Button
                    onPress={() => navigation.navigate('Home')}
                    title='Cancelar'
                    color={themes.padrao.colors.azul}
                    accessibilityLabel='Cancelar'
                />

                <Button
                    onPress={() => confirmaExclusaoRegistro(campanha._id)}
                    title='Apagar'
                    color={themes.padrao.colors.amarelo}
                    accessibilityLabel='Cancelar'
                />
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40, margin: 8, borderWidth: 1,
        borderColor: themes.padrao.colors.middleBlack, padding: 8
    },
    label: { marginLeft: 8, marginTop: 8, marginBottom: 4, fontSize: 14 }
})