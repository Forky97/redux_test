import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserBiId = (user) =>

    new Promise (resolve = setTimeout(() => resolve({
        id:1,
        name:'max'
    }),
        
    1000)
    ) 

    


   


export const getUserById = 
createAsyncThunk('users/by-id',
async(userId,thunkApi) => {
    const response = await fetchUserBiId(userId)
    return response

})

 