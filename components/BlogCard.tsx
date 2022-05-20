import Image from 'next/image'
import Link from 'next/link'

import { Post } from '@/types/index'

export default function BlogCard({ image, slug, title, summary, tags }: Post) {
  return (
    <div className="flex flex-col p-3 space-y-5 bg-white shadow-lg rounded-xl dark:bg-gray-800">
      <div className="overflow-hidden rounded-xl">
        <Link href={`/posts/${slug}`}>
          <a className="cursor-pointer" data-testid="image-link">
            <Image src={image} width={800} height={533} layout="responsive" alt="cover image" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col space-y-3">
        <Link href={`/posts/${slug}`}>
          <a className="cursor-pointer" data-testid="title-link">
            <h5 className="text-lg font-black text-gray-800 dark:text-gray-100">{title}</h5>
          </a>
        </Link>
        {summary && (
          <p className="text-sm text-gray-500" data-testid="summary">
            {summary}
          </p>
        )}
        <div className="flex space-x-2 text-xs text-blue-500 dark:text-gray-100">
          {tags.map((tag: string) => (
            <span
              className="px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-600"
              key={tag}
              role="tags"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
