<template>
  <div class="pipeline-form">
    <h2>GitHub Actions Pipeline Info</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="owner">Owner:</label>
        <input v-model="form.owner" id="owner" required />
      </div>
      <div>
        <label for="repo">Repository:</label>
        <input v-model="form.repo" id="repo" required />
      </div>
      <div>
        <label for="workflow">Workflow Name (optional):</label>
        <input v-model="form.workflow" id="workflow" />
      </div>
      <div>
        <label for="token">GitHub Token (optional):</label>
        <input v-model="form.token" id="token" type="password" />
      </div>
      <button type="submit">Fetch Pipeline Info</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="pipeline">
      <h3>Pipeline Data</h3>
      <pre><code ref="codeBlock" class="json">{{ formattedPipeline }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { fetchPipelineInfo } from '../usecases/fetchPipelineInfo.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const form = ref({ owner: '', repo: '', workflow: '', token: '' })
const pipeline = ref(null)
const formattedPipeline = computed(() => {
  return pipeline.value ? JSON.stringify(pipeline.value, null, 2) : ''
})
const error = ref('')

const codeBlock = ref(null)

watch([pipeline, formattedPipeline], () => {
  if (codeBlock.value) {
    hljs.highlightElement(codeBlock.value)
  }
})

async function onSubmit() {
  error.value = ''
  pipeline.value = null
  try {
    pipeline.value = await fetchPipelineInfo(form.value)
  } catch (e) {
    error.value = e.message || 'Failed to fetch pipeline info.'
  }
}
</script>

<style scoped>
.pipeline-form { max-width: 400px; margin: 2rem auto; padding: 2rem; border: 1px solid #eee; border-radius: 8px; background: #fafbfc; }
.pipeline-form label { display: block; margin-bottom: 0.2rem; }
.pipeline-form input { width: 100%; margin-bottom: 1rem; padding: 0.5rem; }
.pipeline-form button { padding: 0.5rem 1rem; }
.error { color: #c00; margin-top: 1rem; }
pre {
  background: #222;
  color: #e0e0e0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.95em;
}
code {
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
}
</style>
