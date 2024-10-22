
<template>
    <PureTaskList :tasks="tasks" @archive-task="archivetask" @pin-task="pintask" />
  </template>
  
  <script>
  import Task from './Task.vue';
  import { reactive, computed } from 'vue';
  import PureTaskList from './PureTaskList.vue';
  import { useTaskStore } from '../taskstore';
  
  
  export default {
    components: { PureTaskList },
    name: 'TaskList',
    setup() {
        const store = useTaskStore();
        const tasks = computed(() => getFilteredTasks);
        const archivedTask = ((tasks) => store.archiveTask(task));
        const pinnedTask = ((tasks) => store.pinnedTask(task));

        return {
            tasks,
            archivedTask,
            pinnedTask
        };
    }
  };
  </script>
  