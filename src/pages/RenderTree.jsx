function RenderTree() {
    return (
        <section className="tree-page">
            <div className="tree-header">
                <h1>Render Tree</h1>
                <p>Estructura jerárquica de componentes React.</p>
            </div>

            <div className="tree-container">
                <div className="tree-node root">App (React Router)</div>
                
                <div className="tree-children">
                    <div className="tree-branch">
                        <div className="tree-node level-1">Layout (Theme Provider & Outlet)</div>
                        
                        <div className="tree-children">
                            
                            <div className="tree-branch">
                                <div className="tree-node level-2">Sidebar (Navegación Fija)</div>
                                <div className="tree-children">
                                    <div className="tree-node child">ThemeToggle (Botón)</div>
                                    <div className="tree-node child">MenuLinks (Links Router)</div>
                                </div>
                            </div>

                            <div className="tree-branch">
                                <div className="tree-node level-2">MainContent (Rutas Dinámicas)</div>
                                <div className="tree-children">
                                    
                                    <div className="tree-branch">
                                        <div className="tree-node child">Home (Dashboard)</div>
                                        <div className="tree-children">
                                            <div className="tree-node sub-child">MemberCard (Tarjetas)</div>
                                        </div>
                                    </div>

                                    <div className="tree-branch">
                                        <div className="tree-node child">Perfil (Ruta Dinámica)</div>
                                        <div className="tree-children">
                                            <div className="tree-node sub-child">Carrusel (Proyectos)</div>
                                            <div className="tree-node sub-child">TechStack (Barras de Progreso)</div>
                                        </div>
                                    </div>

                                    <div className="tree-branch">
                                        <div className="tree-node child">Galería</div>
                                        <div className="tree-children">
                                            <div className="tree-node sub-child">Grilla (Imágenes)</div>
                                            <div className="tree-node sub-child">Lightbox (Modal Interactivo)</div>
                                        </div>
                                    </div>

                                    <div className="tree-node child">Explorer (Buscador JSON Local)</div>
                                    
                                    <div className="tree-node child">Api Explorer (Fetch GitHub API)</div>

                                    <div className="tree-branch">
                                        <div className="tree-node child">Bitácora (Docs)</div>
                                        <div className="tree-children">
                                            <div className="tree-node sub-child">BitacoraComponents</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RenderTree;