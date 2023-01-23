import createCache from '@emotion/cache';

export function getEmotionCache(props) {
  return createCache(props ?? { key: `css`, prepend: true });
}
