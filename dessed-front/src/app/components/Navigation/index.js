import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <div>
                <a href="tel:+79278175535" className="navigation__link">+7 (927) 817-55-35</a>
            </div>
            <div>
                <a href="mailto:dessed.d@yandex.ru" className="navigation__link">dessed.d@yandex.ru</a>
            </div>
            <div>
                <a href="" className="navigation__link navigation__link--dropdown">Услуги</a>
            </div>
            <div>
                <a href="/about" className="navigation__link">О нас</a>
            </div>
            <div>
                <a href="/contacts" className="navigation__link">Контакты</a>
            </div>
        </nav>
    );
}

export default Navigation;