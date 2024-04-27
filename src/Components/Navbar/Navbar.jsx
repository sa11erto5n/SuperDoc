// Libreries
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import './style.en.css'
// Assets
import logo from '../../assets/images/logo.png'
import logo2 from '../../assets/images/logo_2.png'
import ar_flag from '../../assets/images/saudi_arabia_flag.png'
import en_flag from '../../assets/images/united_kingdom_flag.png'

const lngs = {
    en: { nativeName: 'English' },
    ar: { nativeName: 'Arabic' }
};

export default function Navbar() {
    const { t, i18n } = useTranslation()
    // Show The Menu 
    function showMenu() {
        const menu = document.getElementById('nav-menu')
        if (menu.classList.contains('nav_menu_active')) {
            menu.classList.remove('nav_menu_active')
        }
        else 
        {
            menu.classList.add('nav_menu_active')
        }
    }
    // Change the language of the page
    function changeLang(lng) {
        if (lng === 'ar') {
            document.querySelector('html').lang = 'ar';
            document.querySelector('html').dir = 'rtl';
            document.getElementById('bootstrap-stylesheet').href = 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.rtl.min.css';
        } else {
            document.querySelector('html').lang = 'en';
            document.querySelector('html').dir = 'ltr';
            document.getElementById('bootstrap-stylesheet').href = 'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css';
        }

        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', lng);
        i18n.changeLanguage(lng);
    }

    useEffect(() => {
        // Retrieve the saved langauge and apply it to the page
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        if (selectedLanguage) {
            changeLang(selectedLanguage);
        }
    }, []);

    return (
        <>
            <nav className="d-flex justify-content-between align-items-center">
                <a className="nav_logo d-flex align-items-center">
                    <img src={logo} alt='HealthMe Medical Care Logo' />
                    <img src={logo2} alt='HealthMe Medical Care Logo' />
                </a>
                <div id='left-menu' className='d-flex justify-content-center'>
                    <ul id='nav-menu' className='align-items-center'>
                        <li >
                            <a href='#home'> {t('Home')} </a>
                        </li>
                        <li >
                            <a href='#services'> {t('Services')} </a>
                        </li>
                        <li >
                            <a href='#how_to_use'> {t('How to use')} </a>
                        </li>
                    </ul>
                    <button id='menu_show_btn' onClick={showMenu} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a id='login_link' href='/login' className='btn-default d-flex align-items-center align-self-center'>
                        <span>
                            {t('Login')}
                        </span>
                        <i className="mx-1 fa-regular fa-user"></i>
                    </a>
                    {Object.keys(lngs).map((lng) => (
                        i18n.resolvedLanguage === lng ? '' :
                            <button id='lang_btn' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => changeLang(lng)}>
                                {i18n.resolvedLanguage === 'ar' ? (
                                    <img src={en_flag} />
                                ) :
                                    <img src={ar_flag} />
                                }
                            </button>
                    ))}
                </div>
            </nav>
        </>

    )
}