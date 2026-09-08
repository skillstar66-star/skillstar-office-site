import { useEffect } from 'react';

function setMetaTag(attrName, attrVal, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrVal);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url) {
  if (!url) return;
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export default function usePageMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag('name', 'title', title);
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }
    if (canonical) {
      setCanonical(canonical);
      setMetaTag('property', 'og:url', canonical);
      setMetaTag('name', 'twitter:url', canonical);
    }
  }, [title, description, canonical]);
}

