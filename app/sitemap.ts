import type { MetadataRoute } from "next";

const SITE_URL = "https://nobu.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/chatbot",
    "/gimnasios",
    "/agencias-marketing",
    "/redes",
    "/mutuales",
    "/market",
    "/financieras",
    "/clubes",
    "/bar",
    "/privacidad",
    "/terminos",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
