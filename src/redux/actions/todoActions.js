import * as actionTypes from "./actionTypes"

export const todoEkle=(todo)=>{
    return {type:actionTypes.EKLE,payload:todo}
} 

export const todoTemizle=()=>{
    return {type:actionTypes.TEMIZLE}
} 

export const todoTamamla=(id)=>{
    return {type:actionTypes.TAMAMLANDI,payload:id}
} 
