export type Props = {
  title: string
  text: string
}

export default function WelcomeHero({ title, text }: Props) {
  return (
    <section className="grid grid-cols-1 gap-5 px-5 mt-32 lg:grid-cols-2">
      <div className="flex flex-col order-2 w-full space-y-7 lg:order-1">
        <h5 className="text-6xl font-black leading-none tracking-tight text-gray-800 dark:text-white">
          {title}
        </h5>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </section>
  )
}
