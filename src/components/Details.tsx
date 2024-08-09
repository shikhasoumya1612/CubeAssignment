import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styles/Details.css";
import { User } from "../types/types";

interface DetailsProps {
  user: User;
  setShowLoader: Dispatch<SetStateAction<Boolean>>;
  showLoader: Boolean;
}

const Details: React.FC<DetailsProps> = ({
  user,
  showLoader,
  setShowLoader,
}) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    try {
      const IMAGE_URL = "https://picsum.photos/400";
      const imagePromises = Array.from({ length: 9 }, (_) =>
        fetch(`${IMAGE_URL}`).then((res) => res.url)
      );

      const resolvedUrls = await Promise.all(imagePromises);
      setImages(resolvedUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    setShowLoader(true);
    fetchImages();
    const interval = setInterval(fetchImages, 10000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <>
      {!showLoader && (
        <div className="details-container">
          <h1 className="details-heading">{user.name}</h1>
          <table className="details-table">
            <tbody>
              <tr>
                <th>Username:</th>
                <td>{user.username}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Street:</th>
                <td>{user.address.street}</td>
              </tr>
              <tr>
                <th>Suite:</th>
                <td>{user.address.suite}</td>
              </tr>
              <tr>
                <th>City:</th>
                <td>{user.address.city}</td>
              </tr>
              <tr>
                <th>Zipcode:</th>
                <td>{user.address.zipcode}</td>
              </tr>
            </tbody>
          </table>
          <div className="image-grid">
            {images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`grid-${index + 1}`}
                className="grid-image"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
