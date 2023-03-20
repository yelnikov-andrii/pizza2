import { Container } from 'react-bootstrap';
import { Vacancy } from './Vacancy';

export const Vacancies = () => {
  const arrVacancies = [{
    name: 'Шукаємо піцайоло 14 000 грн · Ставка за годину + %',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/312/2/pizzalife_pizza_1200x0_021.png',
  },
  {
    name: 'Шукаємо оператора Call-центру 30 грн/годину + %',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/313/2/pizzalife_operator_1200x0_105.jpg',
  }];

  return (
    <Container className="vacancies">
      <h1>Вакансії</h1>
      <div className="vacancies__block">
        {arrVacancies.map(vacancy => (
          <Vacancy vacancy={vacancy} key={vacancy.name}/>
        ))}
      </div>
    </Container>
  );
};
