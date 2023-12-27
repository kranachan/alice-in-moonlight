import { useFrame } from '@react-three/fiber'
import { VRMRender } from '../components/VRMRender'
import { useVRMloader } from '../hooks/use-vrm-loader'
import { VRMExpressionPresetName } from '@pixiv/three-vrm'
import { humanoid } from '../utils/humanoid'

export const Alice = () => {
  const vrm = useVRMloader('/models/alice.vrm')

  const { boneNodes } = humanoid(vrm)

  const {
    leftUpperArm,
    rightUpperArm,
    leftLowerArm,
    rightLowerArm,
    leftHand,
    rightHand,
    head,
    chest,
    hips,
    spine,
    leftLowerLeg,
    rightLowerLeg,
  } = boneNodes

  leftUpperArm.rotation.set(-1, 1, -1)
  rightUpperArm.rotation.set(-1, -1, 1)
  leftLowerArm.rotation.set(0, 2.5, -1.75)
  rightLowerArm.rotation.set(0, -2.5, 1.75)
  leftHand.rotation.set(2, 0, 0)
  rightHand.rotation.set(2, 0, 0)
  head.rotation.set(0.5, 0, 0)
  chest.rotation.set(1, 0, 0)
  hips.rotation.set(-1.5, 0, 0)
  spine.rotation.set(0.25, 0, 0)
  leftLowerLeg.rotation.set(1, 0, 0)
  rightLowerLeg.rotation.set(0.5, 0, 0)

  // Close eyes
  vrm.expressionManager?.setValue(VRMExpressionPresetName.Blink, 1)
  vrm.expressionManager?.update()

  useFrame((_, delta) => {
    vrm.update(delta)
  })

  return <VRMRender vrm={vrm} />
}
