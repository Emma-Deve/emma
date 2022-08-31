import ajax from "./ajax";

const BASE = "http://localhost:3002/api/v1";

// get information
export const reqInformation = () => ajax(BASE + "/information");

// get Experience
export const reqExperience = (page) => ajax(BASE + "/experience");

// get Project
export const reqProject = (page) => ajax(BASE + "/project");

// get portfolio
export const reqPortfolio = (page) => ajax(BASE + "/portfolio");

// get skill
export const reqSkill = (page) => ajax(BASE + "/skill");
