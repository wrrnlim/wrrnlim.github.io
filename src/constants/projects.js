const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    skills: ['React', 'GitHub Pages', 'Tailwind', 'Vite'],
    description: 'This React project is the site you are viewing right now!',
    contentPath: '/content/projects/portfolio.md',
    image: '/images/portfolio_screenshot.png',
    liveUrl: 'https://wrrnlim.github.io',
    repoUrl: 'https://github.com/wrrnlim/wrrnlim.github.io'
  },
  {
    id: 'finflow',
    title: 'FinFlow',
    skills: ['React', 'Tailwind', 'Firebase', 'Vite'],
    description: 'Finance management app that helps you track your income and expenses, with a monthly overview of your finances.',
    contentPath: '/content/finflow.md',
    image: '/images/finflow_screenshot.png',
  },
  {
    id: 'coming-soon',
    title: 'More Coming Soon',
    skills: [],
    description: 'More projects are in the works, but are not yet ready to be displayed. Stay tuned!',
    contentPath: '/content/coming-soon.md',
    image: '/images/construction.png',
  }
]

export default projects
