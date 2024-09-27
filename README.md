# Portfolio Site with Next.js, shadcn/ui, and Contentful

This is a minimalist portfolio site built with Next.js, styled using shadcn/ui components, and powered by Contentful CMS.

## Features

- Responsive design with mobile-friendly navigation
- Projects page fetching data from Contentful
- About page with customizable content
- Easily extendable and customizable

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Contentful account

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd portfolio-site
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up Contentful:
   - Log in to your Contentful account
   - Create a new space or use an existing one
   - In your space, create a new content type called "Project" with the following fields:
     - Title (Short text)
     - Description (Long text)
     - Slug (Short text)
   - Add some sample projects to your space

4. Set up environment variables:
   - Rename `.env.local.example` to `.env.local`
   - Update the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` with your Contentful space ID and access token

## Running the site

To run the development server:

```
npm run dev
```
or
```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- Update the content in `src/app/page.tsx` and `src/app/about/page.tsx` to personalize your portfolio
- Modify the `Header` and `Footer` components in `src/components/` to change the site navigation and footer content
- Add new pages or components as needed
- Customize the styling by modifying the Tailwind classes or adding new styles in `src/app/globals.css`

## Deployment

This site can be easily deployed to platforms like Vercel or Netlify. Follow their respective documentation for deploying Next.js applications.

Remember to set up the environment variables (CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN) in your deployment platform.
