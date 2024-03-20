<?php

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Remote_OPCUA-Manager</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles\main.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<header>
    <h1>Remote OPCUA Manager</h1>
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#profile"><span class="material-symbols-outlined">account_circle</span></a>
    </div>
</header>

<body>
    <div class="flexgrid">
        <div class="sidebar">
            <ul>
                <h2 style="border-bottom: 1px solid #dddd;">Device</h2>
                <li id="name">Device1</li>
                <li id="ip"></li>
                <li id="port"></li>
            </ul>
        </div>
        <div class="configsection">
            <table>
                <tr>
                    <th>Port</th>
                    <th>Enable</th>
                    <th>Tagname</th>
                </tr>
                <tr>
                    <td>IN1</td>
                    <td>
                        <label class="switch">
                            <input id="in_enable_1" name=in_value_1 type="checkbox" onclick=myFunction()>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td id="1"></td>
                </tr>
                <tr>
                    <td>IN2</td>
                    <td>
                        <label class="switch">
                            <input  id="in_enable_2" name=in_value_1 type="checkbox" onclick=myFunction()>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td id="2"></td>
                </tr>
                <tr>
                    <td>OUT1</td>
                    <td>
                        <label class="switch">
                            <input  id="out_enable_1" name=in_value_1 type="checkbox" onclick=myFunction()>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td id="3"></td>
                </tr>
                <tr>
                    <td>OUT2</td>
                    <td>
                        <label class="switch">
                            <input  id="out_enable_2" name=in_value_1 type="checkbox" onclick=myFunction()>
                            <span class="slider"></span>
                        </label>
                    </td>
                    <td id="4"></td>
                </tr>
            </table>
        </div>
    </div>
    <script src="scripts\main.js" async defer></script>
</body>

</html>
<?php

?>