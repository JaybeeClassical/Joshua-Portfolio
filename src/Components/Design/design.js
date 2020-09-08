import React from 'react'
import Styles from '../Design/design.module.scss'
import EngrDesign from '../../../assets/homepage-design.png'


const Design = () => {
    return (
        <div className={Styles.design__wrapper__container}>
            <div className={Styles.design__wrapper}>
                <div className={Styles.design}>
                    <h2>Design</h2>
                    <p>I'm probably not the typical designer positioned 
                        behind an Illustrator artboard adjusting pixels, but I design. 
                        Immersed in stylesheets tweaking font sizes and contemplating layouts 
                        is where you'll find me (~_^). I'm committed to creating fluent user 
                        experiences while staying fashionable.
                    </p>
                </div>
                <div className={Styles.engineering}>
                    <img src={EngrDesign} alt="engineering design" className={Styles.EngrDesign}/>
                    <h2>Engineering</h2>
                    <p>In building JavaScript applications, 
                        I'm equipped with just the right tools, 
                        and can absolutely function independently of them to 
                        deliver fast, resilient solutions optimized for 
                        scale — performance and scalabilty are priorities on my radar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Design;