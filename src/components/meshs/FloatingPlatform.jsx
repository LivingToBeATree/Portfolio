import { Edges } from '@react-three/drei'

export default function FloatingPlatform({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* The white rectangular platform */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[9, 0.2, 8]} />
                <meshStandardMaterial
                    color="#ffffff"
                    roughness={0.4}
                    metalness={0.1}
                />
                {/* Its outline */}
                <Edges
                    color="#000000"
                    threshold={15}
                />
            </mesh>
        </group>
    )
}