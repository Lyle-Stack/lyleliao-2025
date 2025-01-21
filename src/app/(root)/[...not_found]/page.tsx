import { notFound } from 'next/navigation';

// ? https://github.com/vercel/next.js/issues/55191
export default function NotFoundCatchAll() {
    notFound();
}
