import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TheGround from './TheGround'

export default function ThePlane() {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <Canvas camera={{ position: [0, 6, 9], fov: 45 }}>

                {/* ever expanding white void */}
                <color attach="background" args={['#ffffff']} />

                {/* subtle fog fading into pure white in the distance */}
                <fog attach="fog" args={['#ffffff', 10, 30]} />

                {/* Free view controls */}
                <OrbitControls makeDefault enableDamping dampingFactor={0.05} />

                {/* Global Lights */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 15, 10]} intensity={1.5} />
                <directionalLight position={[-10, 10, -5]} intensity={0.5} />

                {/* Imported TheGround */}
                <TheGround />

            </Canvas>
        </div>
    )
}
