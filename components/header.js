import Link from 'next/link';
import { BLOG_TITLE } from '@/lib/constants';

export default function Header() {
  return (
    <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/">
        <a className="title_text hover:underline">{ BLOG_TITLE }</a>
      </Link>
      
    </h2>
  );
}
