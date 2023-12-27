import { type FC } from 'react'
import { VRM } from '@pixiv/three-vrm'

export interface VRMRenderProps {
  vrm: VRM
}

export const VRMRender: FC<VRMRenderProps> = (props) => {
  const { vrm } = props

  if (!vrm.scene) {
    return null
  }

  return <primitive object={vrm.scene} dispose={null} />
}
