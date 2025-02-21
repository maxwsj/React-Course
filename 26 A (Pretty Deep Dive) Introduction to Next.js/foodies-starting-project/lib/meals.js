import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
   // This kind of structure prevents us from SQL injection
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal) {
   meal.slug = slugify(meal.title, { lower: true });
   // Eliminate any harmful content from the instructions attribute so that we can sanitize and clean the content.
   meal.instructions = xss(meal.instructions);
}
