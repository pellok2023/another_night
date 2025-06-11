<template>
  <footer class="bg-stone-800 text-white">
    <!-- Main Footer Content -->
    <div class="py-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div
          class="flex flex-col lg:flex-row justify-between items-start gap-12"
        >
          <!-- Left: Company Info -->
          <div class="lg:max-w-md">
            <h3 class="text-3xl font-bold mb-6">{{ t("footerBrandName") }}</h3>
            <p class="text-stone-300 mb-6 leading-relaxed text-lg">
              {{ t("footerDescription") }}
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="heroicons:home" class="w-6 h-6" />
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="heroicons:envelope" class="w-6 h-6" />
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="heroicons:phone" class="w-6 h-6" />
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="heroicons:map-pin" class="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Right: Quick Links & Services -->
          <div class="flex gap-16">
            <!-- Quick Links -->
            <div>
              <h4 class="text-2xl font-semibold mb-6">{{ t("quickLinks") }}</h4>
              <ul class="space-y-4">
                <li>
                  <NuxtLink
                    to="/"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("home") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/about"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("about") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/rooms"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("rooms") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/contact"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("contact") }}</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <!-- Services -->
            <div>
              <h4 class="text-2xl font-semibold mb-6">
                {{ t("serviceItems") }}
              </h4>
              <ul class="space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("roomServiceLink") }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("diningServiceLink") }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("conciergeServiceLink") }}</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-stone-300 hover:text-amber-600 transition-colors text-lg"
                    >{{ t("businessServiceLink") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-stone-700 py-6 px-6 lg:px-12">
      <div
        class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-stone-400 text-sm mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} {{ t("footerBrandName") }}
          {{ t("copyright") }}
        </p>
        <div class="flex space-x-6">
          <a
            href="#"
            class="text-stone-400 hover:text-amber-600 text-sm transition-colors"
            >{{ t("privacyPolicy") }}</a
          >
          <a
            href="#"
            class="text-stone-400 hover:text-amber-600 text-sm transition-colors"
            >{{ t("termsOfService") }}</a
          >
          <a
            href="#"
            class="text-stone-400 hover:text-amber-600 text-sm transition-colors"
            >{{ t("cookiePolicy") }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useLanguage();
</script>
