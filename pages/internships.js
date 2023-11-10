import Featurelist from '../components/Featurelist'
import Herosection from '../components/Herosection'
import Testimonialsflow from '../components/Testimonialsflow'
import Webbanner from '../components/Webbanner'
import Webfooter from '../components/Webfooter'
import Internshipgrids from '../components/internshipgrids'
import Verticalmentors from '../components/verticalmentors'
import '../src/app/globals.css'
export default function internships() {
  return <>
  <Webbanner/>
  <Herosection/>
  <Internshipgrids/>
  <Verticalmentors/>
  <Featurelist/>
  <Testimonialsflow/>
  <Webfooter/>
  </>
}