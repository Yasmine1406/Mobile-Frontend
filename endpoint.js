import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const url = 'http://172.20.10.4:3002/api';
// export const url = 'http://172.20.10.2:5001/api';


// export const loginUser = async (data) => {
// AUTHENTICATION-USER
export const loginClient = async (data) => {
    console.log(`${url}/clients/login`);
    return await axios.post(`${url}/clients/login`, data);
}
export const loginVendeur = async (data) => {
    return await axios.post(`${url}/vendeurs/login`, data);
}

export const register = async (data) => {
  return await axios.post(`${url}/clients/register`, data);
}

export const addProduitToCommande = async (data) =>{
    return await axios.post(`${url}/commandes/addToCommande`, data);
}

// export const currentUser = async () => {
//   const token = await AsyncStorage.getItem('accessToken');
//   return await axios.get(`${url}/users/current`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//   });
// }

export const getAllProduits = async () => {
    const response = await axios.get(`${url}/produits/getAll`); 
    return(response.data);
}

export const addProduits = async (data) => {
    return await axios.post(`${url}/produits/add`, data);
}

// export const addProduct = async () => {
//     return 
// }

export const getProduct = async (id) => {
    return await axios.get(`${url}/produits/getProductStock`, {
        params: {
            idProduit: id
        }
    })
}


export const getClientCommande = async (id) => {
    return await axios.get(`${url}/commandes/getCommande`, {
        params: {idClient: id}
    })
}
// export const getProduct = async () => {
//   const token = await AsyncStorage.getItem('accessToken');
//   return await axios.get(`${url}/Product/`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//   });
// }

// export const uploadUserImage = async (data) => {
//   const token = await AsyncStorage.getItem('accessToken');
//   return await axios.post(${url}/users/upload, data, {
//     headers: {
//       Authorization: Bearer ${token}
//     }
//   });
// }

// export const getCurrent = async () => {
//   const token = await AsyncStorage.getItem('accessToken');
//   return await axios.get(${url}/users/current, {
//     headers: {
//       Authorization: Bearer ${token}
//     }
//   });
