suite('FX Shapes', function(){
  // ======================================================

  test('isosceles triangle', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var triangle0 = new Kinetic.TriangleIsosceles({
        x: 50,
        y: 20,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 100,
        width: 50,
        draggable: true
    });

    var triangle1 = new Kinetic.TriangleIsosceles({
        x: 110,
        y: 115,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        height: 100,
        width: 50,
        draggable: true,
        scale: {x: -1, y: -1}
    });

    var triangle2 = new Kinetic.TriangleIsosceles({
        x: 170,
        y: 20,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        height: 150,
        width: 50,
        draggable: true
    });

    stage.add(layer);
    layer.add(triangle0);
    layer.add(triangle1);
    layer.add(triangle2);
    layer.draw();

    assert.equal(triangle0.getClassName(), 'TriangleIsosceles');
    assert.equal(triangle1.getClassName(), 'TriangleIsosceles');
    assert.equal(triangle2.getClassName(), 'TriangleIsosceles');

    assert.equal(triangle0.getHeight(), triangle1.getHeight());
    assert.equal(triangle0.getWidth(), triangle1.getWidth());

    assert.equal(triangle0.getWidth(), triangle2.getWidth());
    assert.equal(triangle1.getWidth(), triangle2.getWidth());
    assert.equal(triangle0.getHeight() + 50, triangle2.getHeight());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,50,20);beginPath();moveTo(0,0);lineTo(-25,100);lineTo(25,100);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(-1,0,0,-1,110,115);beginPath();moveTo(0,0);lineTo(-25,100);lineTo(25,100);lineTo(0,0);closePath();fillStyle=blue;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,170,20);beginPath();moveTo(0,0);lineTo(-25,150);lineTo(25,150);lineTo(0,0);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();');
  });

  // ======================================================

  test('right-angled triangle', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var triangle0 = new Kinetic.TriangleRightAngled({
        x: 20,
        y: 20,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 50,
        width: 100,
        draggable: true
    });

    var triangle1 = new Kinetic.TriangleRightAngled({
        x: 140,
        y: 70,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        height: 50,
        width: 100,
        draggable: true,
        scale: {x: -1, y: -1}
    });

    var triangle2 = new Kinetic.TriangleRightAngled({
        x: 170,
        y: 20,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        height: 100,
        width: 100,
        draggable: true
    });

    stage.add(layer);
    layer.add(triangle0);
    layer.add(triangle1);
    layer.add(triangle2);
    layer.draw();

    assert.equal(triangle0.getClassName(), 'TriangleRightAngled');
    assert.equal(triangle1.getClassName(), 'TriangleRightAngled');
    assert.equal(triangle2.getClassName(), 'TriangleRightAngled');

    assert.equal(triangle0.getHeight(), triangle1.getHeight());
    assert.equal(triangle0.getWidth(), triangle1.getWidth());

    assert.equal(triangle0.getWidth(), triangle2.getWidth());
    assert.equal(triangle1.getWidth(), triangle2.getWidth());
    assert.equal(triangle0.getHeight() * 2, triangle2.getHeight());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,20,20);beginPath();moveTo(0,0);lineTo(0,50);lineTo(100,50);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(-1,0,0,-1,140,70);beginPath();moveTo(0,0);lineTo(0,50);lineTo(100,50);lineTo(0,0);closePath();fillStyle=blue;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,170,20);beginPath();moveTo(0,0);lineTo(0,100);lineTo(100,100);lineTo(0,0);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();');
  });
  
  // ======================================================

  test('equilateral triangle', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var triangle0 = new Kinetic.TriangleEquilateral({
        x: 100,
        y: 20,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        draggable: true,
        side: 100
    });

    var triangle1 = new Kinetic.TriangleEquilateral({
        x: 250,
        y: 20,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        draggable: true,
        height: 100 * (Math.sqrt(3)/2)
    });

    var triangle2 = new Kinetic.TriangleEquilateral({
        x: 175,
        y: 105,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        draggable: true,
        width: 100,
        scale: {x: -1, y: -1}
    });

    stage.add(layer);
    layer.add(triangle0);
    layer.add(triangle1);
    layer.add(triangle2);
    layer.draw();

    assert.equal(triangle0.getClassName(), 'TriangleEquilateral');
    assert.equal(triangle1.getClassName(), 'TriangleEquilateral');

    assert.equal(triangle0.getHeight(), triangle1.getHeight());
    assert.equal(triangle0.getWidth(), triangle1.getWidth());
    assert.equal(triangle0.getSide(), triangle1.getSide());

    assert.equal(triangle1.getHeight(), triangle2.getHeight());
    assert.equal(triangle1.getWidth(), triangle2.getWidth());
    assert.equal(triangle1.getSide(), triangle2.getSide());


    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,100,20);beginPath();moveTo(0,0);lineTo(-50,86.603);lineTo(50,86.603);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,250,20);beginPath();moveTo(0,0);lineTo(-50,86.603);lineTo(50,86.603);lineTo(0,0);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();save();transform(-1,0,0,-1,175,105);beginPath();moveTo(0,0);lineTo(-50,86.603);lineTo(50,86.603);lineTo(0,0);closePath();fillStyle=blue;fill();lineWidth=4;strokeStyle=red;stroke();restore();');
  });

  // ======================================================

  test('square', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var square1 = new Kinetic.Square({
        x: 10,
        y: 10,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        width: 100,
        draggable: true
    });
    
    stage.add(layer);
    layer.add(square1);
    

    assert.equal(square1.getClassName(), 'Square');
    assert.equal(square1.getWidth(), square1.getHeight());

    square1.height(110);
    assert.equal(square1.getWidth(), 110);

    layer.draw();

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,10);beginPath();rect(0,0,110,110);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();');
  });

  // ======================================================

  test('diamond', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var diamond1 = new Kinetic.Diamond({
        x: 10,
        y: 70,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 60,
        width: 120,
        draggable: true
    });

    var diamond2 = new Kinetic.Diamond({
        x: 180,
        y: 10,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        height: 60,
        width: 120,
        draggable: true,
        rotation: 90
    });
    
    stage.add(layer);
    layer.add(diamond1);
    layer.add(diamond2);

    layer.draw();

    assert.equal(diamond1.getClassName(), 'Diamond');
    assert.equal(diamond2.getClassName(), 'Diamond');

    assert.equal(diamond1.height(), diamond2.height());
    assert.equal(diamond1.width(), diamond2.width());

    assert.equal(diamond2.rotation(), 90);

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,70);beginPath();moveTo(0,0);lineTo(60,-30);lineTo(120,0);lineTo(60,30);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(0,1,-1,0,180,10);beginPath();moveTo(0,0);lineTo(60,-30);lineTo(120,0);lineTo(60,30);lineTo(0,0);closePath();fillStyle=blue;fill();lineWidth=4;strokeStyle=red;stroke();restore();');
  });

  // ======================================================

  test('parallelogram', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var parallelogram1 = new Kinetic.Parallelogram({
        x: 10,
        y: 80,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 60,
        width: 100,
        draggable: true
    });

    var parallelogram2 = new Kinetic.Parallelogram({
        x: 280,
        y: 80,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        dash: [0.1, 10],
        lineCap: 'round',
        height: 60,
        width: 100,
        draggable: true,
        scale: {x: -1}
    });

    var parallelogram3 = new Kinetic.Parallelogram({
        x: 300,
        y: 120,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        height: 100,
        width: 200,
        draggable: true
    });

    
    stage.add(layer);
    layer.add(parallelogram1);
    layer.add(parallelogram2);
    layer.add(parallelogram3);
    layer.draw();

    assert.equal(parallelogram1.getClassName(), 'Parallelogram');
    assert.equal(parallelogram2.getClassName(), 'Parallelogram');

    assert.equal(parallelogram1.height(), parallelogram2.height());
    assert.equal(parallelogram1.width(), parallelogram2.width());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,80);beginPath();moveTo(0,0);lineTo(100,0);lineTo(130,-60);lineTo(30,-60);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(-1,0,0,1,280,80);beginPath();moveTo(0,0);lineTo(100,0);lineTo(130,-60);lineTo(30,-60);lineTo(0,0);closePath();fillStyle=blue;fill();lineCap=round;setLineDash(0.1,10);lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,300,120);beginPath();moveTo(0,0);lineTo(200,0);lineTo(260,-100);lineTo(60,-100);lineTo(0,0);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();');
  });
  
  // ======================================================

  test('trapezoid', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var trapezoid1 = new Kinetic.Trapezoid({
        x: 10,
        y: 80,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 60,
        width: 100,
        draggable: true
    });

    var trapezoid2 = new Kinetic.Trapezoid({
        x: 150,
        y: 20,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        dash: [0.1, 10],
        lineCap: 'round',
        height: 60,
        width: 100,
        draggable: true,
        scale: {y: -1}
    });

    var trapezoid3 = new Kinetic.Trapezoid({
        x: 300,
        y: 120,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        height: 100,
        width: 200,
        draggable: true
    });

    
    stage.add(layer);
    layer.add(trapezoid1);
    layer.add(trapezoid2);
    layer.add(trapezoid3);
    layer.draw();

    assert.equal(trapezoid1.getClassName(), 'Trapezoid');
    assert.equal(trapezoid2.getClassName(), 'Trapezoid');
    assert.equal(trapezoid3.getClassName(), 'Trapezoid');

    assert.equal(trapezoid1.height(), trapezoid2.height());
    assert.equal(trapezoid1.width(), trapezoid2.width());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,80);beginPath();moveTo(0,0);lineTo(100,0);lineTo(75,-60);lineTo(25,-60);lineTo(0,0);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,-1,150,20);beginPath();moveTo(0,0);lineTo(100,0);lineTo(75,-60);lineTo(25,-60);lineTo(0,0);closePath();fillStyle=blue;fill();lineCap=round;setLineDash(0.1,10);lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,300,120);beginPath();moveTo(0,0);lineTo(200,0);lineTo(150,-100);lineTo(50,-100);lineTo(0,0);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();');
  });
  
  // ======================================================

  test('semi-circle', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var semiCircle1 = new Kinetic.SemiCircle({
        x: 70,
        y: 10,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        radius: 50,
        draggable: true 
    });
    var semiCircle2 = new Kinetic.SemiCircle({
        x: 190,
        y: 10,
        fill: 'red',
        stroke: 'yellow',
        strokeWidth: 4,
        height: 50,
        draggable: true 
    });
    
    stage.add(layer);
    layer.add(semiCircle1);
    layer.add(semiCircle2);
    layer.draw();

    assert.equal(semiCircle1.getClassName(), 'SemiCircle');
    assert.equal(semiCircle1.getWidth(), 100);
    assert.equal(semiCircle1.getHeight(), 50);

    assert.equal(semiCircle2.getClassName(), 'SemiCircle');
    assert.equal(semiCircle2.getWidth(), semiCircle1.getWidth());
    assert.equal(semiCircle2.getHeight(), semiCircle1.getHeight());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,70,10);beginPath();arc(0,0,50,0,3.141,false);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,190,10);beginPath();arc(0,0,50,0,3.141,false);closePath();fillStyle=red;fill();lineWidth=4;strokeStyle=yellow;stroke();restore();');
  });
  
  // ======================================================

  test('arrow', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var arrow1 = new Kinetic.Arrow({
        x: 10,
        y: 80,
        fill: 'yellow',
        stroke: 'red',
        strokeWidth: 4,
        height: 60,
        width: 100,
        draggable: true
    });

    var arrow2 = new Kinetic.Arrow({
        x: 280,
        y: 70,
        fill: 'blue',
        stroke: 'red',
        strokeWidth: 4,
        height: 100,
        width: 150,
        draggable: true,
        scale: {x:-1}
    });
    
    stage.add(layer);
    layer.add(arrow1);
    layer.add(arrow2);
    layer.draw();

    assert.equal(arrow1.getClassName(), 'Arrow');
    assert.equal(arrow2.getClassName(), 'Arrow');

    assert.equal(arrow1.getWidth(), 100);
    assert.equal(arrow1.getHeight(), 60);

    assert.equal(arrow2.getWidth(), 150);
    assert.equal(arrow2.getHeight(), 100);

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,80);beginPath();moveTo(0,0);lineTo(60,0);lineTo(60,-15);lineTo(100,15);lineTo(60,45);lineTo(60,30);lineTo(0,30);closePath();fillStyle=yellow;fill();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(-1,0,0,1,280,70);beginPath();moveTo(0,0);lineTo(90,0);lineTo(90,-25);lineTo(150,25);lineTo(90,75);lineTo(90,50);lineTo(0,50);closePath();fillStyle=blue;fill();lineWidth=4;strokeStyle=red;stroke();restore();');
  });

  // ======================================================

  test('split-t', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var split1 = new Kinetic.SplitT({
        x: 10,
        y: 10,
        stroke: 'red',
        strokeWidth: 4,
        height: 50,
        width: 100,
        draggable: true
    });

    var split2 = new Kinetic.SplitT({
        x: 150,
        y: 10,
        stroke: 'yellow',
        strokeWidth: 8,
        height: 100,
        width: 200,
        draggable: true
    });

    var split3 = new Kinetic.SplitT({
        x: 370,
        y: 10,
        stroke: 'blue',
        strokeWidth: 8,
        height: 50,
        width: 100,
        lineCap: 'round',
        dash: [0.001, 10],
        draggable: true
    });

    
    stage.add(layer);
    layer.add(split1);
    layer.add(split2);
    layer.add(split3);
    layer.draw();

    assert.equal(split1.getClassName(), 'SplitT');
    assert.equal(split2.getClassName(), 'SplitT');
    assert.equal(split3.getClassName(), 'SplitT');

    assert.equal(split1.height() * 2, split2.height());
    assert.equal(split1.width() * 2, split2.width());

    assert.equal(split2.strokeWidth(), split3.strokeWidth());
    assert.equal(split2.height() / 2, split3.height());
    assert.equal(split2.width() / 2, split3.width());

    assert.equal(split3.lineCap(), 'round');

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,10,10);beginPath();moveTo(0,0);lineTo(100,0);moveTo(50,0);lineTo(50,50);closePath();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,150,10);beginPath();moveTo(0,0);lineTo(200,0);moveTo(100,0);lineTo(100,100);closePath();lineWidth=8;strokeStyle=yellow;stroke();restore();save();transform(1,0,0,1,370,10);beginPath();moveTo(0,0);lineTo(100,0);moveTo(50,0);lineTo(50,50);closePath();lineCap=round;setLineDash(0.001,10);lineWidth=8;strokeStyle=blue;stroke();restore();');
  });
  
  // ======================================================

  test('cube', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var cube1 = new Kinetic.Cube({
        x: 30,
        y: 80,
        stroke: 'red',
        strokeWidth: 4,
        width: 100,
        draggable: true
    });

    var cube2 = new Kinetic.Cube({
        x: 190,
        y: 100,
        stroke: 'yellow',
        strokeWidth: 4,
        width: 75,
        draggable: true
    });

    var cube3 = new Kinetic.Cube({
        x: 320,
        y: 120,
        stroke: 'blue',
        strokeWidth: 4,
        width: 50,
        draggable: true
    });

    var cube4 = new Kinetic.Cube({
        x: 420,
        y: 140,
        stroke: 'green',
        strokeWidth: 4,
        width: 25,
        draggable: true
    });
    
    stage.add(layer);
    layer.add(cube1);
    layer.add(cube2);
    layer.add(cube3);
    layer.add(cube4);
    layer.draw();

    assert.equal(cube1.getClassName(), 'Cube');
    assert.equal(cube2.getClassName(), 'Cube');
    assert.equal(cube3.getClassName(), 'Cube');
    assert.equal(cube4.getClassName(), 'Cube');

    assert.equal(cube1.getWidth(), cube1.getHeight());
    assert.equal(cube2.getWidth(), cube2.getHeight());
    assert.equal(cube3.getWidth(), cube3.getHeight());
    assert.equal(cube4.getWidth(), cube4.getHeight());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,30,80);beginPath();moveTo(0,0);lineTo(100,0);lineTo(100,100);lineTo(0,100);lineTo(0,0);lineTo(50,-50);lineTo(150,-50);lineTo(150,50);lineTo(100,100);moveTo(100,0);lineTo(150,-50);closePath();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,190,100);beginPath();moveTo(0,0);lineTo(75,0);lineTo(75,75);lineTo(0,75);lineTo(0,0);lineTo(38,-38);lineTo(113,-38);lineTo(113,37);lineTo(75,75);moveTo(75,0);lineTo(113,-38);closePath();lineWidth=4;strokeStyle=yellow;stroke();restore();save();transform(1,0,0,1,320,120);beginPath();moveTo(0,0);lineTo(50,0);lineTo(50,50);lineTo(0,50);lineTo(0,0);lineTo(25,-25);lineTo(75,-25);lineTo(75,25);lineTo(50,50);moveTo(50,0);lineTo(75,-25);closePath();lineWidth=4;strokeStyle=blue;stroke();restore();save();transform(1,0,0,1,420,140);beginPath();moveTo(0,0);lineTo(25,0);lineTo(25,25);lineTo(0,25);lineTo(0,0);lineTo(13,-13);lineTo(38,-13);lineTo(38,12);lineTo(25,25);moveTo(25,0);lineTo(38,-13);closePath();lineWidth=4;strokeStyle=green;stroke();restore();');
  });
  
  // ======================================================

  test('speech bubble', function(){
    var stage = addStage();
    var layer = new Kinetic.Layer();
    var rect1 = new Kinetic.Rect({
        x: 20,
        y: 5,
        stroke: 'black',
        strokeWidth: 1,
        dash: [4,10],
        width: 220,
        height: 150
    });
    var speech1 = new Kinetic.SpeechBubble({
        x: 20,
        y: 80,
        stroke: 'red',
        strokeWidth: 4,
        width: 220,
        height: 150,
        draggable: true
    });

    var speech2 = new Kinetic.SpeechBubble({
        x: 250,
        y: 70,
        stroke: 'green',
        strokeWidth: 4,
        width: 140,
        height: 80,
        draggable: true
    });

    var speech3 = new Kinetic.SpeechBubble({
        x: 400,
        y: 65,
        stroke: 'yellow',
        strokeWidth: 4,
        width: 100,
        height: 50,
        draggable: true
    });

    var speech4 = new Kinetic.SpeechBubble({
        x: 510,
        y: 65,
        stroke: 'blue',
        strokeWidth: 2,
        width: 50,
        height: 25,
        draggable: true
    });

    stage.add(layer);
    layer.add(rect1);
    layer.add(speech1);
    layer.add(speech2);
    layer.add(speech3);
    layer.add(speech4);
    layer.draw();

    assert.equal(speech1.getClassName(), 'SpeechBubble');
    assert.equal(speech2.getClassName(), 'SpeechBubble');
    assert.equal(speech3.getClassName(), 'SpeechBubble');
    assert.equal(speech4.getClassName(), 'SpeechBubble');

    assert.equal(rect1.getWidth(), speech1.getWidth());
    assert.equal(rect1.getHeight(), speech1.getHeight());

    assert.equal(speech3.getWidth() /2, speech4.getWidth());
    assert.equal(speech3.getHeight() /2, speech4.getHeight());

    var trace = layer.getContext().getTrace();
    assert.equal(trace, 'clearRect(0,0,578,200);clearRect(0,0,578,200);save();transform(1,0,0,1,20,5);beginPath();rect(0,0,220,150);closePath();setLineDash(4,10);lineWidth=1;strokeStyle=black;stroke();restore();save();transform(1,0,0,1,20,80);beginPath();moveTo(0,0);quadraticCurveTo(0,-75,110,-75);quadraticCurveTo(220,-75,220,0);quadraticCurveTo(220,56.25,55,46.875);lineTo(22,75);lineTo(33,46.875);quadraticCurveTo(0,46.875,0,0);closePath();lineWidth=4;strokeStyle=red;stroke();restore();save();transform(1,0,0,1,250,70);beginPath();moveTo(0,0);quadraticCurveTo(0,-40,70,-40);quadraticCurveTo(140,-40,140,0);quadraticCurveTo(140,30,35,25);lineTo(14,40);lineTo(21,25);quadraticCurveTo(0,25,0,0);closePath();lineWidth=4;strokeStyle=green;stroke();restore();save();transform(1,0,0,1,400,65);beginPath();moveTo(0,0);quadraticCurveTo(0,-25,50,-25);quadraticCurveTo(100,-25,100,0);quadraticCurveTo(100,18.75,25,15.625);lineTo(10,25);lineTo(15,15.625);quadraticCurveTo(0,15.625,0,0);closePath();lineWidth=4;strokeStyle=yellow;stroke();restore();save();transform(1,0,0,1,510,65);beginPath();moveTo(0,0);quadraticCurveTo(0,-12.5,25,-12.5);quadraticCurveTo(50,-12.5,50,0);quadraticCurveTo(50,9.375,12.5,7.813);lineTo(5,12.5);lineTo(7.5,7.813);quadraticCurveTo(0,7.813,0,0);closePath();lineWidth=2;strokeStyle=blue;stroke();restore();');
  });
});