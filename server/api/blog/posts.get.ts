import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  try {
    const blogDir = join(process.cwd(), 'public', 'content', 'blog');
    const files = readdirSync(blogDir).filter(file => file.endsWith('.md') && !file.toLowerCase().includes('readme'));
    
    const posts: any[] = [];
    let id: number = 1;

    for (const filename of files) {
      try {
        const filePath = join(blogDir, filename);
        const content = readFileSync(filePath, 'utf-8');
        
        // 解析 frontmatter
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
          
          const title = titleMatch ? titleMatch[1] : filename.replace('.md', '');
          const excerpt = excerptMatch ? excerptMatch[1] : '';
          const image = imageMatch ? imageMatch[1] : '/images/hero/hero-1.jpeg';
          const category = categoryMatch ? categoryMatch[1] : '未分類';
          const tags = tagsMatch ? tagsMatch[1].split(',').map((tag: string) => tag.trim().replace(/"/g, '')) : [];
          const date = dateMatch ? dateMatch[1] : '2024-01-01';
          const author = authorMatch ? authorMatch[1] : '又一宿團隊';
          
          posts.push({
            id,
            title,
            excerpt,
            content: body,
            image,
            category,
            tags,
            date,
            author,
            slug: filename.replace('.md', ''),
            _path: `/blog/${filename.replace('.md', '')}`,
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
            }
          });
          
          id++;
        }
      } catch (error) {
        console.error(`解析文件 ${filename} 失敗:`, error);
      }
    }
    
    // 按日期排序
    posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return { data: posts };
  } catch (error) {
    console.error('獲取博客文章失敗:', error);
    return { data: [] };
  }
});
