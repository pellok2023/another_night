# Blog 系統使用說明

這個 blog 系統現在支援自動渲染 `content/blog/` 目錄下的 markdown 文章。

## 如何新增文章

1. 在 `content/blog/` 目錄下創建新的 `.md` 文件
2. 文件名格式建議：`YYYY-MM-DD-文章標題.md`
3. 在文件開頭添加 frontmatter：

```yaml
---
title: "文章標題"
excerpt: "文章摘要"
image: "/images/hero/hero-1.jpeg"
category: "分類名稱"
tags: ["標籤1", "標籤2", "標籤3"]
date: "YYYY-MM-DD"
author: "作者名稱"
---
```

4. 在 frontmatter 下方寫入 markdown 格式的文章內容

## 支援的功能

- ✅ 自動讀取 markdown 文件
- ✅ 支援 frontmatter 元數據
- ✅ 分類和標籤系統
- ✅ 搜尋功能
- ✅ 相關文章推薦
- ✅ 上一篇/下一篇文章導航
- ✅ 社交分享功能
- ✅ SEO 優化
- ✅ 響應式設計

## 現有文章

目前系統包含以下文章：

1. `2024-01-15-birth-of-another-night.md` - 又一宿的誕生：從零開始的蛻變故事
2. `2024-01-10-taitung-food-exploration.md` - 台東在地美食探索：又一宿推薦的必吃美食
3. `2024-01-05-service-philosophy.md` - 又一宿的服務理念：真誠接待每一位旅人

## 技術實現

- 使用 Nuxt Content 模組讀取 markdown 文件
- 使用 Tailwind CSS Typography 插件渲染 markdown 內容
- 自定義的 `useBlogPosts` composable 管理文章數據
- 支援動態路由和 SEO 優化

## 注意事項

- 確保 markdown 文件的 frontmatter 格式正確
- 圖片路徑需要指向 `public/images/` 目錄下的文件
- 日期格式必須為 `YYYY-MM-DD`
- 標籤必須是陣列格式 