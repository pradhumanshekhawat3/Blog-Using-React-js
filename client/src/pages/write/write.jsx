import "./write.css"

export default function write() {
  return (
    <div className="write">
        <img className="writeimg" src="https://imgs.search.brave.com/UO-6XgjRV3dgIKaJbB4EmInEq_wvkoTbmcTyWmd290U/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/NkNldHJiT2ZXaXpw/S2dqVzFlR0tBSGFE/NCZwaWQ9QXBp"alt="" />
<form className="writeform">
<div className="writefromgroup">
    <label htmlFor="forminput">
    <i class="writeicon fa-solid fa-plus"></i>
    </label>
    <input type="file" id="forminput" style={{display:"none"}}/>
    <input type="text" placeholder="Title" className="writeinput" autoFocus={true}/>
</div>
<div className="writefromgroup">
    <textarea placeholder="Tell your story..." type="text" className="writeinput writetext "></textarea>
</div>
<button className="writesubmit">Publish</button>
</form>
    </div>
  )
}
