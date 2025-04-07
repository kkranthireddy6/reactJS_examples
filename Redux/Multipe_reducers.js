const redux = require('redux')
const reduxlogger = require('redux-logger')

const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const buyCake = () => {
    return {type : BUY_CAKE}
}

const BUY_ICECREAM = 'BUY_ICECREAM'
const buyIceCream = () => {
    return {type: BUY_ICECREAM}
}

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams : 10
}

const cakereducer = (state = initialCakeState, action) => {
    const {type, payload} = action

    switch(type){
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1
        }
        default : return state
    }
}

const icecreamreducer = (state=initialIceCreamState, action) => {
    const {type, payload} = action

    switch(type){
        case BUY_ICECREAM: return {
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default : return state
    }
}

const rootreducer = combineReducers({
    cake: cakereducer,
    icecreamreducer : icecreamreducer
})

const store = createStore(rootreducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
