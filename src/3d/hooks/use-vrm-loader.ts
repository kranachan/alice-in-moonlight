import { VRM, VRMLoaderPlugin } from '@pixiv/three-vrm'
import { useLoader } from '@react-three/fiber'
import {
  GLTFLoader,
  GLTFLoaderPlugin,
  type GLTFParser,
} from 'three/examples/jsm/loaders/GLTFLoader.js'

export const useVRMloader = (assetUrl: string): VRM => {
  return useLoader(GLTFLoader, assetUrl, (loader) => {
    loader.register((parser: GLTFParser): GLTFLoaderPlugin => {
      return new VRMLoaderPlugin(parser)
    })
  }).userData.vrm
}
