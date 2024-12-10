import {Circle, makeScene2D} from '@motion-canvas/2d';
import {createRef, all} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const circle = createRef<Circle>();

  view.add(<Circle ref={circle} size={320} fill={'lightseagreen'}/>);

  yield* all(
    circle().position.x(300, 1).to(-300, 1).to(0, 1),
    circle().fill('#e6a700', 1).to('#e13238', 1).to('lightseagreen', 1),
    circle().scale(2, 1).to(2, 1).to(1, 1)
  );
  yield* flicker(circle())
});

function* flicker(circle: Circle) {
  circle.fill("red")
  yield
  circle.fill("yellow")
  yield
  circle.fill("red")
  yield
}
