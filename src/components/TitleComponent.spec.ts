import {shallowMount} from "@vue/test-utils";
import TitleComponent, {TitleComponentProps} from './TitleComponent.vue'
import {beforeEach} from "vitest";

const createWrapper = (props?: TitleComponentProps) => shallowMount(TitleComponent, {props})

let wrapper = createWrapper()

describe('TitleComponent tests suite', () => {
    beforeEach(() => {
        wrapper = createWrapper()
    })
    it('should display the title value', () => {
        const wrapper = shallowMount(TitleComponent, {
            props: { value: 'My Title' }
        })

        expect(wrapper.text()).toBe('My Title')
    })
    it('should emit on-mounted when the component is mounted', () => {
        expect(wrapper.emitted('on-mounted')).toBeTruthy()
    })
})
