import { revalidatePath } from 'next/cache';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dx84l6icz',
  api_key: '882141798269339',
  api_secret: 'DpIY03fyhFQmoDaF0e94BLf8a7Y',
});

export const uploadFileToCloudinary = async (image: any) => {
  const uploadResponse = await cloudinary.uploader.upload(image, {timeout:120000});
  return uploadResponse;
}

export const revalidateCache = () => {
  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
  revalidatePath("/shop", "layout");
  revalidatePath("/deals", "layout");
}

export const stores = () => {
  return [
    {
      name: "partnersandbox2"
    },

  ];
}