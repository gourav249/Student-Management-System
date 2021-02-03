<?php
if(isset($_POST['submit']))
		{
			$mobileno=$_POST['rollno'];
			if($_POST['rollno'] == "") 
		 	{
				$error_msg['rollno'] = "RollNo is empty";
			}
			elseif (!preg_match ("/^[0-9]*$/", $mobileno))
			{  
				$error_msg['rollno'] = "Only numeric allowed.";
			}

			$name=$_POST['name'];
			if($_POST['name'] == "") 
		 	{
				$error_msg['name'] = "Name is empty";
			}
			else{
				if (!preg_match ("/^[a-zA-z]*$/", $name) ){
						$error_msg['name'] = "Only alphabets";
				}
			}


			if($_POST['city'] == "") 
		 	{
				$error_msg['city'] = "City is required";
			}
			else{
				if (!preg_match ("/^[a-zA-z]*$/", $name) ){
						$error_msg['city'] = "Only alphabets";
				}
			}
			if($_POST['pcon'] == "") 
		 	{
				$error_msg['pcon'] = "Contact is empty";
			}
			else{
				if (!preg_match ("/^[0-9]*$/", $mobileno) ){  
						$error_msg['pcon'] = "Only numeric allowed";
				}
			}
			if($_POST['std'] == "") 
		 	{
				$error_msg['std'] = "Std is required";
			}
			else{
				if(isset($_REQUEST['std']) && $_REQUEST['std'] == '0') 
				{ 
  								$error_msg['pcon'] = "Please select std.";
				}   
						
				}
			
		}

?>