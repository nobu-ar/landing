import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string
    priority: number
    changeFrequency: "weekly" | "monthly"
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "weekly" },
    { path: "/agro", priority: 0.9, changeFrequency: "weekly" },
    { path: "/chatbot", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gimnasios", priority: 0.8, changeFrequency: "monthly" },
    { path: "/agencias-marketing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/redes", priority: 0.8, changeFrequency: "monthly" },
    { path: "/mutuales", priority: 0.8, changeFrequency: "monthly" },
    { path: "/market", priority: 0.8, changeFrequency: "monthly" },
    { path: "/financieras", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clubes", priority: 0.8, changeFrequency: "monthly" },
    { path: "/bar", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "monthly" },
    { path: "/terminos", priority: 0.3, changeFrequency: "monthly" },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
