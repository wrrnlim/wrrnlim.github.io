
This portfolio is the site you are viewing right now! It showcases some of the projects I have worked on and the technologies and skills in my toolbox. I created this site to have a central space for sharing content, with a focus on clean UI/UX design.

## Tech Stack

- **Framework:** React (with functional components and hooks)
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Deployment:** GitHub Pages
- **Styling:** TailwindCSS
- **Version Control:** Git + GitHub
- **Development:** Vite, VSCode

## Features

### Modular component structure

Components are modular and can be reused when needed, keeping the codebase easy to maintain.

### Dynamic rendering from JSON data

Projects/Blog content is defined in a JSON file containing important rendering information, for example this page is stored in the JSON file as:

```json
{
    id: 'portfolio-site',
    title: 'Portfolio Site',
    skills: ['React', 'GitHub Pages', 'Tailwind', 'Vite'],
    description: 'This React project is the site you are viewing right now!',
    contentPath: '/content/projects/portfolio.md',
    image: '/images/portfolio_screenshot.png',
    liveUrl: 'https://wrrnlim.github.io',
    repoUrl: 'https://github.com/wrrnlim/wrrnlim.github.io'
  }
```

This allows any new project/blog pages to be easily added.

### Markdown Rendering

The projects and blogs content is written and stored as markdown files and rendered using [`react-markdown`](https://github.com/remarkjs/react-markdown) with custom styling. This enables content to be updated easily, while keeping the look and feel of each page consistent.
