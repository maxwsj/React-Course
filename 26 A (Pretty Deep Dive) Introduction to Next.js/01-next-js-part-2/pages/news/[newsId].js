import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DetailPage() {
   const router = useRouter();

   router.query.newsId;

   return (
      <>
         <h1>The Detail Page</h1>
         <ul>
            <Link href="/news/nextjs-is-a-great-framework">
               NextJS is a great framework
            </Link>
            {/* <Link>SOmething else</Link> */}
         </ul>
      </>
   );
}
