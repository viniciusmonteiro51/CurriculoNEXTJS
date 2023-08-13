import styles from './styles.module.css'
import Image
 from 'next/image'
 import Link from 'next/link'
export default function Cabecalho(){
    
    return(
        <header className={styles.fundo}> 
           <Image src="/vinicius.png"
            width={122}
            height={122}
            quality={100}
            layout='fixed'
            className={styles.perfil}
            />
            <h1 className={styles.titulo}>Vinicius Daniel Monteiro</h1>

            <div className={styles.redesocial}>
                <Link href='/https://github.com/viniciusmonteiro51'>
                <Image src='/github.png'
                width={32}
                height={32}
                quality={100}
                layout='fixed'
                alt='Link do GitHub'
                className={styles.espacamento}
                />
                </Link>
                
                <Link href='https://gitlab.fslab.dev/Vinicius51'>
                <Image src='/gitlab.png'
                width={32}
                height={32}
                quality={100}
                layout='fixed'
                alt='Link do GitLab'
                className={styles.espacamento}
                />
                </Link>

                <Link href='https://www.linkedin.com/in/vinicius-monteiro-2a77211a6/'>
                <Image src='/linkedin.png'
                width={32}
                height={32}
                quality={100}
                layout='fixed'
                alt='Link do Linkedin'
                className={styles.espacamento}
                />  
                </Link>

                <Link href='https://www.instagram.com/vinicius_daniel51/'>
                <Image src='/instagram.png'
                width={32}
                height={32}
                quality={100}
                layout='fixed'
                alt='Link do Instagram'
                className={styles.espacamento}
                />
                </Link>
            </div>
        </header>
    )
}