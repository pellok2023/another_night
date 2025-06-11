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
            趣遊台東
          </h1>
          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            探索台東的自然美景與人文風情，讓每一趟旅程都成為難忘的回憶
          </p>
        </div>
      </div>
    </section>

    <!-- Attractions Categories -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            旅遊資訊
          </h2>
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            從市區漫遊到山海線探索，台東的每個角落都有著獨特的魅力等待您發現
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
            {{ category.name }}
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
                :alt="attraction.name"
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
                {{ attraction.name }}
              </h3>
              <p class="text-stone-600 text-sm leading-relaxed mb-4">
                {{ attraction.description }}
              </p>
              <div class="flex items-center text-amber-600">
                <Icon name="heroicons:map-pin" class="!w-4 !h-4 mr-1" />
                <span class="text-xs">{{ attraction.distance }}</span>
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
            旅遊小貼士
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
                最佳遊覽時間
              </h3>
              <p class="text-stone-600">
                春秋兩季氣候宜人，夏季可欣賞金針花海，冬季則有溫暖的陽光陪伴
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
              <h3 class="text-xl font-bold text-stone-800 mb-3">交通建議</h3>
              <p class="text-stone-600">
                建議租車自駕或報名在地旅遊團，部分景點可搭乘大眾運輸工具前往
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
              <h3 class="text-xl font-bold text-stone-800 mb-3">在地體驗</h3>
              <p class="text-stone-600">
                品嚐原住民特色料理，體驗部落文化，感受台東獨有的人文風情
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
  { id: "all", name: "所有景點" },
  { id: "downtown", name: "台東漫遊．市區" },
  { id: "mountain", name: "台東漫遊．山線" },
  { id: "coast", name: "台東漫遊．海線" },
  { id: "south", name: "台東漫遊．南迴線" },
];

// 景點資料
const attractions = [
  {
    id: 1,
    name: "臺東森林公園",
    category: "downtown",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "開闊的臺東森林公園距離臺東市僅幾分鐘車程，沿著馬亨亨大道即可到達，是一處令人流連忘返的公園，沒有過多的人工造景，觸目所及盡是讓人心情舒暢的自在氛圍。",
    distance: "距離酒店 5分鐘車程",
  },
  {
    id: 2,
    name: "臺東國際地標",
    category: "downtown",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "國際地標靜靜佇立海岸，白天，它迎接清晨的第一道曙光，夜晚，暈黃燈光照耀，輝煌燦爛，彷彿期盼著世界的眼光。",
    distance: "距離酒店 10分鐘車程",
  },
  {
    id: 3,
    name: "多良火車站",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "被譽為「全臺灣最美車站」，除了來欣賞一覽無遺的太平洋海景，也千萬別錯過附近的美食區，當地部落特色美食，搭配獨特的鐵道海景視野。",
    distance: "距離酒店 45分鐘車程",
  },
  {
    id: 4,
    name: "關山米國學校",
    category: "mountain",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "來米國學校參觀和體驗，不只為知識充電，美麗的花海更為您的旅程增添一抹鮮艷。",
    distance: "距離酒店 60分鐘車程",
  },
  {
    id: 5,
    name: "金針山休閒農業區",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "位於太麻里的金針山是座名聞遐邇的賞花名勝，除了金針花季之外，四季造訪皆能觀賞到滿山遍野的美景。",
    distance: "距離酒店 50分鐘車程",
  },
  {
    id: 6,
    name: "池上伯朗大道",
    category: "mountain",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "臺東縣池上鄉的一條田園小路，被譽為是一條「翠綠的天堂路」。兩旁無電線桿，加上筆直的道路，在此可觀賞一望無際的稻田風光。",
    distance: "距離酒店 90分鐘車程",
  },
  {
    id: 7,
    name: "三仙台",
    category: "coast",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "三仙台是由離岸小島和珊瑚礁海岸構成，島上奇石分布，其中有三塊巨大的岩石，傳說呂洞賓、李鐵拐、何仙姑曾登臨此島。",
    distance: "距離酒店 70分鐘車程",
  },
  {
    id: 8,
    name: "知本溫泉",
    category: "south",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "知本溫泉是台東最知名的溫泉區，泉質優良，周圍環境清幽，是放鬆身心的絕佳去處。",
    distance: "距離酒店 25分鐘車程",
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
  const categoryMap = {
    downtown: "市區",
    mountain: "山線",
    coast: "海線",
    south: "南迴線",
  };
  return categoryMap[category] || "其他";
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
  title: "趣遊台東 - 又一宿精品旅宿",
  meta: [
    {
      name: "description",
      content:
        "探索台東的自然美景與人文風情，從市區漫遊到山海線探索，又一宿為您精選台東必訪景點",
    },
  ],
});
</script>
