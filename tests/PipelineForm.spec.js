import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PipelineForm from '../src/components/PipelineForm.vue'

// Mock the fetchPipelineInfo usecase
vi.mock('../src/usecases/fetchPipelineInfo.js', () => ({
  fetchPipelineInfo: vi.fn().mockResolvedValue({ runs: [] })
}))

describe('PipelineForm.vue', () => {
  it('renders form fields', () => {
    const wrapper = mount(PipelineForm)
    expect(wrapper.find('input#owner').exists()).toBe(true)
    expect(wrapper.find('input#repo').exists()).toBe(true)
    expect(wrapper.find('input#workflow').exists()).toBe(true)
    expect(wrapper.find('input#token').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('shows pipeline data after submit', async () => {
    const wrapper = mount(PipelineForm)
    await wrapper.find('input#owner').setValue('octocat')
    await wrapper.find('input#repo').setValue('Hello-World')
    await wrapper.find('form').trigger('submit.prevent')
    // Wait for DOM update
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Pipeline Data')
    expect(wrapper.html()).toContain('runs')
  })
})
