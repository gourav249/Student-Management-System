<?php

		function showdetails($std,$rollno)
		{
			include('dbcon.php');

			$sql ="SELECT * FROM `student` WHERE `rollno`='$rollno'  AND  `standerd`='$std'";

			$run = mysqli_query($con,$sql);

			if (mysqli_num_rows($run)>0)
			 {
				$data = mysqli_fetch_assoc($run);
				?>
				
					<table border="2" style="margin-top: 7%;
												width:65%; height: 20%;" align="center">
						<tr>
							<th colspan="3">Student Details</th>
						</tr>

					<tr>
							<td rowspan="6">
								<img src="dataimg/<?php echo $data['image']; ?>" style="width: 190px; padding-left: 80px;"/> 
							</td>
						</tr> 

						<tr>
							<th>Rollno:</th> 
							<td ><?php echo $data['rollno']; ?></td>
						</tr>

						<tr>
							<th >Name:</th>
							<td ><?php echo $data['name']; ?></td>
						</tr>

						<tr>
							<th >Standard</th>
							<td ><?php echo $data['standerd']; ?></td>
						</tr>

						<tr>
							<th >Parents Contact No:</th>
							<td ><?php echo $data['pcont']; ?></td>
						</tr>

						<tr>
							<th >City:</th>
							<td ><?php echo $data['city']; ?></td>
						</tr>

					</table>


				<?php


			}
			else{

				?>
					
						<script>
							alert('Student Record are not Found');
						</script>
						
				
				
				<?php
			}
		}
		

?>