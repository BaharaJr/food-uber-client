import React, { useState } from "react"
import axios from "axios"

const Profile = () => {
  let [dp, setDp] = useState(null)
  let [imgData, setImgData] = useState(null)
  const handleChange = (e) => {
    if (e.target.files) {
      setDp(e.target.files[0])
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImgData(reader.result)
        // setDp(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
      //   console.log(dp)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token")
    let config = {
      headers: {
        authorization: token,
      },
    }
    if (dp) {
      axios
        .post("/api/upload-dp", dp, config)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log("no dp")
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" name="dp" onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
      {imgData && <img src={imgData} alt="" />}
    </div>
  )
}

export default Profile