# ripple-class

Add a simple material ripple to a HTML element by adding a `.ripple` class.

![Example](./img/example.png)

## Setup

Install the package.

```bash
*package does not exist*
```

Import the ripple library.
```ts
import "ripple-class";
```

## Usage

Add a ripple to a html element by adding the "ripple" class name.
```html
<button class="ripple">Click Me!</button>
```

## Customization

You can use the CSS variables to change the ripple color, duration and scale.
```css
.custom-ripple {
    --ripple-color: rgba(255, 0, 0, 0.8);    /* Default: rgba(255, 255, 255, 0.6) */
    --ripple-duration: 1200ms;               /* Default: 600ms */
    --ripple-scale: 1;                       /* Default: 4 */
}
```
```html
<button class="ripple custom-ripple">Click Me!</button>
```

## Caveat

The `.ripple` class applies `overflow: hidden` and `position: relative;` to your element.
Position of the ripple object will be incorrect if position is `static`.
(If the element is `static`, `transform: translateZ(0);` can also be used to correct the position)

Overflow `hidden` is added to prevent the ripple from overflowing from the parent.
It is not necessary, and was added for convenience.
The ripple will still work with any other overflow setting.

## Development

Package and website is developed using SvelteKit.

Code is located under [src/lib](src/lib).

Relevant commands are located in the [package.json](package.json).
