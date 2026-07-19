import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      colors: {
          "primary": "rgb(var(--primary) / <alpha-value>)",
          "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
          "accent": "rgb(var(--accent) / <alpha-value>)",
          "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
          "highlight-coral": "rgb(var(--highlight-coral) / <alpha-value>)",
          "highlight-ember": "rgb(var(--highlight-ember) / <alpha-value>)",
          "highlight-match": "rgb(var(--highlight-match) / <alpha-value>)",
          "highlight-cream": "rgb(var(--highlight-cream) / <alpha-value>)"
        },
      backgroundColor: {
          "canvas": "rgb(var(--bg-canvas) / <alpha-value>)",
          "subtle": "rgb(var(--bg-subtle) / <alpha-value>)",
          "muted": "rgb(var(--bg-muted) / <alpha-value>)"
        },
      textColor: {
          "default": "rgb(var(--fg-default) / <alpha-value>)",
          "muted": "rgb(var(--fg-muted) / <alpha-value>)",
          "heading": "rgb(var(--fg-heading) / <alpha-value>)"
        },
      borderColor: {
          "default": "rgb(var(--border-default) / <alpha-value>)",
          "DEFAULT": "rgb(var(--border-default) / <alpha-value>)",
          "strong": "rgb(var(--border-strong) / <alpha-value>)"
        },
      fontFamily: { body: ['var(--font-body)'], heading: ['var(--font-heading)'], sans: ['var(--font-body)'] },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [String(i), (i / 100).toFixed(2)])),
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: { 'accordion-down': 'accordion-down 0.2s ease-out', 'accordion-up': 'accordion-up 0.2s ease-out' },
    },
  },
  plugins: [
    function ({ addBase, addUtilities }: {
      addBase: (base: Record<string, Record<string, string>>) => void;
      addUtilities: (u: Record<string, Record<string, Record<string, string>>>) => void;
    }) {
      addBase({
          ":root": {
            "--primary": "129 222 217",
            "--on-primary": "59 42 68",
            "--accent": "107 69 112",
            "--on-accent": "251 246 234",
            "--highlight-coral": "220 79 124",
            "--highlight-ember": "196 43 52",
            "--highlight-match": "252 138 45",
            "--highlight-cream": "252 233 171",
            "--bg-canvas": "246 248 245",
            "--bg-subtle": "232 241 229",
            "--bg-muted": "242 234 219",
            "--fg-default": "46 34 48",
            "--fg-muted": "107 92 104",
            "--fg-heading": "107 69 112",
            "--border-default": "217 207 190",
            "--border-strong": "107 69 112",
            "--font-body": "\"Convergence\"",
            "--font-heading": "\"Adamina\"",
            "--radius": "0.25rem"
          },
          "body": {
            "fontFamily": "var(--font-body)",
            "background": "rgb(var(--bg-canvas))",
            "color": "rgb(var(--fg-default))"
          },
          "p, li, blockquote": {
            "textWrap": "pretty"
          },
          "h1": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          },
          "h2": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          },
          "h3": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          },
          "h4": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          },
          "h5": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          },
          "h6": {
            "fontFamily": "var(--font-heading)",
            "textWrap": "balance"
          }
        });
      addUtilities({
          "@media (max-width: 767px)": {
            "body": {
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "h1": {
              "fontSize": "36px",
              "fontWeight": "700"
            },
            "h2": {
              "fontSize": "28px",
              "fontWeight": "700"
            },
            "h3": {
              "fontSize": "24px",
              "fontWeight": "600"
            },
            "h4": {
              "fontSize": "20px",
              "fontWeight": "600"
            },
            "h5": {
              "fontSize": "18px",
              "fontWeight": "500"
            },
            "h6": {
              "fontSize": "16px",
              "fontWeight": "500"
            },
            ".palette-title": {
              "fontSize": "44px",
              "fontWeight": "700"
            },
            ".palette-large-text": {
              "fontSize": "18px",
              "fontWeight": "400"
            },
            ".palette-small-text": {
              "fontSize": "14px",
              "fontWeight": "400"
            }
          },
          "@media (min-width: 768px) and (max-width: 1023px)": {
            "body": {
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "h1": {
              "fontSize": "44px",
              "fontWeight": "700"
            },
            "h2": {
              "fontSize": "34px",
              "fontWeight": "700"
            },
            "h3": {
              "fontSize": "28px",
              "fontWeight": "600"
            },
            "h4": {
              "fontSize": "22px",
              "fontWeight": "600"
            },
            "h5": {
              "fontSize": "19px",
              "fontWeight": "500"
            },
            "h6": {
              "fontSize": "17px",
              "fontWeight": "500"
            },
            ".palette-title": {
              "fontSize": "58px",
              "fontWeight": "700"
            },
            ".palette-large-text": {
              "fontSize": "17px",
              "fontWeight": "400"
            },
            ".palette-small-text": {
              "fontSize": "14px",
              "fontWeight": "400"
            }
          },
          "@media (min-width: 1024px)": {
            "body": {
              "fontSize": "16px",
              "fontWeight": "400",
              "lineHeight": "1.6"
            },
            "h1": {
              "fontSize": "56px",
              "fontWeight": "700"
            },
            "h2": {
              "fontSize": "40px",
              "fontWeight": "700"
            },
            "h3": {
              "fontSize": "32px",
              "fontWeight": "600"
            },
            "h4": {
              "fontSize": "24px",
              "fontWeight": "600"
            },
            "h5": {
              "fontSize": "20px",
              "fontWeight": "500"
            },
            "h6": {
              "fontSize": "18px",
              "fontWeight": "500"
            },
            ".palette-title": {
              "fontSize": "72px",
              "fontWeight": "700"
            },
            ".palette-large-text": {
              "fontSize": "18px",
              "fontWeight": "400"
            },
            ".palette-small-text": {
              "fontSize": "14px",
              "fontWeight": "400"
            }
          }
        });
    },
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
} satisfies Config;
