import SHOP from "./Assets/Projects/Meraki.jpg";
import TODO from "./Assets/Projects/AWS.jpg";
import TASK from "./Assets/Projects/AD.jpg";


export const PROJECTS = [
  {
    image: SHOP,
    name: "Meraki Dashboard Automation",
    technologyUsed: "Ansible, Git/GitHub, Powershell, Meraki APi Integration, ",
    description: "Developed end-to-end automation for managing Meraki network access points using PowerShell and Ansible. Integrated Meraki Dashboard API to fetch device status, automate reboots, and generate custom reports. Streamlined processes with CSV exports and proactive email notifications, reducing manual intervention by 80% and minimizing network downtime through efficient monitoring and automation.",
    //url: "https://shophouse-local.onrender.com/",
  },
  {
    image: TASK,
    name: "Azure AD and Stale Accounts Cleanup Automation",
    technologyUsed: "PowerShell, Azure AD, Microsoft Graph API, Git/GitHub",
    description: "Developed a PowerShell script to automate the cleanup of stale accounts in Azure AD. The script fetches user details from Azure AD using Microsoft Graph API, identifies inactive accounts based on last login date, and disables them. Scheduled the script to run daily, reducing the risk of unauthorized access and ensuring compliance with security policies.",
    //url: "https://text-mate.vercel.app/",
  },
  {
    image: TODO,
    name: "AWS Cloud Infrastructure Automation",
    technologyUsed: "Python, Ansible, AWS, Git/GitHub",
    description: "Automated the deployment of AWS cloud infrastructure using Python and Ansible. Developed playbooks to provision EC2 instances, configure security groups, and deploy applications. Integrated with AWS CLI to manage resources, monitor performance, and ensure high availability. Reduced deployment time by 50% and improved scalability by automating resource provisioning.",
    //url: "https://task-tracker-gept.onrender.com/",
  }
];

export const SKILLS = [
  { name: "Python", initialRating: 4 },
  { name: "PowerShell", initialRating: 3 },
  { name: "MySQL", initialRating: 3 },
  { name: "MSSQL", initialRating: 3 },
  { name: "DBMS", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 2 },
  { name: "JavaScript", initialRating: 3 },
  { name: "ReactJs", initialRating: 3 },
  { name: "PHP", initialRating: 3 },
  { name: "Ansible", initialRating: 3 },
  { name: "Docker", initialRating: 2 },
  { name: "Git/GitHub", initialRating: 3 },
];

export const TOOLS = [
  "Visual Studio Code",
  "Git",
  "Ansible",
  "Docker",
  "Linux Terminal",
  "Vercel for Hosting",
  "MySQL/MSSQL for Database",
]
