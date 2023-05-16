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

const IconsIamge = () => {
  return (
    <MouseParallax strength="0.03">
      <img src={require('./../assets/icons.png')} className="icons" alt="icons" />
    </MouseParallax>
  )
}

const AvatarBollSmallIamge = () => {
  return (
    <MouseParallax strength="0.02">
      <img src={require('./../assets/ava_2.png')} className="ava_2"  alt="ava_2" />
    </MouseParallax>
  )
}

const AvatarBollBillIamge = () => {
  return (
    <MouseParallax strength="0.01">
      <img src={require('./../assets/ava_1.png')} className="ava_1" alt="ava_1" />
    </MouseParallax>
  )
}

export { AvatarIamge, IconsIamge, AvatarBollSmallIamge, AvatarBollBillIamge }