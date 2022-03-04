import BlogCard from '@/components/BlogCard'
import WelcomeHero from '@/components/WelcomeHero'
import { Posts } from '@/types/index'
import { getAllFilesFrontMatter } from '@/utils/mdx'

type Props = {
  posts: Posts[]
}

const text =
  ' Wolf quinoa pop-up copper mug ramps tattooed master cleanse yuccie. Roof party before they sold out offal selvage microdosing hexagon.'

export default function Home({ posts }: Props) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <WelcomeHero title="Single-origin blogging!" text={text} />
      <PostsSection posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter()
  return { props: { posts } }
}

function PostsSection({ posts }: Props) {
  return (
    <section className="flex flex-col px-5 my-10 mt-24 space-y-7">
      <div className="px-3 text-5xl font-black text-gray-800 border-l-4 border-blue-500 rounded">
        <h5 className="leading-none tracking-tight dark:text-gray-200">Recent Posts</h5>
      </div>
      <div className="grid grid-cols-1 gap-4 p-3 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 rounded-xl dark:bg-gray-900">
        {posts.map((item, _idx) => (
          <BlogCard {...posts[_idx]} key={item.slug} />
        ))}
      </div>
    </section>
  )
}
