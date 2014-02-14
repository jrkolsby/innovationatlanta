<?php

$user="innovationatlanta";
/*
EDIT "username" TO CHANGE YOUR USERNAME.

This is the username that you will enter
when Note is called on a page you set up
to be edited.                         */


$pass="Lifeisg00d!";
/*
EDIT "password" TO CHANGE YOUR PASSWORD.

This is the username that you will enter
when Note is called on a page you set up
to be edited.                         */


$domainroot="";
/*
EDIT "" TO CHANGE THE DOMAIN ROOT.

The definition of this variable is
outlined in the README.txt file. Refer
there for further explanation.        */


/*
Ignore the rest of this file, citizen*/

ini_set('display_errors','Off');if($_POST["response"]=="print"){if($_COOKIE['notecmspass']==$pass&&$_COOKIE['notecmsuser']==$user){print "true";}else if($_POST['pass']==$pass&&$_POST['user']==$user){print "true";}else{print "false";}}?>