const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chatApp");
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Upload Error: ", err);
    return null;
  }
};
