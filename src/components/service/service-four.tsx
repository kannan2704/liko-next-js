import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "AI Voice Agents",
    desc: "Our AI voice agents handle inbound and outbound calls 24/7 — booking appointments, answering FAQs, and qualifying leads so your team can focus on what matters.",
    category: ["Inbound Calls", "Outbound Follow-ups", "Appointment Booking"],
  },
  {
    id: 2,
    title: "Workflow Automation",
    desc: "We connect your existing tools and automate repetitive tasks — from CRM updates and email sequences to invoice processing and reporting.",
    category: ["CRM Integration", "Email Automation", "Lead Nurturing"],
  },
  {
    id: 3,
    title: "AI Consultation",
    desc: "Not sure where to start? We audit your business processes, identify automation opportunities, and build a clear roadmap to save you time and money.",
    category: ["Process Audit", "AI Roadmap", "ROI Analysis"],
  },
];

export default function ServiceFour() {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span><FirstBracket /></span>
                <span className="tp-subtitle-text tp_text_invert">What we offer</span>
                <span><FirstBracketTwo /></span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Intelligent <br /> Automation Agency
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/contact">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link className="tp-btn-zikzak-sm p-relative" href="/contact">
                    <span className="zikzak-content">
                      Get <br /> Started
                      <RightArrow clr="currentColor" />
                    </span>
                    <span><SvgBg /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}