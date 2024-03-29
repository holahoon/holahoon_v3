# Introduction
Hello 👋, my name David Kim.
This is my portfolio website v3. (I know... v3 😱)
i got into [Svelte](https://svelte.dev/) and just fell in love with it. Decided to use Svelte and rebuild my portfolio.

- [ ] i18n (Eng / Kor)
- [x] resume using MDX
- [ ] integrate Obsidian md

## Tech Stacks

### Frontend
- [Lucide Svelte](https://lucide.dev/guide/packages/lucide-svelte)
- [Tailwind CSS](https://tailwindcss.com/)
- [anime.js](https://animejs.com/)

### Libraries
- [mdsvex](https://mdsvex.com/docs)

### Code Quality
- [ ] [husky](https://github.com/typicode/husky)
- [ ] [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

### Testing
Unit testing guide with [Testing Library](https://testing-library.com/docs/svelte-testing-library/setup/)
- [vitest](https://vitest.dev/)
- [jest-dom](https://github.com/testing-library/jest-dom)

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
