import { useState } from 'react'
import Init from './pages/Init'
import ThePlane from './components/ThePlane'

export default function App() {
  const [isInitiated, setIsInitiated] = useState(false)

  return (
    <>
      {!isInitiated ? (
        <Init onComplete={() => setIsInitiated(true)} />
      ) : (
        <ThePlane />
      )}
    </>
  )
}
