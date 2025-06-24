import LoginForm from '@/components/LoginForm.vue'
import {mount} from "@vue/test-utils";
import {it, expect, vi} from 'vitest'

it('emits success after login', async () => {
    // This mocks the backend call. We do not call the real api
    globalThis.fetch = vi.fn(() =>
        Promise.resolve(new Response(null, { status: 200 }))
    )
    // Mount the form
    const wrapper = mount(LoginForm)
    // Trigger submit
    await wrapper.find('button').trigger('submit')
    // Check if success was emitted
    expect(wrapper.emitted()).toHaveProperty('success')
})
