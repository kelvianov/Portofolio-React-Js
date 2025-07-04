import React from "react";
import "../styles/BrandLogos.css";

const brands = [
  {
    name: "Basel",
    img: null,
    style: {},
    textClass: "brand-bold"
  },
  {
    name: "theo",
    img: null,
    style: {},
    textClass: "brand-script"
  },
  {
    name: "oslo.",
    img: null,
    style: {},
    textClass: "brand-oslo"
  },
  {
    name: "Cairo",
    img: null,
    style: {},
    textClass: "brand-cairo"
  }
];

const BrandLogos = () => (
  <div className="brand-logos-section">
    {brands.map((brand) => (
      <div className="brand-card" key={brand.name}>
        <span className={`brand-text ${brand.textClass}`}>{brand.name}</span>
      </div>
    ))}
  </div>
);

export default BrandLogos;
