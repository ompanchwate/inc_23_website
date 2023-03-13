import './styles/sponsors.css';
import React from "react";
// import cion from "../../assets/images/cion.svg";
// import pubmatic from "../../assets/images/PubMatic_Logo.svg";
// import algoanalytics from "../../assets/images/algoanalytics.png";
// import budhani from "../../assets/images/budhani.jpeg";
// import harbinger from "../../assets/images/harbinger.png";
// import dummy from '../assets/images/logo.png'


const titleSponsors = [
  {
    name: "CION EQ",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1678003690/Uptiq_logo_web_address_full_color_1_d40kui.svg',
    website: "https://www.uptiq.ai/",
  },

  {
    name: "eQ Technologic",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914533/eq_logo_transparent_highres_fagqvq.png',
    website: "https://www.1eq.com/",
  },
];

const coSponsors = [
  {
    name: "Bajaj Finserve",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914535/BFS_Logo-03_r19rxg.png',
    website: "https://www.bajajfinserv.in/",
  },
];

const educationSponsors = [
  {
    name: "Imocha",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914534/iMocha-New-Logo_hhndvh.png',
    website: "https://www.imocha.io/",
  },
  {
    name: "Sarvatra",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914537/logo_sarvatra_ww7sgb.png',
    website: "https://sarvatra.tech/",
  },
  {
    name: "Airvana",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914534/Airavana-Logo_cju0x1.png',
    website: "https://airvanaair.com/",
  },
];

const eventSponsors = [
  {
    name: "Agcocorp",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914533/agco-logo_r0fg2s.png',
    website: "https://www.agcocorp.com/",
  },
];

const eventSponsors2 = [
  {
    name: "Veritas",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914537/Veritas_Logo_RED_1000x197_wzcrl7.jpg',
    website: "https://www.veritas.com/",
  },
];

const Other = [
  {
    name: "Foodhealth",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914533/foldhealth.jpeg_onmmqj.jpg',
    website: "https://www.fold.health/",
  },
  {
    name: "Zbyte",
    logo: 'https://drive.google.com/uc?export=view&id=1d9g1gGyF7fNUFaNCJqj77ADdZk77uCKQ',
    website: "https://www.ciondigital.com/",
  },
  {
    name: "Algorithm Analytics",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914536/AlgoAnalytics_Logo_1_j2xxp4.png',
    website: "https://www.algoanalytics.com/",
  },
];

const Assosiation = [
  {
    name: "IEEE",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914533/PISB_color_qbyv80.png',
    website: "https://pictieee.in/",
  },
  {
    name: "ACM",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914536/Pasc_gafhcj.png',
    website: "https://pict.acm.org/",
  },
  {
    name: "CSI",
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1677914533/pcsb_umchpe.jpg',
    website: "https://www.pcsbxenia.com/",
  },
];

const getList1 = (sponsorsArray) => {
  const list = sponsorsArray.map((sponsor) => {
    return (
      <a href={sponsor.website}>
      <div className="sponsor-card">

        {sponsor.website && (
          <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
            <div
              className="logo-container hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl"
              style={{ backgroundImage: `url(${sponsor.logo})` }}
            ></div>
          </a>
        )}

        <p className="sponsor-name">{sponsor.name}</p>
        {/* <div className="sponsor-social">
          {sponsor.website && (
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
        </div> */}
        </div>
        </a>
    );
  });
  return list;
};

const titleSponsorsList = getList1(titleSponsors);
const coSponsorsList = getList1(coSponsors);
const educationSponsorsList = getList1(educationSponsors);
const ImpetusSponsorsList = getList1(eventSponsors);
const PradnyaSponsorsList = getList1(eventSponsors2);
const OtherSponsorsList = getList1(Other);
const AssosiationSponsorsList = getList1(Assosiation);

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div className="text-6xl font-semibold text-center text-white pb-12">
        Sponsors
      </div>
      <h1 className="sponsors-head">Title Sponsor</h1>
      <div className="sponsors-list title-sponsors">{titleSponsorsList}</div>
      <div className="sponsors-head">Co Sponsors And Concept Sponsor</div>
      <div className="sponsors-list">{coSponsorsList}</div>
      <div className="sponsors-head">CO Sponsors OF INC</div>
      <div className="sponsors-list">{educationSponsorsList}</div>
      <div className="sponsors-head">Impetus Sponsor</div>
      <div className="sponsors-list">{ImpetusSponsorsList}</div>
      <div className="sponsors-head">Concept Sponsor</div>
      <div className="sponsors-list">{PradnyaSponsorsList}</div>
      <div className="sponsors-head">Other Sponsors</div>
      <div className="sponsors-list">{OtherSponsorsList}</div>
      <div className="sponsors-head">In Assosiation With</div>
      <div className="sponsors-list">{AssosiationSponsorsList}</div>
    </div>
  );
}


