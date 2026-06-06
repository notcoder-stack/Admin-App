import Image from 'next/image';
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const RightBar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notifications}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4min to learn</span>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing eli
                        t. Ven
                        iam, excep
                        turi quia velit cum nobis debitis, ipsam, 
                        commodi minus fugiat dicta vel delectus reprehenderit impedit 
                        molestias eaque quae quasi in temporibus?</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
                <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notifications}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4min to learn</span>
                    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing eli
                        t. Ven
                        iam, excep
                        turi quia velit cum nobis debitis, ipsam, 
                        commodi minus fugiat dicta vel delectus reprehenderit impedit 
                        molestias eaque quae quasi in temporibus?</p>
                    <button className={styles.button}>
                        <MdReadMore/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar;