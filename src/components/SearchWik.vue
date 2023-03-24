<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Palabra</th>
            <th>Resumen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="busqueda in busquedas" :key="busqueda.id">
            <td>{{ busqueda.palabra }}</td>
            <td>{{ busqueda.resumen }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  
  export default {
    data() {
      return {
        busquedas: []
      }
    },
    mounted() {
      
      axios.get('http://127.0.0.1:8000/api/search/')
        
        .then(response => {
            this.busquedas = response.data
            console.log(response.data[1].palabra);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>
  
  