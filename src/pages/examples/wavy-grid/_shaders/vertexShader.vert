void main(){
  vec4 modelPosition=modelMatrix*vec4(position,1.);
  modelPosition.y+=sin(modelPosition.x*4.)*.2;
  
  highp vec4 viewPosition=viewMatrix*modelPosition;
  highp vec4 projectedPosition=projectionMatrix*viewPosition;
  
  gl_Position=projectedPosition;
}
