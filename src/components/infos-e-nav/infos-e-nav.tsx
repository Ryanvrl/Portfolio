import "./infos-e-nav.css"

const InfosNavegacao = () => {
    return (
        <section className='container-menu'>
            <video autoPlay muted loop className='video-bg' poster='./assets/printmar.png'>
                <source src="./assets/pexels_videos_1879456 (720p).mp4" type='video/mp4' />
            </video>
            <div className='infos-primarias'>
                <div className='navegacao'>
                    <nav>
                        <input type="checkbox" id="menu-hamburguer" />
                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>
                        <ul className="info">
                            <li><a href="#projetos">Meus Projetos</a>
                            
                            </li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='nome-title'>
                    <a href="/">
                        <h1 className="logo">Ryan Victor</h1>
                    </a>
                    <h3>Desenvolvedor frontend</h3>
                </div>
            </div>
        </section>
    )
}

export default InfosNavegacao