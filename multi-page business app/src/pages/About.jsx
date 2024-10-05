import styles from "./about.module.css"
import img from "../assets/wood_carpentry.jpg"

function About() {
    return(
        <>
            <div className={styles.container}>
                <img className={styles.img} src={img} alt="carpentry" />
                <div className={styles.title}>
                    ABOUT US
                </div>

                <div>
                    <div className={styles.section_content}>
                        What to expect from us
                        <div className={styles.about}>
                            Here at Karpentry we offer a wide range of carpentry commissions that are
                            tailored to your needs. We take pride in our works and always strive to be
                            better at delivering high-quality carpentry works to make you happy with our
                            services and products.
                        </div>
                    </div>
                    
                    <div className={styles.section_content}>
                        The team
                        <div className={styles.about}>
                            We have teams of professionals who have years of experience in the field and are 
                            very enthusiastic about their jobs. When facing different problems, we can assert 
                            the situation and improvise accordingly. We constantly work to hone our skills and we 
                            keep up-to-date with the latest guidelines to ensure that our craftsmanship can meet 
                            the highest of standards.
                            <br></br>
                            <br></br>
                            We understand that at times, people can have financial problems - that's why we're 
                            always look for best deals for the materials before working without sacrificing the
                            quality of the work and impact on the environment. We assure you that we work really
                            hard to deliver our services on time and within budget.
                        </div>
                    </div>
                </div>
            </div>

        </>
      );
}

export default About