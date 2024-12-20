import { AdminCollections } from '@ui/admin/collections/collections.jsx'
import { AdminServices } from '@ui/admin/services/services.jsx'
import { AdminAboutUs } from '@ui/admin/about-us/about-us.jsx'
import Collections from '@routes/collections/collections.jsx'
import { AdminContact } from '@ui/admin/contact/contact.jsx'
import Services from '@routes/services/services.jsx'
import AboutUs from '@routes/about-us/about-us.jsx'
import { AdminHome } from '@ui/admin/home/home.jsx'
import { AdminNews } from '@ui/admin/news/news.jsx'
import Contact from '@routes/contact/contact.jsx'
import { Route, Routes } from "react-router-dom"
import SingIn from '@ui/sign-in/sing-in.jsx'
import Home from '@routes/home/home.jsx'
import News from '@routes/news/news.jsx'
import ErrorPage from './error.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/news" element={<News />} />
      <Route path="/admin/sign-in" element={<SingIn />} />
      <Route path="/admin/dashboard/home" element={<AdminHome />} />
      <Route path="/admin/dashboard/about-us" element={<AdminAboutUs />} />
      <Route path="/admin/dashboard/services" element={<AdminServices />} />
      <Route path="/admin/dashboard/contact" element={<AdminContact />} />
      <Route path="/admin/dashboard/collections" element={<AdminCollections />} />
      <Route path="/admin/dashboard/news" element={<AdminNews />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
