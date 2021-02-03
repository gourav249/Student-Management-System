<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/gif/png" href="images/sms.jpg" width="24" height="40">
	<title>
				Student Management System
	</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

</head>
<body bgcolor="#ffff33">
<style type="text/css">
		.error{
			color: red;
		}
	</style>
	
	<h3 align="right"><a href="login.php">Admin Login</a></h3>
		<h3 align="center">Welcome To Student Management System</h3>

	<form action="index.php" method="post">
			<table style="width:50%;" align="center" border="2">
				<tr><td colspan="3" align="center"><label>Student Information:</label></td>

				
				</tr>


				<tr><td align="right"><label for="std">Chose Standerd:</label></td>

					<td><select name="std">
							<option value="default">1st</option>
							<option value="2">2nd</option>
							<option value="3">3rd</option>
							<option value="4">4th</option>
							<option value="5">5th</option>
							<option value="6">6th</option>
							<option value="7">7th</option>
							<option value="8">8th</option>
							<option value="9">9th</option>
							<option value="10">10th</option>

						</select>
					</td>
				</tr>


				<tr>
					<td align="right"><label for="roll">Enter Roll no:</label></td>
					<td><input type="text" id="roll" name="rollno"></td>
				
				</tr>
 
				<tr>

					<td colspan="2" align="center"><input type="submit" name="submit" value="Show info"></td>
				</tr>

			</table>

		</form>

						

</body>
</html>

<?php

		include('dbcon.php');
		include('function.php');
		

		if (isset($_POST['submit'])) 
		{
			$std = $_POST['std'];
			$rollno = $_POST['rollno'];

			showdetails($std,$rollno);
		}


?>