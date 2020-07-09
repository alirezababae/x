<template>
  <div>

<!-- <Todo v-for="{todo , index } in $Store.state.rodos" :key="index" /> -->
<Todo v-for="{todo , index } in todos" :key="index" :todo="todo"/>

  </div>
</template>

<script>
import Todo from './Todo'
export default {
components:{
    Todo
},

computed:{

    todos(){

return this.$Store.state.todos;

    }
}

}
</script>

<style>

</style>