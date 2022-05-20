import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import cx from 'classnames'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const wrapper = 'h-15 shadow-sm dark:border-gray-700'
const container = 'px-4 sm:px-6 py-4 flex justify-between items-center'
const sun = 'w-10 h-10 text-yellow-500'
const moon = 'w-10 h-10 text-gray-900'

type Props = {
  className?: string
}
export default function ThemeToggler({ className }: Props) {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleSetLightTheme = () => setTheme('light')
  const handleSetDarkTheme = () => setTheme('dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <div onClick={handleSetLightTheme} role="button" data-testid="sun-icon">
          <SunIcon className={sun} />
        </div>
      )
    }
    return (
      <div onClick={handleSetDarkTheme} role="button" data-testid="moon-icon">
        <MoonIcon className={moon} />
      </div>
    )
  }

  return (
    <div className={cx(wrapper, className)}>
      <div className={container}>{renderThemeChanger()}</div>
    </div>
  )
}
