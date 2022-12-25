# ripple-class

Add a simple material ripple to a HTML element by adding a `ripple` class.

![Example](./img/example.png)

> Notes/problems:
> * Requires CSS `transform: translateZ(0)` to be set on the element for positioning to be correct
> * Some problem with positioning of the ripple
> * Problem with `overflow: hidden` not working

> For the ripple position to work, the target needs `position: relative;` or `transform: translateZ(0);`.
> Plus `overflow: hidden;` if you want it to not overflow outside the target.
>
> To consider: create a ripple-container to hold appropriate CSS so the parent does not
> need to be affected. (see [this](https://jh3y.medium.com/how-to-create-the-ripple-effect-from-google-material-design-c6f993e1d39))