
import * as actionType from "../actions/actionTypes"

const INITIAL_STATE = {
    liste:[
        { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
        { id: 2, baslik: "Fatura ode", tamamlandi: true },
        { id: 3, baslik: "Ödevini yap", tamamlandi:false}
      ]
}

export const reducer=(state=INITIAL_STATE,action)=>{
    
    switch (action.type) {
        case actionType.EKLE:
            return {...state,liste:[...state.liste,{
                id:state.liste[state.liste.length-1].id+1,
                baslik:action.payload,
                tamamlandi:false
            } ]}
            
        case actionType.TAMAMLANDI:
            return{...state,liste:
                state.liste.map(item=>
                    item.id===action.payload?{...item,tamamlandi:!item.tamamlandi}:item
                )}
            
        case actionType.TEMIZLE:
            return {...state,liste:state.liste.filter(item=>item.tamamlandi!==true)}

        default:
           return state
    }
}


