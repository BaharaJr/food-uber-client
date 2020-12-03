import React, { useState } from "react"
import axios from "axios"

const Profile = () => {
  let [dp, setDp] = useState(null)
  let [loading, setLoading] = useState(false)
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
      // console.log(dp, imgData)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let token = localStorage.getItem("token")
    let formData = new FormData()
    formData.append("dp", dp)
    let config = {
      headers: {
        "Content-Type": "multipart/form-data; boundary=AaB03x",
        authorization: token,
      },
    }
    if (dp) {
      axios
        .post("/upload-dp", formData, config)
        .then((res) => {
          console.log(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    } else {
      console.log("no dp")
      setLoading(false)
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="file" name="dp" onChange={(e) => handleChange(e)} />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {imgData && (
        <img
          src={imgData}
          alt=""
          style={{
            objectFit: "cover",
            height: "200px",
            width: "200px",
          }}
        />
      )}
    </div>
  )
}

export default Profile
