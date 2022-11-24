import { watch } from 'vue';
import type { Ref } from 'vue';

export const usePreventScroll = (isMenuOpen: Ref<boolean>) => {
  watch(isMenuOpen, (newVal) => {
    if (newVal) {
      document.body.classList.add('!overflow-y-hidden');
      return;
    }

    document.body.classList.remove('!overflow-y-hidden');
  });
};
