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
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Information -->
          <div
            ref="contactInfoSection"
            :class="[
              'space-y-8 transition-all duration-1000 ease-out',
              contactInfoAnimated
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0',
            ]"
          >
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
                {{ t("contactInfoTitle") }}
              </h2>
              <p class="text-stone-600 text-base leading-relaxed mb-8">
                {{ t("contactInfoDesc") }}
              </p>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-lg space-y-8">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:map-pin"
                    class="text-amber-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-stone-800 mb-2">
                    {{ t("addressTitle") }}
                  </h3>
                  <p class="text-stone-600 mb-1">{{ t("addressText") }}</p>
                  <p class="text-sm text-stone-500">{{ t("addressNote") }}</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:phone"
                    class="text-green-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-stone-800 mb-2">
                    {{ t("phoneTitle") }}
                  </h3>
                  <p class="text-stone-600 mb-1">{{ t("phoneNumber") }}</p>
                  <p class="text-sm text-stone-500">{{ t("phoneNote") }}</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:envelope"
                    class="text-blue-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-stone-800 mb-2">
                    {{ t("emailTitle") }}
                  </h3>
                  <p class="text-stone-600 mb-1">{{ t("emailAddress") }}</p>
                  <p class="text-sm text-stone-500">{{ t("emailNote") }}</p>
                </div>
              </div>

              <!-- Service Hours -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="heroicons:clock"
                    class="text-purple-600 !w-6 !h-6"
                  />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-stone-800 mb-2">
                    {{ t("serviceHoursTitle") }}
                  </h3>
                  <p class="text-stone-600 mb-1">{{ t("checkInOut") }}</p>
                  <p class="text-sm text-stone-500">{{ t("frontDesk24h") }}</p>
                </div>
              </div>
            </div>

            <!-- Google Maps -->
            <div class="bg-white rounded-3xl p-8 shadow-lg">
              <h3 class="text-xl font-bold text-stone-800 mb-6">
                {{ t("locationMapTitle") }}
              </h3>
              <div class="h-64 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5!2d121.1086!3d22.7569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f3134a0e8f4f1%3A0x6e5b4e7f8a1d3c2b!2s台東市!5e0!3m2!1szh-TW!2stw!4v1629788743123!5m2!1szh-TW!2stw"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div
            ref="contactFormSection"
            :class="[
              'bg-white rounded-3xl p-8 lg:p-12 shadow-lg transition-all duration-1000 ease-out',
              contactFormAnimated
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0',
            ]"
          >
            <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-8">
              {{ t("contactFormTitle") }}
            </h2>

            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    class="block text-sm font-semibold text-stone-700 mb-3"
                  >
                    {{ t("nameLabel") }}
                  </label>
                  <input
                    type="text"
                    class="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 bg-stone-50/50 hover:bg-white"
                    :placeholder="t('namePlaceholder')"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-semibold text-stone-700 mb-3"
                  >
                    {{ t("phoneLabel") }}
                  </label>
                  <input
                    type="tel"
                    class="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 bg-stone-50/50 hover:bg-white"
                    :placeholder="t('phonePlaceholder')"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-stone-700 mb-3">
                  {{ t("emailLabel") }}
                </label>
                <input
                  type="email"
                  class="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 bg-stone-50/50 hover:bg-white"
                  :placeholder="t('emailPlaceholder')"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-stone-700 mb-3">
                  {{ t("inquiryTypeLabel") }}
                </label>
                <select
                  class="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 bg-stone-50/50 hover:bg-white"
                >
                  <option>{{ t("generalInquiry") }}</option>
                  <option>{{ t("roomBooking") }}</option>
                  <option>{{ t("eventVenue") }}</option>
                  <option>{{ t("otherServices") }}</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-stone-700 mb-3">
                  {{ t("messageLabel") }}
                </label>
                <textarea
                  rows="6"
                  class="w-full px-4 py-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 bg-stone-50/50 hover:bg-white resize-none"
                  :placeholder="t('messagePlaceholder')"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {{ t("sendMessage") }}
              </button>

              <!-- Contact Form Notice -->
              <div
                class="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-200"
              >
                <div class="text-base text-stone-600 space-y-2">
                  <p class="font-medium text-stone-700 mb-3">
                    <Icon
                      name="heroicons:information-circle"
                      class="inline !w-5 !h-5 mr-2 text-blue-500"
                    />
                    重要提醒
                  </p>
                  <ul class="space-y-1 text-sm text-stone-500">
                    <li>• 我們將在24小時內回覆您的詢問</li>
                    <li>• 您的個人資料將會被保密處理</li>
                    <li>• 如有緊急事務，請直接來電聯絡</li>
                  </ul>
                </div>
              </div>
            </form>
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

        <div ref="quickActionsSection" class="grid md:grid-cols-3 gap-8">
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

          <!-- Online Chat -->
          <div
            :class="[
              'bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-1000 ease-out transform hover:-translate-y-2',
              quickActionsAnimated.action2
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0',
            ]"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="heroicons:chat-bubble-left-ellipsis"
                class="text-blue-600 !w-8 !h-8"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              {{ t("onlineChat") }}
            </h3>
            <p class="text-stone-600 mb-6">{{ t("onlineChatDesc") }}</p>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {{ t("startChat") }}
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

    <!-- Transportation Info -->
    <section class="py-16 px-6 lg:px-12 bg-stone-100">
      <div class="max-w-5xl mx-auto">
        <div
          ref="transportSection"
          :class="[
            'text-center mb-12 transition-all duration-1000 ease-out',
            transportAnimated
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          ]"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
            {{ t("transportInfoTitle") }}
          </h2>

          <div class="bg-white rounded-3xl p-12 shadow-lg">
            <div class="grid md:grid-cols-2 gap-12">
              <!-- Public Transportation -->
              <div class="text-left">
                <div class="flex items-center mb-6">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Icon
                      name="heroicons:building-office-2"
                      class="text-blue-600 !w-6 !h-6"
                    />
                  </div>
                  <h3 class="text-xl font-bold text-stone-800">
                    {{ t("publicTransport") }}
                  </h3>
                </div>
                <div class="space-y-3 text-stone-600">
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("trainStation") }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("busStop") }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("airportBus") }}</span>
                  </div>
                </div>
              </div>

              <!-- Self Driving -->
              <div class="text-left">
                <div class="flex items-center mb-6">
                  <div
                    class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Icon
                      name="heroicons:truck"
                      class="text-amber-600 !w-6 !h-6"
                    />
                  </div>
                  <h3 class="text-xl font-bold text-stone-800">
                    {{ t("selfDriving") }}
                  </h3>
                </div>
                <div class="space-y-3 text-stone-600">
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("highway") }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("parking") }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:check-circle"
                      class="text-green-500 !w-5 !h-5 mr-3 flex-shrink-0"
                    />
                    <span>{{ t("valetService") }}</span>
                  </div>
                </div>
              </div>
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
import { ref, onMounted, nextTick } from "vue";
import { useLanguage } from "~/composables/useLanguage";

const { t } = useLanguage();

// 動畫狀態
const heroSection = ref(null);
const contactInfoSection = ref(null);
const contactFormSection = ref(null);
const quickContactSection = ref(null);
const quickActionsSection = ref(null);
const transportSection = ref(null);

const heroAnimated = ref(false);
const contactInfoAnimated = ref(false);
const contactFormAnimated = ref(false);
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

  // 聯絡表單觀察器
  if (contactFormSection.value) {
    const contactFormObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              contactFormAnimated.value = true;
            }, 200);
            contactFormObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    contactFormObserver.observe(contactFormSection.value);
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
            transportAnimated.value = true;
            transportObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    transportObserver.observe(transportSection.value);
  }
});

// SEO Meta
useHead({
  title: "聯絡我們 - 又一宿精品旅宿",
  meta: [
    {
      name: "description",
      content:
        "歡迎聯絡又一宿，我們提供24小時專業服務。位於台東市中心，交通便利，多種聯絡方式讓您輕鬆預訂與諮詢",
    },
  ],
});
</script>
