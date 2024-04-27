// Libreries
import { useTranslation } from 'react-i18next'
// Assets
import './style.css'
import HeaderImage from '../../assets/images/header_image.png'
import HeartImage from '../../assets/images/heart.png'


export default function Header() {
    const { t, i18n } = useTranslation()
    return (
        <header className='d-flex justify-content-between' id='home'>
            <div className='d-flex flex-column justify-content-start'>
                <span id='tagline' className='d-flex justify-content-between'>
                    <p className='m-0'> {t('Health Matters')} </p>
                    <img src={HeartImage} alt="Health Icon" />
                </span>
                <div id='title'>
                    <span>
                        {t('One Step Solution')}
                    </span>
                    <p>
                        {t('for all your dietary needs.')}
                    </p>
                </div>
                <p id='description'>
                    {t('Using your BMI index we calculate whether the dish is suitable for you.')}
                </p>
                <form className='d-flex shadow'>
                    <input type="text" name="q" id="q" placeholder={t('Search your product')} />
                    <button className='btn-default' type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <div>
                <img src={HeaderImage} alt="Header Image" />
            </div>
        </header>
    )
}