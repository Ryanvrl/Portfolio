import "./projetos.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { IoLogoVercel } from "react-icons/io5"

const Projetos = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.card-projeto', {
      y: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: ".container-projetos",
        markers: false,
        start: 'top 300px',
        end: 'bottom 550px',
      }
    })

    gsap.to(".imagem-projeto", {
      rotation: 360,
      duration: 1.5,
      ease: "bounce.out",

      scrollTrigger: {
        trigger: ".cards-projetos",
        markers: true,
        start: 'top 400px',
        end: 'bottom 550px',
      }
    });

    return () => {
      gsap.killTweensOf('.container-icons')
    }
  }, [])

  return (
    <section className="container-projetos" id="projetos">
      <h1 className="title">Projetos</h1>
      <div className="cards-projetos">

        <div className="card-projeto">
          <h3>Countries API</h3>
          <img src="./images/countries.png" alt="imagem projeto countries" className="imagem-projeto" />
          <div className="card-infos">
            Esse é um projeto de API que busca países e suas informações, usando Html, Css, React e JavaScript.
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/country-react" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://countries-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <h3>GitHub API</h3>
          <img src="./images/githubapi.png" alt="imagem projeto github" className="imagem-projeto" />
          <div className="card-infos">
            Um projeto de busca de usuários pela API do GitHub usando Html, Css, React e TypeScript.
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/gitHubApi-ts" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://githubapi-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <h3>GitHub API</h3>
          <img src="./images/githubapi.png" alt="imagem projeto github" className="imagem-projeto" />
          <div className="card-infos">
            Um projeto de busca de usuários pela API do GitHub usando Html, Css, React e TypeScript.
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/gitHubApi-ts" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://githubapi-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <h3>GitHub API</h3>
          <img src="./images/githubapi.png" alt="imagem projeto github" className="imagem-projeto" />
          <div className="card-infos">
            Um projeto de busca de usuários pela API do GitHub usando Html, Css, React e TypeScript.
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/gitHubApi-ts" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://githubapi-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <h3>GitHub API</h3>
          <img src="./images/githubapi.png" alt="imagem projeto github" className="imagem-projeto" />
          <div className="card-infos">
            Um projeto de busca de usuários pela API do GitHub usando Html, Css, React e TypeScript.
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/gitHubApi-ts" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://githubapi-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projetos