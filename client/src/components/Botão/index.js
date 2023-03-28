import './Botao.css'

const Botao = (props) => {
    return (
        <div className='botao'>
        <button>{props.placeholder}</button>
        </div>
    )
}

export default Botao