import { Container } from 'react-bootstrap';
import { Place } from './Place';

export const Places = () => {
  const arrPlaces = [{
    name: 'Pizza shop: м.Харків, вул. Героїв Харкова 298. Бронювання столиків: 096 818-54-59. Пн-Нд 10:00-21:00',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/284/2/saltov_1200x0_021.png',
  },
  {
    name: 'Pizza shop: м.Харків, вул. Велика Кільцева 136-А. Бронювання столиків: 063 035 83 62. ТИМЧАСОВО НЕ ПРАЦЮЄ',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/283/2/23avg_1200x0_105.jpg',
  }];

  return (
    <Container className="places">
      <h1>Наші заклади</h1>
      <div className="places__block">
        {arrPlaces.map(place => (
          <Place place={place} key={place.name} />
        ))}
      </div>
    </Container>
  );
};
