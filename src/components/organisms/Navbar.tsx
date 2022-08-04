import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../molecules/SearchBox";

enum LANG {
    EN = 'en',
    ES = 'es'
}

const NavBar: React.FC = () => {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(LANG.EN);
    
    const onSearch = (v: string) => {
        navigate(v ? '/destination/' + v : '/');
    }

    const changeLang = () => {
        const newLang = lang === LANG.EN ? LANG.ES : LANG.EN;
        setLang(newLang)
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="navbar">
            <div className="logo"></div>
            <SearchBox onSearch={onSearch} placeholder={t('search')} />
            <button onClick={changeLang} className="lang-btn">
                { lang === LANG.EN ? 'Española' : 'English' }
            </button>
        </div>
    )
}

export default NavBar;