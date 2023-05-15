import './utils.css';
import { MouseParallax } from "react-just-parallax";

const AvatarIamge = () => {
  return (
    <MouseParallax strength="0.02">
      <div className="mask avatarI">
        <MouseParallax strength="0.01">
          <img src={require('./../assets/avatar_2.png')} style={{ display: 'block', overflow: 'hidden' }} alt="avatar" />
        </MouseParallax>
      </div>
    </MouseParallax>
  )
}

export { AvatarIamge }