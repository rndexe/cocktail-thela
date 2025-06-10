import { useEffect, useRef } from 'react'
import { Box3, Vector3, BoxHelper } from 'three'
import { useThree } from '@react-three/fiber'

export function BoundingBoxWithLog({ objectRef, color = 'red' }) {
  const helperRef = useRef()
  const { scene } = useThree()

  useEffect(() => {
    if (!objectRef.current) return

    // --- Log dimensions
    const box = new Box3().setFromObject(objectRef.current)
    const size = new Vector3()
    box.getSize(size)
    console.log(size.y)

    // --- Draw box
    const helper = new BoxHelper(objectRef.current, color)
    scene.add(helper)
    helperRef.current = helper

    return () => {
      scene.remove(helper)
    }
  }, [objectRef, color, scene])

  return null
}
