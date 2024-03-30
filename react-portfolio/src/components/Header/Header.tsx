import React from "react";
import styles from './header.module.scss';

export const  Header = ()=>{
    return(
        <nav className={`${styles.dark} ${styles.nav}`}>
            <h1 className={styles.text}>React SPA</h1>
            <ul className={styles.ul}>
                <li className={styles.li}><a href="#">About</a></li>
                <li className={styles.li}><a href="#">Technologies</a></li>
                <li className={styles.li}><a href="#">Explanation</a></li>
            </ul>
        </nav>
    )
}