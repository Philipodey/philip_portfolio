import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"

export const About = ()=>{
    return(
        <div className={styles.container} id={"about"}>
           <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.svg")}
                      alt={"Me sitting with a laptop"}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/softwareDeveloper.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Software Engineer</h3>
                        <p>I'm a Software Engineer experienced
                             in Java, Spring boot, react, react native, MySQL, MongoDb, Python, PowerBI, Excel</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in building fast and optimized APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.frontendIcon} src={getImageUrl("about/frontend.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Frontend Developer</h3>
                        <p>I also have experience in building optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.frontendIcon} src={getImageUrl("about/data_science_icon.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Data Scientist</h3>
                        <p>I analyze and interpret complex data to help businesses make informed decisions. I build and deploy machine learning models, create data-driven insights, and develop visualizations to solve real-world problems. My work involves data preprocessing, feature engineering, statistical analysis, and predictive modeling, all while collaborating with stakeholders to ensure that the solutions align with business goals. I leverage tools like Python, SQL, Power BI, and cloud platforms to extract meaningful insights and automate data workflows.</p>
                    </div>

                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.frontendIcon} src={getImageUrl("about/machine-learning-icon.png")} alt={"cursor icon"}/>
                    <div className={styles.textCover}>
                        <h3>Machining Learning Engineer</h3>
                        <p>I design, develop, and deploy machine learning models to solve complex business problems. My role involves data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation. I work with large datasets to build predictive and classification models, using algorithms like regression, decision trees, and neural networks. I also collaborate with cross-functional teams to integrate these models into production systems, ensuring scalability, reliability, and optimization for real-world applications.</p>
                    </div>   
                </li>
            </ul>
            </div>
        </div>
    )
}