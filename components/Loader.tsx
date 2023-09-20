import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { active } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: active ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
    </Html>
  );
};

export default CanvasLoader;
