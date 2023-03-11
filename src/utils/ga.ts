const ga4Key = 'G-BCXXRGTY78';

if (typeof window !== 'undefined') {
  const ga4 = document.createElement('script');
  ga4.type = 'text/javascript';
  ga4.async = true;
  ga4.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Key}`;
  const s4 = document.getElementsByTagName('script')[0];
  s4.parentNode?.insertBefore(ga4, s4);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', ga4Key);
}

export {};
