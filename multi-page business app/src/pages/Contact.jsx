import styles from "./contact.module.css"
import img from "../assets/tree_bark.webp"

function Contact() {
    return(
        <>
            <div className={styles.container}>
                <img className={styles.img} src={img} alt="tree_bark" />

                <div className={styles.title}>
                    CONTACT US
                </div>

                <div className={styles.text}>
                    Thank you for your interest in Karpentry. If you wish to
                    contact us, then please fill in the form below. We will
                    contact back at you as soon as we can.
                </div>

                <div className={styles.create_form}>
                    <form>
                        <label>Title: </label>
                        <select>
                            <option value=""></option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                        <br />
                        
                        <label className={styles.first}>First Name * </label>
                        <label className={styles.mid}>Middle Name </label>
                        <br />
                        
                        <input className={styles.first} type="text" required />
                        <input className={styles.mid} type="text" />
                        <br />

                        <label className={styles.last_name}>Last Name *</label>
                        <br />
                        <input className={styles.last_name} type="text" required />
                        <br />

                        <label className={styles.email}>Email Address *</label>
                        <br />
                        <input className={styles.email} type="text" required />
                        <br />

                        <label>How can we help you?</label>
                        <br />
                        <textarea className={styles.message}></textarea>
                        <br />

                        <button className={styles.button}>Submit</button>


                    </form>
                </div>
            </div>

        </>
      );
}

export default Contact