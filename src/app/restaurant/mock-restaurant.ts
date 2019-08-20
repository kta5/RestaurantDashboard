import { Restaurant } from 'server/restaurant';
import { RestaurantFeatures } from 'server/restaurant-features';

export const restaurants: Restaurant[] = [
    new Restaurant(1, 'addy 1', 'Saul Goodman', new RestaurantFeatures(null, null, null, null), 'IHOP'),
    new Restaurant(2, 'addy 2', 'Gus Fring', new RestaurantFeatures(null, null, null, null), 'Applebees'),
    new Restaurant(3, 'addy 3', 'Walter White', new RestaurantFeatures(null, null, null, null), 'Applebees')
];
