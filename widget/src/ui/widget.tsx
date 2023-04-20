import { keyframes, styled } from "goober";

export interface WidgetProps {
  "data-visible"?: boolean;
}

export const Widget = styled("div")<WidgetProps>(({ theme: t, ...props }) => {
  const show = !("data-visible" in props) || props["data-visible"];
  return {
    borderColor: t.colors.gray[100],
    borderRadius: t.radius.lg,
    borderWidth: t.sizes.px,
    boxShadow: t.shadows.lg,
    maxWidth: t.sizes.lg,
    opacity: show ? 1 : 0,
    padding: t.sizes[4],
    position: "absolute",
    pointerEvents: show ? "auto" : "none",
    bottom: t.sizes[4],
    right: t.sizes[4],

    animationName: show ? widgetKeyframes.show : widgetKeyframes.hide,
    animationDuration: t.transition.duration.fast,
    animationTimingFunction: t.transition.easing["ease-out"],

    transitionProperty: "all",
    transitionDuration: t.transition.duration.fast,
    transitionTimingFunction: t.transition.easing["ease-out"],

    "&:hover": {
      boxShadow: t.shadows["2xl"],
      transform: "translateY(-1px)",
    },

    "& > * + *": {
      marginBlockStart: t.spacing[1],
    },
  };
});

const widgetKeyframes = {
  show: keyframes({
    "0%": {
      opacity: 0,
      transform: "translateY(8px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0px)",
    },
  }),
  hide: keyframes({
    "0%": {
      opacity: 1,
      transform: "translateY(0px)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(8px)",
    },
  }),
};
