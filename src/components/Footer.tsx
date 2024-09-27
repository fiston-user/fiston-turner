import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-8 text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/rss" className="hover:text-white transition-colors">
            rss
          </Link>
          <Link href="https://github.com/fiston-user/fiston-turner.git" className="hover:text-white transition-colors">
            github
          </Link>
          <Link href="https://github.com/fiston-user/fiston-turner" className="hover:text-white transition-colors">
            view source
          </Link>
        </div>
        <div className="text-center">
          © 2024 MIT Licensed
        </div>
      </div>
    </footer>
  )
}

export default Footer