tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        hud: ['Share Tech Mono', 'monospace'],
        code: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#00FFFF',
        secondary: '#7B61FF',
        cta: '#FF00FF',
        background: '#050510',
        text: '#E0E0FF',
        border: '#333344',
        deep: '#000000',
        dark: '#121212',
        midnight: '#0A0E27',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },
      },
    },
  },
}
