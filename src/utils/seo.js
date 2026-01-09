// src/utils/seo.js

export function setPageMeta({ title, description }) {
  if (title) {
    document.title = title
  }

  if (description) {
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute("content", description)
    }
  }
}
