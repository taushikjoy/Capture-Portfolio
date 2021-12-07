export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
    // backgroundColor: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)"],
  },

  show: {
    opacity: 1,
    y: 0,
    // backgroundColor: ["hsl(55, 100%, 0%)", "hsl(55, 100%, 0%)"],

    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
    // backgroundColor: ["#555555"],
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnime = {
  hidden: {
    opacity: 0,
    y: 200,
    // backgroundColor: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)"],
  },

  show: {
    opacity: 1,
    y: 0,
    // backgroundColor: ["hsl(55, 100%, 0%)", "hsl(55, 100%, 0%)"],

    transition: {
      duration: 0.25,
    },
    // backgroundColor: ["#555555"],
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { ease: "easeIn", duration: 1 },
  },
};

export const photoAnime = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const lineAnime = {
  hidden: {
    width: "0%",
  },

  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },

  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};
