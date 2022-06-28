import React from 'react'
import ContactSec from "./ContactSec"
function Footer() {
  return (
    <div className="footer">
      Footer
      <a href="https://iconscout.com/icons/whatsapp" target="_blank">
        Whatsapp Icon
      </a>{" "}
      by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{" "}
      on <a href="https://iconscout.com">IconScout</a>
      <ContactSec />
    </div>
  );
}

export default Footer