<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Section with Background Image -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
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
            {{ t("aboutPageTitle") }}
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("aboutPageSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Content - 圖片區域 -->
          <div ref="imageSection" class="space-y-6">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="又一宿飯店外觀"
                :class="[
                  'w-full h-72 object-cover rounded-2xl transition-all duration-1000 ease-out',
                  imageAnimated.mainImage
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0',
                ]"
              />
              <!-- Overlay Image -->
            </div>
          </div>

          <!-- Right Content - 公司故事 -->
          <div class="space-y-6">
            <div>
              <h2
                class="text-3xl lg:text-4xl font-bold text-stone-800 leading-tight mb-6"
              >
                {{ t("ourStoryTitle") }}<br />
                {{ t("ourStorySubtitle") }}
              </h2>
            </div>

            <div>
              <p class="text-stone-600 text-base leading-relaxed mb-6">
                {{ t("storyDescription1") }}
              </p>
              <p class="text-stone-600 text-base leading-relaxed mb-6">
                {{ t("storyDescription2") }}
              </p>
            </div>

            <!-- 成立時間資訊 -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300"
              >
                <div class="text-2xl font-bold text-amber-600 mb-2">2020</div>
                <h3 class="font-semibold text-stone-800 text-sm">
                  {{ t("establishedYear") }}
                </h3>
              </div>
              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300"
              >
                <div class="text-2xl font-bold text-amber-600 mb-2">4+</div>
                <h3 class="font-semibold text-stone-800 text-sm">
                  {{ t("yearsOfService") }}
                </h3>
              </div>
            </div>

            <div class="pt-4">
              <p class="text-stone-500 text-sm leading-relaxed">
                {{ t("storyNote") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-16 px-6 lg:px-12 bg-stone-100">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("coreValuesTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("coreValuesSubtitle") }}
          </p>
        </div>

        <div
          ref="valuesSection"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <!-- Value 1: 誠信 -->
          <div
            :class="[
              'bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-1000 ease-out',
              valuesAnimated.value1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="bg-blue-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-4 p-3"
            >
              <Icon
                name="heroicons:shield-check"
                class="text-blue-600 !w-6 !h-6"
              />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("integrityTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("integrityDesc") }}
            </p>
          </div>

          <!-- Value 2: 專業 -->
          <div
            :class="[
              'bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-1000 ease-out',
              valuesAnimated.value2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="bg-green-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-4 p-3"
            >
              <Icon
                name="heroicons:academic-cap"
                class="text-green-600 !w-6 !h-6"
              />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("professionalismTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("professionalismDesc") }}
            </p>
          </div>

          <!-- Value 3: 創新 -->
          <div
            :class="[
              'bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-1000 ease-out',
              valuesAnimated.value3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="bg-purple-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-4 p-3"
            >
              <Icon
                name="heroicons:light-bulb"
                class="text-purple-600 !w-6 !h-6"
              />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("innovationTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("innovationDesc") }}
            </p>
          </div>

          <!-- Value 4: 關懷 -->
          <div
            :class="[
              'bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-all duration-1000 ease-out',
              valuesAnimated.value4
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-4 p-3"
            >
              <Icon name="heroicons:heart" class="text-amber-600 !w-6 !h-6" />
            </div>
            <h3 class="text-lg font-bold text-stone-800 mb-3">
              {{ t("careTitle") }}
            </h3>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("careDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Leadership Section -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("leadershipTeamTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("leadershipTeamSubtitle") }}
          </p>
        </div>

        <div
          ref="teamSection"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- CEO -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out',
              teamAnimated.member1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="創辦人"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ t("founderCEO") }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("founderName") }}
              </h3>
              <p class="text-stone-600 text-sm mb-4 leading-relaxed">
                {{ t("founderDesc") }}
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <Icon
                    name="heroicons:academic-cap"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-xs">{{
                    t("businessDegree")
                  }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="heroicons:star" class="w-4 h-4 text-amber-600" />
                  <span class="text-stone-600 text-xs"
                    >15{{ t("yearsExp") }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 總經理 -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out',
              teamAnimated.member2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="總經理"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ t("generalManager") }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("managerName") }}
              </h3>
              <p class="text-stone-600 text-sm mb-4 leading-relaxed">
                {{ t("generalManagerDesc") }}
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <Icon
                    name="heroicons:building-office-2"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-xs">{{
                    t("hospitalityDegree")
                  }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="heroicons:star" class="w-4 h-4 text-amber-600" />
                  <span class="text-stone-600 text-xs"
                    >12{{ t("yearsExp") }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 營運總監 -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out',
              teamAnimated.member3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
                alt="營運總監"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ t("operationsDirector") }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("directorName") }}
              </h3>
              <p class="text-stone-600 text-sm mb-4 leading-relaxed">
                {{ t("operationsDirectorDesc") }}
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <Icon
                    name="heroicons:cog-6-tooth"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-xs">{{
                    t("operationsDegree")
                  }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="heroicons:star" class="w-4 h-4 text-amber-600" />
                  <span class="text-stone-600 text-xs"
                    >10{{ t("yearsExp") }}</span
                  >
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
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {{ t("contactUs") }}
            </button>
            <button
              class="bg-transparent border-3 border-white text-white hover:bg-white hover:text-stone-800 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              {{ t("bookNowAction") }}
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
import { nextTick } from "vue";

const { t } = useLanguage();

// 動畫狀態
const heroSection = ref(null);
const imageSection = ref(null);
const valuesSection = ref(null);
const teamSection = ref(null);
const ctaSection = ref(null);

const heroAnimated = ref(false);
const imageAnimated = ref({
  mainImage: false,
  overlayImage: false,
});
const valuesAnimated = ref({
  value1: false,
  value2: false,
  value3: false,
  value4: false,
});
const teamAnimated = ref({
  member1: false,
  member2: false,
  member3: false,
});
const ctaAnimated = ref(false);

// 設置 Intersection Observer
onMounted(() => {
  // Hero section 動畫
  nextTick(() => {
    setTimeout(() => {
      heroAnimated.value = true;
    }, 100);
  });

  // 圖片區域觀察器
  if (imageSection.value) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageAnimated.value.mainImage = true;
            setTimeout(() => {
              imageAnimated.value.overlayImage = true;
            }, 300);
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    imageObserver.observe(imageSection.value);
  }

  // 核心價值觀察器
  if (valuesSection.value) {
    const valuesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            valuesAnimated.value.value1 = true;
            setTimeout(() => {
              valuesAnimated.value.value2 = true;
            }, 200);
            setTimeout(() => {
              valuesAnimated.value.value3 = true;
            }, 400);
            setTimeout(() => {
              valuesAnimated.value.value4 = true;
            }, 600);
            valuesObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    valuesObserver.observe(valuesSection.value);
  }

  // 團隊觀察器
  if (teamSection.value) {
    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            teamAnimated.value.member1 = true;
            setTimeout(() => {
              teamAnimated.value.member2 = true;
            }, 200);
            setTimeout(() => {
              teamAnimated.value.member3 = true;
            }, 400);
            teamObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    teamObserver.observe(teamSection.value);
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
});

useHead({
  title: "關於我們 - 又一宿精品旅宿",
  meta: [
    {
      name: "description",
      content:
        "了解又一宿的品牌故事、企業使命、核心價值與領導團隊，致力於為每位住客創造舒適溫馨的住宿體驗",
    },
  ],
});
</script>
