<template>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Palabra</th>
            <th>Cantidad</th>
            <th>Ultima fecha de busqueda</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="busqueda in busquedas" :key="busqueda.id">
            <td>{{ busqueda.palabra }}</td>
            <td>{{ busqueda.conteo }}</td>
            <td>{{ busqueda.ultima_fecha }}</td>
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
      
      axios.get('http://127.0.0.1:8000/api/reporte/')
        
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