# Fiston Turner Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Contentful CMS. This portfolio showcases projects, blog posts, and includes features like dark mode and a newsletter subscription.

## Features

- Responsive design with mobile-friendly navigation
- Dark mode support
- Dynamic content management using Contentful CMS
- Blog section with individual post pages
- Projects section with individual project pages
- Newsletter subscription functionality
- SEO optimization

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Contentful account

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/fiston-user/fiston-turner.git
   cd fiston-turner
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Contentful:
   - Create a new space in Contentful or use an existing one
   - In your Contentful space, create content models for `Project` and `BlogPost`
   - Add sample content for projects and blog posts

4. Set up environment variables:
   - Rename `.env.local.example` to `.env.local`
   - Update the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` with your Contentful credentials

## Running the Development Server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- Update the content in `src/app/page.tsx` and other pages to personalize your portfolio
- Modify the `Header` and `Footer` components in `src/components/` to change the site navigation and footer content
- Add new pages or components as needed
- Customize the styling by modifying the Tailwind classes or adding new styles in `src/app/globals.css`

## Deployment

This site can be easily deployed to platforms like Vercel or Netlify. Follow their respective documentation for deploying Next.js applications.

Remember to set up the environment variables (CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN) in your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Fiston Turner - [fiston.turner@outlook.com](mailto:fiston.turner@outlook.com)

Project Link: [https://github.com/fiston-user/fiston-turner](https://github.com/fiston-user/fiston-turner)
