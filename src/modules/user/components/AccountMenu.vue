<template>
  <Menu as="div" class="relative">
    <MenuButton v-slot="{ open }" class="inline-flex justify-center text-sm font-medium">
      <div class="flex gap-5">
        <div
          :title="userData['user_metadata'].firstName"
          class="relative h-[44px] w-[44px] rounded-[50%] bg-gray-300 p-3 text-[22px] text-white"
        >
          <span class="origin-top-right">
            {{ avatarSymbol }}
          </span>
        </div>
        <img src="/dropdown-arrow.svg" alt="arrow" class="transition" :class="{ 'rotate-180': open }" />
      </div>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 flex flex-col divide-y divide-gray-200 rounded bg-white drop-shadow-xl"
      >
        <MenuItem>
          <div class="rounded p-3 text-sm">
            <span class="font-bold">{{ userData.email }}</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div class="flex flex-col">
            <router-link
              active-class=""
              class="p-3 text-sm transition hover:bg-orange-base hover:text-white"
              to="/user"
            >
              <div class="flex items-center justify-between">
                <span>Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
            </router-link>
            <div
              class="flex cursor-pointer items-center justify-between rounded-b p-3 text-sm transition hover:bg-orange-base hover:text-white"
              @click="signOut"
            >
              <span>Sign Out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  import type { User } from '@supabase/supabase-js';
  import { useRouter } from 'vue-router';
  import { computed } from 'vue';

  interface Props {
    userData: User;
  }

  const router = useRouter();
  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'logout'): void;
  }>();

  const signOut = () => {
    router.push({ path: '/' });
    emit('logout');
  };

  const avatarSymbol = computed<string>(() => {
    return props.userData?.user_metadata?.firstName?.charAt(0) || props.userData?.email?.charAt(0);
  });
</script>
