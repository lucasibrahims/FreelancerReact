import '../FormularioDeJob/FormularioDeCadastro.css'
import CampoTexto from '../CampoTexto'
import Botao from '../Botão'
import { useState } from 'react'
import { addFreelancer } from '../../functions/AddFreelancer'


const FormularioDeCadastro = (props) => {

  
    const [name, setName] = useState('')
    const [skills, setSkills] = useState('')
    const [experience, setExperience] = useState('')
    const [portfolio, setPortfolio] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
         addFreelancer(
             name,
             skills,
             experience,
             portfolio
         )
        console.log(name, skills, experience, portfolio);
        setName("")
        setSkills("")
        setExperience("")
        setPortfolio("")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Seja um freelancer!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Name " 
                    placeholder="Type your name" 
                    valor={name}
                    aoAlterado = {valor => setName(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Skills" 
                    placeholder="Type your skills" 
                    valor={skills}
                    aoAlterado = {valor => setSkills(valor)}
                    />
                <CampoTexto 
                    label="Experience" 
                    placeholder="Type your experience" 
                    valor={experience}
                    aoAlterado = {valor => setExperience(valor)}
                    />
                <CampoTexto 
                    label="Portfolio" 
                    placeholder="Type your portfolio" 
                    valor={portfolio}
                    aoAlterado = {valor => setPortfolio(valor)}
                    />
                <Botao placeholder = "Cadastrar"/>
            </form>
        </section>
    )
}

export default FormularioDeCadastro