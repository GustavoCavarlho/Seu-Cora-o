var canvas = documents.getElementbyId("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext("webgl");
if (!gl){
    console.error("Não é possível iniciar o WebGl");
}

var time = 0.0;

var vertexsource = `atribut vec2 position;

void main(){
    gl_position =  vec4(positiom, 0.0, 1.0)
}
`;

var fragmenteSource = `
precison highp float;

uniform float widht;
uniform float height;
vec2 resolution = vec2(widht, heigth); 

uniform float time;

#dfeine POINT_CONT 8

vec2 points [POINTS_CONT];
`

