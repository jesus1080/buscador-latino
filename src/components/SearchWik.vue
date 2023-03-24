<template>
  <div class="d-flex align-items-center">
    <div class="input-group">
      <input type="text" v-model="palabra" class="form-control" placeholder="Buscar">
      <button class="btn btn-primary" type="button" @click="buscar">Buscar</button>
    </div>
  </div>
  <div >
      <div class="p-4">
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Palabra</th>
                      <th>Resumen</th>
                      <th>Contenido</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{{ resultados.palabra }}</td>
                      <td>{{ resultados.resumen }}</td>
                      <td>{{ resultados.contenido }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  data() {
    return {
      palabra: '',
      resultados: []
    }
  },
  methods:{
      buscar(){
          console.log(this.palabra)
          const url = 'http://127.0.0.1:8000/search/'+this.palabra
          console.log(url)
          axios.get(url)
              .then((response) => {
                  this.resultados = response.data
                  console.log(response.data.resumen)
              })
              .catch((error) => {
                  console.log(error)
              });
      }
  },
}
</script>



  