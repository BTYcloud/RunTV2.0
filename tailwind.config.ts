import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class', // 保留類基暗色模式
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-landscape': {
          raw: '(orientation: landscape) and (max-height: 700px)',
        },
      },
      fontFamily: {
        primary: ['Poppins', 'Inter', ...defaultTheme.fontFamily.sans], // 替換為 Poppins 作為主字體
      },
      colors: {
        primary: {
          50: '#eef7ff', // 淺藍背景
          100: '#d1e6ff',
          200: '#a3ceff',
          300: '#75b6ff',
          400: '#479eff',
          500: '#1976d2', // 主藍色，取代綠色
          600: '#155fa9',
          700: '#114880',
          800: '#0d3557',
          900: '#09243e',
        },
        secondary: {
          500: '#f59e0b', // 橙色作為點綴
          600: '#c77e09',
        },
        accent: {
          500: '#6b7280', // 灰色作為輔助
        },
        dark: '#1a202c', // 深灰暗模式
        light: '#ffffff', // 亮模式背景
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flicker: 'flicker 2s linear infinite', // 減慢閃爍頻率，減少刺眼
        shimmer: 'shimmer 1.3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'slide-in-from-right': 'slideInFromRight 0.3s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right, #1976d2, #f59e0b)', // 新的英雄圖背景
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // 保留表單樣式
    require('@tailwindcss/typography'), // 添加排版插件，優化文本
  ],
} satisfies Config;

export default config;
