import Link from "next/link";
import styles from "../styles/Navbar.module.css";

type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    return (
        <div>
         <div className={styles.main_container}>
            <div className={styles.logo_container}>
                <div className={styles.logo}>{"Culleny's Customs"}</div>
            </div>
            <div className={styles.link_container}>
                <Link href="/">
                    <a className={props.page == "home" ? styles.nav_link_selected : styles.nav_link}>Home</a>
                </Link>
                <Link href="/designs">
                    <a className={props.page == "designs" ? styles.nav_link_selected : styles.nav_link}>My Designs</a>
                </Link>
                <Link href="/customize">
                    <a className={props.page == "customize" ? styles.nav_link_selected : styles.nav_link}>Customize</a>
                </Link>
            </div>
         </div>
        </div>
    )
}