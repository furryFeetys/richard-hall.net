<?php
/**
 * Created by PhpStorm.
 * User: Richard Hall
 * Date: 11/4/2015
 * Time: 1:42 PM
 */



if (isset($_POST['testinput'])) {
    $test = $_POST['testinput'];



    if($test != 'purple'){
        echo $test . ' wins!';
    }
    if($test == 'purple'){
        echo 'you did it!';
    }

}





