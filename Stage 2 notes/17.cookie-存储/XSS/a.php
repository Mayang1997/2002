<?php
// 响应消息头
header("content-type:text/html;charset=utf-8");
// 获取 表单 POST方式提交的数据
echo $_POST["msg"];