import React from 'react'
import Styles from '../Footer/footer.module.scss'

const Footer = () => {
    return (
        <div className={Styles.footer__wrapper}>
            <div className={Styles.footer__contact}>
                <div className={Styles.footer__sayHello}>
                    <h3>SAY HELLO</h3>
                    <ul>
                        <li>Mail Me here</li>
                        <li>Chat me on telegram</li>
                    </ul>
                </div>

                <div className={Styles.footer__shortcut}>
                    <ul>
                        <li>My Work</li>
                        <li>My Shelf</li>
                        <li>My Résumé</li>
                    </ul>
                </div>
            </div>
            <div className={Styles.footer__horizontalLine}/>

            <div className={Styles.footer__copyright}>
                <p>Project by <a href="https://iam-jude.xyz" style={{color: "white"}}>Ike</a> &copy; Joshua Osagie
                   &nbsp; {new Date().getFullYear().toString()}
                </p>
                <ul>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                    <li>Stack OverFlow</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;