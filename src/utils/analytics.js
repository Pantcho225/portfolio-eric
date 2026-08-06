const CONSENT_KEY = "portfolio-analytics-consent";

export const hasAnalyticsConsent = () =>
  typeof window !== "undefined" &&
  window.localStorage.getItem(CONSENT_KEY) === "granted";

export const setAnalyticsConsent = (consent) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, consent ? "granted" : "denied");
};

export const resetAnalyticsConsent = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_KEY);
};

export const loadAnalytics = () => {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || window.__gaLoaded) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.analytics = "google";
  document.head.appendChild(script);
  window.__gaLoaded = true;
};

export const trackEvent = (eventName, params = {}) => {
  if (!hasAnalyticsConsent() || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, { ...params, transport_type: "beacon" });
};

export const trackCVDownload = () => trackEvent("cv_download", { link_text: "Téléchargement CV" });
export const trackProjectsView = () => trackEvent("projects_view", { link_text: "Voir mes projets" });
export const trackGithubClick = () => trackEvent("github_click", { link_text: "GitHub" });
export const trackEmailClick = () => trackEvent("email_click", { link_text: "Email" });
export const trackPhoneClick = () => trackEvent("phone_click", { link_text: "Téléphone" });
export const trackContactAttempt = () => trackEvent("contact_attempt");
export const trackContactSuccess = () => trackEvent("contact_success");
export const trackContactError = (reason) => trackEvent("contact_error", { reason });
export const trackContactConfirmationError = () => trackEvent("contact_confirmation_error");
export const trackCaseStudyView = (project = "copropriete") => trackEvent("case_study_view", { project });
