export const initialState ={
    basket: [{
        id:"12321341",
        title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price: 11.96,
        rating: 5,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
         

    }],

};
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return {
                ...state,
            basket:[...state.basket, action.item],
        };
            
        case 'REMOVE_FROM_BASKET':
            //Logic for removing items from basket
            //We cloned the basket
            let newBasket =[...state.basket];
            //we check to see if product exist
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );
           if (index>=0){
               //item exists in basket, remove it
               newBasket.splice(index, 1);
           
           }else {
               console.warn(
                   'Cant remove product (id: ${action.id}) as its not embasket'
               );
           }
           
            return {
                ...state,
                 basket: newBasket,
                };
        default:
            return state;      
    }
}
export default reducer;
/*
*/