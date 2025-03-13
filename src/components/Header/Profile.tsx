import User from "../../assets/images/User.jpg"

const Profile = () => {
  return (
    <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] overflow-hidden cursor-pointer">
      <img src={User} alt="user" />
    </div>
  )
}

export default Profile
