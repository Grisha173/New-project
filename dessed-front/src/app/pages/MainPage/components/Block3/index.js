import './Block3.css';

function Block3() {
    return (
        <div class="current-services">
            <div class="current-services__content">
                <div class="current-services__picture-left"></div>
                <div class="current-services__info">
                    <span class="current-services__info__title">Фрезерная обработка</span>
                    <span>Мы предлагаем качественную фрезерную обработку металлов, включая чёрные и цветные, с максимальной длиной до 1400 мм и шириной до 600 мм.</span>
                </div>
            </div>
            <div class="current-services__content">
                <div class="current-services__picture-center"></div>
                <div class="current-services__info">
                    <span class="current-services__info__title">Шлифовка</span>
                    <span>Наша компания предлагает услуги плоского шлифования поверхности с высокой точностью.</span>
                </div>
            </div>
            <div class="current-services__content">
                <div class="current-services__picture-right"></div>
                <div class="current-services__info">
                    <span class="current-services__info__title">Глубокое сверление</span>
                    <span>Наша компания предлагает услуги глубокого сверления отверстий в металле до 1000 мм.</span>
                </div>
            </div>
        </div>
    );
}

export default Block3;