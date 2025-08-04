import { readdir } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async (event) => {
  try {
    // 讀取 public/content/blog 目錄
    const blogDir = join(process.cwd(), "public", "content", "blog");
    const files = await readdir(blogDir);

    // 過濾出 markdown 文件，排除 README.md
    const markdownFiles = files.filter(
      (file) => file.endsWith(".md") && file !== "README.md"
    );

    return {
      files: markdownFiles,
      count: markdownFiles.length,
    };
  } catch (error) {
    console.error("讀取 blog 目錄失敗:", error);
    return {
      files: [],
      count: 0,
      error: "無法讀取目錄",
    };
  }
});
