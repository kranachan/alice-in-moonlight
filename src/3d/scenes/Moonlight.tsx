import { Canvas, SceneProps } from '@react-three/fiber'
import { FC, Suspense } from 'react'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing'
import { Center, Float, Loader, OrbitControls } from '@react-three/drei'
import { Alice } from '../models/Alice'

export const Moonlight: FC<SceneProps> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
        }}
        camera={{
          fov: 20,
          near: 1,
          position: [0, 0, 4],
        }}
        flat={true}
      >
        <Center>
          <Float
            scale={1.2}
            speed={1.5}
            position={[0, 0, 0]}
            rotation={[0, 0.6, 0]}
          >
            <Alice />
          </Float>
        </Center>
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={6}
          />
          <DepthOfField
            target={[0, 0, 10]}
            focalLength={0.25}
            bokehScale={15}
            height={800}
          />
        </EffectComposer>
        <ambientLight intensity={0.475} />
        <OrbitControls enablePan enableDamping enableZoom />
      </Canvas>
    </Suspense>
  )
}
