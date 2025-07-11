import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
      <spotLight 
        position={[2, 5, 6]}
        angle={0.15}
        intensity={100}
        penumbra={0.2}
        color='white'
      />
    
      <spotLight 
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color='#f5906b'
        // color='#4cc9f0'
      />
      
      <spotLight 
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color='#864d08'
      />

      <primitive
        object={new THREE.RectAreaLight('#f68412', 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color='#311802'
      />
      
      <pointLight
        position={[1, 2, -1]}
        intensity={10}
        color='#a83b04'
      />
    </>
  )       
}

export default HeroLights
