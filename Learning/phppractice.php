<!DOCTYPE html>
<html>

<head>

</head>

<body>

<?php
$color = 'red';
//this returns the string length
echo strlen($color);
//this will output 'der'
echo strrev($color);
// this will output 'Hello Dolly'
echo str_replace('world', 'Dolly', 'Hello World');

echo 'First time wih PHP!';
//Print is very similar to echo, also above and below are strings just like js
print 'Hello World!';

//These two are the same
echo 'the car is $color';
echo 'the car is ' . $color . '</br>';

//Addition, all operators are the same as JS
$x = 1;
$y = 2;
function addition() {
  echo $x + $y;

  global $z;
  $z = $x + $y;
}
addition();
// z will be 3 outside of the function because of global
echo $z;

//Storing/updating value with static (kinda like closure/const in JS)
function update() {
  static $storeUpdate = 0;
  echo $storeUpdate;
  $storeUpdate++;
}
update();
update();
update();
// $storeUpdate will now equal 3

//How to make an actual const in php
define('text', 'This is text');
echo text;

//This outputs the type, length and array
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
// this counts array items, its like usng array.length in JS
echo count($cars);

//alphabetical and reverse alpha sorting
sort($cars);
rsort($cars);

//arrays have parenthesis but this uses brackets
$arrayval1 = $cars[1];


//PHP object
class chair {
  function Chair() {
    $this->model = 'Eames';
  }
}

$mychair = new Chair();
echo $mychair->model; //This outputs 'Eames'//

//if else statements are the same as JS, but else if has no space...
//switch statements are also the same
$t = date("H");

if ($t < "20") {
    echo "Have a good day!";
} elseif {
    echo "Have a good night!";
}

//for loops same as JS
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}

//for each loop, notice how arrays have different syntax
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
    echo "$value <br>";
}

//function with arguements, also like JS
function familyName($fname, $year) {
    echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");
familyName("Kai Jim", "1983");

?>

<!-- include entire files onto pages, using 'require' is similar but the php won' execute if there is an error -->
<?php include 'footer.php';?>

<script>


</script>

</body>

</html>
