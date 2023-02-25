<template>
  <section class="flex h-full flex-col items-center gap-10 py-10 px-4">
    <RouterLink
      :to="link.path"
      v-for="link in links"
      :key="link.title"
      class="transition duration-300 ease-in-out hover:text-orange-hovered"
      @click="emit('hideNavigationDrawer')"
    >
      {{ link.title }}
    </RouterLink>
    <div v-if="userData" class="flex w-full grow flex-col items-center justify-end">
      <div class="rounded py-5 text-sm">
        <span class="font-bold">{{ userData?.email }}</span>
      </div>
      <router-link active-class="" class="w-full py-5 text-sm transition" to="/user">
        <div @click="emit('hideNavigationDrawer')" class="flex items-center justify-between">
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
      <div class="flex w-full items-center justify-between py-5 text-sm transition" @click="signOut">
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
    <BaseButton v-else variant="transparent-orange" @click="emit('showMobileAuth')">Log In</BaseButton>
  </section>
</template>

<script setup lang="ts">
  import type { User } from '@supabase/supabase-js';
  import { useRouter } from 'vue-router';
  import BaseButton from './BaseButton.vue';

  interface Props {
    links: {
      path: string;
      title: string;
    }[];
    userData: User | null;
  }

  const props = defineProps<Props>();
  const router = useRouter();

  const emit = defineEmits<{
    (e: 'hideNavigationDrawer'): void;
    (e: 'showMobileAuth'): void;
    (e: 'log-out'): void;
  }>();

  const signOut = () => {
    router.push({ path: '/' });
    emit('log-out');
  };
</script>
