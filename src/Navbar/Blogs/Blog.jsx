import React from 'react'
import "./blog.css"
import { FcVoicePresentation } from "react-icons/fc";
import Triund from './Triund/Triund'
import Mcleodganj from './Mcleodganj/Mcleodganj'
function Blog() {
  return (
    <>
      <div className="title-head">
        <h1>
            <FcVoicePresentation />
  Our Latest Blogs
        </h1>
      </div>
      <Triund />
      <Mcleodganj />
    </>
  )
}

export default Blog