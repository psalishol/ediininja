// Player life defines the number of life the player has left.
// The max life is (3)
export type PlayerLife = '0' | '1' | '2' | '3';

// FoodBuilder defines the interface for the food translated on and off the screen
export interface FoodBuilder {
  id: string;
  foodItem: FoodItems;
  point: number;
}

// These are the food items that could be displayed to the player
export type FoodItems =
  | 'Apple'
  | 'Banana'
  | 'Brocolli'
  | 'Pizza'
  | 'Carrot'
  | 'Grapes'
  | 'French Fries'
  | 'Spinach'
  | 'Hamburger'
  | 'Ice Cream'
  | 'Chicken Breast'
  | 'Sandwich'
  | 'Watermelon'
  | 'Egg'
  | 'Orange'
  | 'Blueberries'
  | 'Strawberries'
  | 'Kiwi'
  | 'Pineapple'
  | 'Watermelon'
  | 'Grapefruit'
  | 'Cherry'
  | 'Pear'
  | 'Peach'
  | 'Plum'
  | 'Avocado'
  | 'Cucumber'
  | 'Brocolli'
  | 'Spinach'
  | 'Cauliflower'
  | 'Zucchini'
  | 'Sweet potato'
  | 'Butternut'
  | 'Salmon'
  | 'Tofu'
  | 'Greek Yoghurt'
  | 'Cottage Cheese'
  | 'Almonds'
  | 'Walnuts'
  | 'Pasta'
  | 'Rice Cake'
  | 'Black Beans'
  | 'ChickPeas'
  | 'Lentils'
  | 'Kidney Beans'
  | 'Milk'
  | 'Cheese'
  | 'Bacon'
  | 'Beef';
