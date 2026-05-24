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