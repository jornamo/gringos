<!DOCTYPE html>
<html lang="en">
	<head>
		
		<?php include_once '/../tags/javascriptTags.php';?>
		
		<?php include_once '/../tags/cssTags.php';?>
		
		<meta charset="utf-8">
		<title><?php echo $title; ?></title>
		
	</head>
	<body>
		<div id="header-wrapper">
			<div id="header"><h1>Sticky header</h1></div>
		</div>
		
		<div id="wrapper">
			<div id="container">
				<div class="content">
					<?php echo $content;?>
				</div>
			</div>
		</div>
	</body>
</html>