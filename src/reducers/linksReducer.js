export default function reducer(
  state = {
    links: [
      {
        id: "e6eafa77-137e-4cac-908f-1dca1c5343c1",
        url: "http://jensravens.com",
        title: "Jens Ravens",
        description:
          "I'm a Berlin-based iOS and Ruby on Rails developer working for nerdgeschoss. Also I'm organizing the monthly swift.berlin meetup and I'm obsessed with application architecture and maintainable code bases in Swift and Ruby on Rails.\n",
        image_url: "http://jensravens.de/img/profile.jpg",
        created_at: "2018-09-05T11:05:51.462Z",
        updated_at: "2018-09-05T11:50:38.338Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "893ca4ce-5d7e-434a-8128-1a3b01dbb3be",
        url: "http://nerdgeschoss.de",
        title: "nerdgeschoss",
        description:
          "We're a product development studio, busy designing and building tomorrow's apps.",
        image_url:
          "https://nerdgeschoss.de/de9b1b02ad130cc0c842cda20352c713.svg",
        created_at: "2018-09-05T11:03:40.440Z",
        updated_at: "2018-09-06T06:46:28.237Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "b23776c4-6180-4990-b286-325f2e9e3285",
        url: "www.facebook.com",
        title: "Facebook - Log In or Sign Up",
        description:
          "Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
        image_url: "https://www.facebook.com/images/fb_icon_325x325.png",
        created_at: "2018-09-13T09:25:36.793Z",
        updated_at: "2018-09-13T09:25:38.620Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "9b9edd8e-c875-49a1-b155-ca5d3c80588a",
        url: "www.medium.com",
        title:
          "Medium – a place to read and write big ideas and important stories",
        description:
          "Welcome to Medium, a place where words matter. Medium taps into the brains of the world’s most insightful writers, thinkers, and storytellers to bring you the smartest takes on topics that matter. So whatever your interest, you can always find fresh thinking and unique perspectives.",
        image_url:
          "https://cdn-images-1.medium.com/max/1200/1*L0zf9ap8xoInVbm78siJBA.png",
        created_at: "2018-09-13T09:54:36.274Z",
        updated_at: "2018-09-13T09:54:37.181Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "c61ea2c8-65e2-4c05-8506-c1d26b3c2a9f",
        url: "www.medium.com",
        title:
          "Medium – a place to read and write big ideas and important stories",
        description:
          "Welcome to Medium, a place where words matter. Medium taps into the brains of the world’s most insightful writers, thinkers, and storytellers to bring you the smartest takes on topics that matter. So whatever your interest, you can always find fresh thinking and unique perspectives.",
        image_url:
          "https://cdn-images-1.medium.com/max/1200/1*L0zf9ap8xoInVbm78siJBA.png",
        created_at: "2018-09-13T09:57:01.208Z",
        updated_at: "2018-09-13T09:57:02.364Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "35bd07c2-792c-465c-8fdd-908742918a47",
        url: "www.civcic.com",
        title: null,
        description: null,
        image_url: null,
        created_at: "2018-09-13T11:31:14.716Z",
        updated_at: "2018-09-13T11:31:14.716Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "2e776739-2b41-486b-8ee5-a8a4fe6a47cb",
        url: "www.google.com",
        title: "Google",
        description: null,
        image_url:
          "http://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
        created_at: "2018-09-13T11:33:04.949Z",
        updated_at: "2018-09-13T11:33:05.088Z",
        liked: false,
        like_count: 0,
        owned: false
      },
      {
        id: "92911e62-c6ea-46f4-b640-3a5170d35bee",
        url: "www.youtube.com",
        title: "YouTube",
        description:
          "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        image_url: "https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png",
        created_at: "2018-09-13T11:34:50.245Z",
        updated_at: "2018-09-13T11:34:51.655Z",
        liked: false,
        like_count: 0,
        owned: false
      }
    ]
  },
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case "Getting_Links": {
      return {
        ...newState
      };
    }
    case "Finished_Getting_Links": {
      return {
        ...newState,
        links: action.payload
      };
    }
    case "Error_Getting_links": {
      return {
        ...newState
      };
    }
    case "Liking": {
      return {
        ...newState
      };
    }
    case "Finished_Liking": {
      return {
        ...newState
      };
    }
    case "Error_Liking": {
      return {
        ...newState
      };
    }
    case "UnLiking": {
      return {
        ...newState
      };
    }
    case "Finished_UnLiking": {
      return {
        ...newState
      };
    }
    case "Error_UnLiking": {
      return {
        ...newState
      };
    }
    case "Update_Form": {
      return {
        ...newState
      };
    }
    case "Adding_Link": {
      return {
        ...newState
      };
    }
    case "Finished_Adding_Link": {
      return {
        ...newState
      };
    }
    default: {
      return {
        ...newState
      };
    }
  }
}
