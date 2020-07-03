import { Drink } from 'drinks-company-models-contracts';

interface IDrinks {
	getDrinks: () => Drink[]
}

export default IDrinks;