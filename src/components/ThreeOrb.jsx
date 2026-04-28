import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeOrb() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 180, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: '#67e8f9',
      roughness: 0.25,
      transmission: 0.6,
      thickness: 0.4,
      clearcoat: 1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight('#a78bfa', 45, 30);
    light.position.set(2, 3, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight('#ffffff', 0.8);
    scene.add(ambient);

    let frameId;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.009;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[320px] w-full" aria-label="interactive 3D object" />;
}
