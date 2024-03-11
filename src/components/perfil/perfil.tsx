import "./perfil.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import { useLayoutEffect } from "react"

const Perfil = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.perfil-detalhes', {
            x: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".perfil-detalhes",
                markers: false,
                start: 'top 400px',
                end: 'bottom 550px',
            }
        })

        return () => {
            gsap.killTweensOf('.container-icons')
        }
    }, [])

    return (
        <section className="perfil">
            <h2 className="title">Sobre mim</h2>
            <h3 className="descricao">Meu nome é Ryan Victor e eu sou desenvolvedor front-end</h3>
            <div className="perfil-detalhes">
                <p>
                    Estou em busca da minha primeira oportunidade na área, como desenvolvedor gosto de buscar conhecimento por atividades práticas da habilidade que decidi aprender.
                </p>
                <p>
                    Sempre me interessei em coisas relacionadas a tecnologia e decidi por curiosidade ver o que fazia um desenvolvedor front-end, a partir desse dia me interessei muito na área, comecei a estudar e fazer projetos relacionados ao assunto.
                </p>
                <p>
                    Gosto de jogar, ver filmes e séries, também gosto de muito de esportes, principalmente futebol.
                </p>
            </div>
        </section>
    )
}

export default Perfil