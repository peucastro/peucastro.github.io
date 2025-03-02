import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "src/config";
import { getCollection } from "astro:content";

export async function GET() {
  const blog = await getCollection("blog");
  const projects = await getCollection("projects");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: [
      ...blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
      ...projects.map((project) => ({
        title: project.data.title,
        pubDate: project.data.updatedDate || project.data.pubDate,
        description: project.data.description,
        link: `/projects/${project.slug}/`,
      })),
    ],
  });
}
