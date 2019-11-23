<template>
    <div>
        <h3>Tasks</h3>
        <div class="legend" >
            <span>Double click to mark as complete</span>
            <div>
                <span class="incomplete-box box" ></span> = Incomplete
            </div>
            <div>
                <span class="complete-box box" ></span> = Complete class
            </div>
        </div>
        <div class="tasks" >
            <div v-for="task in allTasks" :key="task.id" :class="['task', {'complete-task': task.completed}]" >
                <p>{{ task.title }}</p>
                <i class="fas fa-trash" @click="deleteTodo(task.id)" ></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Tasks",
        computed: mapGetters([
            'allTasks',
        ]),
        methods: {
            ...mapActions(['getTasks', 'deleteTodo']),
        },
        created() {
            this.getTasks();
        },
    }
</script>

<style scoped>
    .tasks {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .task {
        border: 1px solid #ccc;
        background: #41b884;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #ffffff;
        cursor: pointer;
    }

    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .box {
        display: inline-block;
        width: 10px;
        height: 10px;
    }

    .complete-box { background: #35495e; }

    .incomplete-box { background: #41b883; }

    .complete-task {
        background: #35495e;
        color: #ffffff;
    }

    @media (max-width: 500px) {
        .tasks {
            grid-template-columns: 1fr;
        }
    }
</style>