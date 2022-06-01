import AsyncStorage from '@react-native-async-storage/async-storage'
const BASE_API = "https://doalize-backend.herokuapp.com/api"
export default {
    checkToken:async(token) => {
      const req = await fetch(`${BASE_API}/usuarios/token`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'access-token': token
      }
        })
     const json = await req.json()
     return json   
    },
    Login:async(email, senha) => {
      const req = await fetch (`${BASE_API}/usuarios/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, senha})
      })
      const json = await req.json()
      return json
    },
    Cadastrar:async(nome, email, tipo, documento, senha) => {
      const req = await fetch(`${BASE_API}/usuarios`,{
          method: 'POST',
          headers: {
              Accept : 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({nome, email, tipo, documento, senha})
      })
      const json = await req.json()
      return json      
  },
  logout:async() => {
    await AsyncStorage.removeItem('token')
    return null
  },
  getCampanhas:async() => {
    let token = await AsyncStorage.getItem('token')
    const req = await fetch(`${BASE_API}/campanhas`,{
        method: 'GET',
        headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }        
    })
    const json = await req.json()
    return json   
  }, 
  incluiCampanha:async(dadosCampanha) => {
    let token = await AsyncStorage.getItem('token')
    const req = await fetch(`${BASE_API}/campanhas`,{
      method: 'POST',
      headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token
      },
      body: JSON.stringify(dadosCampanha)
  })
  const json = await req.json()
  return json      
  },
  alteraCampanha:async(dadosCampanha) => {
    let token = await AsyncStorage.getItem('token')
    const req = await fetch(`${BASE_API}/campanhas`,{
        method: 'PUT',
        headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(dadosCampanha)        
    })
    const json = await req.json()
    return json    
  },
  removeCampanha:async(idCampanha) => {
    let token = await AsyncStorage.getItem('token')
    const req = await fetch(`${BASE_API}/campanhas/${idCampanha}`,{
        method: 'DELETE',
        headers: {
            Accept : 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }     
    })
    const json = await req.json()
    return json 
  }
}