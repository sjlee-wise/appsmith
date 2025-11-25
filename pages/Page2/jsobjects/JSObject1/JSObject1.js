export default {
	async captureAndUpload() {
		const stream = await Camera1.start(); // 카메라 스트림 가져오기
		const imageBitmap = await createImageBitmap(stream);
		const canvas = document.createElement("canvas");
		canvas.width = imageBitmap.width;
		canvas.height = imageBitmap.height;
		const ctx = canvas.getContext("2d");
		ctx.drawImage(imageBitmap, 0, 0);
		const dataUrl = canvas.toDataURL("image/jpeg");

		// S3 Query 호출
		UploadToS3.run({
			Content: dataUrl.split(",")[1],
			ContentType: "image/jpeg",
			Key: `photos/${Date.now()}.jpg`
		});
	}
}
