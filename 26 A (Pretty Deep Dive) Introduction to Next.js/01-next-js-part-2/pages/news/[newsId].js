import { useRouter } from 'next/router';

export default function DetailPage() {
   const router = useRouter();

   router.query.newsId;

   return <h1>The Detail Page</h1>;
}
