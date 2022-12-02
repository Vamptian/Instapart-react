import React from 'react'
import axios from 'axios'

 const baseUrl = 'http://localhost:8080'


 export const getUserByEmail = async (email) => {

   return await axios.get(baseUrl + `getUserByEmail/${email}`)
          .then((response) => {
            console.log(response.data)
            setUser(response.data)
        })
        .catch((e) => {
          console.log(e)
       })
  }
 
