const cloudinary = require('cloudinary');

interface CloudinaryUploadResponse {
  public_id: string;
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
  secure: true,
});

const upload =  (images) => {
  const uploads = images.map((buffer) => {
    return new Promise<CloudinaryUploadResponse>((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        {
          resource_type: 'auto',
          width:400,
          height: 300,
          crop: 'fill',
          folder: 'listings'
        },
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        },
      
      ).end(buffer)
    }).then((res) => {
       return res.public_id
    })
  })

  return Promise.all(uploads);
  
}

const del = (image) => {
  cloudinary.api.delete_resources(image,
    {type: 'upload', resource_type: 'image'})
}

export default  { upload, del}