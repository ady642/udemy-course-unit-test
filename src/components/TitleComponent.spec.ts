import {shallowMount} from "@vue/test-utils";
import TitleComponent from './TitleComponent.vue'

describe('TitleComponent tests suite', () => {
    it('should display the title value', () => {
        const wrapper = shallowMount(TitleComponent, {
            props: { value: 'My Title' }
        })

        expect(wrapper.text()).toBe('My Title')
    })
})
