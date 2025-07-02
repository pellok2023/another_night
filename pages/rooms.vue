<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Section with Background Image -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
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
            {{ t("roomsPageTitle") }}
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("roomsPageSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Room Types -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("selectedRoomTypes") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("selectedRoomTypesSubtitle") }}
          </p>
        </div>

        <div class="space-y-12">
          <!-- Standard Room -->
          <div
            class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="lg:flex lg:min-h-[500px]">
              <div class="lg:w-1/2">
                <img
                  src="/images/rooms/LINE_ALBUM_ㄧ大床_250626_1.jpg"
                  :alt="t('standardRoom')"
                  class="w-full h-72 lg:h-[500px] object-cover"
                />
              </div>
              <div class="lg:w-1/2 p-8 lg:p-10">
                <div class="mb-6">
                  <div class="flex items-center mb-2">
                    <span
                      class="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"
                    >
                      {{ t("popularRecommendation") }}
                    </span>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold text-stone-800">
                    {{ t("standardRoom") }}
                  </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-8">
                  {{ t("standardRoomDesc") }}
                </p>
                <div class="grid grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("freeWifi") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("privateBathroom") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("airConditioning") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("miniBar") }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:users"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm"
                        >2{{ t("guests") }}</span
                      >
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:squares-2x2"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm">cozy space</span>
                    </div>
                  </div>
                </div>
                <a
                  :href="bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                >
                  {{ t("bookNowButton") }}
                </a>
              </div>
            </div>
          </div>

          <!-- Deluxe Room -->
          <div
            class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="lg:flex lg:flex-row-reverse lg:min-h-[500px]">
              <div class="lg:w-1/2">
                <img
                  src="/images/rooms/LINE_ALBUM_二小床_250626_1.jpg"
                  :alt="t('deluxeRoom')"
                  class="w-full h-72 lg:h-[500px] object-cover"
                />
              </div>
              <div class="lg:w-1/2 p-8 lg:p-10">
                <div class="mb-6">
                  <div class="flex items-center mb-2">
                    <span
                      class="bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"
                    >
                      {{ t("upgradeRecommendation") }}
                    </span>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold text-stone-800">
                    {{ t("deluxeRoom") }}
                  </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-8">
                  {{ t("deluxeRoomDesc") }}
                </p>
                <div class="grid grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("twoLargeBeds") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("bathtubFacility") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("childrenAmenities") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("livingSpace") }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:users"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm"
                        >2{{ t("guests") }}</span
                      >
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:squares-2x2"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm">cozy space</span>
                    </div>
                  </div>
                </div>
                <a
                  :href="bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                >
                  {{ t("bookNowButton") }}
                </a>
              </div>
            </div>
          </div>

          <!-- Refined Suite -->
          <div
            class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="lg:flex lg:min-h-[500px]">
              <div class="lg:w-1/2">
                <img
                  src="/images/rooms/LINE_ALBUM_二大床_250626_1.jpg"
                  :alt="t('refinedSuite')"
                  class="w-full h-72 lg:h-[500px] object-cover"
                />
              </div>
              <div class="lg:w-1/2 p-8 lg:p-10">
                <div class="mb-6">
                  <div class="flex items-center mb-2">
                    <span
                      class="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"
                    >
                      {{ t("topEnjoyment") }}
                    </span>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold text-stone-800">
                    {{ t("refinedSuite") }}
                  </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-8">
                  {{ t("refinedSuiteDesc") }}
                </p>
                <div class="grid grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("balconyView") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("privateSofa") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("butlerService") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("premiumAmenities") }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:users"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm"
                        >4{{ t("guests") }}</span
                      >
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:squares-2x2"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm">cozy space</span>
                    </div>
                  </div>
                </div>
                <a
                  :href="bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                >
                  {{ t("bookNowButton") }}
                </a>
              </div>
            </div>
          </div>

          <!-- Family Room -->
          <div
            class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="lg:flex lg:flex-row-reverse lg:min-h-[500px]">
              <div class="lg:w-1/2">
                <img
                  src="/images/rooms/LINE_ALBUM_一大兩小_250626_1.jpg"
                  :alt="t('familyRoom')"
                  class="w-full h-72 lg:h-[500px] object-cover"
                />
              </div>
              <div class="lg:w-1/2 p-8 lg:p-10">
                <div class="mb-6">
                  <div class="flex items-center mb-2">
                    <span
                      class="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3"
                    >
                      {{ t("familyChoice") }}
                    </span>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold text-stone-800">
                    {{ t("familyRoom") }}
                  </h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-8">
                  {{ t("familyRoomDesc") }}
                </p>
                <div class="grid grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("freeWifi") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("privateBathroom") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("airConditioning") }}</span>
                  </div>
                  <div class="flex items-center text-stone-600">
                    <div class="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span class="text-sm">{{ t("familyFacilities") }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:users"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm"
                        >4{{ t("guests") }}</span
                      >
                    </div>
                    <div class="flex items-center space-x-2">
                      <Icon
                        name="heroicons:squares-2x2"
                        class="!w-6 !h-6 text-amber-600"
                      />
                      <span class="text-stone-600 text-sm">cozy space</span>
                    </div>
                  </div>
                </div>
                <a
                  :href="bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                >
                  {{ t("bookNowAction") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Room Features -->
    <section class="py-16 px-6 lg:px-12 bg-stone-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("roomFacilitiesTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("roomFacilitiesSubtitle") }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="heroicons:home" class="!w-12 !h-12 text-amber-600" />
            </div>
            <h4 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("warmServiceTitle") }}
            </h4>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("warmServiceDesc") }}
            </p>
          </div>
          <div
            class="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="heroicons:hand-raised"
                class="!w-12 !h-12 text-amber-600"
              />
            </div>
            <h4 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("personalCareTitle") }}
            </h4>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("personalCareDesc") }}
            </p>
          </div>
          <div
            class="text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="heroicons:heart" class="!w-12 !h-12 text-amber-600" />
            </div>
            <h4 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("sincereHospitalityTitle") }}
            </h4>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("sincereHospitalityDesc") }}
            </p>
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
const heroAnimated = ref(false);

// 設置 Hero section 動畫
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      heroAnimated.value = true;
    }, 100);
  });
});

// SEO Meta
useHead({
  title: "又一宿 - 正在蛻變的旅宿",
  meta: [
    {
      name: "description",
      content:
        "探索又一宿的精緻客房設計，從舒適的標準客房到豪華景觀套房，每間房都經過精心設計，提供現代化設施與溫馨住宿體驗",
    },
  ],
});
</script>
