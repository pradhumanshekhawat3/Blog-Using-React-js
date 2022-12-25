import "./setting.css"
import Sidebar from "../../component/Sidebar/Sidebar"

export default function setting() {
  return (
    <div className="settings">
      <div className="swrap">
        <div className="settingtitle">
          <span className="updatetitle">Update Your Account</span>
          <span className="deletetitle">Delete Account</span>
        </div>
        <form className="settingform">
          <label >Profile Picture</label>
          <div className="settingprofile">
            <img src="https://imgs.search.brave.com/UO-6XgjRV3dgIKaJbB4EmInEq_wvkoTbmcTyWmd290U/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/NkNldHJiT2ZXaXpw/S2dqVzFlR0tBSGFE/NCZwaWQ9QXBp" alt="Img in not available" />
            <label htmlFor="FileInput">
            <i class="settingicon fa-regular fa-circle-user"></i>
            </label>
            <input type="File" id="FileInput" style={{display:"none"}}/>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Shekhawat" />
          <label>Email</label>
          <input type="email" placeholder="Shekhawat@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingupdate">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
