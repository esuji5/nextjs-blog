
this repo is based on [Build and Deploy a Next.js Blog with Cosmic and Vercel](https://vercel.com/guides/deploying-next-and-cosmic-with-vercel)

my blog here https://esuji5.vercel.app/


# A statically generated blog example using Next.js and Cosmic

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Cosmic](https://cosmicjs.com/) as the data source.

## Demo

[https://cosmic-next-blog.vercel.app/](https://cosmic-next-blog.vercel.app/)

## Deploy your own

Once you have access to [the environment variables you'll need](#step-3-set-up-environment-variables), deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Blog Starter](/examples/blog-starter)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example cms-cosmic cms-cosmic-app
# or
yarn create next-app --example cms-cosmic cms-cosmic-app
```

## Configuration

### Step 1. Create an account and a project on Cosmic

First, [create an account on Cosmic](https://cosmicjs.com).

### Step 2. Install the Next.js Static Blog app

After creating an account, install the [Next.js Static Blog](https://www.cosmicjs.com/apps/nextjs-static-blog) app from the Cosmic App Marketplace.

### Step 3. Set up environment variables

Go to the **Settings** menu at the sidebar and click **Basic Settings**.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `COSMIC_BUCKET_SLUG` should be the **Bucket slug** key under **Basic Settings**.
- `COSMIC_READ_KEY` should be the **Read Key** under **API Access**.
- `COSMIC_PREVIEW_SECRET` can be any random string (but avoid spaces) - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

Your `.env.local` file should look like this:

```bash
COSMIC_BUCKET_SLUG=...
COSMIC_READ_KEY=...
COSMIC_PREVIEW_SECRET=...
```

### Step 4. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 5. Try preview mode

To add the ability to preview content from your Cosmic dashboard go to **Posts > Edit Settings** and scroll down to the "Preview Link" section. (Screenshot below)

![Image](https://cdn.cosmicjs.com/14e6c0f0-a07b-11ea-829b-5b458b05d525-preview-link.png)

Add your live URL or localhost development URL which includes your chosen preview secret and `[object_slug]` shortcode. It should look like the following:

```
http://localhost:3000/api/preview?secret=<secret>&slug=[object_slug]
```

- `<secret>` is the string you entered for `COSMIC_PREVIEW_SECRET`.
- `[object_slug]` shortcode will automatically be converted to the post's `slug` attribute.

On Cosmic, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- Click **Save Draft**, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

Now, if you go to the post page directly on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change ([Documentation](https://nextjs.org/docs/advanced-features/preview-mode)).

Next, click the Preview Link button on the Post to see the updated title. (Screenshot below)

<img src="https://cdn.cosmicjs.com/80f42680-a07a-11ea-829b-5b458b05d525-preview-button.png" width="300" />

To exit preview mode, you can click on **Click here to exit preview mode** at the top.

### Step 6. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env)
