import markdownStyles from './markdown-styles.module.css';
// import renderToString from 'next-mdx-remote/render-to-string';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        // className={markdownStyles['markdown'], renderToString['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
