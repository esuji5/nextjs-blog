import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
// import Imgix from 'react-imgix';

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      src={url}
      width="1024"
      height="800"
      alt={`Cover Image for ${title}`}
      className={cn('lazyload shadow-small w-full', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      sizes="50vw"
      attributeConfig={{
        src: 'data-src',
        srcSet: 'data-srcset',
        sizes: 'data-sizes',
      }}
      htmlAttributes={{
        src: `${url}?auto=format,compress&q=1&blur=500&w=auto`,
      }}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
