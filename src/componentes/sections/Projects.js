import styles from './Projects.module.css'
import Card from '../elements/Card'
import ButtonB from '../elements/ButtonB'
import lpdnc from '../../image/projects/lpdnc.svg'

function Projects(){
    return(
        <div className={styles.Projects} id="Projects">
            <h1>Projetos</h1>
            <Card
             img={lpdnc} 
             title=" LP - DNC" 
             tech="HTML, CSS e JS"
             description="Densevolvimentp de um landing page para o lançamento da formção em tecnologia." 
             repo="https://github.com/Sales2706/projeto-landing-page-arquitetura" 
             site="https://projeto-landing-page-arquitetura-base.netlify.app/"            
            />
            <ButtonB text='Ver repositório Completo'/>
        </div>
    )
}

export default Projects 