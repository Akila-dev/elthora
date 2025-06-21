uniform samplerCube uEnvMap;
varying vec3 vNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 reflectDir = reflect(-viewDir, normalize(vNormal));
  vec3 envColor = textureCube(uEnvMap, reflectDir).rgb;

  gl_FragColor = vec4(envColor, 0.8);
}