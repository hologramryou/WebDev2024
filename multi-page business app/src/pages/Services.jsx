import styles from "./services.module.css"
import img from "../assets/wood_pieces.jpg"

function Services() {
    return(
        <>
            <div className={styles.container}>
                <img className={styles.img} src={img} alt="pieces" />
                <div className={styles.title}>
                    SERVICES
                </div>

                <div className={styles.words}>
                    What we provide
                </div>

                <div className={styles.grid}>
                    <div className={styles.item}>
                        Custom Furniture
                        <div className={styles.description}>
                            We specialized in creating handcrafted furniture tailored to your style and needs
                            . Whether you're looking for an unique dining table, custom shelving, or a piece 
                            in your living room, our experts carpenters will work closely with you to design
                            and build furniture that bring forth your visions to reality.
                        </div>
                    </div>

                    <div className={styles.item}>
                        Cabinetry
                        <div className={styles.description}>
                            Upgrade your kitchen, bathroom, or office with our expertly crafted cabinetry.
                            At Karpentry, we offer custom carpentry solutions designed to fit your space 
                            and storage needs. You can be assured that all of our products are made with 
                            high-quality materials and finishes so that they are durable and stylish.
                        </div>
                    </div>

                    <div className={styles.item}>
                        Decking & Fencing
                        <div className={styles.description}>
                            If you ever need a deck to enhance your home, you can count on us to deliver
                            fancy and long-lasting outdoor living space. You can also contact us to replace
                            an old damaged fence or build you one, we are here to help to advise you on
                            the best fencing solutions to your home. And don't you be shy to approach us
                            with unusual and creative ideas for your deck and fence, we will give you
                            recommendations on materials, designs to further realize your vision.
                        </div>
                    </div>

                    <div className={styles.item}>
                        Wood flooring
                        <div className={styles.description}>
                            Choosing the right flooring for your home can be an difficult and overwhelming
                            task. Luckily for you, we have professionals that will offer you your fitting services
                            for all type of wooden flooring. We are delighted to take the the pressure off by doing
                            the hard work for you, we can even supply the flooring of your choice to you. We will
                            give you the best advice from specialist on all aspects of wood flooring so you can make
                            the best choice for your house.
                        </div>
                    </div>

                    <div className={styles.item}>
                        Maintenance & Repairs
                        <div className={styles.description}>
                            If you have carpentry related jobs that need fixing or maintaning in your home,
                            ranging from stair, doors, shelves, furniture to other practical tasks then don't
                            hesitate to contact us. To us, no job is too small and we are happy to provide a 
                            service for you that suit your needs and budget.
                        </div>
                    </div>

                    <div className={styles.item}>
                        Stairs & Hall Storage
                        <div className={styles.description}>
                            A good-looking and well-designed staircase can really elevate your house looks.
                            Whether you need a stair or want to renovate it, we have extensive experience in
                            making your staircase look nicer.
                        </div>
                    </div>
                </div>
            </div>

        </>
      );
}

export default Services