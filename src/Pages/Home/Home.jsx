import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { observeAll } from '../../utils/ibserver';
// Assets
import './style.css'
import CTA from '../../assets/images/cta.png'
// Components
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

export default function Home() {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        // Animating sections
        const sections = document.querySelectorAll('section');
        let animationType = ''
        observeAll(sections, (element) => {
            i18n.resolvedLanguage === 'ar' ? animationType = 'animate__backInRight' : animationType = 'animate__backInLeft'
            element.classList.add('animate__animated', animationType, 'opacity-100');
            element.classList.remove('opacity-0');
        });
        // Animating sections
        const services = document.querySelectorAll('.card');
        observeAll(services, (element) => {
            element.classList.add('animate__animated', 'animate__backInDown', 'opacity-100');
            element.classList.remove('opacity-0');
            console.log(true);
        });
    }, [])
    return (
        <Suspense fallback='is_loading'>
            <div className="container">
                <Navbar />
                <Header />
                {/* Services */}
                <section id='services' className='opacity-0'>
                    <span className="section_title">
                        {t('FEATURES WE PROVIDE')}
                    </span>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className='card d-flex flex-column justify-content-start opacity-0'>
                            <span id="card_icon">
                                <i className="fa-solid fa-heart"></i>
                            </span>
                            <span id='card_title'>
                                {t('Primary Care')}
                            </span>
                            <span id='card_description'>
                                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit.')}
                            </span>
                        </div>
                        <div className='card d-flex flex-column justify-content-start opacity-0'>
                            <span id="card_icon">
                                <i className="fa-solid fa-hospital"></i>
                            </span>
                            <span id='card_title'>
                                {t('Emergency Care')}
                            </span>
                            <span id='card_description'>
                                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit.')}
                            </span>
                        </div>
                        <div className='card d-flex flex-column justify-content-start opacity-0'>
                            <span id="card_icon">
                                <i className="fa-solid fa-chart-bar"></i>
                            </span>
                            <span id='card_title'>
                                {t('Diagnostics')}
                            </span>
                            <span id='card_description'>
                                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit.')}
                            </span>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className='opacity-0' id='cta'>
                    <span className='section_title'> {t('get your appointment now')} </span>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div id='cta_image' className='mx-2'>
                            <img src={CTA} alt="Get Your appointment" />
                        </div>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="f_name" name='f_name' placeholder={t('First Name')} />
                                <label for="f_name"> {t('First Name')} </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id='l_name' name='l_name' placeholder={t('Last Name')} />
                                <label for="l_name"> {t('Last Name')} </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type='tel' className="form-control" id='number' name='number' placeholder={t('Phone Number')} />
                                <label for="number"> {t('Phone Number')} </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type='date' className="form-control" id='date' name='date' placeholder={t('Appointement Date')} />
                                <label for="date"> {t('Appointement Date')} </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type='time' className="form-control" id='time' name='time' placeholder={t('Appointement Time')} />
                                <label for="time"> {t('Appointement Time')} </label>
                            </div>
                            <button className='d-block btn-default px-4 ms-auto' type="submit"> {t('Apply')} </button>
                        </form>
                    </div>
                </section>
            </div>
        </Suspense>

    )
}