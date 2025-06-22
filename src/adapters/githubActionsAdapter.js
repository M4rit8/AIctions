// src/adapters/githubActionsAdapter.js
import axios from 'axios'

/**
 * Get GitHub Actions pipeline info for a repo (optionally filtered by workflow name).
 * @param {Object} params - { owner, repo, workflow, token }
 * @returns {Promise<Object>} Pipeline info
 */
export async function getPipelineInfo({ owner, repo, workflow, token }) {
  if (!owner || !repo) throw new Error('Owner and repo are required.')
  const headers = token ? { Authorization: `token ${token}` } : {}
  let url = `https://api.github.com/repos/${owner}/${repo}/actions/runs`
  if (workflow) url += `?workflow_name=${encodeURIComponent(workflow)}`
  const { data } = await axios.get(url, { headers })
  return data
}
