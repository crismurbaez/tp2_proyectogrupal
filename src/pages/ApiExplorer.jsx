import { useEffect, useState } from "react";

function ApiExplorer() {

    /* =========================================
       STATES
    ========================================= */

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    /* =========================================
       FETCH API
    ========================================= */

    useEffect(() => {

        const fetchCharacters = async () => {

            try {

                setLoading(true);

                setError(false);

                const response = await fetch(
                    `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
                );

                const data = await response.json();

                /* NO RESULTS */

                if (!data.results) {

                    setItems([]);

                    setLoading(false);

                    return;
                }

                setItems(data.results);

            } catch (error) {

                setError(true);

            } finally {

                setLoading(false);
            }
        };

        fetchCharacters();

    }, [page, search]);

    /* =========================================
       LOADING STATE
    ========================================= */

    if (loading) {

        return (

            <section className="api-page">

                <h2>Cargando personajes...</h2>

            </section>
        );
    }

    /* =========================================
       ERROR STATE
    ========================================= */

    if (error) {

        return (

            <section className="api-page">

                <h2>Error al cargar la API.</h2>

            </section>
        );
    }

    /* =========================================
       MAIN RENDER
    ========================================= */

    return (

        <section className="api-page">

            {/* HEADER */}

            <div className="api-header">

                <h1>Explorador API</h1>

                <p>
                    Consumo dinámico de API externa.
                </p>

            </div>

            {/* SEARCH BAR */}

            <div className="api-controls">

                <input
                    type="text"
                    placeholder="Buscar personaje..."
                    value={search}
                    onChange={(e) => {

                        setSearch(e.target.value);

                        setPage(1);
                    }}
                />

            </div>

            {/* NO RESULTS */}

            {items.length === 0 ? (

                <h2>
                    No se encontraron personajes.
                </h2>

            ) : (

                /* GRID */

                <div className="api-grid">

                    {items.map((item) => (

                        <div
                            key={item.id}
                            className="api-card"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="api-card-content">

                                <h3>{item.name}</h3>

                                <p>
                                    <strong>Especie:</strong> {item.species}
                                </p>

                                <p>
                                    <strong>Estado:</strong> {item.status}
                                </p>

                                <p>
                                    <strong>Género:</strong> {item.gender}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

            {/* PAGINATION */}

            <div className="pagination">

                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    ← Anterior
                </button>

                <span>
                    Página {page}
                </span>

                <button
                    onClick={() => setPage(page + 1)}
                >
                    Siguiente →
                </button>

            </div>

        </section>
    );
}

export default ApiExplorer;