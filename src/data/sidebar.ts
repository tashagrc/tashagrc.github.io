import { LuUser, LuWrench, LuNewspaper } from "react-icons/lu";

export const sidebar = {
  userName: `Natasha Radika`,
  profileImage: `/images/profile.jpg`,
  sections: [
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `Articles`,
      url: `articles`,
      icon: LuNewspaper
    }
  ]
};