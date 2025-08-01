import { ref, computed } from "vue";

// 文章資料結構
const blogPosts = ref([]);

// 讀取所有文章
export const useBlogPosts = () => {
  // 載入文章資料
  const loadPosts = async () => {
    try {
      // 使用 $fetch 來獲取內容
      const posts = await $fetch("/api/_content/query", {
        params: {
          path: "/blog",
          where: { _file: { $ne: "README.md" } },
          sort: { date: -1 },
        },
      });

      console.log("載入的文章:", posts); // 調試用

      // 確保 posts 存在且不為空
      if (posts && posts.length > 0) {
        // 轉換資料格式以符合現有的結構
        blogPosts.value = posts.map((post, index) => ({
          id: index + 1,
          title: post.title,
          excerpt: post.excerpt,
          content: post.body,
          image: post.image,
          category: post.category,
          tags: post.tags || [],
          date: post.date,
          author: post.author,
          slug: post._file.split("/").pop().replace(".md", ""),
          _path: post._path,
          _file: post._file,
          // 保留原始的 Nuxt Content 資料結構用於渲染
          _source: post,
        }));
        console.log("轉換後的文章:", blogPosts.value); // 調試用
      } else {
        console.log("沒有找到文章或文章為空");
        blogPosts.value = [];
      }
    } catch (error) {
      console.error("載入文章失敗:", error);
      blogPosts.value = [];
    }
  };

  // 獲取所有文章
  const getAllPosts = computed(() => {
    return blogPosts.value.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // 根據 ID 獲取單篇文章
  const getPostById = (id) => {
    return blogPosts.value.find((post) => post.id === id);
  };

  // 根據 slug 獲取單篇文章
  const getPostBySlug = (slug) => {
    return blogPosts.value.find((post) => post.slug === slug);
  };

  // 根據路徑獲取單篇文章
  const getPostByPath = async (path) => {
    try {
      const { data: post } = await useAsyncData(`post-${path}`, () =>
        queryContent(path).findOne()
      );

      if (post.value) {
        return {
          id: blogPosts.value.findIndex((p) => p._path === path) + 1,
          title: post.value.title,
          excerpt: post.value.excerpt,
          content: post.value.body,
          image: post.value.image,
          category: post.value.category,
          tags: post.value.tags || [],
          date: post.value.date,
          author: post.value.author,
          slug: post.value._file.split("/").pop().replace(".md", ""),
          _path: post.value._path,
          _file: post.value._file,
          // 保留原始的 Nuxt Content 資料結構用於渲染
          _source: post.value,
        };
      }
      return null;
    } catch (error) {
      console.error("獲取文章失敗:", error);
      return null;
    }
  };

  // 獲取所有分類
  const getAllCategories = computed(() => {
    const categories = [
      ...new Set(blogPosts.value.map((post) => post.category)),
    ];
    return categories;
  });

  // 獲取所有標籤
  const getAllTags = computed(() => {
    const tags = blogPosts.value.flatMap((post) => post.tags);
    return [...new Set(tags)];
  });

  // 根據分類篩選文章
  const getPostsByCategory = (category) => {
    if (!category) return getAllPosts.value;
    return blogPosts.value.filter((post) => post.category === category);
  };

  // 根據標籤篩選文章
  const getPostsByTag = (tag) => {
    return blogPosts.value.filter((post) => post.tags.includes(tag));
  };

  // 搜尋文章
  const searchPosts = (query) => {
    if (!query) return getAllPosts.value;
    const lowercaseQuery = query.toLowerCase();
    return blogPosts.value.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  // 獲取相關文章
  const getRelatedPosts = (currentPost, limit = 3) => {
    const related = blogPosts.value
      .filter(
        (post) =>
          post.id !== currentPost.id &&
          (post.category === currentPost.category ||
            post.tags.some((tag) => currentPost.tags.includes(tag)))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);

    return related;
  };

  // 獲取上一篇和下一篇文章
  const getPreviousAndNextPosts = (currentPost) => {
    const sortedPosts = getAllPosts.value;
    const currentIndex = sortedPosts.findIndex(
      (post) => post.id === currentPost.id
    );

    return {
      previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
      next:
        currentIndex < sortedPosts.length - 1
          ? sortedPosts[currentIndex + 1]
          : null,
    };
  };

  return {
    blogPosts,
    loadPosts,
    getAllPosts,
    getPostById,
    getPostBySlug,
    getPostByPath,
    getAllCategories,
    getAllTags,
    getPostsByCategory,
    getPostsByTag,
    searchPosts,
    getRelatedPosts,
    getPreviousAndNextPosts,
  };
};
