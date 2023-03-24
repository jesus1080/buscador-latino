<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container">
          <a class="navbar-brand" href="#">Buscador Latino</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item border">
                <router-link to="/" class="nav-link">Buscar</router-link>
              </li>
              <li class="nav-item border">
                <router-link to="/about" class="nav-link">Lista de busquedas</router-link>
              </li>
              <li class="nav-item border">
                <router-link to="/reporte" class="nav-link">Reporte</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
