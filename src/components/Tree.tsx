import { useSpring, animated } from "@react-spring/web";

interface TreeProps {
  height: number;
  breadth: number;
}

export default function Tree({ height, breadth }: TreeProps) {
  const treeStyle = useSpring({
    height: `${10 + height * 0.9}%`,
    width: `${20 + breadth * 0.8}%`,
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="relative w-full h-64 bg-sky-100 rounded-lg overflow-hidden">
      <animated.div
        style={treeStyle}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-green-800 to-green-400"
      >
        <div className="absolute bottom-0 left-1/2 w-4 h-1/3 bg-brown-600 transform -translate-x-1/2" />
        <div className="absolute bottom-1/3 left-0 w-full h-2/3">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M50 0 L0 100 H100 Z"
              fill="currentColor"
              className="text-green-600"
            />
          </svg>
        </div>
      </animated.div>
    </div>
  );
}
