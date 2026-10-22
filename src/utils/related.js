const normalizeTerm = (value = '') =>
  value
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()

function sharedTerms(a = [], b = []) {
  const terms = new Set(a.map(normalizeTerm))
  return b.filter((term) => terms.has(normalizeTerm(term))).length
}

// Devuelve `count` elementos relacionados. El primero siempre es el siguiente
// de la lista (circular), así cada página recibe al menos un enlace interno
// desde otra ficha además del listado. El resto se ordena por afinidad.
export function getRelatedItems(items, current, getTerms, count = 3) {
  const index = items.findIndex((item) => item.id === current.id)
  if (index === -1 || items.length < 2) return []

  const next = items[(index + 1) % items.length]
  const currentTerms = getTerms(current)

  const byAffinity = items
    .filter((item) => item.id !== current.id && item.id !== next.id)
    .map((item, order) => ({
      item,
      order,
      score: sharedTerms(currentTerms, getTerms(item)),
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map(({ item }) => item)

  return [next, ...byAffinity].slice(0, count)
}

export const getProjectTerms = (project) => [
  ...(Array.isArray(project.type) ? project.type : []),
  ...(project.category ? project.category.split('/') : []),
  project.client,
].filter(Boolean)

export const getPostTerms = (post) => [
  ...(Array.isArray(post.tags) ? post.tags : []),
  post.category,
].filter(Boolean)
