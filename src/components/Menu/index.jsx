import styles from './styles.module.css'
import Link from 'next/link'

export default function Menu(){

    return(
        <header className={styles.menu}>
            <ul className={styles.texto}>
                <li><Link className={styles.link} href="/">Início</Link></li>

                <li><Link className={styles.link} href="/formacao">Formação</Link></li>

                <li><Link className={styles.link} href="projetos">Projetos</Link></li>
            </ul>
        </header>
    )
}