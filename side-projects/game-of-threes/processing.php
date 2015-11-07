<?php
/**
 * Created by PhpStorm.
 * User: Richard Hall
 * Date: 11/5/2015
 * Time: 2:19 PM
 */



function murkChallenge($number){

        if ($number % 3 == 0) {
            echo $number   . " " . "0" . "<br>";
            $number = ($number / 3);
        }

        elseif ( $number % 3 == 1) {

            echo $number . " " . "-1" . "<br>";
            $number = ($number - 1) / 3 ;
        }

        elseif ( $number %3 > 1) {
            echo $number  . " " . "1" . "<br>";
            $number = ($number + 1) /3;
        }
    return $number;
}



if (isset($_POST['go'])) {
    $number = $_POST['go'];


    while( $number != 1) {
        $number = murkChallenge($number);
    }
    echo $number;

}




