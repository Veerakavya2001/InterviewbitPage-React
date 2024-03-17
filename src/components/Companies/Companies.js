import React from 'react'
import './Companies.scss'
import facebook from '../../Assests/company-titles/facebook.png'
import google from '../../Assests/company-titles/google.jpg'
import amazon from '../../Assests/company-titles/amazon.png'
import medianet from '../../Assests/company-titles/medianet.png'
import filpcart from '../../Assests/company-titles/filpcart.png'
import phnpe from '../../Assests/company-titles/phnpae.png'
import walmart from '../../Assests/company-titles/walmart.png'
import gojek from '../../Assests/company-titles/gojek.png'
import hotstar from '../../Assests/company-titles/hotstar.png'
import oyo from '../../Assests/company-titles/oyo.png'
import atlassian from '../../Assests/company-titles/atlassian.png'
import goldmansachs from '../../Assests/company-titles/goldmansachs.png'

const companies = () => {
    const imagesArray=[
        {Image:facebook,alt:"facebook" },  {Image:google,alt:"google"}, {Image:amazon,alt:"amazon"}, 
        {Image:medianet ,alt:"medianet " },  {Image:filpcart,alt:"filpcart"}, {Image:phnpe ,alt:"phnpe"},
        {Image:walmart,alt:"walmart" },  {Image:gojek,alt:"gojek"}, {Image:hotstar,alt:"hotstar"},
        {Image:oyo ,alt:"oyo " },  {Image: atlassian,alt:" atlassian"}, {Image:goldmansachs ,alt:"goldmansachs "}
    ]
  return (
    <div className='cracked-companies'>
        <div className='companies-title-description'>Our Users Have Cracked interviews at</div>
        <div className="companies-titles">
        {imagesArray.map((item)=>
        <div>
            <img className="companies-icon" src={item.Image}  alt={item.alt}/>
        </div>
        )}
    </div>
    </div>
    
  )
}

export default companies