/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 balonGlass.gltf
Author: TahirNilin (https://sketchfab.com/TahirNilin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ball-33928b27e24b42dda77b4f6eb83172c0
Title: Ball
*/

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function ModelBalonGlass(props) {
  const { nodes, materials } = useGLTF('/balonGlass.gltf')

  const modelRef = useRef()

  // Rota el modelo sobre su propio eje
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0051
    }
  })

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.wire_214229166} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/balonGlass.gltf')
