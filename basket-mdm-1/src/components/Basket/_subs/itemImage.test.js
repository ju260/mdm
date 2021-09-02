import Component from '@/components/Basket/_subs/ItemImage.vue'
import { shallowMount } from '@vue/test-utils'
import imageSrcset from './__fixtures__/imageSrcset.js'
import imageSrcsetFormatted from './__fixtures__/imageSrcsetFormatted.js'

describe('item.vue', () => {
  describe('render', () => {
    it('should render component ', async () => {
      const wrapper = await shallowMount(Component, {
        propsData: {
          srcsetObj: imageSrcset
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('computed', () => {
    describe('srcsetDefinition', () => {
      it('should return string formatted from srcsetObj object', async () => {
        const wrapper = await shallowMount(Component, {
          propsData: {
            srcsetObj: imageSrcset
          }
        })
        expect(wrapper.vm.srcsetDefinition).toBe(imageSrcsetFormatted.srcsetDefinition)
      })
    })
  })
})
