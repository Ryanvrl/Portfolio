import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './contato.css'
import { MdEmail } from 'react-icons/md'

const Contato = () => {
    return (
        <section id='contato' className='contato'>
            <h2>Contatos</h2>
            <div className='icons-links'>
                <a href="https://www.linkedin.com/in/Ryanvrl/">
                    <FaLinkedin size="50px" className='icon'/>
                </a>
                <a href="https://github.com/Ryanvrl" target='_blank'>
                    <FaGithub size="50px" className='icon'/>
                </a>
                <a href="mailto:ryanwvxx@gmail.com" target='_blank'>
                    <MdEmail size='50px'className='icon'/>
                </a>
            </div>

        </section>
    )
}

export default Contato