import { CMS_NAME, CMS_URL, BLOG_TITLE, DESCRIPTION } from '@/lib/constants';

export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter title_text md:text-6xl md:pr-8">
        { BLOG_TITLE }
      </h1>
      { <h4 className="mt-5 text-lg text-center title_text md:text-left md:pl-8">
        { DESCRIPTION }
      </h4> }
      {/* { <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4> } */}
    </section>
  );
}
