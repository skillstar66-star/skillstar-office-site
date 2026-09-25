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

function setStructuredData(data) {
  let element = document.getElementById('dynamic-page-schema');
  if (!data) {
    if (element) element.remove();
    return;
  }
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('id', 'dynamic-page-schema');
    document.head.appendChild(element);
  }
  element.textContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
}

export default function usePageMeta({ title, description, canonical, structuredData, schema }) {
  const data = structuredData || schema;

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
    if (data) {
      setStructuredData(data);
    }

    return () => {
      if (data) {
        const element = document.getElementById('dynamic-page-schema');
        if (element) element.remove();
      }
    };
  }, [title, description, canonical, data]);
}

