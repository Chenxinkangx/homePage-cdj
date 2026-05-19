function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://gitee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
          >
            Gitee
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {currentYear} 陈德健. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Built with React + TypeScript + TailwindCSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
