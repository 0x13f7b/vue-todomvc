<template>
    <div>
        <ul v-for="todo in $data.todos.filter(shouldShowTodo)">
            <li v-bind:class="{complete: todo.done}">
            {{ todo.text }}
            <input type="checkbox" class="in-list" v-model="todo.done" />
            </li>
            
        </ul>
        <form v-on:submit="handleAddTodo($event)">
            <input type="text" v-model="input">
        </form>
        <label class="show-completed">
            Show Completed Items?
            <input type="checkbox" v-model="showDone" />
        </label>
    </div>
</template>
<script>
    export default {
        methods: {
            handleAddTodo(e) {
                e.preventDefault();
                this.$data.todos.push({
                    text: this.input, done: false
                });
                this.input = "";
            },
            shouldShowTodo(todo) {
                if (this.$data.showDone) {
                    return true;
                } else {
                    return !todo.done;
                }
            }
        },
        data() {
            return this.$props.state;
        },
        props: ['state']
    }
</script>
<style>

body {
    font-family: Helvetica, sans-serif;
    color: darkslategray;
    font-size: 1.4em;
    margin: 1.4em;
    width: 22em;
    positon: relative;
}

input[type=text] {
    margin-top: 1em;
    padding: 0.8em;
    width: 100%;
    font-size: 0.7em;
}

input[type=checkbox] {
    padding: 1em;
    cursor: pointer;
}

input[type=checkbox].in-list {
    position: absolute;
    right: 0;
}

li {
    list-style-type: none;
    padding: 1em 0 1em 0;
    border-bottom: 1px solid lightblue;
    position: relative;
}

li input {
    transform: scale(1.8);
}

ul {
    padding: 0;
}

label: {
    width: 80%;
}

.show-completed {
    font-size: 1rem;
    color: slategray;
}

.show-completed input {
    transform: scale(1.4);
}

.complete {
    color: gainsboro;
    text-decoration: line-through;
    font-style: italic;
}
</style>