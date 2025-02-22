import UsePromiseDemo from '@/components/UsePromisesDemo';
import fs from 'node:fs/promises';

export default async function Home() {
   const data = await fs.readFile('dummy-db.json', 'utf-8');
   const users = JSON.parse(data);
   return (
      <main>
         <UsePromiseDemo users={users} />
      </main>
   );
}
