import {increase,decrease,reset} from "../actions/actions.types"
const initialState={
    amount:0
}
const counter=(state=initialState,actions)=>{
    switch(actions.type){
        case increase:
            return{
                amount:actions.count
            }
            case decrease:
                return{
                    amount:actions.count
                }
                case reset:
                    return{
                        amount:actions.count
                    }
                    default:
                        return state
    }
}
export default counter