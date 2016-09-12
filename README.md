#add Slider

```
<input data-addui='slider' />
```

![](res/icon.png)

## How to Use
To use this plugin create an input element, and give it a `data-addui` attribute with a value of `slider`.

![](res/regular.gif)

## Settings
You can pass these settings into the plugin use `data-{setting_name}="{setting_value}"` or some settings are linked to specific attributes (like min, max and value).

 - **direction** = `"horizontal"`
   - Controls which directoin the slider is (horizontal or vertical)
 - **min** = `0`
   - The minimum number allowed
   - Can also be set by the `min` attribute.
 - **max** = `100`
   - The maximum number allowed
   - Can also be set by the `max` attribute.
 - **step** = `0.1`
   - The smallest incrament that the slider can be moved by.
   - Can also be set by the `step` attribute.
 - **value** = `50`
   - The inital value of the slider.
 - **fontsize** = `18`
   - Controls the size of the font in the "bubble" when sliding.
 - **formatter** = `function(num){/* Formatting Code, returns a string */}`
   - A function that is used to format the value in the bubble.
 - **timeout** = `2000`
   - The number of milliseconds that the "bubble" will appear above the slider after the handle is released.
 - **range** = `false`
   - `true` makes it a range slider.
 - **id** = `""`
   - The `id` attribute to be given to the hidden input.
   - By default this is copied from the original input (and removes the original input to avoid conflicts).
 - **class** = `""`
   - Extra classes to be given to the widget.
 - **name** = `""`
   - The `name` attribute to be given to the hidden input.
   - By default this is copied from the original input (and removes the original input to avoid conflicts).

##Custom Formats

**JavaScript**
```JavaScript

```

**HTML**
```HTML

```

![](res/usd.gif)

##Ranges

![](res/range.gif)

##Vertical Slider

![](res/vertical.gif)

##Vertical Range

![](res/vertical-range.gif)

