import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css' 
function Footer(){
    return(
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/sou.sales_/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Sales2706'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/sales-adriano-costa-silva-05346729b/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>costasilvasalesadriano@gmail.com</p>
            <p>Sales Adriano © 2024</p>
        </div>
    )
}

export default Footer