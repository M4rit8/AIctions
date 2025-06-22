<template>
  <main>
    <h1>GitHub Actions Pipeline Explorer</h1>
    <PipelineForm />
  </main>
</template>

<script setup>
import PipelineForm from './components/PipelineForm.vue'
</script>

<style scoped>
main {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
