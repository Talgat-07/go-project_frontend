import { createRoot } from 'react-dom/client'
import AppRouter from '@/app/Routing/Router/Router'
import '@/app/styles/global.scss'
import '@/app/styles/nullstyles.scss'
import '@/app/styles/variables.scss'

createRoot(document.getElementById('root')).render(<AppRouter />)
