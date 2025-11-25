export default {
  setKey() {
    const key = `photos/photo_${Date.now()}.png`;
    storeValue("latestPhotoKey", key); // 최신 Key 저장
  }
}