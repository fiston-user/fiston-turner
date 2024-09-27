import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="prose dark:prose-invert max-w-3xl mx-auto">
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Hello! I'm a passionate web developer with a keen interest in
            creating beautiful and functional websites. With experience in
            various technologies including React, Next.js, and Node.js, I strive
            to build efficient and user-friendly web applications.
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            My journey in web development started several years ago, and since
            then, I've worked on numerous projects, each one helping me grow and
            refine my skills. I'm always excited to take on new challenges and
            learn new technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new coffee shops,
            reading about the latest tech trends, or contributing to open-source
            projects. I'm always open to new opportunities and collaborations,
            so feel free to get in touch!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
