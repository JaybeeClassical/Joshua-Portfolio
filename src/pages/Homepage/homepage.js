import React from 'react';
import Styles from '../Homepage/homepage.module.scss'
import HomepageDesign from '../../../assets/homepage-design.png'
import Joshua from '../../../assets/josh.jpeg'
import Design from '../../Components/Design/design'
import Work from '../../Components/Work/work';

const Homepage = () => {
    return (
        <div className={Styles.homepage__wrapper}>
            <div className={Styles.homepage__flexBoxes}>
                <div className={Styles.homepage__left__flexBox}>
                    <div className={Styles.homepage__content__wrapper}>
                        <h2 className={Styles.homepage__stackTitle}>
                            Frontend <br/> Developer.
                        </h2>
                        <p>I like to craft solid and scalable frontend products with great user experiences</p>
                    </div>
                    <div className={Styles.left__flexBox__smallBoxes}>
                        <div className={Styles.left__smallBox}>
                            Highly skilled at progressive enhancement, design systems & UI Engineering.
                        </div>
                        <div className={Styles.right__smallBox}>
                            Nearly a decade of experience including work for clients across several countries.
                        </div>
                    </div>
                </div>

                <div className={Styles.homepage__right__flexBox}>
                    <img className={Styles.joshua__image} src={Joshua} alt="josh"/>
                    <div className={Styles.design__borderLine}></div>

                    <img className={Styles.joshua__design} src={HomepageDesign} alt="homepage-design"/>
                </div>
            </div>

            <Design/>
            <Work/>
        </div>
    )
}

export default Homepage;