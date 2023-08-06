import Home from "./Home.vue";
import {shallowMount} from "@vue/test-utils";

const push = vi.fn()

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}))

describe('Home suite tests', () => {
    it('should go the about view when I click on "Go to About" button', async () => {
        const wrapper = shallowMount(Home)

        const button = wrapper.find('button')
        await button.trigger('click')

        expect(push).toHaveBeenCalledWith('/about')
    })
})
