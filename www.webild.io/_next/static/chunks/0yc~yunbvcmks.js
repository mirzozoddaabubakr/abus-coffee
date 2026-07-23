(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42237, t => {
    "use strict"; let r = `/* HVAC - Blue Professional */

:root {
  /* @colorThemes/lightTheme/blueProfessional */
  --background: #f8fafc;
  --card: #ffffff;
  --foreground: #0f172a;
  --primary-cta: #1d4ed8;
  --primary-cta-text: #ffffff;
  --secondary-cta: #e0e7ff;
  --secondary-cta-text: #1e3a5f;
  --accent: #3b82f6;
  --background-accent: #60a5fa;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-cta) 75%, transparent), var(--color-primary-cta));
  box-shadow: color-mix(in srgb, var(--color-background) 25%, transparent) 0px 1px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 3px 3px 3px 0px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, a = `/* Skincare - Warm Sand */

:root {
  /* @colorThemes/lightTheme/warmSand */
  --background: #fcf6ec;
  --card: #f3ede2;
  --foreground: #2e2521;
  --primary-cta: #2e2521;
  --primary-cta-text: #fcf6ec;
  --secondary-cta: #ffffff;
  --secondary-cta-text: #2e2521;
  --accent: #b2a28b;
  --background-accent: #b89461;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/compact */
  --width-content-width: clamp(40rem, 67.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, e = `/* Dentist - Light Blue Professional */

:root {
  /* Light theme with blue accents */
  --background: #f7f6f7;
  --card: #ffffff;
  --foreground: #0c1325;
  --primary-cta: #0798ff;
  --primary-cta-text: #f7f6f7;
  --secondary-cta: #ffffff;
  --secondary-cta-text: #0c1325;
  --accent: #93c7ff;
  --background-accent: #a8cde8;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/compact */
  --width-content-width: clamp(40rem, 67.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/soft-shadow */
.card {
  background:
    linear-gradient(color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 59.26%),
    linear-gradient(var(--color-card) 0%, var(--color-card) 100%),
    var(--color-card);
  box-shadow:
    20px 18px 7px color-mix(in srgb, var(--color-accent) 0%, transparent),
    2px 2px 2px color-mix(in srgb, var(--color-accent) 6.5%, transparent),
    1px 1px 2px color-mix(in srgb, var(--color-accent) 2%, transparent);
  border: 2px solid var(--color-secondary-cta);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/soft-shadow */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, o = `/* Landscaping - Natural Green */




:root {
  /* @colorThemes/lightTheme/naturalGreen */
  --background: #f7f9f4;
  --card: #ffffff;
  --foreground: #1a2e1a;
  --primary-cta: #2d5a27;
  --primary-cta-text: #ffffff;
  --secondary-cta: #ffffff;
  --secondary-cta-text: #2d5a27;
  --accent: #4a8c3f;
  --background-accent: #6fb85e;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, c = `/* Luxury Travel Agency - Warm Beige */




:root {
  /* @colorThemes/lightTheme/warmBeige */
  --background: #f6f0e9;
  --card: #efe7dd;
  --foreground: #3d1f2a;
  --primary-cta: #3d1f2a;
  --primary-cta-text: #f6f0e9;
  --secondary-cta: #efe7dd;
  --secondary-cta-text: #3d1f2a;
  --accent: #8c4a5c;
  --background-accent: #a86b7c;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(43, 24, 10, 0.3) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/solid */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/shadow */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/solid */
.secondary-button {
  background:
    radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    var(--color-secondary-cta);
  box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
}
`, i = `/* Roofing - Professional Dark */




:root {
  /* @colorThemes/darkTheme/warmStoneOrange */
  --background: #1c1917;
  --card: #292524;
  --foreground: #fafaf9;
  --primary-cta: #ea6720;
  --primary-cta-text: #ffffff;
  --secondary-cta: #44403c;
  --secondary-cta-text: #fafaf9;
  --accent: #f97316;
  --background-accent: #fb923c;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/compact */
  --width-content-width: clamp(40rem, 67.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--color-primary-cta) 70%, var(--color-foreground)) 0%, var(--color-primary-cta) 70%);
  box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--color-primary-cta) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/corner-glow */
.secondary-button {
  background:
    radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    var(--color-secondary-cta);
  box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
}
`, n = `/* Skincare Luxury - Rose Luxury */




:root {
  /* @colorThemes/lightTheme/roseLuxury */
  --background: #f5f5f5;
  --card: #ffffff;
  --foreground: #1c1c1c;
  --primary-cta: #511f1f;
  --primary-cta-text: #f5f5f5;
  --secondary-cta: #ffffff;
  --secondary-cta-text: #1c1c1c;
  --accent: #8f3838;
  --background-accent: #c9725c;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/layered-gradient */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary-cta) 80%, var(--color-foreground)) 0%, var(--color-primary-cta) 25%, color-mix(in srgb, var(--color-primary-cta) 90%, var(--color-background)) 50%, var(--color-primary-cta) 75%, color-mix(in srgb, var(--color-primary-cta) 85%, var(--color-foreground)) 100%);
  box-shadow: inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 30%, transparent), 0 3px 8px -2px color-mix(in srgb, var(--color-background) 50%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  background: var(--color-secondary-cta);
}

/* Verified badge for influencer names */
.verified-name::after {
  content: "";
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  margin-left: 0.3em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b82b40'%3E%3Cpath d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
}
`, l = `/* Hotel - Dark Luxury */

:root {
  /* @colorThemes/darkTheme/luxury */
  --background: #0f1010;
  --card: #3d3d3d;
  --foreground: #f5f0eb;
  --primary-cta: #ffffff;
  --primary-cta-text: #0a0a0a;
  --secondary-cta: #1a1a1a;
  --secondary-cta-text: #f5f0eb;
  --accent: #d4b896;
  --background-accent: #4f402d;

  /* @layout/border-radius/rounded */
  --radius: 1rem;

  /* @layout/content-width/spacious */
  --width-content-width: clamp(40rem, 80vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.35rem;
  --width-x-padding-mask-fade: 4.5rem;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: 0.62rem;
  --text-xs: 0.72rem;
  --text-sm: 0.82rem;
  --text-base: 0.92rem;
  --text-lg: 1rem;
  --text-xl: 1.1rem;
  --text-2xl: 1.3rem;
  --text-3xl: 1.6rem;
  --text-4xl: 2rem;
  --text-5xl: 2.75rem;
  --text-6xl: 3.3rem;
  --text-7xl: 4rem;
  --text-8xl: 4.5rem;
  --text-9xl: 7rem;
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 85vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter Tight", sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(245, 240, 235, 0.15) rgba(0, 0, 0, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter Tight", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
}

h1 {
  font-weight: 400;
}

h2 {
  font-weight: 550;
  letter-spacing: -0.025em;
}

h3 {
  letter-spacing: -0.015em;
}

/* WEBILD_CARD_STYLE */
/* @cards/subtle-dark */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 70%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/white */
.primary-button {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-primary-cta) 95%, var(--color-foreground)) 0%, var(--color-primary-cta) 50%, color-mix(in srgb, var(--color-primary-cta) 95%, var(--color-background)) 100%);
  box-shadow: inset 0 2px 3px 0 color-mix(in srgb, var(--color-foreground) 20%, transparent), inset 0 -2px 3px 0 color-mix(in srgb, var(--color-background) 25%, transparent), 0 2px 4px -1px color-mix(in srgb, var(--color-background) 40%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/subtle-dark */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, s = `/* Plumber - Professional Blue */




:root {
  /* @colorThemes/darkTheme/professionalBlue */
  --background: #020617;
  --card: #0f172a;
  --foreground: #f1f5f9;
  --primary-cta: #0ea5e9;
  --primary-cta-text: #ffffff;
  --secondary-cta: #334155;
  --secondary-cta-text: #f1f5f9;
  --accent: #38bdf8;
  --background-accent: #0284c7;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/compact */
  --width-content-width: clamp(40rem, 67.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--color-primary-cta) 70%, var(--color-foreground)) 0%, var(--color-primary-cta) 70%);
  box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--color-primary-cta) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/corner-glow */
.secondary-button {
  background:
    radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
    var(--color-secondary-cta);
  box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
}
`, d = `/* Real Estate - Elegant Light */




:root {
  /* @colorThemes/lightTheme/elegantLight */
  --background: #f0f0f0;
  --card: #fafafa;
  --foreground: #1a1a1a;
  --primary-cta: #1a1a1a;
  --primary-cta-text: #f0f0f0;
  --secondary-cta: #e8e8e8;
  --secondary-cta-text: #1a1a1a;
  --accent: #c89b3c;
  --background-accent: #c89b3c;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, x = `/* Detailing - Dark & Premium Orange */




:root {
  /* @colorThemes/darkTheme/premiumOrange */
  --background: #0a0a0a;
  --card: #1a1a1a;
  --foreground: #f5f5f5;
  --primary-cta: #ff7a1a;
  --primary-cta-text: #ffffff;
  --secondary-cta: #1a1a1a;
  --secondary-cta-text: #f5f5f5;
  --accent: #ff7a1a;
  --background-accent: #e8651a;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 122, 26, 0.3) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: linear-gradient(135deg, var(--color-primary-cta) 0%, var(--color-background-accent) 100%);
  box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--color-primary-cta) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, m = `/* Med Spa - Clean & Professional */




:root {
  /* @colorThemes/lightTheme/roseMauve */
  --background: #fdf8f8;
  --card: #feeaee;
  --foreground: #2d1f2b;
  --primary-cta: #d5799b;
  --primary-cta-text: #ffffff;
  --secondary-cta: #f5e8ec;
  --secondary-cta-text: #2d1f2b;
  --accent: #d5799b;
  --background-accent: #d4a0b5;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(45, 74, 111, 0.3) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/soft-shadow */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/gradient */
.primary-button {
  background: linear-gradient(180deg, var(--color-primary-cta) 0%, color-mix(in srgb, var(--color-primary-cta) 90%, var(--color-background)) 100%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-accent) 60%, transparent), 0 4px 12px -2px color-mix(in srgb, var(--color-accent) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  background:
    linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
    linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
    linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
    linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
    linear-gradient(color-mix(in srgb, var(--color-secondary-cta) 60%, transparent), color-mix(in srgb, var(--color-secondary-cta) 60%, transparent)),
    var(--color-secondary-cta);
  box-shadow:
    2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-primary-cta) 10%, transparent);
  border: 1px solid var(--color-secondary-cta);
}
`, p = `:root {
  /* Colors */
  --background: #0a0a0a;
  --card: #1a1a1a;
  --foreground: #eeeded;
  --primary-cta: #00FFAB;
  --primary-cta-text: #000000;
  --secondary-cta: #1a1a1a;
  --secondary-cta-text: #ffffffe6;
  --accent: #737373;
  --background-accent: #00d5c7;

  /* Border Radius - Pill */
  --radius: 2rem;

  /* Content Width */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* Carousel utilities */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* Typography */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* Mobile typography */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 171, 0.3) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

.primary-button {
  background: var(--color-primary-cta);
  box-shadow:
    color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 0.84px 0.5px -0.3px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 2px 1.2px -0.6px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 3.6px 2.2px -0.9px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 6px 3.6px -1.25px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 10px 6px -1.6px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 16px 9.6px -1.9px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 27px 16px -2.2px,
    color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 0px 50px 30px -2.5px;
}

.secondary-button {
  background:
    linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
    linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
    linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
    linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
    linear-gradient(color-mix(in srgb, var(--color-secondary-cta) 60%, transparent), color-mix(in srgb, var(--color-secondary-cta) 60%, transparent)),
    var(--color-secondary-cta);
  box-shadow:
    2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
  border: 1px solid var(--color-secondary-cta);
}
`, v = `/* SaaS - Dark Purple */




:root {
  /* @colorThemes/darkTheme/lightPurple */
  --background: #050012;
  --card: #040121;
  --foreground: #f0e6ff;
  --primary-cta: #c89bff;
  --primary-cta-text: #050012;
  --secondary-cta: #1d123b;
  --secondary-cta-text: #f0e6ff;
  --accent: #684f7b;
  --background-accent: #65417c;

  /* @layout/border-radius/soft */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 155, 255, 0.3) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-glow */
.card {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 5%) -35%, var(--color-card) 65%);
  box-shadow: 0px 0px 10px 4px color-mix(in srgb, var(--color-accent) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, w = `/* AI Email Platform - Light Blue */




:root {
  /* @colorThemes/lightTheme/blue */
  --background: #f8fafc;
  --card: #f1f5f9;
  --foreground: #0f172a;
  --primary-cta: #106FEB;
  --primary-cta-text: #ffffff;
  --secondary-cta: #e2e8f0;
  --secondary-cta-text: #0f172a;
  --accent: #B4D4F8;
  --background-accent: #106FEB;

  /* @layout/border-radius/rounded */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(16, 111, 235, 0.3) rgba(0, 0, 0, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-glow */
.card {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 5%) -35%, var(--color-card) 65%);
  box-shadow: 0px 0px 10px 4px color-mix(in srgb, var(--color-accent) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: var(--color-primary-cta);
  box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, h = `/* AI UGC - Light Red */



1,500;1,600;1,700&display=swap");

:root {
  /* @colorThemes/lightTheme/lightRed */
  --background: #fffafa;
  --card: #ffffff;
  --foreground: #1a0000;
  --primary-cta: #e63946;
  --primary-cta-text: #fffafa;
  --secondary-cta: #ffffff;
  --secondary-cta-text: #1a0000;
  --accent: #f5c4c7;
  --background-accent: #f09ca1;

  /* @layout/border-radius/rounded */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* @utilities/masks */
  --vw-1_5: 1.5vw;
  --width-x-padding-mask-fade: 5vw;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: clamp(0.465rem, 0.62vw, 0.62rem);
  --text-xs: clamp(0.54rem, 0.72vw, 0.72rem);
  --text-sm: clamp(0.615rem, 0.82vw, 0.82rem);
  --text-base: clamp(0.69rem, 0.92vw, 0.92rem);
  --text-lg: clamp(0.75rem, 1vw, 1rem);
  --text-xl: clamp(0.825rem, 1.1vw, 1.1rem);
  --text-2xl: clamp(0.975rem, 1.3vw, 1.3rem);
  --text-3xl: clamp(1.2rem, 1.6vw, 1.6rem);
  --text-4xl: clamp(1.5rem, 2vw, 2rem);
  --text-5xl: clamp(2.025rem, 2.75vw, 2.75rem);
  --text-6xl: clamp(2.475rem, 3.3vw, 3.3rem);
  --text-7xl: clamp(3rem, 4vw, 4rem);
  --text-8xl: clamp(3.5rem, 4.5vw, 4.5rem);
  --text-9xl: clamp(5.25rem, 7vw, 7rem);
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 80vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/glass-elevated */
.card {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-card);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/radial-glow */
.primary-button {
  background: radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--color-primary-cta) 70%, var(--color-background)) 0%, var(--color-primary-cta) 70%);
  box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--color-primary-cta) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-background) 20%, transparent);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/glass */
.secondary-button {
  backdrop-filter: blur(8px);
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid var(--color-secondary-cta);
}
`, u = `/* Creative Portfolio - Clean White */




:root {
  /* @colorThemes/lightTheme/neutral */
  --background: #ffffff;
  --card: #f5f5f5;
  --foreground: #171717;
  --primary-cta: #171717;
  --primary-cta-text: #ffffff;
  --secondary-cta: #f5f5f5;
  --secondary-cta-text: #171717;
  --accent: #171717;
  --background-accent: #171717;

  /* @layout/border-radius/rounded */
  --radius: 1rem;

  /* @layout/content-width/spacious */
  --width-content-width: 61rem;

  /* @utilities/masks */
  --vw-1_5: 1.35rem;
  --width-x-padding-mask-fade: 4.5rem;

  /* @layout/carousel */
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* @typography/text-sizing/medium */
  --text-2xs: 0.62rem;
  --text-xs: 0.72rem;
  --text-sm: 0.82rem;
  --text-base: 0.92rem;
  --text-lg: 1rem;
  --text-xl: 1.1rem;
  --text-2xl: 1.3rem;
  --text-3xl: 1.6rem;
  --text-4xl: 2rem;
  --text-5xl: 2.75rem;
  --text-6xl: 3.3rem;
  --text-7xl: 4rem;
  --text-8xl: 4.5rem;
  --text-9xl: 7rem;
}

/* @typography/text-sizing/medium (mobile) */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    --text-xs: 2.75vw;
    --text-sm: 3vw;
    --text-base: 3.25vw;
    --text-lg: 3.5vw;
    --text-xl: 4.25vw;
    --text-2xl: 5vw;
    --text-3xl: 6vw;
    --text-4xl: 7vw;
    --text-5xl: 7.5vw;
    --text-6xl: 8.5vw;
    --text-7xl: 10vw;
    --text-8xl: 12vw;
    --text-9xl: 14vw;
    --width-content-width: 85vw;
    --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
    --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
    --width-carousel-item-2: var(--width-content-width);
    --width-carousel-item-3: var(--width-content-width);
    --width-carousel-item-4: var(--width-content-width);
  }
}

@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-text: var(--primary-cta-text);
  --color-secondary-cta: var(--secondary-cta);
  --color-secondary-cta-text: var(--secondary-cta-text);
  --color-accent: var(--accent);
  --color-background-accent: var(--background-accent);

  /* Fonts */
  --font-sans: "Inter Tight", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono: monospace;

  /* Border Radius */
  --radius: var(--radius);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Width */
  --width-content-width: var(--width-content-width);
  --width-carousel-padding: var(--width-carousel-padding);
  --width-carousel-padding-controls: var(--width-carousel-padding-controls);
  --width-carousel-item-2: var(--width-carousel-item-2);
  --width-carousel-item-3: var(--width-carousel-item-3);
  --width-carousel-item-4: var(--width-carousel-item-4);

  /* Typography */
  --text-2xs: var(--text-2xs);
  --text-xs: var(--text-xs);
  --text-sm: var(--text-sm);
  --text-base: var(--text-base);
  --text-lg: var(--text-lg);
  --text-xl: var(--text-xl);
  --text-2xl: var(--text-2xl);
  --text-3xl: var(--text-3xl);
  --text-4xl: var(--text-4xl);
  --text-5xl: var(--text-5xl);
  --text-6xl: var(--text-6xl);
  --text-7xl: var(--text-7xl);
  --text-8xl: var(--text-8xl);
  --text-9xl: var(--text-9xl);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(23, 23, 23, 0.15) rgba(0, 0, 0, 0);
}

html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

body {
  margin: 0;
  background-color: var(--background);
  color: var(--foreground);
  font-family: "Inter Tight", sans-serif;
  position: relative;
  min-height: 100vh;
  overscroll-behavior: none;
  overscroll-behavior-y: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter Tight", sans-serif;
}

/* WEBILD_CARD_STYLE */
/* @cards/subtle */
.card {
  background: var(--color-card);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/solid-dark */
.primary-button {
  background: linear-gradient(180deg, #1e1e1e 0%, #0c0c0c 100%);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.12), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4), 0 0 0 0.5px rgba(255, 255, 255, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 4px 8px -1px rgba(0, 0, 0, 0.25), 0 12px 24px -4px rgba(0, 0, 0, 0.2), 0 24px 48px -8px rgba(0, 0, 0, 0.15);
}

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/subtle */
.secondary-button {
  background: var(--color-secondary-cta);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
`; t.s(["TEMPLATES_DATA", 0, [{ id: "23", title: "Coffee Shop", category: "Cafe", author: "Webild", isVerified: !0, tags: ["Food & Drink", "Restaurant", "Local Business"], description: "A warm and inviting coffee shop template with floating cards, cursor trail interactions, and filterable menu. Perfect for cafes, bakeries, and specialty coffee shops.", tooltipDescription: "Coffee shop template with billboard hero, cursor trail about, filterable menu grid, event features, contact bar, and footer.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/coffee-shop", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/coffee-shop.webp", defaultPrompt: "Create a coffee shop website.", data: { components: {}, colorTheme: { "--background": "#F5F0E8", "--card": "#EDE7DB", "--foreground": "#2C1810", "--primary-cta": "#2C1810", "--primary-cta-text": "#F5F0E8", "--secondary-cta": "#FFFFFF", "--secondary-cta-text": "#2C1810", "--accent": "#8B7355", "--background-accent": "#6F4E37" }, styleProvider: { buttonVariant: "bounce", siteBackground: "aurora", heroBackground: "none" } } }, { id: "21", title: "Web Agency", category: "Agency", author: "Webild", isVerified: !0, tags: ["Agency", "Technology", "Dark Theme"], description: "A modern web agency template with vertical marquee hero, bento services, work showcase carousel, and team cards. Perfect for design studios and development agencies.", tooltipDescription: "Web agency template with vertical marquee hero, bento services, media carousel, glow features, trust card, metrics, team, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/web-agency", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/web-agency.webp", defaultPrompt: "Create a web agency website.", data: { components: {}, colorTheme: { "--background": "#0a0a0a", "--card": "#161616", "--foreground": "#f0f0f0", "--primary-cta": "#ffffff", "--primary-cta-text": "#0a0a0a", "--secondary-cta": "#1e1e1e", "--secondary-cta-text": "#e0e0e0", "--accent": "#d0d0d0", "--background-accent": "#434343" }, styleProvider: { buttonVariant: "stagger", siteBackground: "aurora", heroBackground: "lightRaysCorner" } } }, { id: "18", title: "Luxury Real Estate", category: "Real Estate", author: "Webild", isVerified: !0, tags: ["Real Estate", "Luxury", "Property"], description: "An elegant luxury real estate template with video scroll hero, text fill about, and parallax contact. Perfect for high-end property agencies, villa rentals, and luxury developments.", tooltipDescription: "Luxury villas template with video scroll hero, text fill about, media columns properties, parallax contact, and footer.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/luxury-real-estate", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/luxury-real-estate.webp", defaultPrompt: "Create a luxury real estate website.", data: { components: {}, colorTheme: { "--background": "#faf8f5", "--card": "#ffffff", "--foreground": "#1a1a1a", "--primary-cta": "#1a1a1a", "--primary-cta-text": "#faf8f5", "--secondary-cta": "#f0ece6", "--secondary-cta-text": "#1a1a1a", "--accent": "#c9a96e", "--background-accent": "#f0ece6" }, styleProvider: { buttonVariant: "stagger", siteBackground: "none", heroBackground: "none" } } }, { id: "5", title: "Auto Detailing", category: "Detailing", author: "Webild", isVerified: !0, tags: ["Automotive", "Services", "Dark Theme"], description: "A sleek auto detailing template with service showcases, before/after comparisons, and booking forms. Perfect for car detailing and automotive care businesses.", tooltipDescription: "Auto detailing template with features hero, sticky cards, testimonials, comparison, team, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/auto-detailing", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/auto-detailing.webp", defaultPrompt: "Create an auto detailing business website.", data: { components: {}, colorTheme: { "--background": "#0a0a0a", "--card": "#1a1a1a", "--foreground": "#f5f5f5", "--primary-cta": "#ff7a1a", "--primary-cta-text": "#ffffff", "--secondary-cta": "#1a1a1a", "--secondary-cta-text": "#f5f5f5", "--accent": "#ff7a1a", "--background-accent": "#e8651a" }, styleProvider: { buttonVariant: "expand", siteBackground: "none", heroBackground: "lightRaysCenter" }, css: x } }, { id: "1", title: "AI Email Platform", category: "SaaS", author: "Webild", isVerified: !0, tags: ["Technology", "AI", "Email"], description: "A modern AI-powered email platform template with feature showcases, pricing tables, and customer testimonials. Perfect for email marketing and automation tools.", tooltipDescription: "AI email platform template with floating cards hero, features grid, pricing, testimonials, blog, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/ai-email-platform", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/ai-email-platform.webp", defaultPrompt: "Create an AI email platform website.", data: { components: {}, colorTheme: { "--background": "#f8fafc", "--card": "#f1f5f9", "--foreground": "#0f172a", "--primary-cta": "#106FEB", "--primary-cta-text": "#ffffff", "--secondary-cta": "#e2e8f0", "--secondary-cta-text": "#0f172a", "--accent": "#B4D4F8", "--background-accent": "#106FEB" }, styleProvider: { buttonVariant: "expand", siteBackground: "none", heroBackground: "none" }, css: w } }, { id: "2", title: "HVAC Management", category: "HVAC", author: "Webild", isVerified: !0, tags: ["Services", "Local Business", "Professional"], description: "A professional HVAC company template featuring service showcases, customer testimonials, and easy appointment booking. Perfect for heating, ventilation, and air conditioning businesses.", tooltipDescription: "HVAC company template with overlay hero, about, services, why choose us, process, testimonials, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/hvac-management", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/hvac-management.webp", defaultPrompt: "Create an HVAC company website.", data: { components: {}, colorTheme: { "--background": "#f8fafc", "--card": "#ffffff", "--foreground": "#0f172a", "--primary-cta": "#1d4ed8", "--primary-cta-text": "#ffffff", "--secondary-cta": "#e0e7ff", "--secondary-cta-text": "#1e3a5f", "--accent": "#3b82f6", "--background-accent": "#60a5fa" }, styleProvider: { buttonVariant: "arrow", siteBackground: "aurora", heroBackground: "none" }, css: r } }, { id: "3", title: "Creative Portfolio", category: "Portfolio", author: "Webild", isVerified: !0, tags: ["Creative", "Portfolio", "Minimal"], description: "A stunning creative portfolio template with scroll animations, work showcases, and parallax effects. Perfect for designers, photographers, and creative professionals.", tooltipDescription: "Creative portfolio template with scroll stack hero, testimonials, about parallax, bento features, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/creative-portfolio", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/creative-portfolio.webp", defaultPrompt: "Create a creative portfolio website.", data: { components: {}, colorTheme: { "--background": "#ffffff", "--card": "#f5f5f5", "--foreground": "#171717", "--primary-cta": "#171717", "--primary-cta-text": "#ffffff", "--secondary-cta": "#f5f5f5", "--secondary-cta-text": "#171717", "--accent": "#171717", "--background-accent": "#171717" }, styleProvider: { buttonVariant: "stagger", siteBackground: "none", heroBackground: "none" }, css: u } }, { id: "19", title: "Personal Blogger", category: "Personal", author: "Webild", isVerified: !0, tags: ["Personal", "Blog", "Travel"], description: "A playful personal blogger template with interactive stickers, flip cards, and carousel showcases. Perfect for travel bloggers, lifestyle creators, and personal brands.", tooltipDescription: "Personal blogger template with sticker flip hero, bento about, carousel milestones, parallax showcase, and footer.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/personal-blogger", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/personal-blogger.webp", defaultPrompt: "Create a personal blogger website.", data: { components: {}, colorTheme: { "--background": "#f5f3f0", "--card": "#ffffff", "--foreground": "#1a1a1a", "--primary-cta": "#1a1a1a", "--primary-cta-text": "#f5f3f0", "--secondary-cta": "#f5f3f0", "--secondary-cta-text": "#1a1a1a", "--accent": "#4CAF50", "--background-accent": "#ebe7e1" }, styleProvider: { buttonVariant: "bounce", siteBackground: "none", heroBackground: "none" } } }, { id: "20", title: "Wellness Center", category: "Healthcare", author: "Webild", isVerified: !0, tags: ["Healthcare", "Wellness", "Premium"], description: "A premium health optimization clinic template with statistics hero, feature splits, pricing plans, and journal blog. Perfect for longevity clinics and wellness centers.", tooltipDescription: "Health optimization template with overlay statistics hero, media features, alternating split, pricing cards, blog cards, FAQ, and footer.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/wellness-center", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/wellness-center.webp", defaultPrompt: "Create a health optimization clinic website.", data: { components: {}, colorTheme: { "--background": "#fafaf9", "--card": "#f5f5f4", "--foreground": "#0c0a09", "--primary-cta": "#ea6720", "--primary-cta-text": "#ffffff", "--secondary-cta": "#e7e5e4", "--secondary-cta-text": "#0c0a09", "--accent": "#f59e0b", "--background-accent": "#d97706" }, styleProvider: { buttonVariant: "magnetic", siteBackground: "none", heroBackground: "none" } } }, { id: "24", title: "Product Showcase", category: "E-commerce", author: "Webild", isVerified: !0, tags: ["E-commerce", "Product", "Minimal"], description: "A clean product showcase template with overlay parallax hero, highlight sections, and variant product cards. Perfect for furniture brands, product launches, and minimalist e-commerce.", tooltipDescription: "Product showcase template with overlay parallax hero, parallax about, variant cards collection, detailed testimonials, FAQ, and footer.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/product-showcase", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/product-showcase.webp", defaultPrompt: "Create a product showcase website.", data: { components: {}, colorTheme: { "--background": "#f1f1f1", "--card": "#f9f9f9", "--foreground": "#1A1A1A", "--primary-cta": "#1A1A1A", "--primary-cta-text": "#FFFFFF", "--secondary-cta": "#FFFFFF", "--secondary-cta-text": "#1A1A1A", "--accent": "#7A7A72", "--background-accent": "#E5E4DF" }, styleProvider: { buttonVariant: "default", siteBackground: "none", heroBackground: "none" } } }, { id: "4", title: "Boutique Hotel", category: "Hotel", author: "Webild", isVerified: !0, tags: ["Hospitality", "Luxury", "Dark Theme"], description: "An elegant luxury hotel template with video backgrounds, room showcases, and booking integration. Perfect for boutique hotels and luxury resorts.", tooltipDescription: "Luxury hotel template with video expand hero, parallax about, features, media grid, bento cards, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/boutique-hotel", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/boutique-hotel.webp", defaultPrompt: "Create a luxury hotel website.", data: { components: {}, colorTheme: { "--background": "#0f1010", "--card": "#3d3d3d", "--foreground": "#f5f0eb", "--primary-cta": "#ffffff", "--primary-cta-text": "#0a0a0a", "--secondary-cta": "#1a1a1a", "--secondary-cta-text": "#f5f0eb", "--accent": "#d4b896", "--background-accent": "#4f402d" }, styleProvider: { buttonVariant: "default", siteBackground: "none", heroBackground: "none" }, css: l } }, { id: "6", title: "AI UGC Creator", category: "AI", author: "Webild", isVerified: !0, tags: ["Technology", "AI", "Creator"], description: "A vibrant AI content creator template with creator showcases, pricing plans, and testimonials. Perfect for AI-powered UGC and content generation platforms.", tooltipDescription: "AI UGC creator template with creator hero, metrics, features, testimonials, pricing, and FAQ.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/ai-ugc-creator", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/ai-ugc-creator.webp", defaultPrompt: "Create an AI UGC creator platform website.", data: { components: {}, colorTheme: { "--background": "#fffafa", "--card": "#ffffff", "--foreground": "#1a0000", "--primary-cta": "#e63946", "--primary-cta-text": "#fffafa", "--secondary-cta": "#ffffff", "--secondary-cta-text": "#1a0000", "--accent": "#f5c4c7", "--background-accent": "#f09ca1" }, styleProvider: { buttonVariant: "bounce", siteBackground: "none", heroBackground: "none" }, css: h } }, { id: "7", title: "Plumbing Services", category: "Plumber", author: "Webild", isVerified: !0, tags: ["Services", "Local Business", "Dark Theme"], description: "A professional plumbing services template with service showcases, customer testimonials, and contact forms. Perfect for plumbers and home service businesses.", tooltipDescription: "Plumbing services template with centered hero, media cards, testimonials, glow features, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/plumbing-services", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/plumbing-services.webp", defaultPrompt: "Create a plumbing services website.", data: { components: {}, colorTheme: { "--background": "#020617", "--card": "#0f172a", "--foreground": "#f1f5f9", "--primary-cta": "#0ea5e9", "--primary-cta-text": "#ffffff", "--secondary-cta": "#334155", "--secondary-cta-text": "#f1f5f9", "--accent": "#38bdf8", "--background-accent": "#0284c7" }, styleProvider: { buttonVariant: "expand", siteBackground: "floatingGradient", heroBackground: "none" }, css: s } }, { id: "8", title: "AI Consulting", category: "Agency", author: "Brody Automates", authorAvatar: "https://storage.googleapis.com/webild/default/platform/Brody%20Prof.jpg", isVerified: !0, tags: ["Agency", "Creative", "Dark Theme"], description: "A bold dark-themed agency template with neon accents, team showcases, and pricing tables. Perfect for digital agencies and creative studios.", tooltipDescription: "Merydian agency template with billboard hero, about, bento features, glow features, pricing, team, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/ai-consulting", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/ai-consulting.webp", defaultPrompt: "Create a modern digital agency website.", data: { components: {}, colorTheme: { "--background": "#0a0a0a", "--card": "#1a1a1a", "--foreground": "#eeeded", "--primary-cta": "#00FFAB", "--primary-cta-text": "#000000", "--secondary-cta": "#1a1a1a", "--secondary-cta-text": "#ffffffe6", "--accent": "#737373", "--background-accent": "#00d5c7" }, styleProvider: { buttonVariant: "arrow", siteBackground: "none", heroBackground: "lightRaysCenter" }, css: p } }, { id: "9", title: "Roofing Company", category: "Roofing", author: "Webild", isVerified: !0, tags: ["Construction", "Services", "Local Business"], description: "A professional roofing contractor template with service details, before/after galleries, and free estimate forms. Ideal for roofing and home improvement businesses.", tooltipDescription: "Roofing company template with testimonial hero, about, services, metrics, process, testimonials, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/roofing-company", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/roofing-company.webp", defaultPrompt: "Create a roofing company website.", data: { components: {}, colorTheme: { "--background": "#1c1917", "--card": "#292524", "--foreground": "#fafaf9", "--primary-cta": "#ea6720", "--primary-cta-text": "#ffffff", "--secondary-cta": "#44403c", "--secondary-cta-text": "#fafaf9", "--accent": "#f97316", "--background-accent": "#fb923c" }, styleProvider: { buttonVariant: "elastic", siteBackground: "none", heroBackground: "none" }, css: i } }, { id: "10", title: "Landscaping Services", category: "Landscaping", author: "Webild", isVerified: !0, tags: ["Services", "Outdoor", "Local Business"], description: "A nature-inspired template for landscaping companies featuring project galleries, service listings, and seasonal promotions. Great for lawn care and outdoor design businesses.", tooltipDescription: "Landscaping company template with overlay hero, services, team, testimonials, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/landscaping-services", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/landscaping-services.webp", defaultPrompt: "Create a landscaping company website.", data: { components: {}, colorTheme: { "--background": "#f7f9f4", "--card": "#ffffff", "--foreground": "#1a2e1a", "--primary-cta": "#2d5a27", "--primary-cta-text": "#ffffff", "--secondary-cta": "#ffffff", "--secondary-cta-text": "#2d5a27", "--accent": "#4a8c3f", "--background-accent": "#6fb85e" }, styleProvider: { buttonVariant: "stagger", siteBackground: "none", heroBackground: "none" }, css: o } }, { id: "11", title: "Travel Agency", category: "Travel Agency", author: "Webild", isVerified: !0, tags: ["Travel", "Luxury", "Premium"], description: "An elegant travel agency template with destination showcases, tour packages, and booking integration. Perfect for luxury travel planners and tour operators.", tooltipDescription: "Luxury travel template with carousel hero, about, services, destinations, reviews, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/travel-agency", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/travel-agency.webp", defaultPrompt: "Create a luxury travel agency website.", data: { components: {}, colorTheme: { "--background": "#f6f0e9", "--card": "#efe7dd", "--foreground": "#3d1f2a", "--primary-cta": "#3d1f2a", "--primary-cta-text": "#f6f0e9", "--secondary-cta": "#efe7dd", "--secondary-cta-text": "#3d1f2a", "--accent": "#8c4a5c", "--background-accent": "#a86b7c" }, styleProvider: { buttonVariant: "arrow", siteBackground: "none", heroBackground: "cornerGlow" }, css: c } }, { id: "12", title: "Natural Skincare", category: "Skincare", author: "Webild", isVerified: !0, tags: ["Beauty", "E-commerce", "Wellness"], description: "A clean, elegant e-commerce template for skincare brands featuring product catalogs, ingredient highlights, and customer reviews. Perfect for beauty and wellness brands.", tooltipDescription: "Skincare brand template with logo hero, products, benefits, FAQ, and reviews.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/natural-skincare", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/natural-skincare.webp", defaultPrompt: "Create a skincare brand website.", data: { components: {}, colorTheme: { "--background": "#fcf6ec", "--card": "#f3ede2", "--foreground": "#2e2521", "--primary-cta": "#2e2521", "--primary-cta-text": "#fcf6ec", "--secondary-cta": "#ffffff", "--secondary-cta-text": "#2e2521", "--accent": "#b2a28b", "--background-accent": "#b89461" }, styleProvider: { buttonVariant: "shift", siteBackground: "aurora", heroBackground: "none" }, css: a } }, { id: "13", title: "Dental Practice", category: "Dentist", author: "Webild", isVerified: !0, tags: ["Healthcare", "Medical", "Professional"], description: "A modern dental practice template featuring service listings, team introductions, and patient testimonials. Perfect for dentists and healthcare professionals.", tooltipDescription: "Luxury dental template with hero KPIs, services, about, testimonials, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/dental-practice", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/dental-practice.webp", defaultPrompt: "Create a luxury dental practice website.", data: { components: {}, colorTheme: { "--background": "#f7f6f7", "--card": "#ffffff", "--foreground": "#0c1325", "--primary-cta": "#0798ff", "--primary-cta-text": "#f7f6f7", "--secondary-cta": "#ffffff", "--secondary-cta-text": "#0c1325", "--accent": "#93c7ff", "--background-accent": "#a8cde8" }, styleProvider: { buttonVariant: "stagger", siteBackground: "aurora", heroBackground: "horizonGlow" }, css: e } }, { id: "14", title: "SaaS Platform", category: "SaaS", author: "Webild", isVerified: !0, tags: ["Technology", "Software", "Dark Theme"], description: "A modern SaaS landing page with feature highlights, pricing tables, and customer testimonials. Ideal for software companies and tech startups.", tooltipDescription: "SaaS landing with centered hero, bento features, pricing, testimonials, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/saas-platform", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/saas-platform.webp", defaultPrompt: "Create a SaaS development landing page.", data: { components: {}, colorTheme: { "--background": "#050012", "--card": "#040121", "--foreground": "#f0e6ff", "--primary-cta": "#c89bff", "--primary-cta-text": "#050012", "--secondary-cta": "#1d123b", "--secondary-cta-text": "#f0e6ff", "--accent": "#684f7b", "--background-accent": "#65417c" }, styleProvider: { buttonVariant: "arrow", siteBackground: "aurora", heroBackground: "lightRaysCenter" }, css: v } }, { id: "15", title: "Real Estate Agency", category: "Real Estate", author: "Webild", isVerified: !0, tags: ["Real Estate", "Luxury", "Property"], description: "A sophisticated real estate template with property listings, virtual tours, and agent profiles. Ideal for luxury real estate agencies and property developers.", tooltipDescription: "Luxury real estate template with gallery hero, properties, about, services, team, metrics, testimonials, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/real-estate-agency", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/real-estate-agency.webp", defaultPrompt: "Create a luxury real estate agency website.", data: { components: {}, colorTheme: { "--background": "#f0f0f0", "--card": "#fafafa", "--foreground": "#1a1a1a", "--primary-cta": "#1a1a1a", "--primary-cta-text": "#f0f0f0", "--secondary-cta": "#e8e8e8", "--secondary-cta-text": "#1a1a1a", "--accent": "#c89b3c", "--background-accent": "#c89b3c" }, styleProvider: { buttonVariant: "magnetic", siteBackground: "none", heroBackground: "gradientBars" }, css: d } }, { id: "16", title: "Perfume Brand", category: "Beauty", author: "Webild", isVerified: !0, tags: ["Luxury", "E-commerce", "Premium"], description: "A premium skincare brand template with product showcases, ingredient stories, and elegant imagery. Ideal for luxury beauty and skincare brands.", tooltipDescription: "Skincare luxury template with rotated carousel hero, products, craftsmanship features, influencers, metrics, blog, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/perfume-brand", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/perfume-brand.webp", defaultPrompt: "Create a luxury skincare brand website.", data: { components: {}, colorTheme: { "--background": "#f5f5f5", "--card": "#ffffff", "--foreground": "#1c1c1c", "--primary-cta": "#511f1f", "--primary-cta-text": "#f5f5f5", "--secondary-cta": "#ffffff", "--secondary-cta-text": "#1c1c1c", "--accent": "#8f3838", "--background-accent": "#c9725c" }, styleProvider: { buttonVariant: "elastic", siteBackground: "cornerGlow", heroBackground: "lightRaysCorner" }, css: n } }, { id: "17", title: "Med Spa", category: "Med Spa", author: "Webild", isVerified: !0, tags: ["Beauty", "Healthcare", "Wellness"], description: "A clean and professional med spa template with treatment showcases, team profiles, and booking forms. Perfect for medical spas and aesthetic clinics.", tooltipDescription: "Med spa template with marquee hero, team cards, results comparison, testimonials, FAQ, and contact.", previewUrl: "https://webild-components-version-4.vercel.app/components/templates/med-spa", imageSrc: "https://storage.googleapis.com/webild/default/platform/templates/med-spa.webp", defaultPrompt: "Create a med spa or aesthetic clinic website.", data: { components: {}, colorTheme: { "--background": "#fdf8f8", "--card": "#feeaee", "--foreground": "#2d1f2b", "--primary-cta": "#d5799b", "--primary-cta-text": "#ffffff", "--secondary-cta": "#f5e8ec", "--secondary-cta-text": "#2d1f2b", "--accent": "#d5799b", "--background-accent": "#d4a0b5" }, styleProvider: { buttonVariant: "arrow", siteBackground: "aurora", heroBackground: "none" }, css: m } }]], 42237)
}]);