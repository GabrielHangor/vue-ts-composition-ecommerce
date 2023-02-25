<template>
  <header
    class="container relative mx-auto flex items-center justify-between gap-5 py-3 md:items-start md:py-8 lg:gap-20"
  >
    <RouterLink to="/">
      <img
        src="/Logo-car.svg"
        alt="Car Logo"
        class="h-[19px] w-[80px] pl-4 md:ml-0 md:h-[33px] md:w-[136px] md:pl-0"
        @click="isMobileNavOpen = false"
      />
    </RouterLink>
    <img
      :src="`${title}${burgerIconLink}`"
      alt="Burger Icon"
      @click="showNavigationDrawer"
      class="pr-4 md:hidden md:pr-0"
    />

    <Teleport to="#sidebar-container">
      <NavigationDrawer v-model="isMobileNavOpen" v-slot="{ hideNavigationDrawer }">
        <MobileNav
          :links="links"
          @hide-navigation-drawer="hideNavigationDrawer"
          @show-mobile-auth="isAuthModalOpen = true"
          :user-data="user"
          @log-out="logout"
        />
      </NavigationDrawer>
    </Teleport>

    <div
      class="z-10 hidden w-full items-center justify-between gap-9 bg-white text-sm font-medium text-gray-600 transition-[opacity] duration-300 ease-in md:flex lg:text-base"
    >
      <RouterLink
        class="transition duration-300 ease-in-out hover:text-orange-hovered"
        v-for="link in links"
        :key="link.title"
        :to="link.path"
        @click="isMobileNavOpen = false"
      >
        {{ link.title }}
      </RouterLink>
      <BaseButton variant="transparent-orange">Rent now</BaseButton>

      <AccountMenu v-if="user" :user-data="user" @logout="logout" />
      <BaseButton v-else variant="transparent-orange" @click="isAuthModalOpen = true">Log In</BaseButton>
    </div>

    <Teleport to="#modal-container">
      <transition name="fade">
        <BaseModal v-if="isAuthModalOpen" v-model="isAuthModalOpen" v-slot="{ hideModal }">
          <AuthFormWrapper @hide-modal="hideModal" />
        </BaseModal>
      </transition>
    </Teleport>
  </header>
</template>
<script lang="ts" setup>
  import { usePreventScroll } from '@/shared/composables/usePreventScroll';
  import { computed, defineAsyncComponent, ref } from 'vue';
  import BaseButton from './BaseButton.vue';
  import { useUser } from '@/modules/user/composables/useUser';
  import { useRoute } from 'vue-router';
  import NavigationDrawer from './NavigationDrawer.vue';
  import MobileNav from './MobileNav.vue';

  const links = [
    { path: '/catalog', title: 'Catalog' },
    { path: '/details', title: 'Rental details' },
    { path: '/about', title: 'About us' },
    { path: '/contact', title: 'Contact' },
  ];

  const title = import.meta.env.BASE_URL;

  const BaseModal = defineAsyncComponent(() => import('@/shared/components/BaseModal.vue'));
  const AuthFormWrapper = defineAsyncComponent(
    () => import('@/modules/user/components/AuthFormWrapper.vue')
  );
  const AccountMenu = defineAsyncComponent(() => import('@/modules/user/components/AccountMenu.vue'));

  const isAuthModalOpen = ref(false);

  const route = useRoute();
  if (route.query['update_password']) isAuthModalOpen.value = true;

  const { user, logout } = useUser();

  const isMobileNavOpen = ref(false);

  const burgerIconLink = computed(() =>
    isMobileNavOpen.value ? '/burger-closed.svg' : '/burger-opened.svg'
  );
  const showNavigationDrawer = () => (isMobileNavOpen.value = !isMobileNavOpen.value);

  usePreventScroll(isMobileNavOpen);
</script>
