import { ref, computed } from "vue";

// 文章資料結構
const blogPosts = ref([]);

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

// 讀取所有文章
export const useBlogPosts = () => {
  // 載入文章資料
  const loadPosts = async () => {
    // 只在客戶端執行
    if (!process.client) {
      console.log("服務器端跳過載入文章");
      return;
    }

    try {
      // 定義要載入的 markdown 文件列表
      const markdownFiles = [
        "2025-08-08.md",
        "2025-08-07.md",
        "2025-07-31.md",
        "2024-01-15-birth-of-another-night.md",
        "2024-01-10-taitung-food-exploration.md",
        "2024-01-05-service-philosophy.md",
      ];

      const posts = [];

      for (let i = 0; i < markdownFiles.length; i++) {
        const filename = markdownFiles[i];
        try {
          // 直接從 public 目錄讀取 markdown 文件內容
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
      // 從路徑中提取文件名
      const filename = path.split("/").pop() + ".md";

      // 直接從 public 目錄讀取文件
      const response = await $fetch(`/content/blog/${filename}`);

      if (response) {
        const post = parseMarkdownFile(response, filename, 1);
        return post;
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
