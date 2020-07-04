import { Drink } from 'drinks-company-models-contracts';

interface IDrinksDataRepository {
	getDrinks: () => Promise<Drink[]>
}

export default IDrinksDataRepository;