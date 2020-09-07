<?php
// php写入允许跨域的响应头
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
print_r($_SERVER);
// echo相当于node中write
// echo "<div>";
// echo $_POST["user"];
// echo "</div>";
