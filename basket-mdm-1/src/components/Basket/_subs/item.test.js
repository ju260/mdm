import Component from '@/components/Basket/_subs/item.vue'
import { shallowMount } from '@vue/test-utils'
import item from './__fixtures__/item.js'

describe('item.vue', () => {
  describe('render', () => {
    it('should render component ', async () => {
      const wrapper = await shallowMount(Component, {
        propsData: {
          item
        }
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
  describe('methods', () => {
    describe('addQty', () => {
      it('should add one to itemQty', async () => {
        const wrapper = await shallowMount(Component, {
          propsData: {
            item
          }
        })
        wrapper.vm.addQty()
        expect(wrapper.vm.itemQty).toBe(3)
      })
    })
    describe('removeQty', () => {
      it('should remove one to itemQty', async () => {
        const wrapper = await shallowMount(Component, {
          propsData: {
            item
          }
        })
        wrapper.vm.removeQty()
        expect(wrapper.vm.itemQty).toBe(1)
      })
    })
  })
})
