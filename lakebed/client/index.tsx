import { useEffect, useRef } from "preact/hooks";
import { chartHtml } from "./chart";

export function App() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = host.current;
    if (!target) return;
    document.title = "T3 Code growth and contributors";
    const page = new DOMParser().parseFromString(chartHtml, "text/html");
    let cancelled = false;
    const pendingScripts = Array.from(page.querySelectorAll("script"))
      .filter((script) => script.type !== "application/json");

    for (const style of page.head.querySelectorAll("style")) {
      target.append(style.cloneNode(true));
    }
    for (const element of page.body.children) {
      if (element instanceof HTMLScriptElement && element.type !== "application/json") {
        continue;
      } else {
        target.append(element.cloneNode(true));
      }
    }

    const start = async () => {
      for (const original of pendingScripts) {
        if (cancelled) return;
        const script = document.createElement("script");
        if (original.src) {
          script.src = original.src;
          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
            script.onerror = () => resolve();
            target.append(script);
          });
        } else {
          script.textContent = original.textContent;
          target.append(script);
        }
      }
    };
    void start().catch(() => {
      if (cancelled) return;
      const message = document.createElement("p");
      message.setAttribute("role", "alert");
      message.textContent = "The chart could not load. Please refresh the page.";
      target.append(message);
    });

    return () => {
      cancelled = true;
      target.replaceChildren();
    };
  }, []);

  return <div ref={host} />;
}
