import {Button} from "@mui/material";
import {useEffect, useState} from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }


  return (
    <Button
      disableRipple
      disableTouchRipple
      onClick={onClick}
      sx={{position: 'fixed', zIndex: 9999, bottom: "5%", right: "5%", transition: "all 0.4s", opacity: show ? 1 : 0}}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="21" fill="#9CA3AF"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M13.6376 24.8624C14.321 25.5459 15.429 25.5459 16.1124 24.8624L21 19.9749L25.8876 24.8624C26.571 25.5459 27.679 25.5459 28.3624 24.8624C29.0459 24.179 29.0459 23.071 28.3624 22.3876L22.2374 16.2626C21.554 15.5791 20.446 15.5791 19.7626 16.2626L13.6376 22.3876C12.9541 23.071 12.9541 24.179 13.6376 24.8624Z"
              fill="white"/>
      </svg>
    </Button>
  )
}