<?php
include realpath(__DIR__ ."/../../Bliss/web-app.php");

$root = dirname(__DIR__);
$app = BlissWebApp::create("File Share", $root);
$app->moduleRegistry()->registerModulesDirectory($root ."/modules");
$app->run();