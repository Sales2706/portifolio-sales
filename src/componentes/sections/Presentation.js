import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
const [text, setText] = useState('');
const toRotate = ['Sales Adriano!', 'Desenvolvedor Full Stack'];
const [loop, setLoop] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const period = 100;
const [delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let udateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(udateText);

        if(!isDeleting && udateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && udateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text} </h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
                Product Manager, eu tenho o compromisso de resolver <br/>
                problemascomplexos e trazer resultados excepcionais para os <br/>
                negócios.Meus projetos já geraram milhões de reais em receita <br/>
                anualestou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/Sales2706' text='Conecte-se comigo!!'/>
        </div>
    )
}

export default Presentation 