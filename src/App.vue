<template>
  <div id="app">
    <div class="container" >
      <Add-Task></Add-Task>
      <Filter-Tasks></Filter-Tasks>
      <Tasks></Tasks>
    </div>
  </div>
</template>

<script>
import Tasks from './components/Tasks';
import AddTask from './components/Add-Task';
import FilterTasks from './components/Filter-Tasks';

export default {
  name: 'app',
  components: {
    'Tasks': Tasks,
    'Add-Task': AddTask,
    'Filter-Tasks': FilterTasks,
  }
}
</script>

<style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Black", Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
