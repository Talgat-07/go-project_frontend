import { render, screen } from '@testing-library/react'
import Layout from '@/app/Routing/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders Layout component with Header, Outlet, and Footer', () => {
  render(
    <Router>
      <Layout />
    </Router>,
  )

  // Проверяем, что Header, Outlet и Footer рендерятся
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})
