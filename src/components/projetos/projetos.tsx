import "./projetos.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { IoLogoVercel } from "react-icons/io5"

import printBurger from '../../assets/burger.png'
import printCountries from '../../assets/countries.png'
import printPokedex from '../../assets/print-pokedex.png'
import printPortfolio from '../../assets/portfolio.png'
import printGithub from '../../assets/githubapi.png'
import printTechshop from '../../assets/techshopprint.png'

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

    return () => {
      gsap.killTweensOf('.container-icons')
    }
  }, [])

  return (
    <section className="container-projetos" id="projetos">
      <h1 className="title">Projetos</h1>
      <div className="cards-projetos">

        <div className="card-projeto">
          <div className="container-card-filho-projeto">
            <img src={printTechshop} alt="imagem projeto techshop" className="imagem-projeto" />
            <div className="card-infos">
              <h3>Techshop</h3>
              <p>
                Simula um e-commerce usando contextAPI, ViaCepAPI. React, TypeScript e Tailwind.
              </p>
            </div>
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/techshop" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://techshop-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <div className="container-card-filho-projeto">
            <img src={printCountries} alt="imagem projeto countries" className="imagem-projeto" />
            <div className="card-infos">
              <h3>Countries API</h3>
              <p>
                Esse é um projeto de API que busca países e suas informações, filtrando-os pelo nome e alternando o tema, usando Html, Css, React e JavaScript.
              </p>
            </div>
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
          <div className="container-card-filho-projeto">
            <img src={printPokedex} alt="projeto pokedex" className="imagem-projeto" />
            <div className="card-infos">
              <h3>Pokédex</h3>
              <p>
                Faz uma busca de pokemons pela PokéAPI, filtrando por nome e alternando tema usando Html, Css, React e JavaScript.
              </p>
            </div>
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/pokedex-react" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://pokedex-ryanvrl.vercel.app" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <div className="container-card-filho-projeto">
            <img src={printBurger} alt="imagem projeto Burger" className="imagem-projeto" />
            <div className="card-infos">
              <h3>Burger</h3>
              <p>
                Um projeto que simula pedidos de um restaurante usando a API da ViaCEP, React, TypeScript e Tailwind.
              </p>
            </div>
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/burger" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://burger-ryanvrl.vercel.app/" target="_blank" className="link-do-card link-projeto">
              <IoLogoVercel />
              Link do Projeto
            </a>
          </div>
        </div>

        <div className="card-projeto">
          <div className="container-card-filho-projeto">
            <img src={printGithub} alt="imagem projeto github" className="imagem-projeto" />
            <div className="card-infos">
              <h3>GitHub API</h3>
              <p>
                Um projeto de busca de usuários pela API do GitHub usando Html, Css, React e TypeScript.
              </p>
            </div>
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
          <div className="container-card-filho-projeto">
            <img src={printPortfolio} alt="imagem projeto portfolio" className="imagem-projeto" />
            <div className="card-infos">
              <h3>Portfólio</h3>
              <p>
                Projeto do meu Portfólio que está sendo acessado por você nesse exato momento.
              </p>
            </div>
          </div>
          <div className="links-github-e-projeto">
            <a href="https://github.com/Ryanvrl/portfolio" target="_blank" className="link-do-card link-github">
              <FaGithub className="icon-github-projeto" />
              repositório
            </a>
            <a href="https://ryanvrl-portfolio.vercel.app/" target="_blank" className="link-do-card link-projeto">
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