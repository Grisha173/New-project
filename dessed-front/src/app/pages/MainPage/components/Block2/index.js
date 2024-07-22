import './Block2.css';
import Image from 'next/image';
import sticker from '../../../../media/sticker.png'

function Block2() {
    return (
        <div class="services">
            <div class="services__content">
                <span>Мы предлагаем широкий спектр услуг: </span>
                <ul class="services__list">
                    <li>Фрезерная обработка</li>
                    <li>Токарная обработка</li>
                    <li>Шлифовальные работы</li>
                    <li>Сверлильные работы</li>
                    <li>Сварные работы</li>
                    <li>Электроэрозионная обработка</li>
                </ul>
            </div>
            <Image className="sticker" src={sticker} />
        </div>
    );
}

export default Block2;