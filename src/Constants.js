import SHOP from "./Assets/Projects/Meraki.jpg";
import TODO from "./Assets/Projects/AWS.jpg";
import TASK from "./Assets/Projects/AD.jpg";


export const PROJECTS = [
  {
    image: SHOP,
    name: "Meraki Dashboard Network Automation",
    technologyUsed: "PowerShell, Ansible, Meraki Dashboard API, Git/GitHub, CSV Automation",
    description:
      "Built an end-to-end automation workflow for managing Cisco Meraki access points using PowerShell and Ansible. Integrated Meraki Dashboard API to fetch device status, perform bulk reboots, generate CSV reports, and trigger automated email alerts. Eliminated repeated manual effort and improved network reliability through proactive monitoring and automated remediation.",
  },

  {
    image: TASK,
    name: "Guest User & Stale Account Cleanup Automation (AD + Entra ID)",
    technologyUsed: "PowerShell, Active Directory, Entra ID, Microsoft Graph API, Git/GitHub",
    description:
      "Automated the cleanup and lifecycle management of Guest and Stale accounts across Active Directory and Entra ID. The PowerShell workflow identifies inactive users, disables accounts, updates group memberships, and sends automated email notifications to stakeholders. Reduced security risks and improved compliance through consistent identity hygiene.",
  },

  {
    image: TODO,
    name: "Synthetic Monitoring System for Enterprise Applications",
    technologyUsed: "Python, PowerShell, Selenium, SMTP Email Alerts, Task Scheduler, Git/GitHub", Jenkins,
    description:
      "Developed a lightweight synthetic monitoring solution to check URL availability, business flows (Add-to-Cart, Checkout), and API responsiveness. Implemented custom alerting, failure thresholds, and automated reporting via email. Designed for zero-cost internal monitoring after migrating from New Relic, improving reliability while reducing operational expenses.",
  },

  {
    image: TASK,
    name: "AWS Cloud Infrastructure Automation",
    technologyUsed: "Terraform, Ansible, Jenkins, AWS (EC2, VPC, Security Groups), Git/GitHub",
    description:
      "Automated provisioning of AWS cloud infrastructure using Terraform modules and Ansible playbooks. Deployed EC2 instances, configured networking, implemented tagging standards, and automated post-deployment configuration. Improved deployment consistency, reduced setup time, and established a reusable Infrastructure-as-Code foundation.",
  },

  {
    image: SHOP,
    name: "Kubernetes Deployment Pipeline on EKS",
    technologyUsed: "Jenkins, Docker, Kubernetes (EKS), Helm, Git/GitHub",
    description:
      "Designed and implemented a CI/CD pipeline for containerized microservices deployed on Amazon EKS. Automated image builds, Helm-based deployments, environment rollouts, and rollback strategies. Enabled faster release cycles, standardized deployment processes, and improved platform reliability.",
  },
];


export const SKILLS = [
  { name: "Python", initialRating: 4 },
  { name: "PowerShell", initialRating: 4 },
  { name: "Bash / Shell Scripting", initialRating: 4 },

  { name: "AWS", initialRating: 4 },
  { name: "Terraform", initialRating: 4 },
  { name: "Ansible", initialRating: 4 },
  { name: "Linux", initialRating: 4 },

  { name: "Docker", initialRating: 4 },
  { name: "Kubernetes (EKS)", initialRating: 3 },

  { name: "Jenkins", initialRating: 4 },
  { name: "Git/GitHub", initialRating: 4 },

  { name: "SonarQube", initialRating: 3 },
  { name: "Trivy", initialRating: 3 },

  { name: "Grafana", initialRating: 3 },
  { name: "Prometheus", initialRating: 3 },
  { name: "Synthetic Monitoring", initialRating: 4 },

  { name: "Networking", initialRating: 3 },
  { name: "Active Directory Automation", initialRating: 4 },
  { name: "O365 Automation", initialRating: 3 },

  { name: "HTML", initialRating: 4 },
  { name: "CSS", initialRating: 3 },
  { name: "JavaScript", initialRating: 3 },
];


export const TOOLS = [
  "Visual Studio Code",
  "Git",
  "Ansible",
  "Docker",
  "Linux Terminal",
  "Vercel for Hosting",
  "MSSQL for Database",
]
