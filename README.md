# Building Accessible Sites with Gatsby

Learn the necessary techniques and tools for building inclusive web applications with Gatsby and React.js from Gatsby's Head of Learning Marcy Sutton.

Presented at:
- [Gatsby Days LA](https://www.gatsbyjs.com/gdla-a11y-workshop/)
- [Smashing Conf NYC](https://smashingconf.com/ny-2019/)

Some key takeaways:

- Understand how to incorporate accessibility into your web development workflow.
- Debug your sites and applications for accessibility using the latest tools.
- Apply accessibility to React web applications with Gatsby, while learning how accessibility applies to other stacks.
- Learn the benefits of manual and automated testing to grow web accessibility superpowers!
- Integrate focus management into your web applications, gracefully handling keyboard and screen reader interactions.
- Practice announcing view changes with your code and keeping screen reader users up to date.
- Achieve wins with semantic markup, unobtrusive animation, and progressive enhancement.

App URL: https://marcysutton.github.io/gatsby-a11y-workshop

Workshop slides: https://marcysutton.github.io/gatsby-a11y-workshop/slides/

---

This project was started with [gatsby-starter-mdx-basic](https://github.com/christopherbiscardi/gatsby-starter-mdx-basic) and [@mdx-deck/theme](https://github.com/jxnblk/mdx-deck/tree/master/packages/gatsby-theme).

_Note: This repo requires [Node 12 and npm](https://nodejs.org) to be installed._

1. Install Gatsby CLI:

```sh
npm install -g gatsby-cli
```

1. Create a new Gatsby site and slide deck using this starter

```sh
gatsby new gatsby-a11y-workshop https://github.com/marcysutton/gatsby-a11y-workshop
```

3. Go into the directory and start the development server

```sh
cd gatsby-a11y-workshop
gatsby develop
```

    View in a browser: http://localhost:8000

4. Edit files:

    - Site pages: [`src/pages/*`](https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/pages)
    - Site components: [`src/components/*`](https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/components)
    - Templates: [`src/templates/*`](https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/templates)
    - Slide content: [`src/slides/index.mdx`](https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/slides/index.mdx)

5. To look at the answers from the exercises, check out the [`/examples`](https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/examples) directory in the `master` branch

You can also check out the `solutions` branch to see everything in action: https://github.com/marcysutton/gatsby-a11y-workshop/tree/solutions

### Prerequisites
1. Have a text editor installed, i.e. VSCode
2. Have Node.js 12+ and npm installed
