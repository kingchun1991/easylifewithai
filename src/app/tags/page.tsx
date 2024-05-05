import type { Metadata } from 'next';

import TagsLayout from 'lib/layout/TagsLayout';
import type { IPosts } from 'lib/types/custom-types';
import { getAllFilesFrontMatter } from 'lib/utils/mdx';

export const metadata: Metadata = {
  title: 'Tags',
  description:
    'The is the description of Blog from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
  openGraph: {
    url: 'https://https://easylifeiwithai.com/tags',
    title: 'Tags | EasyLife with AI',
    description:
      'The is the description of Blog from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
    images: {
      url: 'https://https://easylifeiwithai.com/api/og/cover?heading=Tags%20|%20easylife%20with%20AI&template=plain&center=true',
      alt: 'Tags | EasyLife with AI og-image',
    },
  },
};

async function getData() {
  const posts: IPosts[] = await getAllFilesFrontMatter('blog');
  return posts;
}

export default async function index() {
  const posts = (await getData()) as IPosts[];
  return <TagsLayout posts={posts} />;
}
