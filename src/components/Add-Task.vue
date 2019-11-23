<template>
    <div>
        <h3>Add task</h3>
        <div class="add" >
            <form @submit="onSubmit" >
                <input type="text" name="id" v-model="title" placeholder="Add todo" >
                <input type="submit" value="submit" >
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Add-Task",

        data() {
            return {
                title: '',
            }
        },

        methods: {
            ...mapActions(['saveTask']),
            onSubmit(e) {
                e.preventDefault();
                this.saveTask(this.title);
            }
        }
    }
</script>

<style scoped>
    form { display: flex; }
    input[type='text'] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type='submit'] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
    }
</style>