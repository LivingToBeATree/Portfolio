import FloatingPlatform from './meshs/FloatingPlatform'

export default function TheGround() {
  return (
    <group position={[0, 0, 0]}>
      <FloatingPlatform />
    </group>
  )
}
