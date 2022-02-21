import React, { Suspense, useRef, useState, useEffect } from "react"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { proxy, useSnapshot } from "valtio"
import { HexColorPicker } from "react-colorful"



const star = proxy({
    current: null,
    items: {
        cooling: "#ffffff",
        cooling_screen: "#000000",
        details: "#000000",
        inside: "#000000",
        collar: "#ffffff",
        tongue_linning: "#000000",
        linning: "#000000",
        heel_bone: "#000000",
        out_collar: "#000000",
        heel: "#000000",
        insole: "#000000",
        main: "#000000",
        tongue: "#000000",
        sole: "#000000",
        toebox: "#000000",
        sole_outsole: "#000000",
        front_toebox: "#ffffff",
        laces: "#ffffff",
        eyelet: "#ffffff",
        nzxt_logo: "#ffffff",
        nzxt_holder: "#ffffff",
        tubes_connector: "#ffffff",
        heel_collar: "#ffffff"
    },
})





function Model({ ...props }) {
    const ref = useRef()
    const snap = useSnapshot(star)
    const { nodes, materials } = useGLTF('/star.glb')


    useFrame((star) => {
        const t = star.clock.getElapsedTime()
        ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = Math.cos(t / 4) / 8
        ref.current.rotation.y = Math.sin(t / 4) / 8
        ref.current.position.y = (-4 + Math.sin(t / 1.5)) / 10
    })

    const [hovered, sethovered] = useState(null)
    useEffect(() => {
        const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
    })


    return (
        <group ref={ref} {...props} dispose={null} scale={0.05}
            onPointerOver={(e) => (e.stopPropagation(), sethovered(e.object.material.name))}
            onPointerOut={(e) => { e.intersections.length === 0 && sethovered(null) }}
            onPointerDown={(e) => (e.stopPropagation(), star.current = e.object.material.name)}
            onPointerMissed={(e) => (star.current = null)}>
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder.geometry}
                material={materials.cooling}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.cooling}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder001.geometry}
                material={materials.cooling_screen}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.cooling_screen}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder002.geometry}
                material={materials.front_bone}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.front_bone}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder003.geometry}
                material={materials.cables}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.cables}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder004.geometry}
                material={materials.main}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.main}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder005.geometry}
                material={materials.details}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.details}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder006.geometry}
                material={materials.sole}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.sole}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder007.geometry}
                material={materials.front_toebox}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.front_toebox}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder008.geometry}
                material={materials.eyelet}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.eyelet}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder009.geometry}
                material={materials.heel}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.heel}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder010.geometry}
                material={materials.sole_AJ_outsole}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.sole_AJ_outsole}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder011.geometry}
                material={materials.tongue}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.tongue}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder012.geometry}
                material={materials.toebox}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.toebox}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder013.geometry}
                material={materials.insole}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.insole}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder014.geometry}
                material={materials.heel_bone}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.heel_bone}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder015.geometry}
                material={materials.inside}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.inside}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder016.geometry}
                material={materials.linning}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.linning}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder017.geometry}
                material={materials.laces}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.laces}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder018.geometry}
                material={materials.collar}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.collar}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder019.geometry}
                material={materials.heel_collar}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.heel_collar}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder020.geometry}
                material={materials.tongue_linning}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.tongue_linning}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder021.geometry}
                material={materials.tubes_connector}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.tubes_connector}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder022.geometry}
                material={materials.out_collar}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.out_collar}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder023.geometry}
                material={materials.sole_midsole}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.sole_midsole}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder024.geometry}
                material={materials.sole_outsole}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.sole_outsole}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder025.geometry}
                material={materials.nzxt_holder}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.nzxt_holder}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder026.geometry}
                material={materials.nzxt_logo}
                rotation={[Math.PI / 2, 0, 0]}
                material-color={snap.items.nzxt_logo}
            />
            <mesh
                geometry={nodes.nzxt_shoe_cc_cooler_Cylinder027.geometry}
                material={materials['rtfkt_logo.011']}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}


function Nzxt() {
    const snap = useSnapshot(star)
    return <div>
        <center style={{ position: "absolute", left: "30vw", color: 'white' }}>
            <h1>CLICK ON SHOE TO CHANGE COLOR</h1>
        </center>

        <div className="picker" style={{ display: snap.current ? "block" : "none" }}>
            <HexColorPicker className="Hex"
                color={snap.items[snap.current]}
                onChange={(color) => (star.items[snap.current] = color)}

            />
            <h1>
                {snap.current}
            </h1>
        </div>
        <Canvas className="canvas" camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.3} position={[5, 20, 20]} />
            <Suspense fallback={null}>
                <Model />
                <Environment files={"hdr.hdr"} />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.7, 0]} opacity={.7} width={10} height={10} blur={1.5} far={0.8} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    </div >;
}

export default Nzxt;