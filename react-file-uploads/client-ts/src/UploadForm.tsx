/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export default function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const req = {
        method: 'POST',
        body: formData,
      };
      const res = await fetch('/api/uploads', req);
      const image = await res.json();
      setImageFile(image);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
          {imageFile && <img src={imageFile.url} alt="hi" />}
        </div>
      </div>
    </div>
  );
}
