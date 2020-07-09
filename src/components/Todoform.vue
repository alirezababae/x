<template>

<div>

<input type="text" v-model="newTodomodels">
<button @click="newAddtodoItems()">submit</button>
</div>

</template>

<script>
export default {
data(){

return {
    newTodomodels:""
}

},

methods:{

newAddtodoItems(){

console.log('test');


this.$Store.dispatch('addNewTodo' , this.newTodomodels)

}

}

}
</script>

<style>

</style>