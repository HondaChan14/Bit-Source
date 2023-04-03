/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './Components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            // => @media (0-639px) will run bg-primary (default)

            tablet: '640px',
            // => sm @media (min-width: 640px)  640 -1023px this will run

            laptop: '1024px',
            // => lg @media (min-width: 1024px) 1024 -1079px this will run

            desktop: '1280px',
            // => xl @media (min-width: 1280px) 1280 -> beyond this will run
        },
        extend: {
            fontFamily: {
                bayon: ['Bayon', 'sans-serif'],
            },
            colors: {
                primary: '#5d51b5',
                secondary: '#c6913b',
                accent: '#e8c1ff',
                neutral: '#1C161D',
                info: '#29BDDB',
                success: '#7BEAA4',
                warning: '#D47E0C',
                error: '#EB5275',
                logo: '#695E93',
            },
            backgroundColor: {
                'label-goodFirstIssue': '#1f1e41',
                'label-documentation': '#0b2337',
                'label-bug': '#321820',
                'label-duplicate': '#30343a',
                'label-enhancement': '#28393e',
                'label-helpWanted': '#0b2628',
                'label-invalid': '#343726',
                'label-question': '#32233c',
                'label-wontfix': '#393c41',
                default: 'white',
            },
            borderColor: {
                'label-goodFirstIssue': '#bfb4f5',
                'label-documentation': '#29a7f6',
                'label-bug': '#e88f8e',
                'label-duplicate': '#bbc6bb',
                'label-enhancement': '#8ae0d9',
                'label-helpWanted': '#03e0b7',
                'label-invalid': '#d4e05f',
                'label-question': '#d97ee3',
                'label-wontfix': '#fcf5ea',
                default: 'black',
            },
            textColor: {
                'label-goodFirstIssue-text': '#bfb4f5',
                'label-documentation-text': '#29a7f6',
                'label-bug-text': '#e88f8e',
                'label-duplicate-text': '#bbc6bb',
                'label-enhancement-text': '#8ae0d9',
                'label-helpWanted-text': '#03e0b7',
                'label-invalid-text': '#d4e05f',
                'label-question-text': '#d97ee3',
                'label-wontfix-text': '#fcf5ea',
                default: 'black',
            },
        },
    },
    plugins: [],
};
