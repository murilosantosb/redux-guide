import CartActionTypes from "./action-types"

const initialState = {
    products: [] ,
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            )

            // Se ele estiver , aumentar a sua quantidade em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) => 
                    product.id === action.payload.id
                        ? { ...product, quantify: product.quantify + 1}
                        : product
                    )
                }
            }

            // se elenão estiver, adicioná-lo
            return {
                ...state,
                products: [...state.products, { ...action.payload , quantify: 1}]
            }

            case CartActionTypes.REMOVE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product.id === action.payload)
                };

            case CartActionTypes.INCLEMENT_PRODUCT:
                return {
                    ...state,
                    products: state.products.map((product) => 
                        product.id === action.payload
                         ? {...product, quantify: product.quantify + 1}
                         : product
                        ),
                };
                
            case CartActionTypes.DECLEMENT_PRODUCT :
                return {
                    ...state ,
                    products: state.products.map((product) =>
                    product.id === action.payload
                    ? {...product, quantify: product.quantify -1}
                    : product = null
                    ),
                } ;   
        default:
            return state;    
    }
}

export default cartReducer