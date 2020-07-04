import { Drink } from 'drinks-company-models-contracts';

interface IDrinksDataRepository {
	getDrinks: () => Drink[]
}

export default IDrinksDataRepository;