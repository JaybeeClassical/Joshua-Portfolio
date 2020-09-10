import React from 'react'
import Styles from '../Work/work.module.scss';


const Work= () => {
    return (
        <div className={Styles.work__wrapper}>
            <div className={Styles.work__boxWrapper}>
                <div className={Styles.work__firstBox}>
                    <h2>
                       I build & design stuff
                    </h2>
                    <p>
                       Open source projects, web apps and experimentals.
                    </p>
                    <div className={Styles.work__btn}>
                        See My Work
                    </div>
                </div>
                <div className={Styles.work__line}/>
                <hr style={{border: "1px #C8C1F2 solid "}}/>
                <div className={Styles.work__secondBox}>
                    <h2>
                       I write, sometimes
                    </h2>
                    <p>
                    About design, frontend dev, learning and life.
                    </p>
                    <div className={Styles.article__btn}>
                        Read My Articles
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;