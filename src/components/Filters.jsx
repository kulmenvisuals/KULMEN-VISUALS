export default function Filters({ types, locations, state, setState }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end">
      <div>
        <label className="text-xs text-zinc-400">Buscar</label>
        <input
          value={state.q}
          onChange={(e) => setState((s) => ({ ...s, q: e.target.value }))}
          placeholder="Título, cliente…"
          className="kv-input md:w-64"
        />
      </div>
      <div>
        <label className="text-xs text-zinc-400">Tipo</label>
        <select
          value={state.type}
          onChange={(e) => setState((s) => ({ ...s, type: e.target.value }))}
          className="kv-select md:w-44"
        >
          <option value="">Todos</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs text-zinc-400">Localización</label>
        <select
          value={state.location}
          onChange={(e) => setState((s) => ({ ...s, location: e.target.value }))}
          className="kv-select md:w-44"
        >
          <option value="">Todas</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => setState({ q: "", type: "", location: "" })}
        className="kv-button-secondary"
      >
        Limpiar
      </button>
    </div>
  )
}
