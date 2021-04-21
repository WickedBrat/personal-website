export default function Photography() {
	return (
		<div>
			<div id="flickrembed_15"></div>
			<script src="https://flickrembed.com/embed_v2.js.rand.php?container=flickrembed_15&source=flickr&layout=responsive&input=www.flickr.com/photos/190329325@N03&sort=0&by=user&theme=tilesgrid&scale=fit&speed=3000&limit=10&skin=default&autoplay=true"></script>
			<script type="text/javascript">
				{function showpics() {
					var a = $("#box").val();
					$.getJSON(
						"http://api.flickr.com/services/feeds/photos_public.gne?tags=" +
							a +
							"&tagmode=any&format=json&jsoncallback=?",
						function (a) {
							$("#images").hide().html(a).fadeIn("fast"),
								$.each(a.items, function (a, e) {
									$("<img/>").attr("src", e.media.m).appendTo("#images");
								});
						}
					);
				}}
			</script>
			{/* <iframe
				style={{
					position: "relative",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
				src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=www.flickr.com/photos/190329325@N03&sort=0&by=user&theme=tiles_justified&scale=fill&speed=3000&limit=500&skin=default&autoplay=true"
				scrolling="no"
				frameborder="0"
				allowFullScreen="true"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
			>
				<p>
					<a href="https://www.compareboilercover.co.uk">
						the website for cheaper boiler care comparison
					</a>
				</p>
			</iframe>
			<script type="text/javascript">
				{function showpics() {
					var a = $("#box").val();
					$.getJSON(
						"http://api.flickr.com/services/feeds/photos_public.gne?tags=" +
							a +
							"&tagmode=any&format=json&jsoncallback=?",
						function (a) {
							$("#images").hide().html(a).fadeIn("fast"),
								$.each(a.items, function (a, e) {
									$("<img/>").attr("src", e.media.m).appendTo("#images");
								});
						}
					);
				}}
			</script> */}
		</div>
	);
}
