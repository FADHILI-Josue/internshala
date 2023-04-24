import axios from "axios"

/* eslint-disable no-empty */
export const fetchTable1 = async ()=>{
    try {
        const data = await axios.get("http://localhost:4444/api/user/table1")
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchTable2 = async ()=>{
    try {
        const data = await axios.get("http://localhost:4444/api/user/table2")
            return data.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchTable3 = async ()=>{
    try {
        const data  = await axios.get("http://localhost:4444/api/user/table3")
            return data.data
    } catch (error) {
        console.log(error)
    }
}
export const fetchTable4 = async ()=>{
    try {
        const data  = await axios.get("http://localhost:4444/api/user/table4")
            return data.data
    } catch (error) {
        console.log(error)
    }
}
export const fetchTable5 = async ()=>{
    try {
        const data  = await axios.get("http://localhost:4444/api/user/table5")
            return data.data
    } catch (error) {
        console.log(error)
    }
}