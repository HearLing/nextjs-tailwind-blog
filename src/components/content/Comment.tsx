import { Theme } from '@giscus/react';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import { commentFlag } from '@/constants/env';

export default function Comment() {
  const { theme } = useTheme();

  return commentFlag ? (
    <Giscus
      key={theme}
      repo='Chocolate1999/nextjs-tailwind-blog'
      repoId='R_kgDOHuqHfA'
      category='General'
      categoryId='DIC_kwDOHuqHfM4CQqq4'
      mapping='pathname'
      reactionsEnabled='0'
      emitMetadata='0'
      loading='lazy'
      theme={theme as Theme}
    />
  ) : null;
}
