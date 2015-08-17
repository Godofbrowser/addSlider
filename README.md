#addSlider

v1.1.0

A slider that allows the selecting of value by moving a handle along a track.

---

This slider is very customization allowing you to set minimum values, maximum values, steps, ranges, and callback functions.

##Table of Contents
- [Importing](#importing)
- [Setup](#setup)
	- [HTML Setup](#html-setup-method)
	- [JavaScript Setup](#javascript-setup-method)
	- [jQuery Setup](#jquery-setup-method)
- [Initial Value](#initial-value)
- [Getting the Value](#getting-the-value)
- [Settings](#settings)
- [APIs](#apis)
- [Skins](#skins)
	- [Simple Skin](#simple-skin)
	- [Skin Variables](#skin-variables)
	- [Static Skins](#static-skins)
- [Examples](#examples)
- [License](#license)

##Importing
This is a jQuery plugin, therefore [jQuery](http://jquery.com) **must** be imported into your page **before** this plugin.

Import "addSlider.js" and a skin into your page, this can be found in the "src" directory of this repository.

	<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="path/to/src/addSlider.js"></script>
	<link rel="stylesheet" href="path/to/src/skins/addSlider.skin-simple.css" />

##Setup
This plugin has three different methods of being created.

###HTML Setup Method
Once the plugin as been imported, you can create an instance of the plugin by creating an ``<input>`` element and giving it the ``data-addui="slider"`` attribute.

	<input data-addui="slider" />

###JavaScript Setup Method
You can setup an element as a slider using the JavaScript function ``$add.Slider(selector, settings)``.

Create your ``<input>`` element using HTML:

	<input id="slider1" />

Now after the DOM is ready call the JavaScript function:

	$add.Slider("#slider1");

###jQuery Setup Method
Similarly to the JavaScript Method, you can setup an element as a slider using the jQuery plugin ``$(selector).addSlider(settings)``.

Create your ``<input>`` element using HTML:

	<input id="slider1" />

After the DOM is ready call the jQuery Plugin:

	$("#slider1").addSlider();

##Initial Value
You can set an initial value by giving this ``<input>`` a value attribute:

	<input data-addui="slider" value="50" id="slider1" />

![](src/skins/addSlider.skin-simple.css/active.jpg)

##Getting the Value
To retrieve the value new value after the user adjusts the slider, also use the input's *value* attribute, this allows the value slider to be used like any other input and can be submitted with a form.

	$("#slider1").val();
	// OR
	document.getElementById("slider1").value

##Settings
To use these settings using the HTML Setup Method pass each setting into the plugin using the ``data-{setting name}="{setting value}"`` attribute.

For the JavaScript Setup method pass in a key-value-pair object as the the second argument.

For the jQuery Setup method pass in a key-value-pair object as the first argument.

**Available Settings**

 - **min**: *number* = ``0``
	 - The miniumum possible value on the slider.
 - **max**: *number* = ``100``
	 - The maximum possible value on the slider.
 - **step**: *number* = ``0.01``
	 - The minium incrament amount allowed.
 - **range**: *boolean* = ``false``
	 - ``false`` = The slider is for a single vale (1 handle).
	 - ``true`` = The slide is used to select a range of values (2 handles).
 - **activetimeout**: *number* = ``750``
	 - The time after the slide is over when the slider is still in its "active" state. This time is in milliseconds.
 - **formatter**: *function* = ``function(x){return x;}``
	 - A function used to format the value to be displayed in the slide.
 - **onready**: *function* = ``function(){}``
	 - A callback function executed when the plugin is ready.
	 - The initial value is passed in as the first argument, and second argument if it is a range slider.
 - **onslidestart**: ``function(){}``
	 - A callback function executed when a slide starts on slider.
	 - The new value is passed in as the first argument, and second argument if it is a range slider.
 - **onslide**: ``function(){}``
	 - A callback function executed each step (every 7-10 millieseconds) of a slide.
	 - The new value is passed in as the first argument, and second argument if it is a range slider.
 - **onslideend**: ``function(){}``
	 - A callback function executed at the end of a slide.
	 - The new value is passed in as the first argument, and second argument if it is a range slider.
 - **onchange**: ``function(){}``
	 - A callback function executed when the slider value is changed.
	 - The new value is passed in as the first argument, and second argument if it is a range slider.

##APIs
This plugin has 2 Application Programming Interfaces that can be used by other plugins / scripts to interact with this plugin. These API are methods / functions that are attached to the original ``<input>`` element.

 - **setVal(val)**: ``undefined``
	 - Sets the value of the slider.
	 - If the slider is a "range" slider the functions takes 2 arguments, the first is the new minimum value and the second is the new maximum value.
 - **refresh()**: ``undefined``
	 - Refreshes the slide if the value of the ``<input>`` element was changed using JavaScript.

###Calling the APIs
This example shows how to use these APIs on a slider with an id of "slider1".

	document.getElementById("slider1").setVal(50); // Sets the value to 50
	// OR
	$("#slider1")[0].setVal(50);
	// OR
	document.getElementById("slider1").value = 50;
	document.getElementById("slider1").refresh();
	// OR
	$("#slider1").val(50);
	$("#slider1")[0].refresh();

##Skins
Currently there is only one skin included in this repository, it's called "Simple".

###Simple Skin
The simple skin looks like this when not active.

![](src/skins/addSlider.skin-simple.css/inactive.jpg)

and looks like this when active (being clicked / touched)

![](src/skins/addSlider.skin-simple.css/active.jpg)

To import this skin into your page include it as a CSS file in the head.

	<link rel="stylesheet" href="path/to/src/skins/addSlider.skin-simple.css" />

###Skin Variables
The "Simple" skin is a dynamic (or PHP generated) style sheet which allows you to pass URL (GET) parameters to the skin and make basic changes to it including color and size.

Here is a list of the available Skin Variables:

 - **size**: *number* = ``1``
	 - The scale value for the slider.
	 - ``1`` = Normal size
	 - ``0.5`` = Half size
	 - ``1`` = Double size
	 - Any flot value is allowed.
 - **primary**: *color* = ``#3366ff``
	 - The primary color of the plugin, because this plugin only has 1 color this is the only one in use, but other "Simple" Skins for other addUI plguins use other colors.

####Using Skin Variables
Add these variables onto the URL when you import the skin into your document.

	<link rel="stylesheet" href="path/to/src/skins/addSlider.skin-simple.css?size=2&primary=%2366bb66" />

![](src/skins/addSlider.skin-simple.css/green.jpg)

#####URI Encoding
Remember to URI encode your variables meaning the "#" character must be turned into "%23"

###Static Skins
Skins are also provided as standard CSS files without skin variables if you cant use or don't wish to use the PHP dynamic skins, look for a file named the same as the skin but with "-static" at the end of the filename.


##Examples

 - [HTML Setup](examples/setup-html.html)
 - [JavaScript Setup](examples/setup-javascript.html)
 - [jQuery Setup](examples/setup-jquery.html)
 - [HTML Settings](examples/settings-html.html)
 - [JavaScript / jQuery Settings](examples/settings-javascript-jquery.html)
 - [APIs](examples/apis.html)
 - [Simple Skin Variables](examples/skin-simple-vars.html)

##License
This software is property of **addCMS**.

This software is distributed **AS-IS** with **no** warranties/guarantees either expressed or implied.

This software is Licensed under [Attribution-NonCommercial-ShareAlike 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/us/) (CC BY-NC-SA 3.0 US). 

###Usage
Under this license you are free to:

 - **Use** this content for any purpose unless explicitly restricted in the terms of use below.
 - **Share**, copy and redistribute the material in any medium or format.
 - **Adapt**, remix, transform, and build upon the material.

###Terms
You may use this product as specified above provided you follow these terms.

 - **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
 - **NonCommercial**: You may not use the material for commercial purposes.
 - **ShareAlike**: If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

###Links
The abbreviated version of this license can be found at [https://creativecommons.org/licenses/by-nc-sa/3.0/us/](https://creativecommons.org/licenses/by-nc-sa/3.0/us/).

The full version of this license can be found at [https://creativecommons.org/licenses/by-nc-sa/3.0/us/legalcode](https://creativecommons.org/licenses/by-nc-sa/3.0/us/legalcode).