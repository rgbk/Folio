var mona = new Raster('mona');
var circle = new Path.Circle(new Point(80, 50), 5);
circle.fillColor = 'red';

// Create a rasterized version of the path:
var raster = mona.rasterize();

// Move it 100pt to the right:
raster.position.x += 400;

console.log(project.layers)