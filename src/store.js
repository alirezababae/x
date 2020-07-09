import Vue from 'vue'
 
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

state:{

todos:[

{
    title:"Todos item a",
    completed:false

},

{
    title:"Todos item a",
    completed:false

}


]

},

getters:{

},

mutations:{
    NEW_TODO(state , todoItems){
state.todos.push({
    title:todoItems,
    completed:false
})

    }

},

actions:{

    addNewTodo({commit} , todoItems){

commit('NEW_TODO' , todoItems)

    }

}


})