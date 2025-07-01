<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Section -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
      "
    >
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <div
          ref="heroSection"
          :class="[
            'transition-all duration-1000 ease-out',
            heroAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h1
            class="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-wide"
          >
            {{ t("contactPageTitle") }}
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("contactPageSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <!-- Contact Information Cards - 田字型排列 -->
        <div
          ref="contactInfoSection"
          :class="[
            'grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ease-out',
            contactInfoAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <!-- Address Card -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:map-pin"
                  class="text-amber-600 !w-6 !h-6"
                />
              </div>
              <div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">
                  {{ t("addressTitle") }}
                </h3>
                <p class="text-stone-600 leading-relaxed">
                  {{ t("addressText") }}
                </p>
                <p class="text-amber-600 text-sm mt-2 font-medium">
                  {{ t("addressNote") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Phone Card -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon name="heroicons:phone" class="text-green-600 !w-6 !h-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">
                  {{ t("phoneTitle") }}
                </h3>
                <p class="text-stone-600 text-lg font-semibold">
                  {{ t("phoneNumber") }}
                </p>
                <p class="text-green-600 text-sm mt-2 font-medium">
                  {{ t("phoneNote") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Email Card -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:envelope"
                  class="text-blue-600 !w-6 !h-6"
                />
              </div>
              <div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">
                  {{ t("emailTitle") }}
                </h3>
                <p class="text-stone-600 text-lg font-semibold">
                  {{ t("emailAddress") }}
                </p>
                <p class="text-blue-600 text-sm mt-2 font-medium">
                  {{ t("emailNote") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Service Hours Card -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:clock"
                  class="text-purple-600 !w-6 !h-6"
                />
              </div>
              <div>
                <h3 class="text-lg font-bold text-stone-800 mb-2">
                  {{ t("serviceHoursTitle") }}
                </h3>
                <p class="text-stone-600">{{ t("checkInOut") }}</p>
                <p class="text-purple-600 text-sm mt-2 font-medium">
                  {{ t("frontDesk24h") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map Section -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-stone-800 mb-2">
              {{ t("locationMapTitle") }}
            </h3>
            <div class="flex items-center justify-center space-x-2">
              <Icon name="heroicons:map-pin" class="w-5 h-5 text-amber-600" />
              <p class="text-stone-600 text-lg">
                {{ t("convenientLocationText") }}
              </p>
            </div>
          </div>

          <div
            class="relative border-5 shadow-lg border-white rounded-3xl overflow-hidden h-96 w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.6417792958164!2d121.14851553849275!3d22.754855768290753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fb926b18b54e7%3A0x61292bf1a51cbb4b!2z5Y-I5LiA5a6_!5e0!3m2!1szh-TW!2stw!4v1750907147460!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
            <!-- Map Overlay Info -->
          </div>
        </div>

        <!-- Transportation Information - 田字型排列 -->
        <div
          ref="transportSection"
          :class="[
            'transition-all duration-1000 ease-out',
            transportAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h2
            class="text-3xl lg:text-4xl font-bold text-stone-800 mb-8 text-center"
          >
            {{ t("transportInfoTitle") }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 火車站 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:building-office-2"
                    class="text-blue-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-stone-800 mb-2">
                    {{ t("trainStation") }}
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>{{ t("trainDesc1") }}</p>
                    <p>{{ t("trainDesc2") }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 機場交通 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:paper-airplane"
                    class="text-green-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-stone-800 mb-2">
                    {{ t("airportTransport") }}
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>{{ t("airportDesc1") }}</p>
                    <p>{{ t("airportDesc2") }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 公車 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:truck"
                    class="text-amber-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-stone-800 mb-2">
                    {{ t("busTransport") }}
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>{{ t("busDesc1") }}</p>
                    <p>{{ t("busDesc2") }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 停車資訊 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:square-3-stack-3d"
                    class="text-purple-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-stone-800 mb-2">
                    {{ t("parkingInfo") }}
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>{{ t("parkingDesc1") }}</p>
                    <p>{{ t("parkingDesc2") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section
      class="relative py-20 px-6 lg:px-12 overflow-hidden min-h-[600px] bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
      "
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content -->
      <div
        ref="ctaSection"
        class="relative z-10 max-w-5xl mx-auto text-center flex items-center justify-center min-h-[500px]"
      >
        <div
          :class="[
            'transition-all duration-1000 ease-out',
            ctaAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h2
            class="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            {{ t("ctaTitle") }}
          </h2>
          <p
            class="text-white/95 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("ctaDescription") }}
          </p>
          <div class="flex justify-center">
            <a
              :href="bookingUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block"
            >
              {{ t("bookNowAction") }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useLanguage } from "~/composables/useLanguage";

const { t, bookingUrl } = useLanguage();

// 動畫狀態
const heroSection = ref(null);
const contactInfoSection = ref(null);
const ctaSection = ref(null);
const transportSection = ref(null);

const heroAnimated = ref(false);
const contactInfoAnimated = ref(false);
const ctaAnimated = ref(false);
const transportAnimated = ref(false);

// 設置動畫
onMounted(() => {
  // Hero section 動畫
  nextTick(() => {
    setTimeout(() => {
      heroAnimated.value = true;
    }, 100);
  });

  // 聯絡資訊觀察器
  if (contactInfoSection.value) {
    const contactInfoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactInfoAnimated.value = true;
            contactInfoObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    contactInfoObserver.observe(contactInfoSection.value);
  }

  // CTA 區域觀察器
  if (ctaSection.value) {
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctaAnimated.value = true;
            ctaObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    ctaObserver.observe(ctaSection.value);
  }

  // 交通資訊觀察器
  if (transportSection.value) {
    const transportObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              transportAnimated.value = true;
            }, 400);
            transportObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    transportObserver.observe(transportSection.value);
  }
});

// SEO Meta
useHead({
  title: "又一宿 - 正在蛻變的旅宿",
  meta: [
    {
      name: "description",
      content:
        "歡迎聯絡又一宿，我們提供24小時專業服務。位於台東市中心，交通便利，多種聯絡方式讓您輕鬆預訂與諮詢",
    },
  ],
});
</script>
