"use client"

import { useRef, useState } from "react"
import styles from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef()
  const [preview, setPreview] = useState(null)

  const handleImageClick = () => imageInputRef.current.click()

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (!file) {
      setPreview(null)
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreview(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!preview ? (
            <p>No Image picked yet.</p>
          ) : (
            <Image src={preview} alt="The image selected by the user." fill />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={styles.input}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
      </div>
      <button className={styles.button} type="button" onClick={handleImageClick}>
        Pick an Image
      </button>
    </div>
  )
}
