import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useAnimation() {
 useLayoutEffect(() => {
  gsap.set(".birds", {
   transformOrigin: "bottom right",
  });

  gsap.set("#navbar", {
   translateY: -100,
   opacity: 0,
  });

  gsap.set("#title", {
   translateY: 100,
   opacity: 0,
  });

  gsap.set("#cta", {
   translateY: 100,
   opacity: 0,
  });
 }, []);

 useLayoutEffect(() => {
  const bgTimeline = gsap.timeline();

  function changeBgColor() {
   const tl = gsap.timeline({
    defaults: {
     duration: 3,
    },
   });

   const stops = document.querySelectorAll("#linear-gradient stop");

   const attrs = [
    { color: "#FFC960", offset: "0" },
    {
     color: "#efd483",
     offset: "0.3125",
    },
    {
     color: "#DEF5AB",
     offset: "0.588542",
    },
    {
     color: "#B6F1A4",
     offset: "0.88",
    },
    {
     color: "#A9EFA2",
     offset: "1",
    },
   ];

   for (let i = 0; i < stops.length; i++) {
    tl.to(stops[i], {
     attr: {
      "stop-color": attrs[i].color,
      offset: attrs[i].offset,
     },
    });
   }

   return tl;
  }

  bgTimeline
   .add(changeBgColor())
   .to(
    ".mountain",
    {
     transformOrigin: "center center",
    },
    0
   )
   .to(
    ".sun",
    {
     duration: 4,
     xPercent: 220,
     yPercent: 160,
     scale: 1.2,
    },
    0
   )
   .to(
    ".sun-flare",
    {
     duration: 50,
     xPercent: 240,
     yPercent: 110,
     scale: 1,
    },
    0
   )
   .to(
    ".mountain",
    {
     duration: 4,
     xPercent: 10,
     yPercent: 60,
     scale: 1.2,
    },
    0
   )
   .to(
    ".cloud",
    {
     duration: 4,
     yPercent: 100,
     xPercent: 0,
     scale: 1.1,
    },
    0
   )
   .to(
    ".birds",
    {
     duration: 20,
     yPercent: 200,
     opacity: 0,
     scale: 0,
    },
    0
   )
   .to(
    ".tree",
    {
     duration: 4,
     xPercent: -15,
     yPercent: -15,
     scale: 1.4,
    },
    0
   )
   .to(
    ".tree-down",
    {
     duration: 4,
     xPercent: 30,
     yPercent: 10,
     scale: 1.1,
    },
    0
   )
   .to(
    "#navbar",
    {
     translateY: 0,
     opacity: 1,
     duration: 2,
    },
    3
   )
   .to(
    "#title",
    {
     translateY: 0,
     duration: 2,
     opacity: 1,
    },
    4
   )
   .to(
    "#cta",
    {
     translateY: 0,
     duration: 2,
     opacity: 1,
    },
    5
   );
 }, []);
}
