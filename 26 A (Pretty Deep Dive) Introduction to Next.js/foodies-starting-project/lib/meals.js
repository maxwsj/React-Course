import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
   // This kind of structure prevents us from SQL injection
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
