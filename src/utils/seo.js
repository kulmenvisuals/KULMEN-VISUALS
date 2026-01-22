// src/utils/seo.js

export function setPageMeta({ title, description }) {
  if (title) {
    document.title = title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", title)
    }
  }

  if (description) {
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute("content", description)
    }
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute("content", description)
    }
  }
}
