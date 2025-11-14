import image from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <img src={image} alt="" style={{ width: "80px", height: "80px", objectFit:"cover" }} />
    </>
  );
};

export default Logo;
