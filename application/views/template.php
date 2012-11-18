<!DOCTYPE html>
<html lang="en">
	<head>
	<?php echo $javascript;?>
	<?php echo $css;?>
	<?php echo $metas;?>
		<title><?php echo $title; ?></title>
	</head>
	<body>
		<div id="header-wrapper">
			<?php echo $header;?>
		</div>
		
		<div id="wrapper">
			<div id="container">
				<div class="content">
					<?php echo $content;?>
				</div>
			</div>
			<?php echo $footer;?>
		</div>
	</body>
</html>