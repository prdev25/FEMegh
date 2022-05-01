import * as React from 'react'

function MoveTo(props){
    return <h1>Hello, {props.node}</h1>
}

function LineTo(props){
    return <h1>Hello, {props.sNode}, {props.eNode}</h1>
}

function Draw(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();

    return <canvas id="myCanvas" width="300" height="150">
            Your browser does not support the HTML5 canvas tag.</canvas>
}

function canvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {

  }, [context]);

  return (
    <div
      style={{
        textAlign: 'center',
      }}>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          border: '2px solid #000',
          marginTop: 10,
        }}
      ></canvas>
    </div>
  );
}

export default canvas