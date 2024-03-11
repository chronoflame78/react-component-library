import * as SVGComponents from "../../styles/svgIcons";
import featureMailboxImage from '../../assets/feature_Mailbox.png';
import featureFEImage from '../../assets/feature_FreightEstimator.png';
import featureSchedulingImage from '../../assets/feature_Scheduling.png';
import featureVMSImage from '../../assets/feature_VMS.png';
import featureProfileImage from '../../assets/feature_Profile.png';
import featureMarketplaceImage from '../../assets/feature_Marketplace.png';
import featureMailTemplateImage from '../../assets/feature_MailTemplate.png';
import featureTutorialImage from '../../assets/feature_Tutorial.png';

export const skillItems = [
    {
      itemName: "React",
      logo: <SVGComponents.LogoReact className="logo-react"/>
    },
    {
      itemName: "Javascript",
      logo: <SVGComponents.LogoJS className="logo-javascript"/>
    },
    {
      itemName: "Typescript",
      logo: <SVGComponents.LogoTS className="logo-typescript"/>
    },
    {
      itemName: "Redux",
      logo: <SVGComponents.LogoRedux className="logo-redux"/>
    },
    {
      itemName: "HTML",
      logo: <SVGComponents.LogoHTML className="logo-html"/>
    },
    {
      itemName: "CSS",
      logo: <SVGComponents.LogoCSS className="logo-css"/>
    },
    {
      itemName: "Jest",
      logo: <SVGComponents.LogoJest className="logo-jest"/>
    },
    {
      itemName: "Git",
      logo: <SVGComponents.LogoGit className="logo-git"/>
    }
]

export const workExperienceItems = [
  {
    period: "2019 - 2020",
    logo: <SVGComponents.LogoFPTSoftware className="logo-fpt"/>,
    position: "Intern Web Developer",
    company: "FPT Software",
    link: "https://fptsoftware.com/"
  },
  {
    period: "2020 - 2021",
    logo: <SVGComponents.LogoFPTSoftware className="logo-fpt"/>,
    position: "Junior Front-end Developer",
    company: "FPT Software",
    link: "https://fptsoftware.com/"
  },
  {
    period: "2021 - now",
    logo: <SVGComponents.LogoKraken className="logo-kraken"/>,
    position: "Front-end Developer",
    company: "Kraken",
    link: "https://www.krakenconnect.com/"
  },
]

export const recentWorkItems = [
  {
    img: featureMailboxImage,
    name: "Mailbox",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1906-123327&mode=design&t=7VNO0YBzqUalLCPY-0"
  },
  {
    img: featureFEImage,
    name: "Freight Estimator",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1613-112843&mode=design&t=6xOnFWQbuemFUbk3-0"
  },
  {
    img: featureSchedulingImage,
    name: "Scheduling",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=203-62921&mode=design&t=6xOnFWQbuemFUbk3-0"
  },
  {
    img: featureVMSImage,
    name: "Voyage Management System",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1622-131064&mode=design&t=PyI7QLoQTXPyaKi1-0"
  },
  {
    img: featureProfileImage,
    name: "User Profile",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1176-80155&mode=design&t=pPDhrW2abiKLH0OP-0"
  },
  {
    img: featureMarketplaceImage,
    name: "Marketplace",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1720-20163&mode=design&t=pPDhrW2abiKLH0OP-0"
  },
  {
    img: featureMailTemplateImage,
    name: "Custom Email Template",
    link: "https://www.figma.com/file/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=7-40476&mode=design&t=PhfCNb7ZqqAyx65G-0"
  },
  {
    img: featureTutorialImage,
    name: "Onboarding Tutorial",
    link: "https://www.figma.com/proto/81EplIY0c709M1QVQGwVWO/Kraken-Master?type=design&node-id=1174-86999&t=PhfCNb7ZqqAyx65G-0&scaling=min-zoom&page-id=1166%3A75711&starting-point-node-id=1174%3A86999"
  },
]