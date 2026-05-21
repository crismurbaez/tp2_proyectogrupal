function RenderTree() {

    return (

        <section className="tree-page">

            <div className="tree-header">

                <h1>Render Tree</h1>

                <p>
                    Estructura jerárquica de componentes React.
                </p>

            </div>

            <div className="tree-container">

                {/* ROOT */}

                <div className="tree-node root">
                    App
                </div>

                <div className="tree-line vertical"></div>

                {/* LEVEL 1 */}

                <div className="tree-level">

                    <div className="tree-node">
                        Layout
                    </div>

                </div>

                <div className="tree-line vertical"></div>

                {/* LEVEL 2 */}

                <div className="tree-level">

                    <div className="tree-branch">

                        <div className="tree-node">
                            Sidebar
                        </div>

                        <div className="tree-line vertical small"></div>

                        <div className="tree-children">

                            <div className="tree-node child">
                                Home
                            </div>

                            <div className="tree-node child">
                                Bitácora
                            </div>

                            <div className="tree-node child">
                                Nosotros
                            </div>

                            <div className="tree-node child">
                                Explorer
                            </div>

                            <div className="tree-node child">
                                API Explorer
                            </div>

                            <div className="tree-node child">
                                Render Tree
                            </div>

                        </div>

                    </div>

                    <div className="tree-branch">

                        <div className="tree-node">
                            MainContent
                        </div>

                        <div className="tree-line vertical small"></div>

                        <div className="tree-children">

                            <div className="tree-node child">
                                HomePage
                            </div>

                            <div className="tree-node child">
                                Explorer
                            </div>

                            <div className="tree-node child">
                                ApiExplorer
                            </div>

                            <div className="tree-node child">
                                MemberProfile
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default RenderTree;