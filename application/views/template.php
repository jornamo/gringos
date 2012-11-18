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
			<div id="header">
				<div class="site-logo">
					<a href=""><img src="<?php echo base_url()?>public/images/gringo-logo.png"/></a>
				</div> 
			</div>
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