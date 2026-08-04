export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    console.warn("Google Analytics n'est pas disponible.");
    return;
  }

  window.gtag("event", eventName, params);
};

export const trackCVDownload = () => {
  trackEvent("cv_download", {
    event_category: "engagement",
    event_label: "Téléchargement CV",
  });
};

export const trackGithubClick = () => {
  trackEvent("github_click", {
    event_category: "engagement",
    event_label: "GitHub",
  });
};

export const trackEmailClick = () => {
  trackEvent("email_click", {
    event_category: "contact",
    event_label: "Email",
  });
};

export const trackPhoneClick = () => {
  trackEvent("phone_click", {
    event_category: "contact",
    event_label: "Téléphone",
  });
};

export const trackContactSubmit = () => {
  trackEvent("contact_submit", {
    event_category: "contact",
    event_label: "Formulaire",
  });
};

export const trackCaseStudyView = (project = "copropriete") => {
  trackEvent("case_study_view", {
    event_category: "portfolio",
    event_label: project,
  });
};