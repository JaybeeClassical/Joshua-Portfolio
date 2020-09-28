import React from 'react';
import Burger from '../Burger/burger';
import Styles from '../Header/header.module.scss'


const Header = () => {
    return (
        <>
        <div className={Styles.header__wrapper}>
            <div className={Styles.logo}>
                {/* Josh */}
            </div>
            <Burger />
        </div>
        </>
    )
}

export default Header;