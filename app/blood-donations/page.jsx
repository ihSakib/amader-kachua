import Image from 'next/image'
import React from 'react'
import img from "@/public/imgs/kachua-nature.jpg"

export default function page() {
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
      esse perspiciatis, qui odit similique error, aliquam dolorem aperiam
      quisquam dolores numquam quibusdam amet iste? Fugiat a eius iste placeat
      recusandae.
     
      <Image
        src={img}
        alt="My company logo"
        width={300}
        height={300}
      />
    </div>
  );
}
