import { useEffect, useState } from "react";
import { hasAnalyticsConsent, loadAnalytics, setAnalyticsConsent } from "../../utils/analytics";

const AnalyticsConsent = () => {
  const [choiceMade, setChoiceMade] = useState(() =>
    typeof window !== "undefined" && window.localStorage.getItem("portfolio-analytics-consent") !== null
  );

  useEffect(() => {
    if (hasAnalyticsConsent()) loadAnalytics();
  }, []);

  const choose = (consent) => {
    setAnalyticsConsent(consent);
    if (consent) loadAnalytics();
    setChoiceMade(true);
  };

  if (choiceMade) return null;

  return (
    <aside className="fixed bottom-4 left-4 z-50 max-w-md rounded-2xl border border-white/10 bg-slate-900 p-5 text-sm text-slate-300 shadow-2xl" role="dialog" aria-label="Préférences analytics">
      <p>Nous utilisons des mesures d’audience pour améliorer ce portfolio.</p>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={() => choose(false)} className="rounded-lg border border-white/20 px-4 py-2 font-medium text-white">Refuser</button>
        <button type="button" onClick={() => choose(true)} className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white">Accepter</button>
      </div>
    </aside>
  );
};

export default AnalyticsConsent;
