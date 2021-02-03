<?php

if (isset($_SESSION['uid']))
{
	header('location:admin/admindash.php');
}
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/gif/png" href="images/sms.jpg" width="24" height="40">
	<title>
				Student Management System
	</title>
	
</head>
<body bgcolor="#ffff33">
		<h3 align="right"><a href="index.php">Home Page</a></h3>
		<h3 align="center">Admin Login</h3>
					
		<form action="login.php" method="post" >
			<table style="width:50%;" align="center" border="2">
				<tr><td>Username:</td>
					<td><input type="text" name="uname"></td>
				
				</tr>

				<tr><td>Password:</td>
					<td><input type="Password" name="pass"></td>
				
				</tr>


				

				
 
				<tr>

					<td colspan="2" align="center"><input type="submit" name="login" value="Login"></td>
				</tr>

			</table>

		</form>

</body>
</html>
<?php

	include('dbcon.php');
	if (isset($_POST['login'])) 
	{
		$Username = $_POST['uname'];
		$password = $_POST['pass'];

		$qry = "SELECT * FROM `admin` WHERE `username`='$Username' AND `password`='$password'";

		$run = mysqli_query($con,$qry);

		$row = mysqli_num_rows($run);

		
		if ($row<1) {
			?>
			<script> 
				alert("Username And  Password not Match !! ");
					window.open('login.php','_self');
			</script>


			<?php
		}
		else{
			$data = mysqli_fetch_assoc($run);

			$id = $data['id'];
			
			session_start();

			$_SESSION['uid'] = $id;
			header('location:admin/admindash.php');
		}

	}
?>