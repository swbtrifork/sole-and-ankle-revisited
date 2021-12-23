/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from "@reach/dialog";
import React from "react";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay
      onDismiss={onDismiss}
      style={{ background: "hsla(0, 100%, 100%, 0.9)", height: "1000px" }}
      isOpen={isOpen}
    >
      <DialogContent
        style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
      >
        <p>
          The overlay styles are a white fade instead of the default black fade.
        </p>
        <button onClick={onDismiss}>Very nice.</button>
      </DialogContent>
    </DialogOverlay>
    // <div>
    //   <button onClick={onDismiss}>Dismiss menu</button>
    //   <nav>
    //     <a href="/sale">Sale</a>
    //     <a href="/new">New&nbsp;Releases</a>
    //     <a href="/men">Men</a>
    //     <a href="/women">Women</a>
    //     <a href="/kids">Kids</a>
    //     <a href="/collections">Collections</a>
    //   </nav>
    //   <footer>
    //     <a href="/terms">Terms and Conditions</a>
    //     <a href="/privacy">Privacy Policy</a>
    //     <a href="/contact">Contact Us</a>
    //   </footer>
    // </div>
  );
};

export default MobileMenu;
