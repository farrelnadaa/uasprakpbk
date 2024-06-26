<template>
  <div class="task-list">
    <h1>Links to Tasks from Meetings 1 to 7</h1>
    <ul>
      <li><a href="https://praktikumpbk1.vercel.app/" target="_blank" rel="noopener noreferrer">Task from Meeting 1</a></li>
      <li><a href="https://muhammadfarrel223510399.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 2</a></li>
      <li><a href="https://tugas3-nu.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 3</a></li>
      <li><a href="https://prakpbk4.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 4</a></li>
      <li><a href="https://tugaspraktikumpbk-5.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 5</a></li>
      <li><a href="https://prakpbk6.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 6</a></li>
      <li><a href="https://praktikumpbk7.vercel.app/?authuser=0" target="_blank" rel="noopener noreferrer">Task from Meeting 7</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tugas',
};
</script>

<style scoped>
.task-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}
</style>
