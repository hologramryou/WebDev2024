import img from "../assets/home_img.jpg"
import styles from "./home.module.css"

function Home() {
    return(
        <>
            <div className={styles.container}>
                <img className={styles.big_img} src={img} alt="img" />
                <div className={styles.glass}>
                    <div className={styles.intro}>
                        Welcome to Karpentry
                        <div className={styles.below}>
                            Where Your Dreams Are Built
                        </div>
                    </div>
                </div>
            </div>

        </>
      );
}

export default Home