import React from "react";
import "../styles/BrandLogos.css";

const brands = [
  {
    name: "Basel",
    textClass: "brand-bold"
  },
  {
    name: "theo",
    textClass: "brand-script"
  },
  {
    name: "oslo.",
    textClass: "brand-oslo"
  },
  {
    name: "Cairo",
    textClass: "brand-cairo"
  },
  {
    name: "Manila.",
    textClass: "brand-bold"
  }
];

const BrandLogos = () => (
  <div className="brand-logos-marquee-wrapper">
    <div className="brand-logos-section brand-logos-marquee">
      {brands.concat(brands).map((brand, idx) => (
        <div className="brand-card" key={brand.name + idx}>
          <span className={`brand-text ${brand.textClass}`}>{brand.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BrandLogos;
