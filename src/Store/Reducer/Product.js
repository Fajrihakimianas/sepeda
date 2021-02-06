import { GET_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_CART, DELETE_CART, GET_NUMBER_CART } from "../types";

// Ketika Aplikasi baru di Load, initialState kita bikin null
const initialState = {
    data: [],
    Carts: [],
    numberCart: 0
}

export default function getProduct(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_PRODUCT:
            return {
                ...state,
                data: payload,
            }
            case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart === 0){
                let cart = {
                    id: action.payload.id,
                    stock: action.payload.stock,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key) => {
                    if(item.id === action.payload.id){
                        state.Carts[key].stock++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id: action.payload.id,
                        stock: action.payload.stock,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].stock++;
            
            return{
                ...state
            }
        case DECREASE_QUANTITY:
            let stock = state.Carts[action.payload].stock;
            if(stock > 1){
                state.numberCart--;
                state.Carts[action.payload].stock --;
            }
            
            return{
                ...state
            }
        case DELETE_CART:
            let stock_ = state.Carts[action.payload].stock;
            return{
                ...state,
                numberCart:state.numberCart - stock_,
                Carts:state.Carts.filter(item=>{
                    return item.id !== state.Carts[action.payload].id
                })
                
            }
        default:
            return state;
    }
}