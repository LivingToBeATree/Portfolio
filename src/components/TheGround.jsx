import FloatingPlatform from './meshs/FloatingPlatform'

export default function TheGround() {
  return (
    <group position={[0, 0, 0]}>
      {/* The Floating Islands */}
      <FloatingPlatform />
    </group>
  )
}
