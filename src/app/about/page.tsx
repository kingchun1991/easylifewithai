/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getFileBySlug } from 'lib/utils/mdx';
import AboutLayout from '~/lib/components/about';
import type { IPosts } from '~/lib/types/custom-types';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The is the description of About from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
  openGraph: {
    url: 'https://https://easylifeiwithai.com/About',
    title: 'About | EasyLife with AI',
    description:
      'The is the description of About from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
    images: {
      url: 'https://https://easylifeiwithai.com/api/og/cover?heading=About%20|%20easylife%20with%20AI&template=plain&center=true',
      alt: 'About | EasyLife with AI og-image',
    },
  },
};

async function getAbout() {
  return getFileBySlug('about', '_index');
}

export default async function index() {
  const {
    metaInformation,
    mdxSource,
  }: {
    metaInformation: IPosts;
    mdxSource: MDXRemoteSerializeResult;
  } = await getAbout();

  return <AboutLayout post={metaInformation} mdxSource={mdxSource} />;
}
