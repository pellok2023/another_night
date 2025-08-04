<template>
  <div>
    <!-- Hero Section with Background Image -->
    <section
      class="relative mt-24 pb-16 px-6 lg:px-12 min-h-[50vh] flex items-center bg-cover bg-center bg-fixed"
      style="background-image: url('/images/hero/hero-7.jpeg')"
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
          <div
            class="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6 shadow-lg"
          >
            <Icon
              name="heroicons:document-text"
              class="w-4 h-4 text-amber-400"
            />
            <span class="text-white font-medium text-sm">{{
              t("blogTitle")
            }}</span>
          </div>

          <h1
            class="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-wide"
          >
            {{ t("blogTitle") }}
          </h1>

          <p
            class="text-white/95 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            {{ t("blogDescription") }}
          </p>

          <!-- Scroll Indicator -->
          <div class="mt-8 animate-bounce">
            <Icon
              name="heroicons:chevron-down"
              class="w-6 h-6 text-white/80 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Search -->
            <div
              class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-6"
            >
              <h3 class="text-lg font-semibold text-stone-800 mb-4">
                {{ t("searchPosts") }}
              </h3>
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="t('searchPosts')"
                  class="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <Icon
                  name="heroicons:magnifying-glass"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400"
                />
              </div>
            </div>

            <!-- Categories -->
            <div
              class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-6"
            >
              <h3 class="text-lg font-semibold text-stone-800 mb-4">
                {{ t("categories") }}
              </h3>
              <div class="space-y-2">
                <button
                  @click="selectedCategory = null"
                  :class="[
                    'w-full text-left px-3 py-2 rounded-lg transition duration-300 cursor-pointer',
                    !selectedCategory
                      ? 'bg-amber-100 text-amber-700 font-medium'
                      : 'text-stone-600 hover:bg-amber-50',
                  ]"
                >
                  {{ t("allCategories") }}
                </button>
                <button
                  v-for="category in categories"
                  :key="category"
                  @click="selectedCategory = category"
                  :class="[
                    'w-full text-left px-3 py-2 rounded-lg transition duration-300 cursor-pointer',
                    selectedCategory === category
                      ? 'bg-amber-100 text-amber-700 font-medium'
                      : 'text-stone-600 hover:bg-amber-50',
                  ]"
                >
                  {{ category }}
                </button>
              </div>
            </div>

            <!-- Latest Posts -->
            <div
              class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200"
            >
              <h3 class="text-lg font-semibold text-stone-800 mb-4">
                {{ t("latestPosts") }}
              </h3>
              <div class="space-y-4">
                <div
                  v-for="post in latestPosts"
                  :key="post.id"
                  class="group cursor-pointer"
                  @click="navigateToPost(post.id)"
                >
                  <div class="flex space-x-3">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="w-16 h-16 object-cover rounded-lg"
                    />
                    <div class="flex-1 min-w-0">
                      <h4
                        class="text-sm font-medium text-stone-800 group-hover:text-amber-600 transition duration-300 line-clamp-2"
                      >
                        {{ post.title }}
                      </h4>
                      <p class="text-xs text-stone-500 mt-1">
                        {{ formatDate(post.date) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Posts (when viewing article) -->
            <div
              v-if="selectedPost"
              class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mt-6"
            >
              <h3 class="text-lg font-semibold text-stone-800 mb-4">
                {{ t("relatedPosts") }}
              </h3>
              <div class="space-y-4">
                <div
                  v-for="post in relatedPosts"
                  :key="post.id"
                  class="group cursor-pointer"
                  @click="navigateToPost(post.id)"
                >
                  <div class="flex space-x-3">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="w-16 h-16 object-cover rounded-lg"
                    />
                    <div class="flex-1 min-w-0">
                      <h4
                        class="text-sm font-medium text-stone-800 group-hover:text-amber-600 transition duration-300 line-clamp-2"
                      >
                        {{ post.title }}
                      </h4>
                      <p class="text-xs text-stone-500 mt-1">
                        {{ formatDate(post.date) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <!-- Back to Blog List Button (when viewing article) -->
            <div v-if="selectedPost" class="mb-6">
              <button
                @click="backToBlogList"
                class="inline-flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 cursor-pointer"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5" />
                <span>{{ t("backToBlog") }}</span>
              </button>
            </div>

            <!-- Single Article View -->
            <div
              v-if="selectedPost"
              class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden"
            >
              <!-- Article Header -->
              <div class="p-8">
                <div
                  class="flex items-center space-x-2 text-sm text-stone-500 mb-4"
                >
                  <Icon name="heroicons:calendar" class="w-4 h-4" />
                  <span
                    >{{ t("publishedOn") }}
                    {{ formatDate(selectedPost.date) }}</span
                  >
                  <Icon name="heroicons:user" class="w-4 h-4 ml-4" />
                  <span>{{ t("author") }}</span>
                </div>

                <h1 class="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
                  {{ selectedPost.title }}
                </h1>

                <p class="text-xl text-stone-600 leading-relaxed mb-6">
                  {{ selectedPost.excerpt }}
                </p>

                <!-- Category and Tags -->
                <div class="flex flex-wrap items-center gap-4">
                  <span
                    class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {{ selectedPost.category }}
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in selectedPost.tags"
                      :key="tag"
                      class="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs cursor-pointer hover:bg-stone-200 transition duration-300"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Featured Image -->
              <div class="px-8 pb-8">
                <img
                  :src="selectedPost.image"
                  :alt="selectedPost.title"
                  class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <!-- Article Body -->
              <div class="px-8 pb-8">
                <div
                  class="text-stone-700 leading-relaxed space-y-6 prose prose-stone max-w-none"
                  v-html="renderMarkdown(selectedPost.content)"
                />
              </div>

              <!-- Share Section -->
              <div class="bg-amber-50 p-6 mx-8 mb-8 rounded-2xl">
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
                class="flex justify-between items-center py-6 px-8 border-t border-stone-200"
              >
                <button
                  v-if="previousPost"
                  @click="navigateToPost(previousPost.id)"
                  class="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 cursor-pointer"
                >
                  <Icon name="heroicons:arrow-left" class="w-4 h-4" />
                  <div>
                    <span class="text-sm text-stone-500">{{
                      t("previousPost")
                    }}</span>
                    <p class="font-medium">{{ previousPost.title }}</p>
                  </div>
                </button>
                <div v-else></div>

                <button
                  v-if="nextPost"
                  @click="navigateToPost(nextPost.id)"
                  class="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition duration-300 text-right cursor-pointer"
                >
                  <div>
                    <span class="text-sm text-stone-500">{{
                      t("nextPost")
                    }}</span>
                    <p class="font-medium">{{ nextPost.title }}</p>
                  </div>
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </button>
                <div v-else></div>
              </div>
            </div>

            <!-- Blog List View -->
            <div v-else>
              <!-- Filter Results -->
              <div v-if="filteredPosts.length === 0" class="text-center py-12">
                <Icon
                  name="heroicons:document-text"
                  class="w-16 h-16 text-stone-300 mx-auto mb-4"
                />
                <h3 class="text-xl font-medium text-stone-600 mb-2">
                  {{ t("noPostsFound") }}
                </h3>
                <p class="text-stone-500">{{ t("blogDescription") }}</p>
                <!-- 調試信息 -->
                <div class="mt-4 text-sm text-gray-500">
                  <p>Debug: blogPosts.length = {{ blogPosts.length }}</p>
                  <p>Debug: 請檢查瀏覽器控制台的載入日誌</p>
                </div>
              </div>

              <!-- Posts Grid -->
              <div v-else class="grid md:grid-cols-2 gap-8">
                <article
                  v-for="post in filteredPosts"
                  :key="post.id"
                  class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer group"
                  @click="navigateToPost(post.id)"
                >
                  <!-- Post Image -->
                  <div class="relative overflow-hidden">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div class="absolute top-4 left-4">
                      <span
                        class="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {{ post.category }}
                      </span>
                    </div>
                  </div>

                  <!-- Post Content -->
                  <div class="p-6">
                    <div
                      class="flex items-center space-x-2 text-sm text-stone-500 mb-3"
                    >
                      <Icon name="heroicons:calendar" class="w-4 h-4" />
                      <span>{{ formatDate(post.date) }}</span>
                      <Icon name="heroicons:user" class="w-4 h-4 ml-2" />
                      <span>{{ t("author") }}</span>
                    </div>

                    <h3
                      class="text-xl font-semibold text-stone-800 mb-3 group-hover:text-amber-600 transition duration-300 line-clamp-2"
                    >
                      {{ post.title }}
                    </h3>

                    <p class="text-stone-600 mb-4 line-clamp-3">
                      {{ post.excerpt }}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="tag in post.tags"
                        :key="tag"
                        class="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs cursor-pointer hover:bg-stone-200 transition duration-300"
                      >
                        {{ tag }}
                      </span>
                    </div>

                    <button
                      class="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition duration-300 cursor-pointer"
                    >
                      <span>{{ t("readMore") }}</span>
                      <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </div>

              <!-- Load More Button -->
              <div v-if="filteredPosts.length > 0" class="text-center mt-12">
                <button
                  @click="loadMore"
                  class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 cursor-pointer"
                >
                  {{ t("readMore") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useLanguage();
const { trackPageView } = useGoogleAnalytics();

// 導入文章管理系統
const {
  blogPosts,
  loadPosts,
  getAllPosts,
  getPostById,
  getAllCategories,
  getPostsByCategory,
  searchPosts,
  getRelatedPosts,
  getPreviousAndNextPosts,
} = useBlogPosts();

// Animation refs
const heroSection = ref(null);
const heroAnimated = ref(false);

// Blog data
const searchQuery = ref("");
const selectedCategory = ref(null);
const postsPerPage = ref(6);
const selectedPost = ref(null);

// SEO
useHead(() => ({
  title: selectedPost.value ? selectedPost.value.title : t("blogTitle"),
  meta: [
    {
      name: "description",
      content: selectedPost.value
        ? selectedPost.value.excerpt
        : t("blogDescription"),
    },
  ],
}));

// 動態載入 markdown 文件
const loadMarkdownPosts = async () => {
  try {
    console.log("開始自動偵測 markdown 文件...");

    // 嘗試獲取目錄列表
    let markdownFiles = [];

    try {
      // 首先嘗試獲取目錄內容
      const directoryResponse = await $fetch("/api/blog/files");
      if (directoryResponse && Array.isArray(directoryResponse.files)) {
        markdownFiles = directoryResponse.files.filter(
          (file) => file.endsWith(".md") && file !== "README.md"
        );
        console.log("自動偵測到的文件:", markdownFiles);
      }
    } catch (error) {
      console.log("無法自動偵測文件，使用備用方案");
      // 如果無法自動偵測，使用已知的文件列表作為備用
      markdownFiles = [
        "2025-07-31.md",
        "2024-01-15-birth-of-another-night.md",
        "2024-01-10-taitung-food-exploration.md",
        "2024-01-05-service-philosophy.md",
      ];
    }

    const posts = [];

    for (let i = 0; i < markdownFiles.length; i++) {
      const filename = markdownFiles[i];
      try {
        // 讀取 markdown 文件內容
        const response = await $fetch(`/content/blog/${filename}`);
        console.log(`載入文件 ${filename}:`, response);

        if (response) {
          // 解析 frontmatter 和內容
          const post = parseMarkdownFile(response, filename, i + 1);
          posts.push(post);
        }
      } catch (error) {
        console.error(`載入文件 ${filename} 失敗:`, error);
      }
    }

    console.log("載入完成，文章數量:", posts.length);
    blogPosts.value = posts;
  } catch (error) {
    console.error("載入 markdown 文件失敗:", error);
    // 如果失敗，使用硬編碼數據作為備用
    useFallbackData();
  }
};

// 解析 markdown 文件
const parseMarkdownFile = (content, filename, id) => {
  // 簡單的 frontmatter 解析
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const body = frontmatterMatch[2];

    // 解析 frontmatter
    const titleMatch = frontmatter.match(/title:\s*"([^"]*)"/);
    const excerptMatch = frontmatter.match(/excerpt:\s*"([^"]*)"/);
    const imageMatch = frontmatter.match(/image:\s*"([^"]*)"/);
    const categoryMatch = frontmatter.match(/category:\s*"([^"]*)"/);
    const tagsMatch = frontmatter.match(/tags:\s*\[([^\]]*)\]/);
    const dateMatch = frontmatter.match(/date:\s*"([^"]*)"/);
    const authorMatch = frontmatter.match(/author:\s*"([^"]*)"/);

    const title = titleMatch ? titleMatch[1] : "無標題";
    const excerpt = excerptMatch ? excerptMatch[1] : "";
    const image = imageMatch ? imageMatch[1] : "/images/hero/hero-1.jpeg";
    const category = categoryMatch ? categoryMatch[1] : "未分類";
    const tags = tagsMatch
      ? tagsMatch[1].split(",").map((tag) => tag.trim().replace(/"/g, ""))
      : [];
    const date = dateMatch ? dateMatch[1] : "2024-01-01";
    const author = authorMatch ? authorMatch[1] : "又一宿團隊";

    return {
      id,
      title,
      excerpt,
      content: body,
      image,
      category,
      tags,
      date,
      author,
      slug: filename.replace(".md", ""),
      _path: `/blog/${filename.replace(".md", "")}`,
      _file: filename,
      _source: {
        title,
        excerpt,
        body,
        image,
        category,
        tags,
        date,
        author,
      },
    };
  }

  // 如果沒有 frontmatter，返回基本結構
  return {
    id,
    title: filename.replace(".md", ""),
    excerpt: "",
    content,
    image: "/images/hero/hero-1.jpeg",
    category: "未分類",
    tags: [],
    date: "2024-01-01",
    author: "又一宿團隊",
    slug: filename.replace(".md", ""),
    _path: `/blog/${filename.replace(".md", "")}`,
    _file: filename,
    _source: {
      title: filename.replace(".md", ""),
      excerpt: "",
      body: content,
      image: "/images/hero/hero-1.jpeg",
      category: "未分類",
      tags: [],
      date: "2024-01-01",
      author: "又一宿團隊",
    },
  };
};

// 備用硬編碼數據
const useFallbackData = () => {
  const mockPosts = [
    {
      id: 1,
      title: "又一宿的誕生：從零開始的蛻變故事",
      excerpt:
        "記錄我們如何從一個簡單的想法，一步步打造出又一宿這個充滿溫度的住宿空間。這是一個關於夢想、堅持與成長的真實故事。",
      content:
        "又一宿的誕生，始於一個簡單而真誠的想法：在台東這片美麗的土地上，為旅人創造一個溫暖如家的住宿空間。",
      image: "/images/hero/hero-1.jpeg",
      category: "創業故事",
      tags: ["創業", "夢想", "台東"],
      date: "2024-01-15",
      author: "又一宿團隊",
      slug: "2024-01-15-birth-of-another-night",
      _path: "/blog/2024-01-15-birth-of-another-night",
      _file: "2024-01-15-birth-of-another-night.md",
      _source: {
        title: "又一宿的誕生：從零開始的蛻變故事",
        excerpt:
          "記錄我們如何從一個簡單的想法，一步步打造出又一宿這個充滿溫度的住宿空間。這是一個關於夢想、堅持與成長的真實故事。",
        body: "又一宿的誕生，始於一個簡單而真誠的想法：在台東這片美麗的土地上，為旅人創造一個溫暖如家的住宿空間。",
        image: "/images/hero/hero-1.jpeg",
        category: "創業故事",
        tags: ["創業", "夢想", "台東"],
        date: "2024-01-15",
        author: "又一宿團隊",
      },
    },
  ];
  blogPosts.value = mockPosts;
};

// 載入文章
loadMarkdownPosts();

// 移除不需要的代碼，因為我們直接設置了 blogPosts.value

// Track page view and handle animations
onMounted(() => {
  trackPageView(t("blogTitle"), "/blog");

  // Trigger hero animation
  setTimeout(() => {
    heroAnimated.value = true;
  }, 100);
});

// Watch for post changes and track
watch(selectedPost, (newPost) => {
  if (newPost) {
    trackPageView(newPost.title, `/blog/${newPost.id}`);
  } else {
    trackPageView(t("blogTitle"), "/blog");
  }
});

// Categories
const categories = computed(() => {
  return getAllCategories.value;
});

// Latest posts
const latestPosts = computed(() => {
  return getAllPosts.value.slice(0, 3);
});

// Filtered posts
const filteredPosts = computed(() => {
  let filtered = blogPosts.value;

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(
      (post) => post.category === selectedCategory.value
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Sort by date
  filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Limit posts per page
  return filtered.slice(0, postsPerPage.value);
});

// Previous and next posts
const previousPost = computed(() => {
  if (!selectedPost.value) return null;
  const { previous } = getPreviousAndNextPosts(selectedPost.value);
  return previous;
});

const nextPost = computed(() => {
  if (!selectedPost.value) return null;
  const { next } = getPreviousAndNextPosts(selectedPost.value);
  return next;
});

// Related posts (same category, excluding current post)
const relatedPosts = computed(() => {
  if (!selectedPost.value) return [];
  return getRelatedPosts(selectedPost.value, 3);
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

const navigateToPost = async (postId) => {
  // Find the post and set it as selected
  const post = getPostById(postId);
  if (post) {
    selectedPost.value = post;
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const backToBlogList = () => {
  selectedPost.value = null;
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const loadMore = () => {
  postsPerPage.value += 6;
};

// Share methods
const shareOnFacebook = () => {
  if (selectedPost.value) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(selectedPost.value.title);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  }
};

const shareOnTwitter = () => {
  if (selectedPost.value) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(selectedPost.value.title);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      "_blank"
    );
  }
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert("連結已複製到剪貼簿！");
  } catch (err) {
    console.error("複製失敗:", err);
  }
};

// 簡單的 markdown 渲染函數
const renderMarkdown = (markdown) => {
  if (!markdown) return "";

  return (
    markdown
      // 處理標題
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-xl font-semibold text-stone-800 mt-6 mb-3">$1</h3>'
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-2xl font-bold text-stone-800 mt-8 mb-4">$1</h2>'
      )
      .replace(
        /^# (.*$)/gim,
        '<h1 class="text-3xl font-bold text-stone-800 mt-8 mb-4">$1</h1>'
      )
      // 處理段落
      .replace(/\n\n/g, '</p><p class="mb-4">')
      // 處理粗體
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // 處理斜體
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // 處理列表
      .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">$1</li>')
      // 包裝段落
      .replace(/^(?!<[h|u|o]|<li)(.*$)/gim, '<p class="mb-4">$1</p>')
      // 清理多餘的標籤
      .replace(/<p><\/p>/g, "")
      .replace(/<p class="mb-4"><\/p>/g, "")
  );
};
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
