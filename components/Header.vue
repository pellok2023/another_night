<template>
  <!-- Navigation Bar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm px-6 lg:px-12 py-6"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img
          src="/images/logo/又一宿LOGO.png"
          alt="又一宿 Logo"
          class="h-10 w-auto"
        />
        <div class="text-3xl font-bold text-stone-800">又一宿</div>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <NuxtLink
          to="/"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("home") }}</NuxtLink
        >
        <NuxtLink
          to="/about"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/about'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("about") }}</NuxtLink
        >
        <NuxtLink
          to="/rooms"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/rooms'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("rooms") }}</NuxtLink
        >
        <NuxtLink
          to="/services"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/services'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("services") }}</NuxtLink
        >
        <NuxtLink
          to="/blog"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/blog'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("blog") }}</NuxtLink
        >
        <NuxtLink
          to="/contact"
          :class="[
            'text-lg transition duration-300',
            $route.path === '/contact'
              ? 'text-amber-600 font-semibold'
              : 'text-stone-600 hover:text-amber-600',
          ]"
          >{{ t("contact") }}</NuxtLink
        >
      </div>

      <!-- Language Switcher & CTA Button -->
      <div class="hidden lg:flex items-center space-x-4">
        <button
          @click="handleLanguageToggle"
          class="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 cursor-pointer"
        >
          <Icon name="heroicons:globe-alt" class="w-5 h-5" />
          <span class="text-base font-medium text-stone-600">
            {{ currentLanguage === "zh" ? "En" : "Ch" }}
          </span>
        </button>
        <a
          :href="bookingUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="trackBookingClick('header_desktop')"
          class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-3 rounded-full text-base font-medium transition duration-300 cursor-pointer inline-block"
        >
          {{ t("bookNow") }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden text-stone-800 cursor-pointer"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!mobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileMenuOpen"
      class="lg:hidden mt-6 bg-stone-50/95 backdrop-blur-sm rounded-lg shadow-lg p-4"
    >
      <div class="space-y-3">
        <NuxtLink
          to="/"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("home") }}</NuxtLink
        >
        <NuxtLink
          to="/about"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/about'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("about") }}</NuxtLink
        >
        <NuxtLink
          to="/rooms"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/rooms'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("rooms") }}</NuxtLink
        >
        <NuxtLink
          to="/services"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/services'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("services") }}</NuxtLink
        >
        <NuxtLink
          to="/blog"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/blog'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("blog") }}</NuxtLink
        >
        <NuxtLink
          to="/contact"
          @click="mobileMenuOpen = false"
          :class="[
            'block text-lg transition duration-300 py-2 px-3 rounded-lg',
            $route.path === '/contact'
              ? 'text-amber-600 font-semibold bg-orange-50'
              : 'text-stone-600 hover:text-amber-600 hover:bg-orange-50',
          ]"
          >{{ t("contact") }}</NuxtLink
        >

        <!-- Mobile Language Switcher -->
        <button
          @click="handleMobileLanguageToggle"
          class="w-full flex items-center space-x-2 text-stone-600 hover:text-amber-600 hover:bg-orange-50 transition duration-300 py-2 px-3 rounded-lg cursor-pointer"
        >
          <Icon name="heroicons:globe-alt" class="w-6 h-6" />
          <span class="text-base font-medium text-stone-600">
            {{ currentLanguage === "zh" ? "En" : "Ch" }}
          </span>
        </button>

        <a
          :href="bookingUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleMobileBookingClick"
          class="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-base font-medium transition duration-300 mt-4 cursor-pointer inline-block text-center"
        >
          {{ t("bookNow") }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useLanguage } from "~/composables/useLanguage";
import { useGoogleAnalytics } from "~/composables/useGoogleAnalytics";

const { t, currentLanguage, toggleLanguage, bookingUrl } = useLanguage();
const { trackBookingClick, trackLanguageSwitch } = useGoogleAnalytics();
const mobileMenuOpen = ref(false);

// 處理桌面版語言切換
const handleLanguageToggle = () => {
  const newLanguage = currentLanguage.value === "zh" ? "en" : "zh";
  trackLanguageSwitch(newLanguage);
  toggleLanguage();
};

// 處理手機版語言切換
const handleMobileLanguageToggle = () => {
  const newLanguage = currentLanguage.value === "zh" ? "en" : "zh";
  trackLanguageSwitch(newLanguage);
  toggleLanguage();
};

// 處理手機版訂房按鈕點擊
const handleMobileBookingClick = () => {
  trackBookingClick("header_mobile");
  mobileMenuOpen.value = false;
};
</script>
