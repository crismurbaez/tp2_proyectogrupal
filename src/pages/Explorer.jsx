import { useState } from "react";
import explorerData from "../data/explorerData";

function Explorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredData = explorerData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todos" || item.category === category;
    return matchesSearch && matchesCategory;
  });


  return (
    <section className="explorer-page">
      <div className="explorer-header">
        <h1>Explorador</h1>
        <p>Descubre nuevas series, películas y videojuegos.</p>
      </div>
      <div className="explorer-controls">
      <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Serie">Serie</option>
        <option value="Película">Película</option>
      </select>
      </div>
      <div className="explorer-grid">
        {filteredData.map((item) => (
          <div key={item.id} className="explorer-card">
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.year}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explorer;