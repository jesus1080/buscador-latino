<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Moneda</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="moneda in criptomonedas" :key="moneda.id">
            <td>{{ moneda.currency }}</td>
            <td>{{ moneda.rates.USD }}</td>
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
        criptomonedas: []
      }
    },
    mounted() {
      axios.get('https://api.coinbase.com/v2/exchange-rates')
        .then(response => {
            this.criptomonedas = Object.entries(response.data.data.rates).map(([currency, rate]) => ({ currency, rates: { USD: rate }}));
            console.log(response.data.data.rates);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>
  
  