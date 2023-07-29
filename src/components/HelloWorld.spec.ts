import {it, expect, vi, describe, beforeEach } from "vitest"
import { shallowMount } from "@vue/test-utils"
import HelloWorld from "./HelloWorld.vue";
import axios from "axios";

vi.mock('axios')

describe('HelloWorld test suites', () => {
    /*it('should make a fetch call using correct url depending on msg property', async () => {
        // Given the HelloWorld component is mounted
        const instance = shallowMount(HelloWorld)
        // When the msg property changes
        await instance.setProps({
            msg: 'test'
        })
        // Then we expect that the fetch function is called with good url
        expect(fetch).toHaveBeenNthCalledWith(1, 'https://example.com/test')
    })*/
    it('should call axios.get function with https://httpbin.org/get when msg property changes', async () => {
        // Given the HelloWorld component is mounted
        const instance = shallowMount(HelloWorld)
        // When the msg property changes
        await instance.setProps({
            msg: 'test'
        })
        // Then we expect that the fetch function is called with good url
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://httpbin.org/get')
    })
})
