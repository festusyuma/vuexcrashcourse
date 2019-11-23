import axios from 'axios';

const state = {
    tasks: [],
};

const getters = {
    allTasks: (state) => {
        return state.tasks
    },
};

const actions = {
    async getTasks({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTasks', response.data);
    },

    async saveTask({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false,
        });

        commit('addTask', response.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTask', id)
    },

    async filterTasks({ commit }, limit) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTasks', response.data);
    },


};
const mutations = {
    setTasks: (state, tasks) => {
        state.tasks = tasks;
    },

    addTask(state, todo) {
        state.tasks.unshift(todo);
    },

    removeTask(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}