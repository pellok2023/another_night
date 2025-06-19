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
                <h3 class="text-lg font-bold text-stone-800 mb-2">地址</h3>
                <p class="text-stone-600 leading-relaxed">
                  台東縣台東市中華路一段1號
                </p>
                <p class="text-amber-600 text-sm mt-2 font-medium">
                  近台東火車站，步行5分鐘
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
                <h3 class="text-lg font-bold text-stone-800 mb-2">電話</h3>
                <p class="text-stone-600 text-lg font-semibold">089-123-456</p>
                <p class="text-green-600 text-sm mt-2 font-medium">
                  24小時服務專線
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
                <h3 class="text-lg font-bold text-stone-800 mb-2">電子郵件</h3>
                <p class="text-stone-600 text-lg font-semibold">
                  info@anothernight.com
                </p>
                <p class="text-blue-600 text-sm mt-2 font-medium">
                  一般詢問與預訂
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
                <h3 class="text-lg font-bold text-stone-800 mb-2">服務時間</h3>
                <p class="text-stone-600">Check-in: 15:00 | Check-out: 11:00</p>
                <p class="text-purple-600 text-sm mt-2 font-medium">
                  前台24小時服務
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
                便利的交通位置，讓您輕鬆抵達又一宿
              </p>
            </div>
          </div>

          <div
            class="relative border-5 shadow-lg border-white rounded-3xl overflow-hidden h-96 w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.300669390193!2d121.14352527484874!3d22.75422047936284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fb915c787b6a9%3A0xe7ab767e383c8d5d!2zOTUw5Y-w5p2x57ij5Y-w5p2x5biC5paw55Sf6LevMTU16Jmf!5e0!3m2!1szh-TW!2stw!4v1750124702574!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
            <!-- Map Overlay Info -->
            <div
              class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg max-w-xs"
            >
              <div class="flex items-center space-x-3">
                <Icon
                  name="heroicons:map-pin"
                  class="w-5 h-5 text-amber-600 flex-shrink-0"
                />
                <div class="min-w-0">
                  <p class="text-stone-800 font-medium text-sm truncate">
                    又一宿
                  </p>
                  <p class="text-stone-500 text-xs truncate">
                    台東市新生路155號
                  </p>
                </div>
              </div>
            </div>
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
                  <h3 class="text-lg font-bold text-stone-800 mb-2">火車站</h3>
                  <div class="space-y-2 text-stone-600">
                    <p>台東火車站 - 步行約5分鐘</p>
                    <p>台東新站 - 計程車約10分鐘</p>
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
                    機場交通
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>台東豐年機場 - 計程車約20分鐘</p>
                    <p>機場接駁服務 - 提前預約</p>
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
                  <h3 class="text-lg font-bold text-stone-800 mb-2">公車</h3>
                  <div class="space-y-2 text-stone-600">
                    <p>台東轉運站：8101、8102、8109、8110</p>
                    <p>中華路站：市區公車、觀光巴士</p>
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
                    停車資訊
                  </h3>
                  <div class="space-y-2 text-stone-600">
                    <p>館內提供24小時停車場 - 每日NT$300</p>
                    <p>周邊收費停車格 - 每小時NT$30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-6xl mx-auto">
        <div
          ref="quickContactSection"
          :class="[
            'text-center mb-12 transition-all duration-1000 ease-out',
            quickContactAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("quickBookingTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("quickBookingDesc") }}
          </p>
        </div>

        <div ref="quickActionsSection" class="grid md:grid-cols-2 gap-8">
          <!-- Phone Booking -->
          <div
            :class="[
              'bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-1000 ease-out transform hover:-translate-y-2',
              quickActionsAnimated.action1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="heroicons:phone" class="text-green-600 !w-8 !h-8" />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("phoneBooking") }}
            </h3>
            <p class="text-stone-600 mb-6">{{ t("phoneBookingDesc") }}</p>
            <button
              class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {{ t("callNow") }}
            </button>
          </div>

          <!-- Email Booking -->
          <div
            :class="[
              'bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-1000 ease-out transform hover:-translate-y-2',
              quickActionsAnimated.action3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="heroicons:envelope"
                class="text-amber-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("emailBooking") }}
            </h3>
            <p class="text-stone-600 mb-6">{{ t("emailBookingDesc") }}</p>
            <button
              class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {{ t("sendEmail") }}
            </button>
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

const { t } = useLanguage();

// 動畫狀態
const heroSection = ref(null);
const contactInfoSection = ref(null);
const quickContactSection = ref(null);
const quickActionsSection = ref(null);
const transportSection = ref(null);

const heroAnimated = ref(false);
const contactInfoAnimated = ref(false);
const quickContactAnimated = ref(false);
const quickActionsAnimated = ref({
  action1: false,
  action2: false,
  action3: false,
});
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

  // 快速聯絡觀察器
  if (quickContactSection.value) {
    const quickContactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            quickContactAnimated.value = true;
            quickContactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    quickContactObserver.observe(quickContactSection.value);
  }

  // 快速操作觀察器
  if (quickActionsSection.value) {
    const quickActionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            quickActionsAnimated.value.action1 = true;
            setTimeout(() => {
              quickActionsAnimated.value.action2 = true;
            }, 200);
            setTimeout(() => {
              quickActionsAnimated.value.action3 = true;
            }, 400);
            quickActionsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    quickActionsObserver.observe(quickActionsSection.value);
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
