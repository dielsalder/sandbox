import React, { forwardRef, useMemo } from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;


void main()	{
	vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	// newUV.x += 0.02*sin(newUV.y*20. + time);
	gl_FragColor = texture2D(texture1,newUV);
}
`;

let _uTime;

// Effect implementation
class MyCustomEffectImpl extends Effect {
  constructor({ time = 0 } = {}) {
    super("MyCustomEffect", fragmentShader, {
      uniforms: new Map([["time", new Uniform(time)]]),
    });

    _uTime = time;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("param").value = _uParam;
  }
}

// Effect component
export const MyCustomEffect = forwardRef(({ time }, ref) => {
  const effect = useMemo(() => new MyCustomEffectImpl(time), [time]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
