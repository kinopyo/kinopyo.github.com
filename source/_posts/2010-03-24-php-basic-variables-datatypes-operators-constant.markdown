---
layout: post
title: 'PHP Basic - Variables, Datatypes, Operators and Constants'
date: 2010-3-24
wordpress_id: 1048
permalink: /blog/php-basic-variables-datatypes-operators-constant
comments: true
categories: [nil]
---
## Declare a variable

```php
$my_variable;
$my_variable = 3;

```

Name it in your script, when PHP first sees a variable's name in a script, it automatically creates the variable at that point.
If you don't initialize a variable in PHP, it's given the default value of null.


## Data Types
### Special Data Type
NULL : May only contain 'null' as a value, meaning the variable explicitly does not contain any value
Resource : Contains a reference to an external resource, such as a file or database

Be careful, NULL is a data type.

### Testing the Type of a Variable
+  gettype($x)
It returns as a string.

+  is_int( value )
+  is_string( value )
+  is_float( value )
+  is_bool( value )
+  is_array( value )
+  is_object( value )
+  is_resource( value )
+  is_null( value )

Returns true or false.

## Changing a Variable's Data Type
To use settype() , pass in the name of the variable you want to
alter, followed by the type to change the variable to (in quotation marks).
Assigning different values to the variable can also change the variable's data type.

```php
$test_var = 8.23;
settype( $test_var, "string" );
settype( $test_var, "boolean" );

```

after converting $test_var to a Boolean, it contains the value true
(which PHP displays as 1 ). This is because PHP converts a non-zero number to the Boolean value true.

### Changing Type by Casting

```php
<?php
$test_var = 8.23;
echo $test_var . "<br/>"; // Displays "8.23"
echo (string) $test_var . "<br/>"; // Displays "8.23"
echo (int) $test_var . "<br/>"; // Displays "8"
echo (float) $test_var . "<br/>"; // Displays "8.23"
echo (boolean) $test_var . "<br/>"; // Displays "1"
?>

```

You can also cast a value to an integer,
floating-point, or string value using three PHP functions:
|# Functions|# Description|
|intval( value )|Returns value cast to an integer|
|floatval( value )|Returns value cast to a float|
|strval( value )|Returns value cast to a string|

intval() has another use: converting from a non?base-10 integer to a base-10 integer.
For example, this code convert base-16 number "ff" to base-10 number.

```php
echo intval("ff", 16); // Displays "255"

```


## Operator

### Assignment Operators

For concatenation strings, using ".=" instead of ".+".

```php
$a = "Start a sentence";
$b = "and finish it.";
$a .= $b;	// $a now contains "Start a sentence and finish it."

```

### Bitwise Operators
passed...

### Comparison Operators
+  === (identical)
true if $x equals $y and they are of the
same type; false otherwise

+  !== (not identical)
true if $x does not equal $y or they are not
of the same type; false otherwise

### Logical Operators
PHP considers the following values to be false :
+  The literal value false
+  The integer zero ( 0 )
+  The float zero ( 0.0 )
+  An empty string ( " " )
+  The string zero ( "0" )
+  An array with zero elements
+  The special type null (including any unset variables)
+  A SimpleXML object that is created from an empty XML tag (more on SimpleXML in -Chapter 19 )
All other values are considered true in a Boolean context.

Addtion to the "traditional" logical operators such as "&&" and "||",
PHP also have "and", "or" and "xor".
+  xor
true if $x or $y (but not both) evaluates to true ; false
otherwise

### String Operators
There ’ s really only one string operator, and that ’ s the concatenation operator - .(dot).This operator simply
takes two string values, and joins the right - hand string onto the left - hand one to make a longer string.

## Operator Precedence
Almost the same except that the logical operator: "and" > "xor" > "or"
has the lowest precedence.

```php
$x = false || true; // $x is true
$x = false or true; // $x is false

```

In the second line, the "=" has higher precedence than "or".


## Constants
Constants may only contain scalar values such as Boolean, integer, float, and string (not values such as arrays and objects).

Constants do not start with the dollar sign

To define a constant, use the define() function.

```php
define("MY_CONSTANT","19"); // MY_CONSTANT always has the string value "19"
echo MY_CONSTANT; // Displays "19" (note this is a string, not an integer)

```
