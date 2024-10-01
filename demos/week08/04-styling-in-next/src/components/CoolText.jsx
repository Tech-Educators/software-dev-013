import styles from './cooltext.module.css'


export default function CoolText({children}) {
    return (
        <div>
            <span className={styles.coolText}>{children}</span>
        </div>
    )
}

