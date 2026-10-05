import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
};

const SITE_URL = "https://talizman-transfer.sk";
const LANGUAGE_PREFIXES = ["en", "ru", "uk"];

function SEO({ title, description }: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Canonical
    const canonicalUrl = `${SITE_URL}${pathname}`;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Remove the current language prefix from the path.
    // Example: /en/prices -> /prices
    const segments = pathname.split("/").filter(Boolean);

    if (LANGUAGE_PREFIXES.includes(segments[0])) {
      segments.shift();
    }

    const basePath = segments.length > 0 ? `/${segments.join("/")}` : "";

    // Remove old hreflang links before creating new ones.
    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((link) => link.remove());

    const alternateUrls = [
      {
        lang: "sk",
        href: `${SITE_URL}${basePath || "/"}`,
      },
      {
        lang: "en",
        href: `${SITE_URL}/en${basePath}`,
      },
      {
        lang: "ru",
        href: `${SITE_URL}/ru${basePath}`,
      },
      {
        lang: "uk",
        href: `${SITE_URL}/uk${basePath}`,
      },
      {
        lang: "x-default",
        href: `${SITE_URL}${basePath || "/"}`,
      },
    ];

    alternateUrls.forEach(({ lang, href }) => {
      const link = document.createElement("link");

      link.rel = "alternate";
      link.hreflang = lang;
      link.href = href;

      document.head.appendChild(link);
    });
  }, [title, description, pathname]);

  return null;
}

export default SEO;
