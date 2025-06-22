// src/usecases/fetchPipelineInfo.js
import { getPipelineInfo } from '../adapters/githubActionsAdapter.js'

/**
 * Fetch pipeline info using user-provided parameters.
 * @param {Object} params - { owner, repo, workflow, token }
 * @returns {Promise<Object>} Pipeline info
 */
export async function fetchPipelineInfo(params) {
  return await getPipelineInfo(params)
}
