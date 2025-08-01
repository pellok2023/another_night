<template>
  <div>
    <!-- Back to Blog -->
    <section class="bg-stone-50 py-6 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300"
        >
          <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          <span>{{ t("backToBlog") }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12 px-6 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <!-- Article Header -->
        <div class="mb-8">
          <div class="flex items-center space-x-2 text-sm text-stone-500 mb-4">
            <Icon name="heroicons:calendar" class="w-4 h-4" />
            <span>{{ t("publishedOn") }} {{ formatDate(post.date) }}</span>
            <Icon name="heroicons:user" class="w-4 h-4 ml-4" />
            <span>{{ t("author") }}</span>
          </div>

          <h1 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {{ post.title }}
          </h1>

          <p class="text-xl text-stone-600 leading-relaxed mb-6">
            {{ post.excerpt }}
          </p>

          <!-- Category and Tags -->
          <div class="flex flex-wrap items-center gap-4">
            <span
              class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ post.category }}
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs cursor-pointer hover:bg-stone-200 transition duration-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="mb-8">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <!-- Article Body -->
        <article class="prose prose-lg max-w-none mb-12">
          <div
            class="bg-white rounded-2xl p-8 shadow-sm border border-stone-200"
          >
            <ContentRenderer
              :value="post._source"
              class="text-stone-700 leading-relaxed space-y-6 prose prose-stone max-w-none"
            />
          </div>
        </article>

        <!-- Share Section -->
        <div class="bg-amber-50 rounded-2xl p-6 mb-12">
          <h3 class="text-lg font-semibold text-stone-800 mb-4">
            {{ t("shareThisPost") }}
          </h3>
          <div class="flex space-x-4">
            <button
              @click="shareOnFacebook"
              class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              <Icon name="heroicons:share" class="w-4 h-4" />
              <span>Facebook</span>
            </button>
            <button
              @click="shareOnTwitter"
              class="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition duration-300 cursor-pointer"
            >
              <Icon name="heroicons:share" class="w-4 h-4" />
              <span>Twitter</span>
            </button>
            <button
              @click="copyLink"
              class="flex items-center space-x-2 bg-stone-600 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition duration-300 cursor-pointer"
            >
              <Icon name="heroicons:link" class="w-4 h-4" />
              <span>複製連結</span>
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div
          class="flex justify-between items-center py-6 border-t border-stone-200"
        >
          <NuxtLink
            v-if="previousPost"
            :to="`/blog/${previousPost.id}`"
            class="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 cursor-pointer"
          >
            <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            <div>
              <span class="text-sm text-stone-500">{{
                t("previousPost")
              }}</span>
              <p class="font-medium">{{ previousPost.title }}</p>
            </div>
          </NuxtLink>
          <div v-else></div>

          <NuxtLink
            v-if="nextPost"
            :to="`/blog/${nextPost.id}`"
            class="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 text-right cursor-pointer"
          >
            <div>
              <span class="text-sm text-stone-500">{{ t("nextPost") }}</span>
              <p class="font-medium">{{ nextPost.title }}</p>
            </div>
            <Icon name="heroicons:arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <div v-else></div>
        </div>
      </div>
    </section>

    <!-- Related Posts -->
    <section class="bg-stone-50 py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-stone-800 mb-8 text-center">
          {{ t("relatedPosts") }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <article
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
            class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer group"
            @click="navigateToPost(relatedPost.id)"
          >
            <img
              :src="relatedPost.image"
              :alt="relatedPost.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div class="p-6">
              <div
                class="flex items-center space-x-2 text-sm text-stone-500 mb-3"
              >
                <Icon name="heroicons:calendar" class="w-4 h-4" />
                <span>{{ formatDate(relatedPost.date) }}</span>
              </div>
              <h3
                class="text-lg font-semibold text-stone-800 mb-3 group-hover:text-amber-600 transition duration-300 line-clamp-2"
              >
                {{ relatedPost.title }}
              </h3>
              <p class="text-stone-600 text-sm line-clamp-3">
                {{ relatedPost.excerpt }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useLanguage();
const { trackPageView } = useGoogleAnalytics();

// 導入文章管理系統
const {
  blogPosts,
  loadPosts,
  getAllPosts,
  getPostById,
  getRelatedPosts,
  getPreviousAndNextPosts,
} = useBlogPosts();

// Get post ID from route
const postId = parseInt(route.params.id);

// 載入文章資料
await loadPosts();

// Find current post
const post = computed(() => {
  return getPostById(postId);
});

// Find previous and next posts
const { previous: previousPost, next: nextPost } = computed(() => {
  if (!post.value) return { previous: null, next: null };
  return getPreviousAndNextPosts(post.value);
}).value;

// Related posts (same category, excluding current post)
const relatedPosts = computed(() => {
  if (!post.value) return [];
  return getRelatedPosts(post.value, 3);
});

// SEO
useHead(() => ({
  title: post.value ? post.value.title : t("blogTitle"),
  meta: [
    {
      name: "description",
      content: post.value ? post.value.excerpt : t("blogDescription"),
    },
  ],
}));

// Track page view
onMounted(() => {
  if (post.value) {
    trackPageView(post.value.title, `/blog/${postId}`);
  }
});

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const navigateToPost = (postId) => {
  navigateTo(`/blog/${postId}`);
};

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.value.title);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
};

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.value.title);
  window.open(
    `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    "_blank"
  );
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("連結已複製到剪貼簿！");
  } catch (err) {
    console.error("複製失敗:", err);
  }
};

// Handle 404 if post not found
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "文章未找到",
  });
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
