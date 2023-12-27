import { VRM, VRMHumanBoneName } from '@pixiv/three-vrm'
import { Object3D } from 'three'

export const humanoid = (vrm: VRM) => {
  const getBoneNode = (boneName: VRMHumanBoneName) => {
    return vrm.humanoid.getNormalizedBoneNode(boneName)!
  }

  const boneNodes = Object.values(VRMHumanBoneName).reduce(
    (acc, value) => {
      acc[value] = getBoneNode(value)
      return acc
    },
    {} as Record<VRMHumanBoneName, Object3D>,
  )

  return { boneNodes }
}
