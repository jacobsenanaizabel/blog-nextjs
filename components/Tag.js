import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-rose-900 hover:text-rose-400 dark:hover:text-rose-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
