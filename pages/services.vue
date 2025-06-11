<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Section -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
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
            {{ t("servicesPageTitle") }}
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("servicesPageSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Our Services Overview -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("ourServicesTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("ourServicesSubtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Service Card 1 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:home-modern"
                class="text-amber-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("roomServiceTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("roomServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:sparkles"
                class="text-amber-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("diningServiceTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("diningServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 3 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:bell-alert"
                class="text-amber-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("conciergeServiceTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("conciergeServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 4 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:briefcase"
                class="text-amber-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("businessServiceTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("businessServiceDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fitness & Recreation Facilities -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("fitnessRecreationTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("fitnessRecreationSubtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Fitness Center -->
          <div
            class="bg-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('fitnessCenter')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:bolt"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("fitnessCenter") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("fitnessCenterDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>{{ t("available24Hours") }}</span>
              </div>
            </div>
          </div>

          <!-- Swimming Pool -->
          <div
            class="bg-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('swimmingPool')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:sun"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("swimmingPool") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("swimmingPoolDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>06:00 - 22:00</span>
              </div>
            </div>
          </div>

          <!-- SPA & Wellness -->
          <div
            class="bg-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('spaWellness')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:heart"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("spaWellness") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("spaWellnessDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>09:00 - 21:00</span>
              </div>
            </div>
          </div>

          <!-- Recreation Room -->
          <div
            class="bg-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('recreationRoom')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:puzzle-piece"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("recreationRoom") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("recreationRoomDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>{{ t("available24Hours") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Facilities -->
    <section class="py-16 px-6 lg:px-12 bg-stone-100">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("businessFacilitiesDetail") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("businessFacilitiesDetailSubtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Meeting Rooms -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="heroicons:presentation-chart-line"
                class="!w-8 !h-8 text-blue-600"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("meetingRooms") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed mb-4">
              {{ t("meetingRoomsDesc") }}
            </p>
            <div class="text-blue-600 text-sm">
              {{ t("contactForDetails") }}
            </div>
          </div>

          <!-- Business Center -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="heroicons:computer-desktop"
                class="!w-8 !h-8 text-green-600"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("businessCenter") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed mb-4">
              {{ t("businessCenterDesc") }}
            </p>
            <div class="text-green-600 text-sm">
              {{ t("available24Hours") }}
            </div>
          </div>

          <!-- High-Speed Internet -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="heroicons:wifi" class="!w-8 !h-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("highSpeedInternet") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed mb-4">
              {{ t("highSpeedInternetDesc") }}
            </p>
            <div class="text-purple-600 text-sm">
              {{ t("available24Hours") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dining Services -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("diningServicesDetail") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("diningServicesDetailSubtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Restaurant -->
          <div
            class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-lg"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('restaurant')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:building-storefront"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("restaurant") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("restaurantDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>06:30 - 22:00</span>
              </div>
            </div>
          </div>

          <!-- Breakfast Service -->
          <div
            class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('breakfastService')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:sun"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("breakfastService") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("breakfastServiceDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>06:30 - 10:00</span>
              </div>
            </div>
          </div>

          <!-- Room Service -->
          <div
            class="bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl overflow-hidden shadow-lg"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('roomServiceDetail')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:home"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("roomServiceDetail") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("roomServiceDetailDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>{{ t("available24Hours") }}</span>
              </div>
            </div>
          </div>

          <!-- Lobby Bar -->
          <div
            class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg"
          >
            <div class="h-64">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="t('lobbyBar')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <Icon
                  name="heroicons:beaker"
                  class="text-amber-600 !w-6 !h-6 mr-3"
                />
                <h3 class="text-xl font-bold text-stone-800">
                  {{ t("lobbyBar") }}
                </h3>
              </div>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t("lobbyBarDesc") }}
              </p>
              <div class="flex items-center text-amber-600 text-sm">
                <Icon name="heroicons:clock" class="!w-4 !h-4 mr-2" />
                <span>14:00 - 24:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-16 px-6 lg:px-12 bg-stone-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("additionalServices") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("additionalServicesSubtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Laundry Service -->
          <div
            class="bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:sparkles" class="!w-7 !h-7 text-blue-600" />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("laundryService") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("laundryServiceDesc") }}
            </p>
          </div>

          <!-- Airport Shuttle -->
          <div
            class="bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:truck" class="!w-7 !h-7 text-green-600" />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("airportShuttle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("airportShuttleDesc") }}
            </p>
          </div>

          <!-- Travel Consultation -->
          <div
            class="bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:map" class="!w-7 !h-7 text-purple-600" />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("tourGuide") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("tourGuideDesc") }}
            </p>
          </div>

          <!-- Valet Parking -->
          <div
            class="bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:key" class="!w-7 !h-7 text-orange-600" />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("valetParking") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("valetParkingDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
            {{ t("newCtaTitle") }}
          </h2>
          <p
            class="text-white/95 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("newCtaDescription") }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {{ t("bookNowAction") }}
            </button>
            <button
              class="bg-transparent border-3 border-white text-white hover:bg-white hover:text-stone-800 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {{ t("contactUs") }}
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
const ctaSection = ref(null);
const heroAnimated = ref(false);
const ctaAnimated = ref(false);

// 設置動畫
onMounted(() => {
  // Hero section 動畫
  nextTick(() => {
    setTimeout(() => {
      heroAnimated.value = true;
    }, 100);
  });

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
});

// SEO Meta
useHead({
  title: "設施服務 - 又一宿精品旅宿",
  meta: [
    {
      name: "description",
      content:
        "又一宿提供完善的設施與專業服務，包含健身中心、游泳池、SPA水療、商務設施、餐飲服務等，滿足您的每一個需求",
    },
  ],
});
</script>
