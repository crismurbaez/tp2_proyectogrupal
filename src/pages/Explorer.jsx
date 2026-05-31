import { useState } from "react";
import explorerData from "../data/explorerData";

function Explorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredData = explorerData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todos" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "year-desc") return b.year - a.year;
    if (sortOrder === "year-asc") return a.year - b.year;
    if (sortOrder === "az") return a.title.localeCompare(b.title);
    if (sortOrder === "za") return b.title.localeCompare(a.title);
    return 0; // default
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
          <option value="Todos">Todas las categorías</option>
          <option value="Serie">Series</option>
          <option value="Película">Películas</option>
          <option value="Videojuego">Videojuegos</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Ordenar por defecto</option>
          <option value="year-desc">Más recientes primero</option>
          <option value="year-asc">Más antiguos primero</option>
          <option value="az">Alfabético (A-Z)</option>
          <option value="za">Alfabético (Z-A)</option>
        </select>
      </div>
      <div className="explorer-grid">
        {sortedData.map((item) => (
          <div
            key={item.id}
            className="explorer-card"
          >
            <img
              src={item.image}
              alt={item.title}
              className="explorer-image"
            />

            <div className="explorer-content">

              <div className="explorer-top">

                <h3>{item.title}</h3>

                <span className="explorer-category">
                  {item.category}
                </span>

              </div>

              <p className="explorer-description">
                {item.description}
              </p>

              <div className="explorer-footer">
                <span>{item.year}</span>
                <span className="explorer-status">
                  {item.status}
                </span>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explorer;