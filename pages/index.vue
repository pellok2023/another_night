<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- About Section - 加入主题色 -->
    <section id="about-section" class="pt-12 pb-16 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Content -->
          <div class="space-y-6">
            <div>
              <h2
                class="text-3xl lg:text-4xl font-bold text-stone-800 leading-tight mb-6"
              >
                <!-- 我們是專業的 -->
                {{ t("aboutSectionTitle1") }}<br />
                <!-- 精品旅宿 服務團隊 -->
                {{ t("aboutSectionTitle2") }}
              </h2>
            </div>

            <!-- Project Image -->
            <div ref="imageSection" class="relative">
              <img
                src="/images/hero/hero-4.jpeg"
                alt="Interior Design Project"
                :class="[
                  'w-full h-72 object-cover rounded-2xl transition-all duration-1000 ease-out',
                  imageAnimated.mainImage
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0',
                ]"
              />
              <!-- Overlay Image -->
              <div
                :class="[
                  'absolute -bottom-3 -right-3 w-40 h-28 bg-amber-600 rounded-xl overflow-hidden shadow-[0_0_0_8px_rgb(250_250_249)] transition-all duration-1200 ease-out',
                  imageAnimated.overlayImage
                    ? 'translate-x-0 translate-y-0 opacity-100'
                    : 'translate-x-8 translate-y-8 opacity-0',
                ]"
              >
                <img
                  src="/images/hero/hero-1.jpeg"
                  alt="Design Process"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="space-y-6">
            <div>
              <!-- 又一宿致力於為您提供最優質的住宿體驗... -->
              <p class="text-stone-600 text-lg leading-relaxed mb-6">
                {{ t("aboutDescription") }}
              </p>
            </div>

            <!-- Services Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300 cursor-pointer"
              >
                <div
                  class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <!-- 24小時服務 -->
                <h3 class="font-semibold text-stone-800 text-sm mb-1">
                  {{ t("service24Hours") }}
                </h3>
              </div>

              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300 cursor-pointer"
              >
                <div
                  class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <!-- 精緻客房 -->
                <h3 class="font-semibold text-stone-800 text-sm mb-1">
                  {{ t("refinedRooms") }}
                </h3>
              </div>

              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300 cursor-pointer"
              >
                <div
                  class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <!-- 餐飲服務 -->
                <h3 class="font-semibold text-stone-800 text-sm mb-1">
                  {{ t("diningService") }}
                </h3>
              </div>

              <div
                class="text-center p-4 bg-white border border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300 cursor-pointer"
              >
                <div
                  class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <!-- 商務設施 -->
                <h3 class="font-semibold text-stone-800 text-sm mb-1">
                  {{ t("businessFacilities") }}
                </h3>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="pt-4">
              <!-- ▷ 專業團隊為您打造舒適溫馨的住宿體驗 -->
              <p class="text-stone-500 text-sm leading-relaxed">
                {{ t("professionalTeamNote") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Room Types Section -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <!-- 精選房型 -->
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("roomTypesTitle") }}
          </h2>
          <!-- 每間客房都經過精心設計，融合舒適與美學，為您提供難忘的住宿體驗 -->
          <p class="text-stone-600 text-lg max-w-2xl mx-auto">
            {{ t("roomTypesSubtitle") }}
          </p>
        </div>

        <div
          ref="roomCardsSection"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- Standard Room -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out flex flex-col h-full',
              roomCardsAnimated.card1
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/hero/hero-2.jpeg"
                alt="標準客房"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                <!-- 熱門推薦 -->
                {{ t("popularRecommendation") }}
              </div>
            </div>
            <!-- 內容區域 - 會自動填充空間 -->
            <div class="flex-1 p-6">
              <!-- 標準客房 -->
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("standardRoom") }}
              </h3>
              <!-- 舒適寬敞的客房空間，配備現代化設施與精緻寢具，為您提供優質的住宿環境。 -->
              <p class="text-stone-600 text-sm leading-relaxed">
                {{ t("standardRoomDesc") }}
              </p>
            </div>
            <!-- 底部固定資訊區域 -->
            <div class="p-6 pt-0">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <Icon name="heroicons:users" class="w-4 h-4 text-amber-600" />
                  <!-- 人 -->
                  <span class="text-stone-600 text-sm"
                    >2-3{{ t("guests") }}</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="heroicons:squares-2x2"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-sm">25㎡</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold text-stone-800"
                    >NT$2,800</span
                  >
                  <!-- /晚 -->
                  <span class="text-stone-500 text-sm">{{
                    t("perNight")
                  }}</span>
                </div>
                <button
                  class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <!-- 立即預訂 -->
                  {{ t("bookNowAction") }}
                </button>
              </div>
            </div>
          </div>

          <!-- Deluxe Room -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out flex flex-col h-full',
              roomCardsAnimated.card2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
                alt="豪華客房"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                <!-- 升級推薦 -->
                {{ t("upgradeRecommendation") }}
              </div>
            </div>
            <!-- 內容區域 - 會自動填充空間 -->
            <div class="flex-1 p-6">
              <!-- 豪華客房 -->
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("deluxeRoom") }}
              </h3>
              <!-- 更寬敞的空間設計，增設休憩區域與工作空間，適合商務旅客與重視品質的住客。 -->
              <p class="text-stone-600 text-sm leading-relaxed">
                {{ t("deluxeRoomDesc") }}
              </p>
            </div>
            <!-- 底部固定資訊區域 -->
            <div class="p-6 pt-0">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <Icon name="heroicons:users" class="w-4 h-4 text-amber-600" />
                  <!-- 人 -->
                  <span class="text-stone-600 text-sm"
                    >2-4{{ t("guests") }}</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="heroicons:squares-2x2"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-sm">35㎡</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold text-stone-800"
                    >NT$3,800</span
                  >
                  <!-- /晚 -->
                  <span class="text-stone-500 text-sm">{{
                    t("perNight")
                  }}</span>
                </div>
                <button
                  class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <!-- 立即預訂 -->
                  {{ t("bookNowAction") }}
                </button>
              </div>
            </div>
          </div>

          <!-- Suite Room -->
          <div
            :class="[
              'bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-1000 ease-out flex flex-col h-full',
              roomCardsAnimated.card3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                alt="套房"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                <!-- 頂級享受 -->
                {{ t("topEnjoyment") }}
              </div>
            </div>
            <!-- 內容區域 - 會自動填充空間 -->
            <div class="flex-1 p-6">
              <!-- 精緻套房 -->
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ t("refinedSuite") }}
              </h3>
              <!-- 獨立客廳與臥室空間，頂級裝潢與設備，為追求極致舒適體驗的賓客提供完美住宿。 -->
              <p class="text-stone-600 text-sm leading-relaxed">
                {{ t("refinedSuiteDesc") }}
              </p>
            </div>
            <!-- 底部固定資訊區域 -->
            <div class="p-6 pt-0">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <Icon name="heroicons:users" class="w-4 h-4 text-amber-600" />
                  <!-- 人 -->
                  <span class="text-stone-600 text-sm"
                    >2-6{{ t("guests") }}</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="heroicons:squares-2x2"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-sm">50㎡</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold text-stone-800"
                    >NT$5,800</span
                  >
                  <!-- /晚 -->
                  <span class="text-stone-500 text-sm">{{
                    t("perNight")
                  }}</span>
                </div>
                <button
                  class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <!-- 立即預訂 -->
                  {{ t("bookNowAction") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transportation Section -->
    <section class="py-16 px-6 lg:px-12 bg-stone-50">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-8">
          <!-- 交通資訊 -->
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ t("transportationTitle") }}
          </h2>
          <div class="flex items-center justify-center space-x-2">
            <Icon name="heroicons:map-pin" class="w-5 h-5 text-amber-600" />
            <!-- 便利的交通位置，讓您輕鬆抵達又一宿 -->
            <p class="text-stone-600 text-lg">
              {{ t("transportationSubtitle") }}
            </p>
          </div>
        </div>

        <!-- Map Area -->
        <div class="mb-12">
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
                    {{ t("hotelName") }}
                  </p>
                  <p class="text-stone-500 text-xs truncate">
                    台東市新生路155號
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Transportation Info Cards - 田字型排列 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 火車站 -->
          <div
            class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:building-office-2"
                  class="w-6 h-6 text-blue-600"
                />
              </div>
              <div class="flex-1">
                <!-- 火車站 -->
                <h3 class="font-bold text-stone-800 mb-2">
                  {{ t("trainStation") }}
                </h3>
                <!-- 台東火車站 - 步行約5分鐘 -->
                <p class="text-stone-600 text-sm mb-2">
                  {{ t("trainDesc1") }}
                </p>
                <!-- 台東新站 - 計程車約10分鐘 -->
                <p class="text-stone-600 text-sm">{{ t("trainDesc2") }}</p>
              </div>
            </div>
          </div>

          <!-- 機場交通 -->
          <div
            class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:paper-airplane"
                  class="w-6 h-6 text-green-600"
                />
              </div>
              <div class="flex-1">
                <!-- 機場交通 -->
                <h3 class="font-bold text-stone-800 mb-2">
                  {{ t("airportTransport") }}
                </h3>
                <!-- 台東豐年機場 - 計程車約20分鐘 -->
                <p class="text-stone-600 text-sm mb-2">
                  {{ t("airportDesc1") }}
                </p>
                <!-- 機場接駁服務 - 提前預約 -->
                <p class="text-stone-600 text-sm">{{ t("airportDesc2") }}</p>
              </div>
            </div>
          </div>

          <!-- 公車 -->
          <div
            class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <Icon name="heroicons:truck" class="w-6 h-6 text-orange-600" />
              </div>
              <div class="flex-1">
                <!-- 公車 -->
                <h3 class="font-bold text-stone-800 mb-2">
                  {{ t("busTransport") }}
                </h3>
                <!-- 台東轉運站：8101、8102、8109、8110 -->
                <p class="text-stone-600 text-sm mb-2">
                  {{ t("busDesc1") }}
                </p>
                <!-- 新生路站：鼎東客運市區線、觀光巴士 -->
                <p class="text-stone-600 text-sm">
                  {{ t("busDesc2") }}
                </p>
              </div>
            </div>
          </div>

          <!-- 停車資訊 -->
          <div
            class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:building-storefront"
                  class="w-6 h-6 text-purple-600"
                />
              </div>
              <div class="flex-1">
                <!-- 停車資訊 -->
                <h3 class="font-bold text-stone-800 mb-2">
                  {{ t("parkingInfo") }}
                </h3>
                <!-- 館內提供24小時停車場 - 每日NT$300 -->
                <p class="text-stone-600 text-sm mb-2">
                  {{ t("parkingDesc1") }}
                </p>
                <!-- 周邊收費停車格 - 每小時NT$30 -->
                <p class="text-stone-600 text-sm">
                  {{ t("parkingDesc2") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Surrounding Attractions Section -->
    <section class="py-16 px-6 lg:px-12 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="mb-12">
          <!-- 周遭景點介紹 -->
          <div
            class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0"
          >
            <h2 class="text-3xl lg:text-4xl font-bold text-stone-800">
              {{ t("surroundingAttractionsTitle") }}
            </h2>
            <!-- 手機版：田字型膠囊按鈕排列，桌面版：水平排列 -->
            <div class="grid grid-cols-2 gap-3 lg:flex lg:space-x-4 lg:gap-0">
              <button
                @click="setAttractionCategory('all')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors',
                  selectedAttractionCategory === 'all'
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'text-stone-600 hover:bg-stone-100',
                ]"
              >
                {{ t("allAttractions") }}
              </button>
              <button
                @click="setAttractionCategory('nature')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors',
                  selectedAttractionCategory === 'nature'
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'text-stone-600 hover:bg-stone-100',
                ]"
              >
                {{ t("natureAttractions") }}
              </button>
              <button
                @click="setAttractionCategory('culture')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors',
                  selectedAttractionCategory === 'culture'
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'text-stone-600 hover:bg-stone-100',
                ]"
              >
                {{ t("cultureAttractions") }}
              </button>
              <button
                @click="setAttractionCategory('food')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors',
                  selectedAttractionCategory === 'food'
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'text-stone-600 hover:bg-stone-100',
                ]"
              >
                {{ t("foodAttractions") }}
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Main Attraction Image -->
          <div class="relative h-[400px] rounded-3xl overflow-hidden">
            <img
              :src="currentAttraction.image"
              :alt="currentAttraction.title"
              class="w-full h-full object-cover transition-opacity duration-500"
            />
            <!-- Attraction Info Overlay -->
            <div
              class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl max-w-sm"
            >
              <h3 class="text-xl font-bold text-stone-800 mb-2">
                {{ currentAttraction.title }}
              </h3>
              <p class="text-stone-600 text-sm mb-4">
                {{ currentAttraction.description }}
              </p>
              <div class="flex items-center space-x-4 mb-4">
                <div class="flex items-center space-x-1">
                  <Icon
                    name="heroicons:map-pin"
                    class="w-4 h-4 text-amber-600"
                  />
                  <span class="text-stone-600 text-xs">{{
                    currentAttraction.distance
                  }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Icon name="heroicons:clock" class="w-4 h-4 text-amber-600" />
                  <span class="text-stone-600 text-xs">{{
                    currentAttraction.duration
                  }}</span>
                </div>
              </div>
              <button
                @click="goToServicesPage"
                class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                {{ t("viewDetails") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Speciality Services Section -->
    <section class="py-16 px-6 lg:px-12 bg-stone-100">
      <div class="max-w-5xl mx-auto">
        <div class="flex justify-between items-center mb-12">
          <!-- 專業服務項目 -->
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800">
            {{ t("professionalServicesTitle") }}
          </h2>
          <button
            @click="goToAboutPage"
            class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
          >
            <!-- 查看全部 -->
            {{ t("viewAll") }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Service Card 1 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:home-modern"
                class="text-amber-600 !w-7 !h-7 lg:!w-9 lg:!h-9"
              />
            </div>
            <!-- 客房服務 -->
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("roomServiceTitle") }}
            </h3>
            <!-- 精心設計的舒適客房，24小時客房服務，確保每一位住客都能享受賓至如歸的住宿體驗。 -->
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("roomServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:sparkles"
                class="text-amber-600 !w-7 !h-7 lg:!w-9 lg:!h-9"
              />
            </div>
            <!-- 餐飲服務 -->
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("diningServiceTitle") }}
            </h3>
            <!-- 精緻早餐與在地美食，專業廚師團隊精心烹調，為住客提供難忘的味蕾饗宴。 -->
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("diningServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 3 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:bell-alert"
                class="text-amber-600 !w-7 !h-7 lg:!w-9 lg:!h-9"
              />
            </div>
            <!-- 禮賓服務 -->
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("conciergeServiceTitle") }}
            </h3>
            <!-- 專業禮賓團隊提供行程規劃、交通安排與在地導覽，讓您的旅程更加完美順心。 -->
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("conciergeServiceDesc") }}
            </p>
          </div>

          <!-- Service Card 4 -->
          <div
            class="bg-white p-8 rounded-3xl text-center hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div
              class="bg-amber-100 rounded-2xl inline-flex items-center justify-center mx-auto mb-6 p-4"
            >
              <Icon
                name="heroicons:briefcase"
                class="text-amber-600 !w-7 !h-7 lg:!w-9 lg:!h-9"
              />
            </div>
            <!-- 商務服務 -->
            <h3 class="text-xl font-bold text-stone-800 mb-4">
              {{ t("businessServiceTitle") }}
            </h3>
            <!-- 完善的商務設施與會議空間，高速網路與商務中心，滿足商旅人士的各種需求。 -->
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ t("businessServiceDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Video Section -->
    <section
      class="relative min-h-screen px-6 lg:px-12 overflow-hidden flex items-center"
    >
      <!-- Background Video -->
      <video
        ref="backgroundVideo"
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        @loadedmetadata="ensureVideoPlays"
      >
        <source
          src="https://videos.pexels.com/video-files/3410663/3410663-uhd_2562_1440_30fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.pixabay.com/vimeo/459688209/hotel-50634.mp4?width=1280&hash=6b15e2a0e8d1e6e8a2a5b5c5d4e3f2g1"
          type="video/mp4"
        />
        <!-- 備用影片 -->
        <source
          src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
          type="video/mp4"
        />
      </video>

      <!-- Dark Overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Statistics Data -->
      <div ref="statsSection" class="relative z-10 max-w-5xl mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div
              class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              {{ animatedStats.guests }}K+
            </div>
            <!-- 滿意住客 -->
            <div class="text-white/90 text-base lg:text-lg xl:text-xl">
              {{ t("satisfiedGuests") }}
            </div>
          </div>
          <div>
            <div
              class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              {{ animatedStats.awards }}+
            </div>
            <!-- 服務獎項 -->
            <div class="text-white/90 text-base lg:text-lg xl:text-xl">
              {{ t("serviceAwards") }}
            </div>
          </div>
          <div>
            <div
              class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              {{ animatedStats.rooms }}+
            </div>
            <!-- 專業客房 -->
            <div class="text-white/90 text-base lg:text-lg xl:text-xl">
              {{ t("professionalRooms") }}
            </div>
          </div>
          <div>
            <div
              class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
            >
              {{ animatedStats.experience }}+
            </div>
            <!-- 年服務經驗 -->
            <div class="text-white/90 text-base lg:text-lg xl:text-xl">
              {{ t("yearsExperience") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup>
import { nextTick } from "vue";

const { t } = useLanguage();

// 統計數據動畫
const statsSection = ref(null);
const backgroundVideo = ref(null);
const animatedStats = ref({
  guests: 0,
  awards: 0,
  rooms: 0,
  experience: 0,
});

// 圖片區域動畫
const imageSection = ref(null);
const imageAnimated = ref({
  mainImage: false,
  overlayImage: false,
});

// 房型卡片動畫
const roomCardsSection = ref(null);
const roomCardsAnimated = ref({
  card1: false,
  card2: false,
  card3: false,
});

// 景點切換功能
const selectedAttractionCategory = ref("all");

// 景點數據
const attractions = {
  all: {
    titleKey: "taitungForestPark",
    descKey: "taitungForestParkDesc",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    distanceKey: "forestParkDistance",
    durationKey: "forestParkDuration",
  },
  nature: {
    titleKey: "zhipenHotSprings",
    descKey: "zhipenHotSpringsDesc",
    image:
      "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    distanceKey: "hotSpringsDistance",
    durationKey: "hotSpringsDuration",
  },
  culture: {
    titleKey: "taitungRailwayArt",
    descKey: "taitungRailwayArtDesc",
    image: "/images/hero/hero-2.jpeg",
    distanceKey: "railwayArtDistance",
    durationKey: "railwayArtDuration",
  },
  food: {
    titleKey: "taitungNightMarket",
    descKey: "taitungNightMarketDesc",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    distanceKey: "nightMarketDistance",
    durationKey: "nightMarketDuration",
  },
};

const currentAttraction = computed(() => {
  const attraction = attractions[selectedAttractionCategory.value];
  return {
    title: t(attraction.titleKey),
    description: t(attraction.descKey),
    image: attraction.image,
    distance: t(attraction.distanceKey),
    duration: t(attraction.durationKey),
  };
});

const setAttractionCategory = (category) => {
  selectedAttractionCategory.value = category;
};

const goToServicesPage = () => {
  navigateTo("/services");
};

const goToAboutPage = () => {
  navigateTo("/about");
};

const targetStats = {
  guests: 21,
  awards: 31,
  rooms: 60,
  experience: 10,
};

// 數字動畫函數
const animateNumber = (start, end, duration, callback) => {
  const startTime = performance.now();
  const difference = end - start;

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 使用緩動函數讓動畫更自然
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const current = start + difference * easeOutCubic;

    callback(Math.floor(current));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

// 確保影片播放
const ensureVideoPlays = () => {
  if (backgroundVideo.value) {
    backgroundVideo.value.muted = true; // 確保靜音
    backgroundVideo.value.loop = true; // 確保循環播放
    backgroundVideo.value.play().catch((error) => {
      console.log("影片自動播放被阻止:", error);
      // 如果自動播放失敗，可以在用戶交互後再試
    });
  }
};

// 啟動統計數據動畫
const startStatsAnimation = () => {
  animateNumber(0, targetStats.guests, 2000, (value) => {
    animatedStats.value.guests = value;
  });

  animateNumber(0, targetStats.awards, 2500, (value) => {
    animatedStats.value.awards = value;
  });

  animateNumber(0, targetStats.rooms, 2200, (value) => {
    animatedStats.value.rooms = value;
  });

  animateNumber(0, targetStats.experience, 1800, (value) => {
    animatedStats.value.experience = value;
  });
};

// 設置 Intersection Observer
onMounted(() => {
  // 確保背景影片播放
  nextTick(() => {
    if (backgroundVideo.value) {
      backgroundVideo.value.muted = true; // 確保靜音
      backgroundVideo.value.loop = true; // 確保循環播放
      backgroundVideo.value.autoplay = true; // 確保自動播放
      backgroundVideo.value.play().catch((error) => {
        console.log("影片自動播放失敗:", error);
      });
    }
  });

  // 統計數據區域觀察器
  if (statsSection.value) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startStatsAnimation();
            statsObserver.unobserve(entry.target); // 只執行一次動畫
          }
        });
      },
      {
        threshold: 0.5, // 當元素 50% 可見時觸發
      }
    );

    statsObserver.observe(statsSection.value);
  }

  // 圖片區域觀察器
  if (imageSection.value) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 先啟動主圖片動畫
            imageAnimated.value.mainImage = true;

            // 延遲啟動疊加圖片動畫，創造層次感
            setTimeout(() => {
              imageAnimated.value.overlayImage = true;
            }, 300);

            imageObserver.unobserve(entry.target); // 只執行一次動畫
          }
        });
      },
      {
        threshold: 0.3, // 當元素 30% 可見時觸發
      }
    );

    imageObserver.observe(imageSection.value);
  }

  // 房型卡片觀察器
  if (roomCardsSection.value) {
    const roomCardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 依序啟動每張卡片的動畫，創造波浪效果
            roomCardsAnimated.value.card1 = true;

            setTimeout(() => {
              roomCardsAnimated.value.card2 = true;
            }, 200);

            setTimeout(() => {
              roomCardsAnimated.value.card3 = true;
            }, 400);

            roomCardsObserver.unobserve(entry.target); // 只執行一次動畫
          }
        });
      },
      {
        threshold: 0.2, // 當元素 20% 可見時觸發
      }
    );

    roomCardsObserver.observe(roomCardsSection.value);
  }
});

useHead({
  title: "又一宿 - 正在蛻變的旅宿",
  meta: [
    {
      name: "description",
      content:
        "我們不完美，卻誠實地準備好迎接每一位旅人。《又一宿》靈感來自「柳暗花明又一村」，這裡是「又上」團隊出發的小冒險。我們是一間「正在蛻變中的旅店」，像剛畢業的年輕人，還穿著便服，卻已準備面對這個世界。這裡不完美，卻真誠；不豪華，卻有溫度。",
    },
  ],
});
</script>
