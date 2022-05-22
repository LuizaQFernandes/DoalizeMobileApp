import React, { useState } from 'react'
import {Container, Title, Text} from './styles'
import Sidebar from '../../components/styled/Sidebar'
import {InputArea, StyledButton,  StyledMessageButton} from '../../components/styled/Others'
import IconInput from '../../components/styled/IconInput'
import { Alert, Platform } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Api from '../../resources/api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Cadastro(){
    
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [documento, setDocumento] = useState('')
    const [tipo, setTipo] = useState('')

    const handleMessageButtonClick = () => {

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Login' },
                ],
            })
        )
    }

    const handleSignClick = async () => {
        if (nome && senha && email && documento && tipo) {
            console.log(documento.length)
            let res = await Api.Cadastrar(nome, email, tipo, documento, senha)
            if (res.acknowledged) { //Retorno do backend se inseriu
                Platform.OS === 'web' ? alert(`Usuário criado! Efetue o login`) : Alert.alert("✅Aviso",`Usuário cadastrado com sucesso! \nPor favor, efetue o Login`)
                
                navigation.navigate('Login') //Direcionamos para o login

            } else {
                Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
            }
        } else {
            Platform.OS === 'web' ? alert(`Preencha todos os campos`) : Alert.alert("‼️Erro", 'Preencha todos os campos')
        }

    }


    return (
        <>
        <Sidebar/>
        <Container>
            <Title>Cadastro</Title>
            <InputArea>
                <Text>Nome</Text>
                <IconInput
                    placeholder="Informe seu nome"
                    value={nome}
                    onChangeText={t => setNome(t)}
                />
                <Text>Email</Text>
                <IconInput
                    placeholder="Informe seu email"
                    value={email}
                    onChangeText={t => setEmail(t)}
                />
                <Text>Tipo</Text>
                <IconInput
                    placeholder="Pessoa Física ou Jurídica"
                    value={tipo}
                    onChangeText={t => setTipo(t)}
                />
                <Text>Documento</Text>
                <IconInput
                    placeholder="Informe seu documento (CPF ou CNPJ)"
                    value={documento}
                    onChangeText={t => setDocumento(t)}
                />
                <Text>Senha</Text>
                <IconInput
                    placeholder="Informe sua senha"
                    value={senha}
                    onChangeText={t => setSenha(t)}
                />
                <StyledButton text="Cadastrar" onPress={handleSignClick}/>

            </InputArea>
            <StyledMessageButton onPress={handleMessageButtonClick} text="Já é um usuário?" textBold="Faça o login" />
        </Container>
       </>
    )
}