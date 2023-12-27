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
  leftHand.rotateX(2)
  rightHand.rotateX(2)
  head.rotateX(0.5)
  chest.rotateX(1)
  hips.rotateX(-1.5)
  spine.rotateX(0.25)
  leftLowerLeg.rotateX(1)
  rightLowerLeg.rotateX(0.5)

  // Close eyes
  vrm.expressionManager?.setValue(VRMExpressionPresetName.Blink, 1)

  useFrame(({ clock }, delta) => {
    vrm.expressionManager?.update()
    vrm.update(delta)
  })

  return <VRMRender vrm={vrm} />
}
