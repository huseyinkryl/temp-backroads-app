import React from 'react'
import { footerLinks } from '../data'
import PageLink from './PageLink'

const FooterLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="footer-links">
      {footerLinks.map((link) => {
        return <PageLink key={link.id} itemClass={itemClass} link={link} />
      })}
    </ul>
  )
}

export default FooterLinks
