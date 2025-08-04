<template>
  <section class="pt-24 pb-8 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <div
        ref="sliderContainer"
        :class="[
          'relative h-[480px] rounded-3xl overflow-hidden transition-all duration-1000 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ]"
      >
        <!-- Slides -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="[
            'absolute inset-0 transition-opacity duration-1000',
            currentSlide === index ? 'opacity-100' : 'opacity-0',
          ]"
          :style="{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        ></div>

        <!-- Text Overlay -->
        <div
          class="absolute inset-0 bg-black/50 flex items-center justify-center z-10"
        >
          <div class="text-center text-white px-4 md:px-8 max-w-5xl mx-auto">
            <!-- Desktop Version -->
            <div class="hidden md:block">
              <h2
                class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight"
              >
                【我們知道這裡不完美，但我們真心對待每一位來住一宿的朋友】
              </h2>

              <div
                class="text-sm md:text-base space-y-3 md:space-y-4 leading-relaxed"
              >
                <div class="text-left max-w-3xl mx-auto">
                  <p class="mb-3 md:mb-4">
                    我們誠實面對這些不足——<br />
                    這是一棟年歲不小的老建築，有些條件在短時間內確實難以改善。
                  </p>

                  <p class="mb-3 md:mb-4">
                    但在我們做得到的地方，我們會盡最大努力：
                  </p>
                </div>

                <ul class="text-left space-y-2 md:space-y-3 max-w-3xl mx-auto">
                  <li class="flex items-start">
                    <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                      >•</span
                    >
                    <span class="text-sm md:text-base"
                      >入住前，我們會主動告知可能的不便</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                      >•</span
                    >
                    <span class="text-sm md:text-base"
                      >房務與清潔我們堅持做到最細</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                      >•</span
                    >
                    <span class="text-sm md:text-base"
                      >備品齊全、遮光窗簾與床墊，都是為了你的好眠</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                      >•</span
                    >
                    <span class="text-sm md:text-base"
                      >迎賓蜂蜜茶與晨光早餐，是我們用心準備的日常儀式</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                      >•</span
                    >
                    <span class="text-sm md:text-base"
                      >位於台東市中心，生活機能便利，步行可達多個景點</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Mobile Version -->
            <div class="md:hidden -mt-36">
              <ul class="text-left space-y-3 max-w-sm mx-auto">
                <li class="flex items-start">
                  <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                    >•</span
                  >
                  <span class="text-sm">入住前，我們會主動告知可能的不便</span>
                </li>
                <li class="flex items-start">
                  <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                    >•</span
                  >
                  <span class="text-sm">房務與清潔我們堅持做到最細</span>
                </li>
                <li class="flex items-start">
                  <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                    >•</span
                  >
                  <span class="text-sm"
                    >備品齊全、遮光窗簾與床墊，都是為了你的好眠</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                    >•</span
                  >
                  <span class="text-sm"
                    >迎賓蜂蜜茶與晨光早餐，是我們用心準備的日常儀式</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-amber-400 mr-3 flex-shrink-0 mt-0.5"
                    >•</span
                  >
                  <span class="text-sm"
                    >位於台東市中心，生活機能便利，步行可達多個景點</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div
          class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
        >
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="setSlide(index)"
            :class="[
              'w-4 h-4 rounded-full transition-all duration-300 border-2 border-white cursor-pointer',
              currentSlide === index ? 'bg-white' : 'bg-transparent',
            ]"
          ></button>
        </div>

        <!-- Fixed Text Overlay - Right Bottom -->
        <div
          class="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl max-w-sm z-20 shadow-lg"
        >
          <h3 class="text-xl font-bold text-stone-800 mb-3">
            {{ t("heroSliderTitle") }}
          </h3>
          <p class="text-stone-600 text-xs mb-4 leading-relaxed">
            {{ t("heroSliderDesc") }}
          </p>
          <button
            @click="scrollToAbout"
            class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer"
          >
            {{ t("heroSliderButton") }}
          </button>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full transition-all duration-300 z-20 flex items-center justify-center cursor-pointer backdrop-blur-sm"
        >
          <Icon name="heroicons:chevron-left" class="w-6 h-6" />
        </button>

        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full transition-all duration-300 z-20 flex items-center justify-center cursor-pointer backdrop-blur-sm"
        >
          <Icon name="heroicons:chevron-right" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const { t } = useLanguage();
const currentSlide = ref(0);
const sliderContainer = ref(null);
const isVisible = ref(false);
let slideInterval = null;

const slides = [
  {
    image: "/images/hero/hero-1.jpeg",
  },
  {
    image: "/images/hero/hero-2.jpeg",
  },
  {
    image: "/images/hero/hero-3.jpeg",
  },
  {
    image: "/images/hero/hero-4.jpeg",
  },
  {
    image: "/images/hero/hero-5.jpeg",
  },
  {
    image: "/images/hero/hero-6.jpeg",
  },
  {
    image: "/images/hero/hero-7.jpeg",
  },
];

const setSlide = (index) => {
  currentSlide.value = index;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
};

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
};

const scrollToAbout = () => {
  const aboutSection = document.getElementById("about-section");
  if (aboutSection) {
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

onMounted(() => {
  // 短暫延遲後啟動動畫，確保組件已掛載
  setTimeout(() => {
    isVisible.value = true;
  }, 100);

  // 等待動畫完成後再啟動自動輪播
  setTimeout(() => {
    startAutoSlide();
  }, 1200);
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>
