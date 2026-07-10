import { siteConfig } from "@/lib/config";

export function GtmNoscript() {
  const { gtmId } = siteConfig.analytics;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
