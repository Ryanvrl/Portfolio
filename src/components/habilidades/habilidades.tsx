import { FaCss3Alt, FaGitAlt, FaGithub, FaReact } from "react-icons/fa"
import { useLayoutEffect } from "react"
import { TiHtml5 } from "react-icons/ti"
import './habilidades.css'
import { IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Habilidades = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.container-icons', {
            x: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".container-icons",
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
        <section className="container-habilidades" id="habilidades">
            <h2 className="title">Habilidades</h2>

            <div className="container-icons">
                <div className="icon ">
                    <TiHtml5 size="150px" className="img-icon" />
                    <h2>HTML</h2>
                </div>
                <div className="icon ">
                    <FaCss3Alt size="150px" className="img-icon" />
                    <h2>CSS</h2>
                </div>
                <div className="icon ">
                    <SiTailwindcss size="150px" className="img-icon" />
                    <h2>Tailwind</h2>
                </div>
                <div className="icon ">
                    <IoLogoJavascript size="150px" className="img-icon" />
                    <h2>JavaScript</h2>
                </div>
                <div className="icon ">
                    <FaReact size="150px" className="img-icon" />
                    <h2>React</h2>
                </div>
                <div className="icon ">
                    <SiTypescript size="150px" className="img-icon" />
                    <h2>TypeScript</h2>
                </div>
                <div className="icon ">
                    <FaGithub size="150px" className="img-icon" />
                    <h2>GitHub</h2>
                </div>
                <div className="icon ">
                    <FaGitAlt size="150px" className="img-icon" />
                    <h2>Git</h2>
                </div>
            </div>
        </section>

    )
}

export default Habilidades