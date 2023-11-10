import React from 'react'
import Herosection from '../../components/Herosection'
import Featurelist from '../../components/Featurelist'
import Blogfooter from '../../components/Blogfooter'
import Webfooter from '../../components/Webfooter'
import Trustedplatform from '../../components/Trustedplatform'
import Testimonialsflow from '../../components/testimonialsflow'

const page = () => {
  return (
    <>
    <Herosection/>
    <Featurelist/>
    <Trustedplatform/>
    <Testimonialsflow/>
    <Blogfooter/>
    <Webfooter/>
    </>
  )
}

export default page