function changeImg() {
	var imgSrc = $("#imgObj");
	var src = imgSrc.attr("src");
	imgSrc.attr("src", chgUrl(src));
	// ʱ���
	// Ϊ��ʹÿ������ͼƬ��һ�£�����������������棬������Ҫ����ʱ���
	function chgUrl(url) {
		var timestamp = (new Date()).valueOf();
		urlurl = url.substring(0, 17);
		if ((url.indexOf("?") >= 0)) {
			urlurl = url + "&t=" + timestamp;
		} else {
			urlurl = url + "?t=" + timestamp;
		}
		return urlurl;
	}
}

function isRightCode() {	
	var code = $("#veryCode").attr("value");
	code = "c=" + code;
	$.ajax({
				type : "POST",
				url : "verifyresult",
				data : code,
				success : callback
			});
}
function callback(data) {
	$("#info").html(data);
}