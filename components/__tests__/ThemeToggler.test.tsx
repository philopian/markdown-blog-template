import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import nextThemes from 'next-themes'
import React from 'react'

import ThemeToggler from '@/components/ThemeToggler'

function setTheme(theme = 'dark') {
  return {
    systemTheme: '',
    theme,
    setTheme: () => jest.fn(),
  }
}
describe('ThemeToggler - mock next-themes', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('shows the sun icon', async () => {
    jest.spyOn(nextThemes, 'useTheme').mockImplementation(() => setTheme('dark'))
    render(<ThemeToggler />)
    expect(screen.getByTestId('sun-icon')).toBeTruthy()
  })

  it('shows the moon icon', async () => {
    jest.spyOn(nextThemes, 'useTheme').mockImplementation(() => setTheme('light'))
    render(<ThemeToggler />)
    expect(screen.getByTestId('moon-icon')).toBeTruthy()
  })

  it('toggle theme', async () => {
    jest.spyOn(nextThemes, 'useTheme').mockImplementation(() => setTheme('light'))
    render(<ThemeToggler />)

    // initial icon is `sun`
    expect(screen.getByTestId('moon-icon')).toBeTruthy()
    const iconBtn = screen.getByRole('button')
    expect(iconBtn).toBeTruthy()
    fireEvent.click(iconBtn)
    // after clicked expect icon to be `moon`
    const moonIcon = await waitFor(() => screen.getByTestId('moon-icon'))
    expect(moonIcon).toBeTruthy()
  })
})
