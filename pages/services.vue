<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Section -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
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
            {{ t("attractionsPageTitle") }}
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("attractionsPageSubtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Attractions Categories -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("travelInfoTitle") }}
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("travelInfoSubtitle") }}
          </p>
        </div>

        <!-- Category Filters -->
        <div
          ref="categoriesSection"
          :class="[
            'flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out',
            categoriesAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-stone-600 hover:bg-amber-50 hover:text-amber-600',
            ]"
          >
            {{ t(category.nameKey) }}
          </button>
        </div>

        <!-- Attractions Grid -->
        <div
          ref="attractionsSection"
          :class="[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out',
            attractionsAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <div
            v-for="attraction in filteredAttractions"
            :key="attraction.id"
            class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="h-48 overflow-hidden">
              <img
                :src="attraction.image"
                :alt="t(attraction.nameKey)"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-medium',
                    getCategoryColor(attraction.category),
                  ]"
                >
                  {{ getCategoryName(attraction.category) }}
                </span>
                <span class="text-stone-400 text-sm font-medium">
                  NO.{{ attraction.id.toString().padStart(2, "0") }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-stone-800 mb-3">
                {{ t(attraction.nameKey) }}
              </h3>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ t(attraction.descKey) }}
              </p>
              <div class="flex items-center text-amber-600">
                <Icon name="heroicons:map-pin" class="!w-4 !h-4 mr-1" />
                <span class="text-xs">{{ t(attraction.distanceKey) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Tips -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-5xl mx-auto">
        <div
          ref="tipsSection"
          :class="[
            'text-center mb-12 transition-all duration-1000 ease-out',
            tipsAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
            {{ t("travelTipsTitle") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl"
            >
              <div
                class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="heroicons:sun" class="text-blue-600 !w-8 !h-8" />
              </div>
              <h3 class="text-xl font-bold text-stone-800 mb-3">
                {{ t("bestTimeTitle") }}
              </h3>
              <p class="text-stone-600">
                {{ t("bestTimeDesc") }}
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl"
            >
              <div
                class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="heroicons:map" class="text-green-600 !w-8 !h-8" />
              </div>
              <h3 class="text-xl font-bold text-stone-800 mb-3">
                {{ t("transportTipsTitle") }}
              </h3>
              <p class="text-stone-600">
                {{ t("transportTipsDesc") }}
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl"
            >
              <div
                class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="heroicons:heart" class="text-amber-600 !w-8 !h-8" />
              </div>
              <h3 class="text-xl font-bold text-stone-800 mb-3">
                {{ t("localExperienceTitle") }}
              </h3>
              <p class="text-stone-600">
                {{ t("localExperienceDesc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { useLanguage } from "~/composables/useLanguage";

const { t } = useLanguage();

// 動畫狀態
const heroSection = ref(null);
const categoriesSection = ref(null);
const attractionsSection = ref(null);
const tipsSection = ref(null);

const heroAnimated = ref(false);
const categoriesAnimated = ref(false);
const attractionsAnimated = ref(false);
const tipsAnimated = ref(false);

// 選擇的類別
const selectedCategory = ref("all");

// 景點類別
const categories = [
  { id: "all", nameKey: "allAttractions" },
  { id: "downtown", nameKey: "downtownTour" },
  { id: "mountain", nameKey: "mountainTour" },
  { id: "coast", nameKey: "coastTour" },
  { id: "south", nameKey: "southTour" },
];

// 景點資料
const attractions = [
  {
    id: 1,
    nameKey: "taitungForestPark",
    category: "downtown",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "taitungForestParkDesc",
    distanceKey: "distance5min",
  },
  {
    id: 2,
    nameKey: "taitungLandmark",
    category: "downtown",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "taitungLandmarkDesc",
    distanceKey: "distance10min",
  },
  {
    id: 3,
    nameKey: "duoliangStation",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "duoliangStationDesc",
    distanceKey: "distance45min",
  },
  {
    id: 4,
    nameKey: "guanshanRiceSchool",
    category: "mountain",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "guanshanRiceSchoolDesc",
    distanceKey: "distance60min",
  },
  {
    id: 5,
    nameKey: "goldenNeedleMountain",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "goldenNeedleMountainDesc",
    distanceKey: "distance50min",
  },
  {
    id: 6,
    nameKey: "chishangBrownBoulevard",
    category: "mountain",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "chishangBrownBoulevardDesc",
    distanceKey: "distance90min",
  },
  {
    id: 7,
    nameKey: "sanxiantai",
    category: "coast",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    descKey: "sanxiantaiDesc",
    distanceKey: "distance70min",
  },
  {
    id: 8,
    nameKey: "zhipenHotSprings",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descKey: "zhipenHotSpringsDesc",
    distanceKey: "distance25min",
  },
];

// 過濾後的景點
const filteredAttractions = computed(() => {
  if (selectedCategory.value === "all") {
    return attractions;
  }
  return attractions.filter(
    (attraction) => attraction.category === selectedCategory.value
  );
});

// 獲取類別名稱
const getCategoryName = (category) => {
  const categoryKeyMap = {
    downtown: "downtownCategory",
    mountain: "mountainCategory",
    coast: "coastCategory",
    south: "southCategory",
  };
  return t(categoryKeyMap[category] || "otherCategory");
};

// 獲取類別顏色
const getCategoryColor = (category) => {
  const colorMap = {
    downtown: "bg-blue-100 text-blue-600",
    mountain: "bg-green-100 text-green-600",
    coast: "bg-cyan-100 text-cyan-600",
    south: "bg-amber-100 text-amber-600",
  };
  return colorMap[category] || "bg-gray-100 text-gray-600";
};

// 設置動畫
onMounted(() => {
  // Hero section 動畫
  nextTick(() => {
    setTimeout(() => {
      heroAnimated.value = true;
    }, 100);
  });

  // 類別觀察器
  if (categoriesSection.value) {
    const categoriesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            categoriesAnimated.value = true;
            categoriesObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    categoriesObserver.observe(categoriesSection.value);
  }

  // 景點觀察器
  if (attractionsSection.value) {
    const attractionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              attractionsAnimated.value = true;
            }, 200);
            attractionsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    attractionsObserver.observe(attractionsSection.value);
  }

  // 貼士觀察器
  if (tipsSection.value) {
    const tipsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tipsAnimated.value = true;
            tipsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    tipsObserver.observe(tipsSection.value);
  }
});

// SEO Meta
useHead({
  title: "又一宿 - 正在蛻變的旅宿",
  meta: [
    {
      name: "description",
      content:
        "探索台東的自然美景與人文風情，從市區漫遊到山海線探索，又一宿為您精選台東必訪景點",
    },
  ],
});
</script>
