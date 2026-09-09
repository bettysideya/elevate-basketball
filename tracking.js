(function() {
  const SUPABASE_URL = 'https://xkhyxcgbqqhblyhnxprw.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraHl4Y2dicXFoYmx5aG54cHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4OTI0NzksImV4cCI6MjEwNDQ2ODQ3OX0.K0cPHyv-Bw_DIeENAaeEAxnhezk9ughQ3JhOEl6BSi4';

  // Get or create session ID
  let sessionId = sessionStorage.getItem('eb_session');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('eb_session', sessionId);
  }

  // Store UTM params in session for conversion tracking
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmKeys.forEach(key => {
    const val = params.get(key);
    if (val) sessionStorage.setItem(key, val);
  });

  // Get stored UTM params
  function getUtm(key) {
    return params.get(key) || sessionStorage.getItem(key) || null;
  }

  // Track page view
  function trackPageView() {
    const data = {
      page_path: window.location.pathname,
      referrer: document.referrer || null,
      utm_source: getUtm('utm_source'),
      utm_medium: getUtm('utm_medium'),
      utm_campaign: getUtm('utm_campaign'),
      utm_content: getUtm('utm_content'),
      utm_term: getUtm('utm_term'),
      user_agent: navigator.userAgent,
      screen_width: window.innerWidth,
      session_id: sessionId
    };

    fetch(SUPABASE_URL + '/rest/v1/page_views', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      },
      body: JSON.stringify(data)
    }).catch(function() {});
  }

  // Track conversion (call this on form submit, etc.)
  window.trackConversion = function(type, metadata) {
    const data = {
      conversion_type: type,
      page_path: window.location.pathname,
      utm_source: getUtm('utm_source'),
      utm_medium: getUtm('utm_medium'),
      utm_campaign: getUtm('utm_campaign'),
      utm_content: getUtm('utm_content'),
      utm_term: getUtm('utm_term'),
      session_id: sessionId,
      metadata: metadata || null
    };

    fetch(SUPABASE_URL + '/rest/v1/conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      },
      body: JSON.stringify(data)
    }).catch(function() {});
  };

  // Track on load
  trackPageView();
})();
