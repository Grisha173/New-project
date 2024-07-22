import './Footer.css';
import Logo from '../../media/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer__content">
                <div class="footer__info">
                    <Image class="footer__logo" src={Logo} />
                    <div class="footer__contacts">
                        <div class="footer__number-mail">
                            <span>&#9990;</span>
                            <span>Телефон:</span>
                            <a href="tel:+79278175535" class="navigation__link">+7 (927) 817-55-35</a>
                        </div>
                        <div class="footer__number-mail">
                            <span>&#9993;</span>
                            <span>E-mail:</span>
                            <a href="mailto:dessed.d@yandex.ru" class="navigation__link">dessed.d@yandex.ru</a>
                        </div>
                        <div class="footer__number-mail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span>Адрес производства:</span>
                            <Link href="/contacts" className="navigation__link">433505, Ульяновская обл., г. Димитровград, ул. Западная, д.36, кв. 36</Link>
                        </div>
                    </div>
                </div>
                <div class="footer__application">
                    <span>Оформить заявку</span>
                    <div class="footer__inputs">
                        <input name="name" type="text" class="footer__input" placeholder="Имя" data-validate-field="name" />
                        <input name="tel" type="tel" class="footer__input" placeholder="Телефон" data-validate-field="phone" />
                        <input name="email" type="email" class="footer__input" placeholder="Почта" data-validate-field="email" />
                    </div>
                    <button>Отправить</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;