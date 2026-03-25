import React from "react";
import { ProjectShape, RightArrow } from "../svg";
import Link from "next/link";

const industries = [
  {
    id: 1,
    icon: "🏠",
    industry: "Estate Agents",
    description: "AI-powered lead follow-up, automated property alerts, and 24/7 client communication — so you never miss a sale.",
    services: ["Lead Nurturing", "Auto Valuation Requests", "Viewing Scheduler"],
  },
  {
    id: 2,
    icon: "🍽️",
    industry: "Restaurants",
    description: "Automated reservations, WhatsApp ordering, and AI-driven customer re-engagement campaigns to keep tables full.",
    services: ["Table Booking Bot", "WhatsApp Orders", "Review Management"],
  },
  {
    id: 3,
    icon: "🏥",
    industry: "Healthcare",
    description: "Appointment reminders, patient follow-ups, and admin automation — freeing your staff to focus on care.",
    services: ["Appointment Reminders", "Patient Follow-ups", "Admin Automation"],
  },
  {
    id: 4,
    icon: "🚗",
    industry: "Transport & Taxi",
    description: "Automated booking confirmations, driver dispatch notifications, and customer updates — all hands-free.",
    services: ["Booking Confirmations", "Driver Notifications", "Customer Updates"],
  },
];

type IProps = {
  style_2?: boolean;
};

export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Industries <span>We Serve</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link className="tp-btn-zikzak p-relative" href="/contact">
                    <span className="zikzak-content">
                      Get <br /> Started
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {industries.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-2 text-center">
                    <div style={{ fontSize: "80px", lineHeight: 1 }}>{item.icon}</div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-10">
                    <div className="tp-project-3-content">
                      <h4 className="tp-project-3-title-sm" style={{ color: "#fff", fontSize: "28px", marginBottom: "12px" }}>
                        {item.industry}
                      </h4>
                      <p style={{ color: "#aaa", fontSize: "15px", lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-8 offset-md-2 offset-lg-0">
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 0" }}>
                      {item.services.map((service, i) => (
                        <span key={i} style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          color: "#ccc",
                          fontSize: "13px",
                          letterSpacing: "1px"
                        }}>
                          ✦ {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 text-center">
                    <Link href="/contact" style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      borderRadius: "4px"
                    }}>
                      Learn More →
                    </Link>
                  </div>
                </div>
                <div className="tp-project-3-border color-1 text-center">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}