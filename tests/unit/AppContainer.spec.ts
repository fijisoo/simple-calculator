import { mount } from '@vue/test-utils';
import AppContainer from '@/containers/AppContainer.vue';

const mockAppSlotClass = 'mockAppSlotClass';
const mockAppSlot = `<div class="${mockAppSlotClass}" />`;

describe('AppContainer.vue', () => {
  it('should mount without errors', () => {
    const wrapperFn = () => mount(AppContainer);
    expect(wrapperFn).not.toThrow();
  });

  it('should mount with provided slot element', () => {
      const wrapper = mount(AppContainer, {
          slots: {
              default: [mockAppSlot],
          },
      });
      expect(wrapper.contains(`.${mockAppSlotClass}`)).toBe(true);
  });
});
