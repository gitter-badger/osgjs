#pragma include "colorSpace.glsl"

vec3 textureCubeRGBE(const in samplerCube texture, const in vec3 uv) {
    vec4 rgbe = textureCube(texture, uv );
    return RGBEToRGB( rgbe );
}


vec3 scaleDirection(const in float scale, const in vec3 dirIn)
{
    vec3 dir = dirIn;
    float M = max(max(abs(dir.x), abs(dir.y)), abs(dir.z));
    if (abs(dir.x) != M) dir.x *= scale;
    if (abs(dir.y) != M) dir.y *= scale;
    if (abs(dir.z) != M) dir.z *= scale;
    return dir;
}

vec3 textureCubemap(const in samplerCube texture, const in vec3 dir, const in float lod )
{
    vec4 rgba = textureCubeLodEXT( texture, dir, lod );
#ifdef FLOAT
    return rgba.rgb;
#endif
#ifdef RGBE
    return RGBEToRGB( rgba );
#endif
#ifdef RGBM
    return RGBMToRGB( rgba );
#endif
#ifdef LUV
    return LUVToRGB( rgba );
#endif
}


vec3 textureCubeLodEXTFixed(const in samplerCube texture, const in vec3 direction, const in float lodInput )
{

    vec3 dir = direction;
    float lod = min( uEnvironmentLodRange[0], lodInput );

#if 1 //def FLOAT_CUBEMAP_SEAMLESS

    // http://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/
    float scale = 1.0 - exp2(lod) / uEnvironmentSize[0];
    float M = max(max(abs(dir.x), abs(dir.y)), abs(dir.z));

    if (abs(dir.x) != M) dir.x *= scale;
    if (abs(dir.y) != M) dir.y *= scale;
    if (abs(dir.z) != M) dir.z *= scale;

    return textureCubemap( texture, dir, lod ).rgb;

#else

    return textureCubemap( texture, dir, lod );

#endif
}
