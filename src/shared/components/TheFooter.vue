<template>
  <footer class="container px-4 pt-20 pb-8">
    <!--     DESKTOP-->
    <nav v-if="!isMobile()" class="flex flex-col justify-between text-sm md:flex-row lg:text-base">
      <div class="flex flex-col gap-4 text-base-gray">
        <h2 class="mb-2 font-medium">Our company</h2>
        <router-link
          v-for="link in ['About us', 'Explore cars', 'For investors', 'Q&A']"
          :key="link"
          to="/"
          >{{ link }}</router-link
        >
      </div>
      <div class="flex flex-col gap-4 text-base-gray">
        <h2 class="mb-2 font-medium">Rental details</h2>
        <router-link
          v-for="link in ['Prices', 'Services', 'Testimonials', 'Long term rental']"
          :key="link"
          to="/"
          >{{ link }}</router-link
        >
      </div>
      <div class="flex flex-col gap-4 text-base-gray">
        <h2 class="mb-2 font-medium">Contact</h2>
        <p>+48 (495) 000-00-00</p>
        <p>+48 (400) 000-00-00</p>
        <BaseButton variant="transparent-orange">Call me back</BaseButton>
      </div>
      <div class="flex flex-col gap-4 text-base-gray">
        <img class="mb-2 h-[41px] w-[136px]" src="/mobile-footer-logo.svg" alt="Logo" />
        <p>From 9:00 to 21:00</p>
        <p>24/7 car delivery<br />(When booked during business hours)</p>
        <div class="flex gap-5 pt-4">
          <img src="/instagram-logo.svg" alt="Instagram" /><img src="/fb-logo.svg" alt="Facebook" /><img
            src="/whatsapp-logo.svg"
            alt="Whatsapp"
          />
        </div>
      </div>
    </nav>
    <!--      MOBILE-->
    <nav v-else class="flex flex-col gap-8 text-sm">
      <div class="flex flex-col gap-4 text-base-gray">
        <img class="mb-2 h-[24px] w-[80px]" src="/mobile-footer-logo.svg" alt="Logo" />
        <p>From 9:00 to 21:00</p>
        <p>24/7 car delivery<br />(When booked during business hours)</p>
      </div>
      <div class="flex flex-col gap-3">
        <BaseCollapse>
          <template #controls="{ toggleVisibility, isVisible }">
            <div class="flex justify-between" role="button" @click="toggleVisibility">
              <h2 class="mb-2 text-base font-medium">Our company</h2>
              <img
                class="ml-4 transition duration-500"
                :class="{ 'rotate-180': isVisible }"
                :src="`${title}dropdown-arrow.svg`"
                alt="Cross"
              />
            </div>
          </template>
          <template #default="{ isVisible }">
            <div v-show="isVisible" class="flex flex-col gap-4 text-base-gray">
              <router-link
                v-for="link in ['About us', 'Explore cars', 'For investors', 'Q&A']"
                :key="link"
                to="/"
                >{{ link }}</router-link
              >
            </div>
          </template>
        </BaseCollapse>
        <BaseCollapse>
          <template #controls="{ toggleVisibility, isVisible }">
            <div class="flex justify-between" role="button" @click="toggleVisibility">
              <h2 class="mb-2 text-base font-medium">Rental details</h2>
              <img
                class="ml-4 transition duration-500"
                :class="{ 'rotate-180': isVisible }"
                :src="`${title}dropdown-arrow.svg`"
                alt="Cross"
              />
            </div>
          </template>
          <template #default="{ isVisible }">
            <div v-show="isVisible" class="flex flex-col gap-4 text-base-gray">
              <router-link
                v-for="link in ['Prices', 'Services', 'Testimonials', 'Long term rental']"
                :key="link"
                to="/"
                >{{ link }}</router-link
              >
            </div>
          </template>
        </BaseCollapse>
        <BaseCollapse>
          <template #controls="{ toggleVisibility, isVisible }">
            <div class="flex justify-between" role="button" @click="toggleVisibility">
              <h2 class="mb-2 text-base font-medium">Contact</h2>
              <img
                class="ml-4 transition duration-500"
                :class="{ 'rotate-180': isVisible }"
                :src="`${title}dropdown-arrow.svg`"
                alt="Cross"
              />
            </div>
          </template>
          <template #default="{ isVisible }">
            <div v-show="isVisible" class="flex flex-col gap-4 text-base-gray">
              <p>+48 (495) 000-00-00</p>
              <p>+48 (400) 000-00-00</p>
              <BaseButton variant="transparent-orange">Call me back</BaseButton>
            </div>
          </template>
        </BaseCollapse>
      </div>
      <div class="flex gap-5">
        <img src="/instagram-logo.svg" alt="Instagram" /><img src="/fb-logo.svg" alt="Facebook" /><img
          src="/whatsapp-logo.svg"
          alt="Whatsapp"
        />
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
  import BaseButton from '@/shared/components/BaseButton.vue';
  import BaseCollapse from '@/shared/components/BaseCollapse.vue';

  const title = import.meta.env.BASE_URL;
  const isMobile = () => window.innerWidth <= 768;
</script>
