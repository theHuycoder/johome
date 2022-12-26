import React, { useEffect, useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useResizeDetector } from "react-resize-detector";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import debounce from "lodash.debounce";
import { EmblaOptionsType } from "embla-carousel";

interface Slide {
 key: string | number;
 onClick?: () => void;
}

interface SlideComponentProps extends Record<string, unknown> {
 onClick?: () => void;
 mx?: number;
}
interface CarouselProps {
 selectedIndex?: number;
 slides?: Slide[];
 options?: EmblaOptionsType;
 onSelect?(...args: unknown[]): unknown;
 onSettle?(...args: unknown[]): unknown;
 onInit?(...args: unknown[]): unknown;
 onReInit?(...args: unknown[]): unknown;
 onResize?(...args: unknown[]): unknown;
 spacing?: number;
 scrollDelay?: number;
 clickDelay?: number;
 scrollOnClick?: boolean;
 SlideComponent?: React.ElementType<SlideComponentProps>;
 alignItems?:
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline"
  | "initial"
  | "inherit";
}

const Carousel = ({
 selectedIndex,
 slides = [],
 spacing,
 scrollOnClick,
 onSelect,
 onSettle,
 onInit,
 onReInit,
 onResize,
 options = {},
 SlideComponent,
 scrollDelay = 0,
 clickDelay = 0,
 alignItems = "center",

 ...props
}: CarouselProps) => {
 const [controllerRef, controller] = useEmblaCarousel(
  {
   inViewThreshold: 1.0,
   speed: 25,
   ...options,
  },
  [WheelGesturesPlugin()]
 );

 // OnSelect fires instantly by default which is too fast in most cases.
 const debouncedOnSelect = useMemo(
  () => onSelect && debounce(onSelect, scrollDelay),
  [onSelect, scrollDelay]
 );
 const debouncedOnSettle = useMemo(
  () => onSettle && debounce(onSettle, scrollDelay),
  [onSettle, scrollDelay]
 );

 const delayedScrollTo = useMemo(
  () => controller && debounce(controller.scrollTo, clickDelay),
  [controller, clickDelay]
 );
 // Enable mousewheel scroll navigation
 //  useEffect(() => controller && setupWheelGestures(controller), [controller]);

 // Forces carousel to update snap positions on slide resize.
 const [prevProgress, setProgress] = React.useState(0);
 const [minHeight, setMinHeight] = React.useState(0);

 const handleResize = useCallback(() => {
  if (!controller) return;
  setProgress(controller.scrollProgress());
  const difference = controller.scrollProgress() - prevProgress;
  const isMovingForward = prevProgress < controller.scrollProgress();
  // Only reInit if slider is not moving.
  if (
   (isMovingForward && difference < 0.02) ||
   (!isMovingForward && difference > -0.02)
  )
   controller.reInit();
 }, [controller, prevProgress]);

 useResizeDetector({
  onResize: handleResize,
  targetRef: {
   current:
    controller &&
    selectedIndex !== undefined &&
    controller.slideNodes()[selectedIndex],
  },
 });

 const { ref } = useResizeDetector({
  onResize: () => {
   if (!controller) return;
   const slideContainer =
    controller.slideNodes()[controller.selectedScrollSnap()];
   slideContainer && setMinHeight(slideContainer.clientHeight);
   onResize && onResize(controller);
  },
 });

 // Assign Handlers
 useEffect(() => {
  if (!controller) return;
  onInit && controller.on("init", () => onInit(controller));
  onReInit && controller.on("reInit", () => onReInit(controller));
  onSelect && controller.on("select", () => debouncedOnSelect(controller));
  onSettle && controller.on("settle", () => debouncedOnSettle(controller));
 }, [
  controller,
  onInit,
  onReInit,
  onResize,
  onSelect,
  debouncedOnSelect,
  onSettle,
  debouncedOnSettle,
 ]);

 // Update direction and scroll to slide if required.
 useEffect(() => {
  if (!controller || selectedIndex === undefined) return;
  const isForward =
   controller?.internalEngine().indexPrevious.get() < selectedIndex;
  isForward
   ? delayedScrollTo(selectedIndex)
   : controller.scrollTo(selectedIndex);
 }, [controller, delayedScrollTo, selectedIndex]);

 return (
  // @ts-ignore
  <Box ref={controllerRef} {...props}>
   <Box
    // @ts-ignore
    ref={ref}
    display="flex"
    alignItems={alignItems}
    minHeight={minHeight}
    className="carouselContainer"
   >
    {SlideComponent &&
     slides.map((slide, idx) => {
      const { key, ...rest } = slide;
      return (
       <SlideComponent
        key={key}
        {...rest}
        {...{
         onClick: () => {
          // Prevent onClick during scroll.
          if (!controller?.clickAllowed()) return;

          slide.onClick && slide.onClick();
          scrollOnClick && controller.scrollTo(idx);
         },
         mx: spacing,
        }}
       />
      );
     })}
   </Box>
  </Box>
 );
};

export default Carousel;
