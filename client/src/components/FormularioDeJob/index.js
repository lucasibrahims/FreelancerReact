import './FormularioDeCadastro.css'
import CampoTexto from '../CampoTexto'
import Botao from '../Botão'
import { useState } from 'react'
import { postJob } from '../../functions/PostJob'


const FormularioDeJob = (props) => {

  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
         postJob(
             title,
             description,
             budget
         )
        setTitle("")
        setDescription("")
        setBudget("")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Poste um serviço e encontre um freelancer!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Title" 
                    placeholder="Type job's title" 
                    valor={title}
                    aoAlterado = {valor => setTitle(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Description" 
                    placeholder="Type job's description" 
                    valor={description}
                    aoAlterado = {valor => setDescription(valor)}
                    />
                <CampoTexto
                    type="number" 
                    label="Budget" 
                    placeholder="Type job's budget" 
                    valor={budget}
                    aoAlterado = {valor => setBudget(valor)}
                    />
                <Botao placeholder = "Postar"/>
            </form>
        </section>
    )
}

export default FormularioDeJob;



