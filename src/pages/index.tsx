import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { useEffect, useState } from 'react'

type ShareLinkViewProps = {
  src: string
  artboard: string
  animation: string
  isStateMachine: boolean
  height: number
  width: number
}

function useDisplaySize(
  initialWidth: number,
  initialHeight: number,
  windowWidth: number,
  windowHeight: number,
  isStateMachine: boolean
) {
  const [displayDimensions, setDisplayDimensions] = useState({
    width: initialWidth,
    height: initialHeight,
  })

  const maxAnimationWidth = isStateMachine ? 994 : 1280

  useEffect(() => {
    const { width: animationWidth, height: animationHeight } = displayDimensions

    const aspectRatio = animationWidth / animationHeight

    let desiredHeight = windowHeight - 180
    let desiredWidth = desiredHeight * aspectRatio

    const maxWidth = Math.min(windowWidth - 80, maxAnimationWidth)

    if (desiredWidth > maxWidth) {
      desiredWidth = maxWidth
      desiredHeight = desiredWidth / aspectRatio
    }

    setDisplayDimensions({
      width: desiredWidth,
      height: desiredHeight,
    })
  }, [windowWidth, windowHeight, displayDimensions, maxAnimationWidth])

  return displayDimensions
}

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: '/FeVwYh6AP0iDHMKd3jZPdg.riv',
    artboard: 'create-feature-01',
    autoplay: true,
    stateMachines: 'State Machine 1',
  })

  // useDisplaySize()

  return (
    <div style={{ height: '90vh' }}>
      <RiveComponent />
    </div>
  )
}
