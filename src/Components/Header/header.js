import React from 'react';
import Styles from '../Header/header.module.scss'

const Header = () => {
    return (
        <div className={Styles.header__wrapper}>
            <div className={Styles.logo}>
                {/* Josh */}
            </div>
            <div className={Styles.hemburger}>
                <div className={Styles.lines}></div>
                <div className={Styles.lines}></div>
            </div>
        </div>
    )
}

export default Header;