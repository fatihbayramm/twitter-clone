import store from "../store";

export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/explore",
    title: "Kesfet",
    icon: {
      active: (
        <svg width={26.25} height={26.25} className="block" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          />
        </svg>
      ),
      passive: (
        <svg width={26.25} height={26.25} className="block" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/notifications",
    title: "Bildirimler",
    notification: 2,
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
          />
        </svg>
      ),
    },
  },

  {
    path: "/messages",
    title: "Mesajlar",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
          />
        </svg>
      ),
    },
  },

  {
    path: "/bookmarks",
    title: "Yer İşaretleri",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          />
        </svg>
      ),
    },
  },

  {
    path: "/verified",
    title: "Onaylanmış",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"
          />
        </svg>
      ),
    },
  },

  {
    path: () => {
      return `/${store.getState()?.auth?.currentAccount?.username}`;
    },
    title: "Profil",
    icon: {
      active: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            fill="currentColor"
            d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
          />
        </svg>
      ),
    },
  },
];

export const topics = [
  {
    title: "Gündemde",
    topic: {
      type: "tag",
      value: "TFF",
    },
    postCount: 13102,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "tag",
      value: "Futbol",
    },
    postCount: 10234,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "tag",
      value: "Galatasaray",
    },
    postCount: 7890,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "query",
      value: "Fenerabahçe",
    },
    postCount: 6500,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "query",
      value: "Beşiktaş",
    },
    postCount: 5430,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "query",
      value: "Trabzonspor",
    },
    postCount: 4350,
  },

  {
    title: "Türkiye tarihinde gündemde",
    topic: {
      type: "query",
      value: "Balıkesirspor",
    },
    postCount: 1252,
  },
];

export const colors = [
  {
    primary: "#1d9bf0",
    secondary: "#8ecdf8",
  },
  {
    primary: "#ffd400",
    secondary: "#ffea80",
  },
  {
    primary: "#f91880",
    secondary: "#fc8cc0",
  },
  {
    primary: "#7856ff",
    secondary: "#bcabff",
  },
  {
    primary: "#ff7a00",
    secondary: "#ffbd80",
  },
  {
    primary: "#00ba7c",
    secondary: "#80ddbe",
  },
];

export const fontSizes = [14, 15, 16, 18, 19];
