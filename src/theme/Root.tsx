import React, {useEffect, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Root({children}: {children: ReactNode}) {
  const lightIcon = useBaseUrl('img/devlearn-mark-dark.svg');
  const darkIcon = useBaseUrl('img/devlearn-mark-dark.svg');

  useEffect(() => {
    const updateFavicon = () => {
      const iconUrl = document.documentElement.dataset.theme === 'dark' ? darkIcon : lightIcon;
      document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]').forEach((link) => {
        link.href = iconUrl;
      });
    };

    updateFavicon();
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, [darkIcon, lightIcon]);

  return <>{children}</>;
}
