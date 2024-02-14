import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { DesktopFooter } from "../../components/DesktopFooter";
import { IpadMiniFooter } from "../../components/IpadMiniFooter";
import { IpadProFooter } from "../../components/IpadProFooter";
import { LaptopFooter } from "../../components/LaptopFooter";
import { MobileFooter } from "../../components/MobileFooter";
import { NavigationBar } from "../../components/NavigationBar";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { NavigationBarLogo4 } from "../../icons/NavigationBarLogo4";
import "./style.css";

export const DesignSystems = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="design-systems"
      style={{
        backgroundColor:
          (screenWidth >= 1024 && screenWidth < 1440) || (screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744
            ? "#000000"
            : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
            ? "#040404"
            : undefined,
      }}
    >
      <div
        className="div-2"
        style={{
          backgroundColor:
            (screenWidth >= 1024 && screenWidth < 1440) ||
            (screenWidth >= 744 && screenWidth < 1024) ||
            screenWidth < 744
              ? "#000000"
              : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
              ? "var(--primaryblack)"
              : undefined,
          height:
            screenWidth < 744
              ? "8039px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "6296px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "6001px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "7310px"
              : screenWidth >= 1920
              ? "8638px"
              : undefined,
          position:
            (screenWidth >= 1024 && screenWidth < 1440) ||
            (screenWidth >= 744 && screenWidth < 1024) ||
            screenWidth < 744
              ? "relative"
              : undefined,
          width:
            screenWidth < 744
              ? "390px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "744px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "1024px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "1440px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        {((screenWidth >= 1024 && screenWidth < 1440) ||
          (screenWidth >= 744 && screenWidth < 1024) ||
          screenWidth < 744) && (
          <div
            className="overlap-2"
            style={{
              height:
                screenWidth >= 744 && screenWidth < 1024
                  ? "3371px"
                  : screenWidth >= 1024 && screenWidth < 1440
                  ? "2962px"
                  : screenWidth < 744
                  ? "4177px"
                  : undefined,
              top:
                screenWidth >= 744 && screenWidth < 1024
                  ? "774px"
                  : screenWidth >= 1024 && screenWidth < 1440
                  ? "768px"
                  : screenWidth < 744
                  ? "895px"
                  : undefined,
              width:
                screenWidth >= 744 && screenWidth < 1024
                  ? "1026px"
                  : screenWidth >= 1024 && screenWidth < 1440
                  ? "1238px"
                  : screenWidth < 744
                  ? "604px"
                  : undefined,
            }}
          >
            <div
              className="rectangle"
              style={{
                height:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "2942px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "3359px"
                    : screenWidth < 744
                    ? "4153px"
                    : undefined,
                width:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "1024px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "744px"
                    : screenWidth < 744
                    ? "390px"
                    : undefined,
              }}
            />
            {((screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744) && (
              <>
                <div
                  className="group-48"
                  style={{
                    color: screenWidth < 744 ? "var(--primaryblack)" : undefined,
                    fontFamily: screenWidth < 744 ? "var(--mobile-title-h2-font-family)" : undefined,
                    fontSize: screenWidth < 744 ? "var(--mobile-title-h2-font-size)" : undefined,
                    fontStyle: screenWidth < 744 ? "var(--mobile-title-h2-font-style)" : undefined,
                    fontWeight: screenWidth < 744 ? "var(--mobile-title-h2-font-weight)" : undefined,
                    height: screenWidth >= 744 && screenWidth < 1024 ? "280px" : undefined,
                    left: screenWidth >= 744 && screenWidth < 1024 ? "64px" : screenWidth < 744 ? "24px" : undefined,
                    letterSpacing: screenWidth < 744 ? "var(--mobile-title-h2-letter-spacing)" : undefined,
                    lineHeight: screenWidth < 744 ? "var(--mobile-title-h2-line-height)" : undefined,
                    top: screenWidth >= 744 && screenWidth < 1024 ? "212px" : screenWidth < 744 ? "63px" : undefined,
                    width: screenWidth >= 744 && screenWidth < 1024 ? "592px" : screenWidth < 744 ? "342px" : undefined,
                  }}
                >
                  {screenWidth >= 744 && screenWidth < 1024 && (
                    <div className="group-49">
                      <div className="group-50">
                        <img
                          className="line-14"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-262-1.svg"
                        />
                        <div className="group-51">
                          <div className="text-wrapper-85">Inconsistent user experience.</div>
                          <div className="text-wrapper-86">/01</div>
                        </div>
                      </div>
                      <div className="group-52">
                        <img
                          className="line-14"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-264-1.svg"
                        />
                        <div className="group-51">
                          <div className="text-wrapper-85">
                            Design-led delays in <br />
                            go-to-market.
                          </div>
                          <div className="text-wrapper-87">/02</div>
                        </div>
                      </div>
                      <div className="group-53">
                        <img
                          className="line-14"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-262-1.svg"
                        />
                        <div className="group-51">
                          <div className="text-wrapper-85">Disjointed digital brand image.</div>
                          <div className="text-wrapper-88">/03</div>
                        </div>
                      </div>
                      <div className="group-54">
                        <img
                          className="line-14"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-264-1.svg"
                        />
                        <div className="group-51">
                          <div className="text-wrapper-85">Disconnected dev-design sprints.</div>
                          <div className="text-wrapper-88">/04</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {screenWidth < 744 && (
                    <p className="text-wrapper-179">
                      A design system for website &amp; apps <br />
                      is critical to resolve:
                    </p>
                  )}
                </div>
                <div
                  className="a-design-system-for"
                  style={{
                    alignItems: screenWidth < 744 ? "flex-start" : undefined,
                    color: screenWidth >= 744 && screenWidth < 1024 ? "var(--primaryblack)" : undefined,
                    display: screenWidth < 744 ? "inline-flex" : undefined,
                    flexDirection: screenWidth < 744 ? "column" : undefined,
                    fontFamily:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-font-family)" : undefined,
                    fontSize:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-font-size)" : undefined,
                    fontStyle:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-font-style)" : undefined,
                    fontWeight:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-font-weight)" : undefined,
                    gap: screenWidth < 744 ? "16px" : undefined,
                    left: screenWidth >= 744 && screenWidth < 1024 ? "64px" : screenWidth < 744 ? "24px" : undefined,
                    letterSpacing:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-letter-spacing)" : undefined,
                    lineHeight:
                      screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h2-line-height)" : undefined,
                    top: screenWidth >= 744 && screenWidth < 1024 ? "80px" : screenWidth < 744 ? "694px" : undefined,
                    width: screenWidth >= 744 && screenWidth < 1024 ? "616px" : undefined,
                  }}
                >
                  {screenWidth >= 744 && screenWidth < 1024 && (
                    <p className="text-wrapper-179">
                      A design system for website &amp; apps <br />
                      is critical to resolve:
                    </p>
                  )}

                  {screenWidth < 744 && (
                    <>
                      <p className="text-wrapper-89">A guided journey to evolve the user experience.</p>
                      <p className="text-wrapper-90">
                        Recreate the user experience of your existing applications with our tech sensitive - design
                        first process, to provide users with a contemporary and frictionless experience.
                      </p>
                    </>
                  )}
                </div>
                <div
                  className="frame"
                  style={{
                    alignItems: screenWidth >= 744 && screenWidth < 1024 ? "flex-start" : undefined,
                    display: screenWidth >= 744 && screenWidth < 1024 ? "inline-flex" : undefined,
                    flexDirection: screenWidth >= 744 && screenWidth < 1024 ? "column" : undefined,
                    gap: screenWidth >= 744 && screenWidth < 1024 ? "24px" : undefined,
                    height: screenWidth < 744 ? "408px" : undefined,
                    left: screenWidth >= 744 && screenWidth < 1024 ? "64px" : screenWidth < 744 ? "24px" : undefined,
                    top: screenWidth >= 744 && screenWidth < 1024 ? "588px" : screenWidth < 744 ? "230px" : undefined,
                    width: screenWidth < 744 ? "342px" : undefined,
                  }}
                >
                  {screenWidth >= 744 && screenWidth < 1024 && (
                    <>
                      <p className="text-wrapper-91">Our proven methodology for Design Systems.</p>
                      <p className="text-wrapper-92">
                        Redesigning a design system is a densely strategised process that involves careful planning,
                        collaboration, and iterative refinement.
                      </p>
                    </>
                  )}

                  {screenWidth < 744 && (
                    <div className="frame-2">
                      <div className="group-55">
                        <div className="text-wrapper-93">Inconsistent user experience.</div>
                        <div className="text-wrapper-94">/01</div>
                      </div>
                      <img
                        className="line-15"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-262.svg"
                      />
                      <div className="group-55">
                        <div className="text-wrapper-93">Design-led delays in go-to-market.</div>
                        <div className="text-wrapper-94">/02</div>
                      </div>
                      <img
                        className="line-15"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-262.svg"
                      />
                      <div className="group-55">
                        <div className="text-wrapper-93">Disjointed digital brand image.</div>
                        <div className="text-wrapper-94">/03</div>
                      </div>
                      <img
                        className="line-15"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-262.svg"
                      />
                      <div className="group-55">
                        <div className="text-wrapper-93">Disconnected dev-design sprints.</div>
                        <div className="text-wrapper-94">/04</div>
                      </div>
                      <img
                        className="line-15"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-262.svg"
                      />
                    </div>
                  )}
                </div>
              </>
            )}

            {screenWidth >= 1024 && screenWidth < 1440 && (
              <>
                <div className="group-56">
                  <div className="frame-wrapper">
                    <div className="frame-3">
                      <div className="group-57">
                        <div className="text-wrapper-95">Websites, apps and products</div>
                        <div className="text-wrapper-96">/01</div>
                      </div>
                      <img
                        className="line-16"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-2.svg"
                      />
                      <div className="group-57">
                        <div className="text-wrapper-95">Product teams</div>
                        <div className="text-wrapper-96">/02</div>
                      </div>
                      <img
                        className="line-16"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-2.svg"
                      />
                      <div className="group-58">
                        <div className="text-wrapper-95">
                          SaaS and Enterprise <br />
                          start-ups
                        </div>
                        <div className="text-wrapper-96">/03</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <img
                      className="line-17"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-269.svg"
                    />
                    <div className="text-wrapper-97">This is ideal for</div>
                    <img
                      className="line-17"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-269.svg"
                    />
                  </div>
                  <img
                    className="line-18"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-271-2.svg"
                  />
                </div>
                <div className="group-59">
                  <img
                    className="mask-group"
                    alt="Mask group"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-18@2x.png"
                  />
                  <img
                    className="mask-group-2"
                    alt="Mask group"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-14@2x.png"
                  />
                  <div className="group-60">
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="text-wrapper-98">Phase 0</div>
                        <div className="project-planning-and">
                          Project planning and <br />
                          kick-off
                        </div>
                      </div>
                      <div className="frame-7">
                        <div className="group-61">
                          <div className="text-wrapper-99">Material download</div>
                          <div className="ellipse-12" />
                        </div>
                        <div className="group-61">
                          <div className="text-wrapper-99">Kick-off and project planning</div>
                          <div className="ellipse-12" />
                        </div>
                        <div className="group-61">
                          <div className="text-wrapper-99">Ways of working</div>
                          <div className="ellipse-12" />
                        </div>
                        <div className="group-61">
                          <div className="text-wrapper-99">Goals and objectives</div>
                          <div className="ellipse-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="group-62"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group-962@2x.png"
                  />
                  <img
                    className="line-19"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-276-2.svg"
                  />
                </div>
                <p className="a-design-system-for-2">
                  A design system for website &amp; apps <br />
                  is critical to resolve:
                </p>
              </>
            )}

            <div
              className="frame-8"
              style={{
                alignItems:
                  (screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744
                    ? "flex-start"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "center"
                    : undefined,
                gap:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "32px"
                    : screenWidth < 744
                    ? "16px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "88px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "64px"
                    : screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "58px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "1559px"
                    : screenWidth < 744
                    ? "1481px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "264px"
                    : undefined,
              }}
            >
              {screenWidth >= 744 && screenWidth < 1024 && (
                <>
                  <div className="frame-9">
                    <div className="group-63">
                      <div className="text-wrapper-100">Research first.</div>
                      <div className="text-wrapper-88">/01</div>
                    </div>
                    <p className="text-wrapper-101">
                      Our research is designed to interview stakeholders, end-users, and decision-makers in order to
                      grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns with
                      business goals, ensuring the Design system meets user expectations and industry standards.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                  <div className="frame-9">
                    <div className="group-63">
                      <div className="text-wrapper-100">Brand-centric DLS.</div>
                      <div className="text-wrapper-88">/02</div>
                    </div>
                    <p className="text-wrapper-101">
                      To reinforce the brand&#39;s visual identity, values and tone of voice,&nbsp;&nbsp;we build
                      consistency in the use of brand colours, typography, and imagery, coupled with intuitive
                      interactions to foster brand affinity and loyalty across all touchpoints.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                  <div className="frame-9">
                    <div className="group-63">
                      <div className="text-wrapper-100">Design principles and guidelines.</div>
                      <div className="text-wrapper-88">/03</div>
                    </div>
                    <p className="text-wrapper-101">
                      Based on design trends, research outcomes and brand essence, we identify core values, guidelines
                      and themes that drive the design creation process and craft an experience that is unique to the
                      brand for its users.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                  <div className="frame-9">
                    <div className="group-63">
                      <div className="text-wrapper-100">Modularity for multiple use-cases.</div>
                      <div className="text-wrapper-88">/04</div>
                    </div>
                    <p className="text-wrapper-101">
                      We adopt a modular process of Design System creation. Based on use-cases and development
                      prioritization we create components, patterns and templates that empower the design and dev teams
                      to scale the sprint outcomes exponentially.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                  <div className="frame-9">
                    <div className="group-63">
                      <div className="text-wrapper-100">Cross-functional collaboration.</div>
                      <div className="text-wrapper-88">/05</div>
                    </div>
                    <p className="text-wrapper-101">
                      Our Design System collaboration is characterized by an inclusive working approach, fostering
                      outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go beyond
                      expectations, ensuring a synergy of creativity and practicality for optimal Design System
                      performance.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                  <div className="frame-9">
                    <div className="group-63">
                      <p className="text-wrapper-100">Version control and documentation handover.</p>
                      <div className="text-wrapper-88">/06</div>
                    </div>
                    <p className="text-wrapper-101">
                      We manage the handover process meticulously, with robust documentation and tight governance. Our
                      processes ensure lasting consistency and quality, facilitating a seamless transition and nurturing
                      the sustained success of the design system over time.
                    </p>
                  </div>
                  <img
                    className="line-20"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-1.svg"
                  />
                </>
              )}

              {((screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 744) && (
                <>
                  <div
                    className="design-system"
                    style={{
                      alignItems: screenWidth >= 1024 && screenWidth < 1440 ? "center" : undefined,
                      color: screenWidth < 744 ? "var(--primaryblack)" : undefined,
                      display: screenWidth >= 1024 && screenWidth < 1440 ? "inline-flex" : undefined,
                      flex: screenWidth >= 1024 && screenWidth < 1440 ? "0 0 auto" : undefined,
                      flexDirection: screenWidth >= 1024 && screenWidth < 1440 ? "column" : undefined,
                      fontFamily: screenWidth < 744 ? "var(--mobile-title-h1-font-family)" : undefined,
                      fontSize: screenWidth < 744 ? "var(--mobile-title-h1-font-size)" : undefined,
                      fontStyle: screenWidth < 744 ? "var(--mobile-title-h1-font-style)" : undefined,
                      fontWeight: screenWidth < 744 ? "var(--mobile-title-h1-font-weight)" : undefined,
                      gap: screenWidth >= 1024 && screenWidth < 1440 ? "48px" : undefined,
                      letterSpacing: screenWidth < 744 ? "var(--mobile-title-h1-letter-spacing)" : undefined,
                      lineHeight: screenWidth < 744 ? "var(--mobile-title-h1-line-height)" : undefined,
                      marginTop: screenWidth < 744 ? "-1.00px" : undefined,
                      width: screenWidth < 744 ? "342px" : undefined,
                    }}
                  >
                    {screenWidth < 744 && <>Design system process highlights:</>}

                    {screenWidth >= 1024 && screenWidth < 1440 && (
                      <>
                        <div className="group-64">
                          <img
                            className="line-21"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-261.svg"
                          />
                          <img
                            className="line-22"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-262-2.svg"
                          />
                          <img
                            className="line-23"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-263.svg"
                          />
                          <div className="group-65">
                            <div className="text-wrapper-102">Inconsistent user experience.</div>
                            <div className="text-wrapper-103">/01</div>
                          </div>
                          <div className="group-66">
                            <div className="text-wrapper-102">Design-led delays in go-to-market.</div>
                            <div className="text-wrapper-103">/02</div>
                          </div>
                          <div className="group-67">
                            <div className="text-wrapper-102">Disjointed digital brand image.</div>
                            <div className="text-wrapper-103">/03</div>
                          </div>
                          <div className="group-68">
                            <div className="text-wrapper-102">Disconnected dev-design sprints.</div>
                            <div className="text-wrapper-103">/04</div>
                          </div>
                        </div>
                        <img
                          className="separator"
                          alt="Separator"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/separator.svg"
                        />
                      </>
                    )}
                  </div>
                  <div
                    className="a-design-system"
                    style={{
                      alignItems: screenWidth >= 1024 && screenWidth < 1440 ? "flex-start" : undefined,
                      color: screenWidth < 744 ? "var(--secondarygrey-2)" : undefined,
                      display: screenWidth >= 1024 && screenWidth < 1440 ? "inline-flex" : undefined,
                      flex: screenWidth >= 1024 && screenWidth < 1440 ? "0 0 auto" : undefined,
                      flexDirection: screenWidth >= 1024 && screenWidth < 1440 ? "column" : undefined,
                      fontFamily: screenWidth < 744 ? "var(--mobile-body-b2-font-family)" : undefined,
                      fontSize: screenWidth < 744 ? "var(--mobile-body-b2-font-size)" : undefined,
                      fontStyle: screenWidth < 744 ? "var(--mobile-body-b2-font-style)" : undefined,
                      fontWeight: screenWidth < 744 ? "var(--mobile-body-b2-font-weight)" : undefined,
                      gap: screenWidth >= 1024 && screenWidth < 1440 ? "24px" : undefined,
                      letterSpacing: screenWidth < 744 ? "var(--mobile-body-b2-letter-spacing)" : undefined,
                      lineHeight: screenWidth < 744 ? "var(--mobile-body-b2-line-height)" : undefined,
                      width: screenWidth < 744 ? "342px" : undefined,
                    }}
                  >
                    {screenWidth < 744 && (
                      <p className="text-wrapper-179">
                        A Design System redesign roadmap has to be delicately handled and marked out with much careful
                        consideration rather than impulse.
                      </p>
                    )}

                    {screenWidth >= 1024 && screenWidth < 1440 && (
                      <>
                        <p className="text-wrapper-104">Our proven methodology for Design Systems.</p>
                        <p className="text-wrapper-105">
                          Redesigning a design system is a densely strategised process that involves careful planning,
                          collaboration, and iterative refinement.
                        </p>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
            <div
              className="frame-10"
              style={{
                alignItems:
                  (screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744
                    ? "flex-start"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "center"
                    : undefined,
                gap:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "16px"
                    : screenWidth < 744
                    ? "40px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "64px"
                    : undefined,
                left:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "64px"
                    : screenWidth < 744
                    ? "24px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "58px"
                    : undefined,
                top:
                  screenWidth >= 744 && screenWidth < 1024
                    ? "1349px"
                    : screenWidth < 744
                    ? "1749px"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "1326px"
                    : undefined,
              }}
            >
              {((screenWidth >= 1024 && screenWidth < 1440) || (screenWidth >= 744 && screenWidth < 1024)) && (
                <>
                  <div
                    className="design-system-2"
                    style={{
                      alignItems: screenWidth >= 1024 && screenWidth < 1440 ? "center" : undefined,
                      color: screenWidth >= 744 && screenWidth < 1024 ? "var(--primaryblack)" : undefined,
                      display: screenWidth >= 1024 && screenWidth < 1440 ? "inline-flex" : undefined,
                      flex: screenWidth >= 1024 && screenWidth < 1440 ? "0 0 auto" : undefined,
                      flexDirection: screenWidth >= 1024 && screenWidth < 1440 ? "column" : undefined,
                      fontFamily:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-font-family)" : undefined,
                      fontSize:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-font-size)" : undefined,
                      fontStyle:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-font-style)" : undefined,
                      fontWeight:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-font-weight)" : undefined,
                      gap: screenWidth >= 1024 && screenWidth < 1440 ? "24px" : undefined,
                      letterSpacing:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-letter-spacing)" : undefined,
                      lineHeight:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-title-h1-line-height)" : undefined,
                      marginTop: screenWidth >= 744 && screenWidth < 1024 ? "-1.00px" : undefined,
                      width: screenWidth >= 744 && screenWidth < 1024 ? "616px" : undefined,
                    }}
                  >
                    {screenWidth >= 744 && screenWidth < 1024 && <>Design system process highlights:</>}

                    {screenWidth >= 1024 && screenWidth < 1440 && (
                      <>
                        <div className="text-wrapper-106">Design system process highlights:</div>
                        <p className="text-wrapper-107">
                          A Design System redesign roadmap has to be delicately handled and marked out with much careful
                          consideration rather than impulse.
                        </p>
                      </>
                    )}
                  </div>
                  <div
                    className="a-design-system-2"
                    style={{
                      color: screenWidth >= 744 && screenWidth < 1024 ? "var(--secondarygrey-3)" : undefined,
                      fontFamily:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-font-family)" : undefined,
                      fontSize:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-font-size)" : undefined,
                      fontStyle:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-font-style)" : undefined,
                      fontWeight:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-font-weight)" : undefined,
                      height: screenWidth >= 1024 && screenWidth < 1440 ? "1092px" : undefined,
                      letterSpacing:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-letter-spacing)" : undefined,
                      lineHeight:
                        screenWidth >= 744 && screenWidth < 1024 ? "var(--minitab-body-b1-line-height)" : undefined,
                      width:
                        screenWidth >= 744 && screenWidth < 1024
                          ? "616px"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "908px"
                          : undefined,
                    }}
                  >
                    {screenWidth >= 744 && screenWidth < 1024 && (
                      <p className="text-wrapper-179">
                        A Design System redesign roadmap has to be delicately handled and marked out with much careful
                        consideration rather than impulse.
                      </p>
                    )}

                    {screenWidth >= 1024 && screenWidth < 1440 && (
                      <div className="frame-11">
                        <div className="group-69">
                          <div className="frame-12">
                            <div className="group-70">
                              <div className="text-wrapper-108">Research first.</div>
                              <div className="text-wrapper-103">/01</div>
                            </div>
                            <p className="text-wrapper-109">
                              Our research is designed to interview stakeholders, end-users, and decision-makers in
                              order to grasp diverse needs. We incorporate findings into a comprehensive strategy that
                              aligns with business goals, ensuring the Design system meets user expectations and
                              industry standards.
                            </p>
                          </div>
                          <div className="frame-13">
                            <div className="group-70">
                              <div className="text-wrapper-108">Brand-centric DLS.</div>
                              <div className="text-wrapper-103">/02</div>
                            </div>
                            <p className="text-wrapper-109">
                              To reinforce the brand&#39;s visual identity, values and tone of voice,&nbsp;&nbsp;we
                              build consistency in the use of brand colours, typography, and imagery, coupled with
                              intuitive interactions to foster brand affinity and loyalty across all touchpoints.
                            </p>
                          </div>
                        </div>
                        <div className="group-71">
                          <div className="line-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                          <div className="img-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                        </div>
                        <div className="group-72">
                          <div className="frame-12">
                            <div className="group-73">
                              <div className="text-wrapper-108">Design principles and guidelines.</div>
                              <div className="text-wrapper-103">/03</div>
                            </div>
                            <p className="text-wrapper-109">
                              Based on design trends, research outcomes and brand essence, we identify core values,
                              guidelines and themes that drive the design creation process and craft an experience that
                              is unique to the brand for its users.
                            </p>
                          </div>
                          <div className="frame-13">
                            <div className="group-73">
                              <div className="text-wrapper-108">
                                Modularity for <br />
                                multiple use-cases.
                              </div>
                              <div className="text-wrapper-103">/04</div>
                            </div>
                            <p className="text-wrapper-109">
                              We adopt a modular process of Design System creation. Based on use-cases and development
                              prioritization we create components, patterns and templates that empower the design and
                              dev teams to scale the sprint outcomes exponentially.
                            </p>
                          </div>
                        </div>
                        <div className="group-71">
                          <div className="line-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                          <div className="img-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                        </div>
                        <div className="group-74">
                          <div className="frame-12">
                            <div className="group-73">
                              <div className="text-wrapper-108">Cross-functional collaboration.</div>
                              <div className="text-wrapper-103">/05</div>
                            </div>
                            <p className="text-wrapper-109">
                              Our Design System collaboration is characterized by an inclusive working approach,
                              fostering outcomes that excel in scale, efficiency and cost-effectiveness. We drive
                              results that go beyond expectations, ensuring a synergy of creativity and practicality for
                              optimal Design System performance.
                            </p>
                          </div>
                          <div className="frame-13">
                            <div className="group-73">
                              <p className="text-wrapper-108">Version control and documentation handover.</p>
                              <div className="text-wrapper-103">/06</div>
                            </div>
                            <p className="text-wrapper-109">
                              We manage the handover process meticulously, with robust documentation and tight
                              governance. Our processes ensure lasting consistency and quality, facilitating a seamless
                              transition and nurturing the sustained success of the design system over time.
                            </p>
                          </div>
                        </div>
                        <div className="group-75">
                          <div className="line-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                          <div className="img-wrapper">
                            <img
                              className="line-24"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {screenWidth < 744 && (
                <>
                  <div className="frame-9">
                    <div className="group-55">
                      <div className="text-wrapper-110">Research first.</div>
                      <div className="text-wrapper-111">/01</div>
                    </div>
                    <p className="text-wrapper-112">
                      Our research is designed to interview stakeholders, end-users, and decision-makers in order to
                      grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns with
                      business goals, ensuring the Design system meets user expectations and industry standards.
                    </p>
                  </div>
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-103.svg"
                  />
                  <div className="frame-9">
                    <div className="group-55">
                      <div className="text-wrapper-110">Brand-centric DLS.</div>
                      <div className="text-wrapper-111">/02</div>
                    </div>
                    <p className="text-wrapper-112">
                      To reinforce the brand&#39;s visual identity, values and tone of voice,&nbsp;&nbsp;we build
                      consistency in the use of brand colours, typography, and imagery, coupled with intuitive
                      interactions to foster brand affinity and loyalty across all touchpoints.
                    </p>
                  </div>
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-103.svg"
                  />
                  <div className="frame-9">
                    <div className="group-76">
                      <div className="text-wrapper-110">Design principles and guidelines.</div>
                      <div className="text-wrapper-111">/03</div>
                    </div>
                    <p className="text-wrapper-112">
                      Based on design trends, research outcomes and brand essence, we identify core values, guidelines
                      and themes that drive the design creation process and craft an experience that is unique to the
                      brand for its users.
                    </p>
                  </div>
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-103.svg"
                  />
                  <div className="frame-9">
                    <div className="group-76">
                      <div className="text-wrapper-110">Modularity for multiple use-cases.</div>
                      <div className="text-wrapper-111">/04</div>
                    </div>
                    <p className="text-wrapper-112">
                      We adopt a modular process of Design System creation. Based on use-cases and development
                      prioritization we create components, patterns and templates that empower the design and dev teams
                      to scale the sprint outcomes exponentially.
                    </p>
                  </div>
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-103.svg"
                  />
                  <div className="frame-9">
                    <div className="group-55">
                      <div className="text-wrapper-110">Cross-functional collaboration.</div>
                      <div className="text-wrapper-111">/05</div>
                    </div>
                    <p className="text-wrapper-112">
                      Our Design System collaboration is characterized by an inclusive working approach, fostering
                      outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go beyond
                      expectations, ensuring a synergy of creativity and practicality for optimal Design System
                      performance.
                    </p>
                  </div>
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-103.svg"
                  />
                  <div className="frame-9">
                    <div className="group-76">
                      <p className="text-wrapper-110">Version control and documentation handover.</p>
                      <div className="text-wrapper-111">/06</div>
                    </div>
                    <p className="text-wrapper-112">
                      We manage the handover process meticulously, with robust documentation and tight governance. Our
                      processes ensure lasting consistency and quality, facilitating a seamless transition and nurturing
                      the sustained success of the design system over time.
                    </p>
                  </div>
                  <img
                    className="line-25"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-107.svg"
                  />
                </>
              )}
            </div>
            {((screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744) && (
              <>
                <div
                  className="group-77"
                  style={{
                    height:
                      screenWidth >= 744 && screenWidth < 1024 ? "449px" : screenWidth < 744 ? "344px" : undefined,
                    left: screenWidth >= 744 && screenWidth < 1024 ? "64px" : screenWidth < 744 ? "24px" : undefined,
                    top: screenWidth >= 744 && screenWidth < 1024 ? "800px" : screenWidth < 744 ? "3833px" : undefined,
                    width: screenWidth >= 744 && screenWidth < 1024 ? "962px" : screenWidth < 744 ? "344px" : undefined,
                  }}
                >
                  {screenWidth < 744 && <div className="text-wrapper-113">This is ideal for</div>}

                  <div
                    className="frame-14"
                    style={{
                      height:
                        screenWidth < 744 ? "286px" : screenWidth >= 744 && screenWidth < 1024 ? "393px" : undefined,
                      top: screenWidth < 744 ? "58px" : screenWidth >= 744 && screenWidth < 1024 ? "0" : undefined,
                      width:
                        screenWidth < 744 ? "342px" : screenWidth >= 744 && screenWidth < 1024 ? "962px" : undefined,
                    }}
                  >
                    {screenWidth < 744 && (
                      <div className="overlap-group-4">
                        <div className="frame-15">
                          <div className="group-78">
                            <p className="text-wrapper-114">
                              Product team for <br />
                              sprint support
                            </p>
                            <div className="text-wrapper-115">/01</div>
                          </div>
                          <img
                            className="line-26"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-273.svg"
                          />
                          <div className="group-78">
                            <p className="text-wrapper-114">
                              S/M/L Corporates for <br />
                              digital platform
                            </p>
                            <div className="text-wrapper-116">/02</div>
                          </div>
                          <img
                            className="line-26"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-273.svg"
                          />
                          <div className="group-79">
                            <div className="text-wrapper-114">Startups of any size</div>
                            <div className="text-wrapper-116">/03</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <img
                      className="line-27"
                      style={{
                        height:
                          screenWidth < 744 ? "2px" : screenWidth >= 744 && screenWidth < 1024 ? "32px" : undefined,
                        left: screenWidth < 744 ? "0" : screenWidth >= 744 && screenWidth < 1024 ? "528px" : undefined,
                        top: screenWidth < 744 ? "0" : screenWidth >= 744 && screenWidth < 1024 ? "353px" : undefined,
                        width:
                          screenWidth < 744 ? "342px" : screenWidth >= 744 && screenWidth < 1024 ? "89px" : undefined,
                      }}
                      alt="Line"
                      src={
                        screenWidth < 744
                          ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-271.svg"
                          : screenWidth >= 744 && screenWidth < 1024
                          ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group-962@2x.png"
                          : undefined
                      }
                    />
                    {screenWidth >= 744 && screenWidth < 1024 && (
                      <>
                        <img
                          className="mask-group-3"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-15@2x.png"
                        />
                        <img
                          className="mask-group-4"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-17@2x.png"
                        />
                        <img
                          className="mask-group-5"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-13@2x.png"
                        />
                      </>
                    )}
                  </div>
                  {screenWidth >= 744 && screenWidth < 1024 && (
                    <img
                      className="line-28"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-276-1.svg"
                    />
                  )}
                </div>
                <div
                  className="group-80"
                  style={{
                    height:
                      screenWidth >= 744 && screenWidth < 1024 ? "196px" : screenWidth < 744 ? "443px" : undefined,
                    left: screenWidth >= 744 && screenWidth < 1024 ? "52px" : screenWidth < 744 ? "24px" : undefined,
                    top: screenWidth >= 744 && screenWidth < 1024 ? "3175px" : screenWidth < 744 ? "958px" : undefined,
                    width: screenWidth >= 744 && screenWidth < 1024 ? "640px" : screenWidth < 744 ? "580px" : undefined,
                  }}
                >
                  {screenWidth >= 744 && screenWidth < 1024 && (
                    <>
                      <div className="frame-16">
                        <div className="text-wrapper-117">This is ideal for</div>
                      </div>
                      <div className="group-81">
                        <img
                          className="line-29"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-271-1.svg"
                        />
                        <div className="group-82">
                          <img
                            className="line-30"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-1.svg"
                          />
                          <img
                            className="line-31"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-1.svg"
                          />
                          <div className="group-83">
                            <div className="text-wrapper-118">Websites, apps and products</div>
                            <div className="text-wrapper-119">/01</div>
                          </div>
                          <div className="group-84">
                            <div className="text-wrapper-118">Product teams</div>
                            <div className="text-wrapper-119">/02</div>
                          </div>
                          <div className="group-85">
                            <div className="text-wrapper-118">SaaS and Enterprise start-ups</div>
                            <div className="text-wrapper-119">/03</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth < 744 && (
                    <>
                      <div className="group-86">
                        <img
                          className="mask-group-6"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/mask-group-1@2x.png"
                        />
                        <img
                          className="mask-group-7"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/mask-group-2@2x.png"
                        />
                        <img
                          className="group-87"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group-962@2x.png"
                        />
                      </div>
                      <img
                        className="line-32"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-276.svg"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {((screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744) && (
          <div
            className="text-wrapper-120"
            style={{
              fontFamily:
                screenWidth < 744
                  ? "var(--mobile-title-h1-font-family)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-font-family)"
                  : undefined,
              fontSize:
                screenWidth < 744
                  ? "var(--mobile-title-h1-font-size)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-font-size)"
                  : undefined,
              fontStyle:
                screenWidth < 744
                  ? "var(--mobile-title-h1-font-style)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-font-style)"
                  : undefined,
              fontWeight:
                screenWidth < 744
                  ? "var(--mobile-title-h1-font-weight)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-font-weight)"
                  : undefined,
              left: screenWidth < 744 ? "24px" : screenWidth >= 744 && screenWidth < 1024 ? "64px" : undefined,
              letterSpacing:
                screenWidth < 744
                  ? "var(--mobile-title-h1-letter-spacing)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-letter-spacing)"
                  : undefined,
              lineHeight:
                screenWidth < 744
                  ? "var(--mobile-title-h1-line-height)"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "var(--minitab-title-h1-line-height)"
                  : undefined,
              top: screenWidth < 744 ? "5151px" : screenWidth >= 744 && screenWidth < 1024 ? "4245px" : undefined,
              width: screenWidth < 744 ? "342px" : screenWidth >= 744 && screenWidth < 1024 ? "616px" : undefined,
            }}
          >
            Our previous experience.
          </div>
        )}

        {screenWidth >= 744 && screenWidth < 1024 && (
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="overlap-group-5">
                <p className="feeling-the-lag-of">
                  Feeling the lag of <br />
                  inconsistent design?
                </p>
                <img
                  className="group-88"
                  alt="Group"
                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-912-1@2x.png"
                />
              </div>
              <div className="book-a-consultation">Book&nbsp;&nbsp;a consultation with us.</div>
              <Button className="button-instance" color="white" size="small" text="Connect now" />
            </div>
          </div>
        )}

        {((screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744) && (
          <div
            className="frame-17"
            style={{
              height: screenWidth < 744 ? "286px" : screenWidth >= 744 && screenWidth < 1024 ? "340px" : undefined,
              left: screenWidth < 744 ? "0" : screenWidth >= 744 && screenWidth < 1024 ? "-574px" : undefined,
              top: screenWidth < 744 ? "5804px" : screenWidth >= 744 && screenWidth < 1024 ? "4343px" : undefined,
              width: screenWidth < 744 ? "390px" : screenWidth >= 744 && screenWidth < 1024 ? "1893px" : undefined,
            }}
          >
            {screenWidth < 744 && (
              <div className="overlap-group-6">
                <div className="frame-18">
                  <div className="frame-9">
                    <p className="feeling-the-lag-of-2">
                      Feeling the lag of <br />
                      inconsistent design?
                    </p>
                    <div className="frame-19">
                      <div className="book-a-consultation-2">Book&nbsp;&nbsp;a consultation with us.</div>
                      <Button color="white" size="small" text="Connect now" />
                    </div>
                  </div>
                </div>
                <img
                  className="group-89"
                  alt="Group"
                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group-912@2x.png"
                />
              </div>
            )}

            {screenWidth >= 744 && screenWidth < 1024 && (
              <>
                <div className="carousel">
                  <div className="overlap-group-7">
                    <div className="image">
                      <img
                        className="element-top-right"
                        alt="Element top right"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/360one-600-top-right-black-1.png"
                      />
                    </div>
                    <div className="group-90">
                      <img
                        className="line-33"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-3.svg"
                      />
                      <div className="frame-20">
                        <div className="text-wrapper-121">360 one</div>
                        <img
                          className="line-34"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-32.svg"
                        />
                        <div className="text-wrapper-122">Mobile First Websites</div>
                      </div>
                    </div>
                    <img
                      className="next-arrow"
                      alt="Next arrow"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/next-arrow-3.svg"
                    />
                  </div>
                </div>
                <div className="div-3">
                  <div className="overlap-group-7">
                    <div className="image-2">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-8">
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/image.png"
                          />
                          <div className="rectangle-2" />
                          <div className="group-wrapper">
                            <img
                              className="group-91"
                              alt="Group"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1000004327@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="next-arrow-2"
                      alt="Next arrow"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/next-arrow-4.svg"
                    />
                    <div className="group-90">
                      <img
                        className="line-35"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-4.svg"
                      />
                      <div className="frame-20">
                        <div className="text-wrapper-121">Smitfit</div>
                        <img
                          className="line-36"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                        />
                        <div className="text-wrapper-123">Web and Mobile App</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-2">
                  <div className="div-3">
                    <div className="image-2">
                      <img
                        className="mask-group-8"
                        alt="Mask group"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-2.png"
                      />
                      <div className="overlap-group-9">
                        <div className="group-92">
                          <img
                            className="group-93"
                            alt="Group"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1196@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-90">
                      <img
                        className="line-37"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-5.svg"
                      />
                      <div className="frame-20">
                        <div className="text-wrapper-121">Pay with Ring</div>
                        <img
                          className="line-38"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                        />
                        <p className="design-system-mobile">Design System &amp; Mobile App</p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="next-arrow-3"
                    alt="Next arrow"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                  />
                </div>
              </>
            )}
          </div>
        )}

        {((screenWidth >= 1024 && screenWidth < 1440) || (screenWidth >= 744 && screenWidth < 1024)) && (
          <>
            <div
              className="frame-21"
              style={{
                alignItems:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "center"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "flex-start"
                    : undefined,
                gap:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "24px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "16px"
                    : undefined,
                left:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "154px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "64px"
                    : undefined,
                top:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "144px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "136px"
                    : undefined,
              }}
            >
              <div
                className="text-wrapper-124"
                style={{
                  fontFamily:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-font-family)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-font-size)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-font-style)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-font-weight)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-letter-spacing)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-title-h1-line-height)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-title-h1-line-height)"
                      : undefined,
                  textAlign: screenWidth >= 1024 && screenWidth < 1440 ? "center" : undefined,
                  width:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "716px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "616px"
                      : undefined,
                }}
              >
                Design Systems for scale
              </div>
              <div
                className="add-consistency-to"
                style={{
                  fontFamily:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-font-family)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-font-size)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-font-style)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-font-weight)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-letter-spacing)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "var(--tab-body-b3-line-height)"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "var(--minitab-body-b1-line-height)"
                      : undefined,
                  textAlign: screenWidth >= 1024 && screenWidth < 1440 ? "center" : undefined,
                  width:
                    screenWidth >= 1024 && screenWidth < 1440
                      ? "664px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "616px"
                      : undefined,
                }}
              >
                {screenWidth >= 1024 && screenWidth < 1440 && (
                  <p className="text-wrapper-179">
                    Add consistency to the scaling up of User Experience with an organized <br />
                    assembly of guidelines, components and documentation.
                  </p>
                )}

                {screenWidth >= 744 && screenWidth < 1024 && (
                  <p className="text-wrapper-179">
                    Add consistency to the scaling up of User Experience with an organized assembly of guidelines,
                    components and documentation.
                  </p>
                )}
              </div>
            </div>
            <img
              className="design-system-banner"
              style={{
                top:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "348px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "354px"
                    : undefined,
                width:
                  screenWidth >= 1024 && screenWidth < 1440
                    ? "1024px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "744px"
                    : undefined,
              }}
              alt="Design system banner"
              src={
                screenWidth >= 1024 && screenWidth < 1440
                  ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/design-system-banner--tab.svg"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/design-system-banner---minitab.svg"
                  : undefined
              }
            />
          </>
        )}

        {screenWidth >= 744 && screenWidth < 1024 && (
          <div className="ipad-mini-header">
            <Button className="instance-node" color="white" size="small" text="Engage Us" />
            <img
              className="LOGO-4"
              alt="Logo"
              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-3.svg"
            />
            <div className="MENU-wrapper">
              <div className="MENU">
                <div className="rectangle-3" />
                <div className="rectangle-4" />
              </div>
            </div>
          </div>
        )}

        {((screenWidth >= 744 && screenWidth < 1024) || screenWidth < 744) && (
          <div
            className="frame-22"
            style={{
              alignItems:
                screenWidth >= 744 && screenWidth < 1024 ? "center" : screenWidth < 744 ? "flex-start" : undefined,
              gap: screenWidth >= 744 && screenWidth < 1024 ? "40px" : screenWidth < 744 ? "10px" : undefined,
              left: screenWidth >= 744 && screenWidth < 1024 ? "64px" : screenWidth < 744 ? "-326px" : undefined,
              top: screenWidth >= 744 && screenWidth < 1024 ? "5151px" : screenWidth < 744 ? "5284px" : undefined,
            }}
          >
            {screenWidth >= 744 && screenWidth < 1024 && (
              <div className="frame-19">
                <div className="frame-9">
                  <div className="text-wrapper-125">/Next service</div>
                  <div className="text-wrapper-126">Web and mobile apps</div>
                </div>
                <Button color="white" size="small" text="Know more" />
              </div>
            )}

            <div
              className="service-thumbnail"
              style={{
                height: screenWidth >= 744 && screenWidth < 1024 ? "370px" : screenWidth < 744 ? "440px" : undefined,
                width: screenWidth >= 744 && screenWidth < 1024 ? "280px" : screenWidth < 744 ? "341px" : undefined,
              }}
            >
              {screenWidth >= 744 && screenWidth < 1024 && (
                <div className="overlap-group-10">
                  <div className="background" />
                  <div className="illustartion" />
                </div>
              )}

              {screenWidth < 744 && (
                <>
                  <div className="overlap-group-11">
                    <img
                      className="image-4"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/image@2x.png"
                    />
                    <div className="rectangle-5" />
                    <div className="group-94">
                      <img
                        className="line-39"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                      />
                      <div className="text-wrapper-127">Web and Mobile App</div>
                      <div className="text-wrapper-128">Smitfit</div>
                    </div>
                  </div>
                  <img
                    className="next-arrow-4"
                    alt="Next arrow"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                  />
                </>
              )}
            </div>
            {screenWidth < 744 && (
              <>
                <div className="element">
                  <div className="overlap-4">
                    <img
                      className="next-arrow-5"
                      alt="Next arrow"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/next-arrow-1.svg"
                    />
                    <div className="group-95">
                      <img
                        className="line-40"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-31-1.svg"
                      />
                      <div className="text-wrapper-127">Mobile First Websites</div>
                      <div className="text-wrapper-128">360 one</div>
                    </div>
                  </div>
                </div>
                <div className="element-2">
                  <div className="overlap-group-11">
                    <img
                      className="image-5"
                      alt="Image"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/image-1@2x.png"
                    />
                    <div className="rectangle-5" />
                    <div className="group-94">
                      <img
                        className="line-39"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                      />
                      <p className="text-wrapper-127">Design System &amp; Mobile App</p>
                      <div className="text-wrapper-128">Pay with Ring</div>
                    </div>
                  </div>
                  <img
                    className="next-arrow-4"
                    alt="Next arrow"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                  />
                </div>
              </>
            )}
          </div>
        )}

        {screenWidth >= 744 && screenWidth < 1024 && (
          <IpadMiniFooter
            className="ipad-mini-footer-instance"
            group="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-3@2x.png"
          />
        )}

        {screenWidth >= 1024 && screenWidth < 1440 && (
          <>
            <div className="group-96">
              <div className="carousel-3">
                <div className="overlap-group-7">
                  <div className="element-top-right-wrapper">
                    <img
                      className="element-one-top-right"
                      alt="Element top right"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/360one-600-top-right-black-1.png"
                    />
                  </div>
                  <div className="group-97">
                    <img
                      className="line-41"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-6.svg"
                    />
                    <div className="frame-23">
                      <div className="text-wrapper-129">360 one</div>
                      <img
                        className="line-34"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-32.svg"
                      />
                      <div className="text-wrapper-130">Mobile First Websites</div>
                    </div>
                  </div>
                  <img
                    className="next-arrow-6"
                    alt="Next arrow"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/next-arrow-6.svg"
                  />
                </div>
              </div>
              <div className="carousel-4">
                <div className="div-4">
                  <div className="image-6">
                    <img
                      className="mask-group-9"
                      alt="Mask group"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-4.png"
                    />
                    <div className="overlap-group-12">
                      <div className="group-98">
                        <img
                          className="group-99"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1196@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group-97">
                    <img
                      className="line-42"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-7.svg"
                    />
                    <div className="frame-23">
                      <div className="text-wrapper-129">Pay with Ring</div>
                      <img
                        className="line-43"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                      />
                      <p className="design-system-mobile-2">Design System &amp; Mobile App</p>
                    </div>
                  </div>
                </div>
                <img
                  className="next-arrow-7"
                  alt="Next arrow"
                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                />
              </div>
              <div className="div-4">
                <div className="overlap-group-7">
                  <div className="image-6">
                    <div className="overlap-group-7">
                      <div className="image-6">
                        <div className="overlap-group-13">
                          <img
                            className="image-7"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/image-1.png"
                          />
                          <div className="rectangle-6" />
                          <div className="group-100" />
                        </div>
                      </div>
                      <div className="group-101">
                        <img
                          className="group-102"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1000004327-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group-97">
                    <img
                      className="line-44"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-8.svg"
                    />
                    <div className="frame-23">
                      <div className="text-wrapper-129">Smitfit</div>
                      <img
                        className="line-45"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                      />
                      <div className="text-wrapper-131">Web and Mobile App</div>
                    </div>
                  </div>
                  <img
                    className="next-arrow-6"
                    alt="Next arrow"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/next-arrow-6.svg"
                  />
                </div>
              </div>
            </div>
            <div className="text-wrapper-132">Our previous experience.</div>
            <div className="frame-24">
              <div className="overlap-5">
                <div className="overlap-6">
                  <p className="feeling-the-lag-of-3">
                    Feeling the lag of <br />
                    inconsistent design?
                  </p>
                  <img
                    className="group-103"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-912-2@2x.png"
                  />
                </div>
                <div className="group-104">
                  <div className="book-a-consultation-3">Book&nbsp;&nbsp;a consultation with us.</div>
                  <Button className="button-2" color="white" size="small" text="Connect now" />
                </div>
              </div>
            </div>
            <div className="frame-25">
              <div className="frame-26">
                <div className="frame-9">
                  <div className="group-105">
                    <div className="text-wrapper-133">Web and mobile apps</div>
                    <div className="text-wrapper-134">/Next service</div>
                  </div>
                  <p className="design-stickiness">
                    Design stickiness and retention for web and mobile customer apps with our proven and
                    tested&nbsp;&nbsp;Customer Experience Design process, builds behavioural engagement by leveraging
                    Design Thinking for an end-to-end view of the customer acquisition and retention journey.
                  </p>
                </div>
                <Button color="white" size="small" text="Know more" />
              </div>
              <div className="service-thumbnail-2">
                <div className="overlap-group-14">
                  <div className="background-2" />
                  <div className="illustartion-2" />
                </div>
              </div>
            </div>
            <div className="ipad-pro-header">
              <Button className="button-3" color="white" size="small" text="Engage Us" />
              <img
                className="LOGO-5"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-3.svg"
              />
              <div className="navigation-bar-2">
                <div className="MENU">
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
            </div>
            <IpadProFooter
              LOGO="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-11.svg"
              className="ipad-pro-footer-instance"
            />
          </>
        )}

        {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
          <div
            className="overlap-7"
            style={{
              height: screenWidth >= 1440 && screenWidth < 1920 ? "7310px" : screenWidth >= 1920 ? "8638px" : undefined,
              left: screenWidth >= 1440 && screenWidth < 1920 ? "-803px" : screenWidth >= 1920 ? "-1053px" : undefined,
              width: screenWidth >= 1440 && screenWidth < 1920 ? "3046px" : screenWidth >= 1920 ? "4026px" : undefined,
            }}
          >
            <div
              className="overlap-8"
              style={{
                height:
                  screenWidth >= 1440 && screenWidth < 1920 ? "7310px" : screenWidth >= 1920 ? "8638px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "3046px" : screenWidth >= 1920 ? "4026px" : undefined,
              }}
            >
              {screenWidth >= 1440 && screenWidth < 1920 && (
                <LaptopFooter
                  LOGO="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-11.svg"
                  className="laptop-footer-instance"
                />
              )}

              {screenWidth >= 1920 && (
                <DesktopFooter
                  LOGO="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/logo-1.svg"
                  className="desktop-footer-instance"
                  img="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-55-1.svg"
                  line="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-55-1.svg"
                  line1="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-74-1.svg"
                />
              )}

              <img
                className="group-106"
                style={{
                  height:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1470px" : screenWidth >= 1920 ? "1960px" : undefined,
                  left:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1524px" : screenWidth >= 1920 ? "1789px" : undefined,
                  top:
                    screenWidth >= 1440 && screenWidth < 1920 ? "2651px" : screenWidth >= 1920 ? "3275px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "719px" : screenWidth >= 1920 ? "1184px" : undefined,
                }}
                alt="Group"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-80.png"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/group-80.png"
                    : undefined
                }
              />
              {screenWidth >= 1920 && (
                <>
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/rectangle-266.svg"
                  />
                  <img
                    className="design-system-banner-2"
                    alt="Design system banner"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/design-system-banner---web.svg"
                  />
                  <p className="a-design-system-for-3">
                    A design system for website &amp; apps <br />
                    is critical to resolve:
                  </p>
                  <div className="group-107">
                    <div className="frame-27">
                      <div className="text-wrapper-135">Design system process highlights:</div>
                      <p className="text-wrapper-136">
                        A Design System redesign roadmap has to be delicately handled and marked out with much careful
                        consideration rather than impulse.
                      </p>
                    </div>
                    <div className="frame-28">
                      <div className="group-108">
                        <div className="frame-12">
                          <div className="group-109">
                            <div className="text-wrapper-137">Research first.</div>
                            <div className="text-wrapper-138">/01</div>
                          </div>
                          <p className="text-wrapper-139">
                            Our research is designed to interview stakeholders, end-users, and decision-makers in order
                            to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns
                            with business goals, ensuring the Design system meets user expectations and industry
                            standards.
                          </p>
                        </div>
                        <div className="frame-29">
                          <div className="group-109">
                            <div className="text-wrapper-137">Brand-centric DLS.</div>
                            <div className="text-wrapper-138">/02</div>
                          </div>
                          <p className="text-wrapper-139">
                            To reinforce the brand&#39;s visual identity, values and tone of voice,&nbsp;&nbsp;we build
                            consistency in the use of brand colours, typography, and imagery, coupled with intuitive
                            interactions to foster brand affinity and loyalty across all touchpoints.
                          </p>
                        </div>
                      </div>
                      <div className="group-110">
                        <img
                          className="line-46"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103.svg"
                        />
                        <img
                          className="line-47"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103-1.svg"
                        />
                      </div>
                      <div className="group-111">
                        <div className="frame-12">
                          <div className="group-112">
                            <div className="text-wrapper-140">Design principles and guidelines.</div>
                            <div className="text-wrapper-138">/03</div>
                          </div>
                          <p className="text-wrapper-139">
                            Based on design trends, research outcomes and brand essence, we identify core values,
                            guidelines and themes that drive the design creation process and craft an experience that is
                            unique to the brand for its users.
                          </p>
                        </div>
                        <div className="frame-29">
                          <div className="group-113">
                            <div className="text-wrapper-137">
                              Modularity for multiple <br />
                              use-cases.
                            </div>
                            <div className="text-wrapper-138">/04</div>
                          </div>
                          <p className="text-wrapper-139">
                            We adopt a modular process of Design System creation. Based on use-cases and development
                            prioritization we create components, patterns and templates that empower the design and dev
                            teams to scale the sprint outcomes exponentially.
                          </p>
                        </div>
                      </div>
                      <div className="group-110">
                        <img
                          className="line-46"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103.svg"
                        />
                        <img
                          className="line-47"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103-1.svg"
                        />
                      </div>
                      <div className="group-111">
                        <div className="frame-12">
                          <div className="group-109">
                            <div className="text-wrapper-137">Cross-functional collaboration.</div>
                            <div className="text-wrapper-138">/05</div>
                          </div>
                          <p className="text-wrapper-139">
                            Our Design System collaboration is characterized by an inclusive working approach, fostering
                            outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go
                            beyond expectations, ensuring a synergy of creativity and practicality for optimal Design
                            System performance.
                          </p>
                        </div>
                        <div className="frame-29">
                          <div className="group-113">
                            <p className="text-wrapper-137">Version control and documentation handover.</p>
                            <div className="text-wrapper-138">/06</div>
                          </div>
                          <p className="text-wrapper-139">
                            We manage the handover process meticulously, with robust documentation and tight governance.
                            Our processes ensure lasting consistency and quality, facilitating a seamless transition and
                            nurturing the sustained success of the design system over time.
                          </p>
                        </div>
                      </div>
                      <div className="group-114">
                        <img
                          className="line-46"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103.svg"
                        />
                        <img
                          className="line-47"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-103-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-5">
                    <div className="case-study">
                      <div className="overlap-9">
                        <div className="image-8">
                          <div className="overlap-9">
                            <div className="image-8">
                              <div className="overlap-group-15">
                                <img
                                  className="image-9"
                                  alt="Image"
                                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/image.png"
                                />
                                <div className="rectangle-10" />
                                <div className="group-115">
                                  <img
                                    className="group-116"
                                    alt="Group"
                                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/group-1000004327@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="group-117">
                              <img
                                className="group-116"
                                alt="Group"
                                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/group-1000004327@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="line-48"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-31.svg"
                        />
                        <div className="frame-30">
                          <div className="text-wrapper-141">Smitfit</div>
                          <img
                            className="line-49"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                          />
                          <div className="text-wrapper-142">Web and Mobile App</div>
                        </div>
                        <img
                          className="next-arrow-8"
                          alt="Next arrow"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/next-arrow.svg"
                        />
                      </div>
                    </div>
                    <div className="case-study">
                      <div className="overlap-9">
                        <div className="element-one-top-right-wrapper">
                          <img
                            className="element-top-right-2"
                            alt="Element top right"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/360one-600-top-right-black-1.png"
                          />
                        </div>
                        <img
                          className="next-arrow-8"
                          alt="Next arrow"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/next-arrow.svg"
                        />
                        <img
                          className="line-50"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-31-1.svg"
                        />
                        <div className="frame-30">
                          <div className="text-wrapper-141">360 one</div>
                          <img
                            className="line-51"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-32-1.svg"
                          />
                          <div className="text-wrapper-142">Mobile First Websites</div>
                        </div>
                      </div>
                    </div>
                    <div className="case-study">
                      <div className="overlap-10">
                        <div className="image-8">
                          <img
                            className="mask-group-10"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/mask-group-1.png"
                          />
                          <div className="overlap-group-16">
                            <div className="group-118">
                              <img
                                className="group-119"
                                alt="Group"
                                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1196@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="line-52"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-31-2.svg"
                        />
                        <div className="frame-31">
                          <div className="text-wrapper-143">Pay with Ring</div>
                          <img
                            className="line-51"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-32-1.svg"
                          />
                          <p className="design-system-mobile-3">Design System &amp; Mobile App</p>
                        </div>
                      </div>
                      <img
                        className="next-arrow-9"
                        alt="Next arrow"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                      />
                    </div>
                  </div>
                  <div className="group-120">
                    <div className="overlap-11">
                      <img
                        className="line-53"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-273.svg"
                      />
                      <img
                        className="line-54"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-273.svg"
                      />
                      <div className="group-121">
                        <div className="group-122">
                          <div className="text-wrapper-144">Websites, apps and products</div>
                          <div className="text-wrapper-145">/01</div>
                        </div>
                        <div className="group-123">
                          <div className="text-wrapper-146">
                            SaaS and Enterprise <br />
                            start-ups
                          </div>
                          <div className="text-wrapper-145">/03</div>
                        </div>
                        <div className="group-124">
                          <div className="text-wrapper-146">Product teams</div>
                          <div className="text-wrapper-145">/02</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-32">
                      <img
                        className="line-55"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-269.svg"
                      />
                      <p className="text-wrapper-147">Design Systems are ideal for :</p>
                      <img
                        className="line-55"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-269.svg"
                      />
                    </div>
                    <img
                      className="line-56"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-271.svg"
                    />
                  </div>
                </>
              )}

              <div
                className="rectangle-11"
                style={{
                  backgroundColor:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--primarywhite)"
                      : screenWidth >= 1920
                      ? "var(--primaryblue)"
                      : undefined,
                  height:
                    screenWidth >= 1440 && screenWidth < 1920 ? "3410px" : screenWidth >= 1920 ? "444px" : undefined,
                  left:
                    screenWidth >= 1440 && screenWidth < 1920 ? "803px" : screenWidth >= 1920 ? "1053px" : undefined,
                  top:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1052px" : screenWidth >= 1920 ? "6404px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                {screenWidth >= 1920 && (
                  <div className="overlap-12">
                    <div className="overlap-13">
                      <p className="feeling-the-lag-of-4">
                        Feeling the lag of <br />
                        inconsistent design?
                      </p>
                      <img
                        className="group-125"
                        alt="Group"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/group-912.png"
                      />
                    </div>
                    <div className="text-wrapper-148">Partner with us</div>
                    <Button className="button-4" color="white" size="large" text="Connect now" />
                  </div>
                )}
              </div>
              {screenWidth >= 1920 && (
                <>
                  <div className="text-wrapper-149">Phase 0</div>
                  <div className="frame-33">
                    <div className="frame-34">
                      <div className="frame-35">
                        <div className="group-126">
                          <div className="text-wrapper-150">Inconsistent user experience.</div>
                          <div className="text-wrapper-151">/01</div>
                        </div>
                        <img
                          className="line-57"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-261.svg"
                        />
                        <div className="group-127">
                          <div className="text-wrapper-150">Design-led delays in go-to-market.</div>
                          <div className="text-wrapper-138">/02</div>
                        </div>
                        <img
                          className="line-58"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-261.svg"
                        />
                        <div className="group-128">
                          <div className="text-wrapper-150">Disjointed digital brand image.</div>
                          <div className="text-wrapper-138">/03</div>
                        </div>
                        <img
                          className="line-59"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-261.svg"
                        />
                        <div className="group-129">
                          <div className="text-wrapper-150">Disconnected dev-design sprints.</div>
                          <div className="text-wrapper-138">/04</div>
                        </div>
                      </div>
                      <img
                        className="separator"
                        alt="Separator"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/separator.svg"
                      />
                    </div>
                    <div className="frame-19">
                      <p className="text-wrapper-152">Our proven methodology for Design Systems.</p>
                      <p className="text-wrapper-136">
                        Redesigning a design system is a densely strategised process that involves careful planning,
                        collaboration, and iterative refinement.
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div
                className="group-130"
                style={{
                  height:
                    screenWidth >= 1920 ? "754px" : screenWidth >= 1440 && screenWidth < 1920 ? "256px" : undefined,
                  left:
                    screenWidth >= 1920 ? "1215px" : screenWidth >= 1440 && screenWidth < 1920 ? "973px" : undefined,
                  top:
                    screenWidth >= 1920 ? "2206px" : screenWidth >= 1440 && screenWidth < 1920 ? "4262px" : undefined,
                  width:
                    screenWidth >= 1920 ? "2136px" : screenWidth >= 1440 && screenWidth < 1920 ? "1100px" : undefined,
                }}
              >
                {screenWidth >= 1920 && (
                  <>
                    <img
                      className="line-60"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-276.svg"
                    />
                    <div className="group-131">
                      <img
                        className="group-132"
                        alt="Group"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/group-705@2x.png"
                      />
                      <div className="group-133">
                        <div className="frame-36">
                          <div className="heading">
                            <div className="text-wrapper-153">Phase 0</div>
                            <div className="text-wrapper-154">
                              Project planning and <br />
                              kick-off
                            </div>
                          </div>
                          <div className="bullet-points">
                            <div className="group-134">
                              <div className="text-wrapper-155">Material download</div>
                              <div className="ellipse-13" />
                            </div>
                            <div className="group-134">
                              <div className="text-wrapper-155">Kick-off and project planning</div>
                              <div className="ellipse-13" />
                            </div>
                            <div className="group-134">
                              <div className="text-wrapper-155">Ways of working</div>
                              <div className="ellipse-13" />
                            </div>
                            <div className="group-134">
                              <div className="text-wrapper-155">Goals and objectives</div>
                              <div className="ellipse-13" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="heading-wrapper">
                        <div className="heading-2">
                          <div className="text-wrapper-153">Phase 1</div>
                          <p className="text-wrapper-154">
                            UX Research and <br />
                            Product Immersion
                          </p>
                        </div>
                      </div>
                      <div className="group-135">
                        <div className="heading-2">
                          <div className="text-wrapper-153">Phase 2</div>
                          <p className="text-wrapper-154">Design System mapping and Moodboarding</p>
                        </div>
                      </div>
                      <div className="group-136">
                        <div className="overlap-group-17">
                          <img
                            className="mask-group-11"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/mask-group-4.png"
                          />
                          <div className="heading-3">
                            <div className="text-wrapper-153">Phase 3</div>
                            <p className="text-wrapper-154">
                              MVP Style guide and <br />
                              A/B Testing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {screenWidth >= 1440 && screenWidth < 1920 && (
                  <>
                    <div className="overlap-14">
                      <div className="frame-37">
                        <div className="group-137">
                          <div className="text-wrapper-156">Websites, apps and products</div>
                          <div className="text-wrapper-157">/01</div>
                        </div>
                        <img
                          className="line-16"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-2.svg"
                        />
                        <div className="group-137">
                          <div className="text-wrapper-156">Product teams</div>
                          <div className="text-wrapper-157">/02</div>
                        </div>
                        <img
                          className="line-16"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-273-2.svg"
                        />
                        <div className="group-138">
                          <div className="text-wrapper-156">
                            SaaS and Enterprise <br />
                            start-ups
                          </div>
                          <div className="text-wrapper-157">/03</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-38">
                      <img
                        className="line-17"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-269.svg"
                      />
                      <div className="text-wrapper-158">This is ideal for</div>
                      <img
                        className="line-17"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-269.svg"
                      />
                    </div>
                    <img
                      className="line-61"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-271-3.svg"
                    />
                  </>
                )}
              </div>
              {screenWidth >= 1920 && (
                <>
                  <img
                    className="line-62"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-230.svg"
                  />
                  <img
                    className="line-63"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-93.svg"
                  />
                  <img
                    className="line-62"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-231.svg"
                  />
                  <img
                    className="line-63"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-232.svg"
                  />
                  <div className="rectangle-12" />
                  <div className="rectangle-13" />
                  <div className="rectangle-14" />
                  <div className="rectangle-15" />
                  <div className="rectangle-16" />
                  <div className="desktop-header">
                    <div className="frame-39">
                      <div className="navigation-bar-3">
                        <div className="MENU-2">
                          <div className="rectangle-17" />
                          <div className="rectangle-18" />
                        </div>
                      </div>
                      <NavigationBarLogo4 className="navigation-bar-LOGO" color="white" />
                    </div>
                    <PropertyDefaultWrapper
                      className="navigation-bar-desktop"
                      componentClassName="navigation-bar-instance"
                      componentClassNameOverride="navigation-bar-4"
                      dropdown="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/dropdown-17.svg"
                      property1="hover-selected-about-us"
                    />
                    <Button className="button-5" color="white" size="large" text="Engage Us" />
                  </div>
                </>
              )}

              {screenWidth >= 1440 && screenWidth < 1920 && (
                <>
                  <div className="carousel-6">
                    <div className="div-5">
                      <div className="case-study-2">
                        <div className="div-5">
                          <div className="image-10">
                            <img
                              className="element-top-right-3"
                              alt="Element top right"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/360one-600-top-right-black-1.png"
                            />
                          </div>
                          <div className="group-139">
                            <img
                              className="line-64"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-9.svg"
                            />
                            <img
                              className="next-arrow-10"
                              alt="Next arrow"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/next-arrow-9.svg"
                            />
                            <div className="frame-40">
                              <div className="text-wrapper-159">360 one</div>
                              <img
                                className="line-65"
                                alt="Line"
                                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-32-6.svg"
                              />
                              <div className="text-wrapper-160">Mobile First Websites</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="case-study-3">
                        <div className="div-5">
                          <div className="image-11">
                            <div className="div-5">
                              <div className="image-11">
                                <div className="overlap-group-18">
                                  <img
                                    className="image-12"
                                    alt="Image"
                                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/image-2.png"
                                  />
                                  <div className="rectangle-19" />
                                  <div className="group-140">
                                    <img
                                      className="group-141"
                                      alt="Group"
                                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1000004327-2@2x.png"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="group-142">
                                <img
                                  className="group-141"
                                  alt="Group"
                                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1000004327-2@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-139">
                            <img
                              className="line-66"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-10.svg"
                            />
                            <div className="group-143">
                              <img
                                className="arrow-icon"
                                alt="Arrow icon"
                                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/arrow-icon.svg"
                              />
                              <div className="frame-41">
                                <div className="text-wrapper-159">Smitfit</div>
                                <img
                                  className="line-67"
                                  alt="Line"
                                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                                />
                                <div className="text-wrapper-160">Web and Mobile App</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-144">
                        <div className="div-5">
                          <div className="image-11">
                            <img
                              className="mask-group-12"
                              alt="Mask group"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-6.png"
                            />
                            <div className="overlap-group-19">
                              <div className="group-145">
                                <img
                                  className="group-146"
                                  alt="Group"
                                  src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-1196@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-139">
                            <img
                              className="line-68"
                              alt="Line"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31-11.svg"
                            />
                            <img
                              className="arrow-icon-2"
                              alt="Arrow icon"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-31@2x.png"
                            />
                            <div className="frame-42">
                              <div className="text-wrapper-159">Pay with Ring</div>
                              <img
                                className="line-65"
                                alt="Line"
                                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-32-6.svg"
                              />
                              <p className="text-wrapper-160">Design System &amp; Mobile App</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="a-design-system-for-4">
                    A design system for website &amp; apps <br />
                    is critical to resolve:
                  </p>
                  <img
                    className="line-69"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-125.svg"
                  />
                  <img
                    className="line-70"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-126.svg"
                  />
                  <div className="rectangle-20" />
                  <div className="rectangle-21" />
                  <div className="rectangle-22" />
                  <div className="rectangle-23" />
                  <img
                    className="rectangle-24"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/rectangle-166.svg"
                  />
                  <div className="rectangle-25" />
                  <img
                    className="line-69"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-14.svg"
                  />
                  <img
                    className="line-70"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-33.svg"
                  />
                  <img
                    className="design-system-banner-3"
                    alt="Design system banner"
                    src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/design-system-banner---laptop.svg"
                  />
                  <div className="frame-43">
                    <div className="frame-34">
                      <div className="frame-44">
                        <div className="group-147">
                          <div className="text-wrapper-161">Inconsistent user experience.</div>
                          <div className="text-wrapper-162">/01</div>
                        </div>
                        <img
                          className="line-71"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-261-1.svg"
                        />
                        <div className="group-148">
                          <div className="text-wrapper-161">Design-led delays in go-to-market.</div>
                          <div className="text-wrapper-162">/02</div>
                        </div>
                        <img
                          className="line-72"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-261-1.svg"
                        />
                        <div className="group-149">
                          <div className="text-wrapper-161">Disjointed digital brand image.</div>
                          <div className="text-wrapper-162">/03</div>
                        </div>
                        <img
                          className="line-73"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-261-1.svg"
                        />
                        <div className="group-150">
                          <div className="text-wrapper-161">Disconnected dev-design sprints.</div>
                          <div className="text-wrapper-162">/04</div>
                        </div>
                      </div>
                      <img
                        className="separator"
                        alt="Separator"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/separator-1.svg"
                      />
                    </div>
                    <div className="frame-45">
                      <p className="text-wrapper-163">Our proven methodology for Design Systems.</p>
                      <p className="redesigning-a-design">
                        Redesigning a design system is a densely strategised process that involves careful planning,
                        collaboration, <br />
                        and iterative refinement.
                      </p>
                    </div>
                  </div>
                  <div className="group-151">
                    <div className="frame-46">
                      <div className="group-152">
                        <div className="frame-12">
                          <div className="group-153">
                            <div className="text-wrapper-164">Research first.</div>
                            <div className="text-wrapper-165">/01</div>
                          </div>
                          <p className="text-wrapper-166">
                            Our research is designed to interview stakeholders, end-users, and decision-makers in order
                            to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns
                            with business goals, ensuring the Design system meets user expectations and industry
                            standards.
                          </p>
                        </div>
                        <div className="frame-47">
                          <div className="group-153">
                            <div className="text-wrapper-164">Brand-centric DLS.</div>
                            <div className="text-wrapper-165">/02</div>
                          </div>
                          <p className="text-wrapper-166">
                            To reinforce the brand&#39;s visual identity, values and tone of voice,&nbsp;&nbsp;we build
                            consistency in the use of brand colours, typography, and imagery, coupled with intuitive
                            interactions to foster brand affinity and loyalty across all touchpoints.
                          </p>
                        </div>
                      </div>
                      <div className="group-154">
                        <img
                          className="line-74"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-8.svg"
                        />
                        <img
                          className="line-75"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-9.svg"
                        />
                      </div>
                      <div className="group-155">
                        <div className="frame-12">
                          <div className="group-156">
                            <div className="text-wrapper-164">Design principles and guidelines.</div>
                            <div className="text-wrapper-165">/03</div>
                          </div>
                          <p className="text-wrapper-166">
                            Based on design trends, research outcomes and brand essence, we identify core values,
                            guidelines and themes that drive the design creation process and craft an experience that is
                            unique to the brand for its users.
                          </p>
                        </div>
                        <div className="frame-47">
                          <div className="group-156">
                            <div className="text-wrapper-164">
                              Modularity for <br />
                              multiple use-cases.
                            </div>
                            <div className="text-wrapper-165">/04</div>
                          </div>
                          <p className="text-wrapper-166">
                            We adopt a modular process of Design System creation. Based on use-cases and development
                            prioritization we create components, patterns and templates that empower the design and dev
                            teams to scale the sprint outcomes exponentially.
                          </p>
                        </div>
                      </div>
                      <div className="group-154">
                        <img
                          className="line-74"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-8.svg"
                        />
                        <img
                          className="line-75"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-9.svg"
                        />
                      </div>
                      <div className="group-157">
                        <div className="frame-12">
                          <div className="group-156">
                            <div className="text-wrapper-164">Cross-functional collaboration.</div>
                            <div className="text-wrapper-165">/05</div>
                          </div>
                          <p className="text-wrapper-166">
                            Our Design System collaboration is characterized by an inclusive working approach, fostering
                            outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go
                            beyond expectations, ensuring a synergy of creativity and practicality for optimal Design
                            System performance.
                          </p>
                        </div>
                        <div className="frame-47">
                          <div className="group-156">
                            <p className="text-wrapper-164">Version control and documentation handover.</p>
                            <div className="text-wrapper-165">/06</div>
                          </div>
                          <p className="text-wrapper-166">
                            We manage the handover process meticulously, with robust documentation and tight governance.
                            Our processes ensure lasting consistency and quality, facilitating a seamless transition and
                            nurturing the sustained success of the design system over time.
                          </p>
                        </div>
                      </div>
                      <div className="group-158">
                        <img
                          className="line-74"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-8.svg"
                        />
                        <img
                          className="line-75"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-103-9.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-167">Design system process highlights:</div>
                      <p className="text-wrapper-168">
                        A Design System redesign roadmap has to be delicately handled and marked out with much careful
                        consideration rather than impulse.
                      </p>
                    </div>
                  </div>
                  <div className="frame-49">
                    <div className="overlap-15">
                      <div className="overlap-16">
                        <p className="feeling-the-lag-of-5">
                          Feeling the lag of <br />
                          inconsistent design?
                        </p>
                        <img
                          className="group-159"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-912-3.png"
                        />
                      </div>
                      <div className="group-160">
                        <div className="book-a-consultation-4">Book&nbsp;&nbsp;a consultation with us.</div>
                        <Button className="button-6" color="white" size="large" text="Connect now" />
                      </div>
                    </div>
                  </div>
                  <div className="group-161">
                    <div className="div-6">
                      <div className="div-6">
                        <div className="group-162">
                          <div className="frame-50">
                            <div className="text-wrapper-169">Phase 1</div>
                            <p className="text-wrapper-170">
                              UX Research and <br />
                              Product Immersion
                            </p>
                          </div>
                        </div>
                        <div className="group-163">
                          <div className="frame-50">
                            <div className="text-wrapper-169">Phase 2</div>
                            <p className="text-wrapper-170">Design System mapping and Moodboarding</p>
                          </div>
                        </div>
                        <div className="group-164">
                          <div className="overlap-group-20">
                            <img
                              className="mask-group-13"
                              alt="Mask group"
                              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/mask-group-19@2x.png"
                            />
                            <div className="frame-51">
                              <div className="text-wrapper-169">Phase 3</div>
                              <p className="text-wrapper-170">MVP Style guide and A/B Testing</p>
                            </div>
                          </div>
                        </div>
                        <div className="group-165">
                          <div className="frame-52">
                            <div className="frame-53">
                              <div className="text-wrapper-169">Phase 0</div>
                              <div className="project-planning-and-2">
                                Project planning and <br />
                                kick-off
                              </div>
                            </div>
                            <div className="frame-54">
                              <div className="group-166">
                                <div className="text-wrapper-171">Material download</div>
                                <div className="ellipse-14" />
                              </div>
                              <div className="group-166">
                                <div className="text-wrapper-171">Kick-off and project planning</div>
                                <div className="ellipse-14" />
                              </div>
                              <div className="group-166">
                                <div className="text-wrapper-171">Ways of working</div>
                                <div className="ellipse-14" />
                              </div>
                              <div className="group-166">
                                <div className="text-wrapper-171">Goals and objectives</div>
                                <div className="ellipse-14" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="group-167"
                        alt="Group"
                        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-962-3@2x.png"
                      />
                    </div>
                    <img
                      className="line-76"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-276-3.svg"
                    />
                  </div>
                  <div className="laptop-header">
                    <div className="frame-55">
                      <div className="navigation-bar-5">
                        <div className="MENU-3">
                          <div className="rectangle-26" />
                          <div className="rectangle-27" />
                        </div>
                      </div>
                      <NavigationBarLogo4 className="navigation-bar-logo-4" color="white" />
                    </div>
                    <NavigationBar
                      className="navigation-bar-laptop"
                      componentClassName="navigation-bar-instance"
                      componentClassNameOverride="navigation-bar-4"
                      dropdown="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/dropdown-8.svg"
                      property1="hover-selected-about-us"
                    />
                    <Button className="button-7" color="white" size="large" text="Engage Us" />
                  </div>
                </>
              )}
            </div>
            <div
              className="frame-56"
              style={{
                gap: screenWidth >= 1440 && screenWidth < 1920 ? "32px" : screenWidth >= 1920 ? "40px" : undefined,
                left: screenWidth >= 1440 && screenWidth < 1920 ? "993px" : screenWidth >= 1920 ? "1350px" : undefined,
                top: screenWidth >= 1440 && screenWidth < 1920 ? "196px" : screenWidth >= 1920 ? "232px" : undefined,
              }}
            >
              <div
                className="text-wrapper-172"
                style={{
                  fontFamily:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-font-family)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-font-size)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-font-style)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-font-weight)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-letter-spacing)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-title-h1-line-height)"
                      : screenWidth >= 1920
                      ? "var(--web-title-h1-line-height)"
                      : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1060px" : screenWidth >= 1920 ? "1326px" : undefined,
                }}
              >
                Design Systems for scale
              </div>
              <p
                className="add-consistency-to-2"
                style={{
                  fontFamily:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-font-family)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-font-family)"
                      : undefined,
                  fontSize:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-font-size)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-font-size)"
                      : undefined,
                  fontStyle:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-font-style)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-font-style)"
                      : undefined,
                  fontWeight:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-font-weight)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-font-weight)"
                      : undefined,
                  letterSpacing:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-letter-spacing)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-letter-spacing)"
                      : undefined,
                  lineHeight:
                    screenWidth >= 1440 && screenWidth < 1920
                      ? "var(--laptop-body-b2-line-height)"
                      : screenWidth >= 1920
                      ? "var(--web-body-b2-line-height)"
                      : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "844px" : screenWidth >= 1920 ? "1056px" : undefined,
                }}
              >
                Add consistency to the scaling up of User Experience with an organized <br />
                assembly of guidelines, components and documentation.
              </p>
            </div>
            <div
              className="text-wrapper-173"
              style={{
                fontFamily:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-font-family)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-font-family)"
                    : undefined,
                fontSize:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-font-size)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-font-size)"
                    : undefined,
                fontStyle:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-font-style)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-font-style)"
                    : undefined,
                fontWeight:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-font-weight)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-font-weight)"
                    : undefined,
                left: screenWidth >= 1440 && screenWidth < 1920 ? "993px" : screenWidth >= 1920 ? "1350px" : undefined,
                letterSpacing:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-letter-spacing)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-letter-spacing)"
                    : undefined,
                lineHeight:
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "var(--laptop-title-h1-line-height)"
                    : screenWidth >= 1920
                    ? "var(--web-title-h1-line-height)"
                    : undefined,
                top: screenWidth >= 1440 && screenWidth < 1920 ? "4697px" : screenWidth >= 1920 ? "5431px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1060px" : screenWidth >= 1920 ? "1326px" : undefined,
              }}
            >
              Our previous experience.
            </div>
            <div
              className="frame-57"
              style={{
                gap: screenWidth >= 1440 && screenWidth < 1920 ? "110px" : screenWidth >= 1920 ? "135px" : undefined,
                left: screenWidth >= 1440 && screenWidth < 1920 ? "993px" : screenWidth >= 1920 ? "1350px" : undefined,
                top: screenWidth >= 1440 && screenWidth < 1920 ? "6060px" : screenWidth >= 1920 ? "7048px" : undefined,
              }}
            >
              <div
                className="frame-58"
                style={{
                  gap: screenWidth >= 1440 && screenWidth < 1920 ? "40px" : screenWidth >= 1920 ? "48px" : undefined,
                }}
              >
                <div className="frame-26">
                  <div
                    className="group-168"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "84px" : screenWidth >= 1920 ? "100px" : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "524px" : screenWidth >= 1920 ? "655px" : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-174"
                      style={{
                        fontFamily:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-font-family)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-font-size)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-font-style)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-font-weight)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-letter-spacing)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-title-h3-line-height)"
                            : screenWidth >= 1920
                            ? "var(--web-title-h3-line-height)"
                            : undefined,
                        top:
                          screenWidth >= 1440 && screenWidth < 1920 ? "36px" : screenWidth >= 1920 ? "40px" : undefined,
                        width:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "520px"
                            : screenWidth >= 1920
                            ? "651px"
                            : undefined,
                      }}
                    >
                      Web and mobile apps
                    </div>
                    <div
                      className="text-wrapper-175"
                      style={{
                        fontFamily:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-font-family)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-font-family)"
                            : undefined,
                        fontSize:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-font-size)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-font-size)"
                            : undefined,
                        fontStyle:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-font-style)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-font-style)"
                            : undefined,
                        fontWeight:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-font-weight)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-font-weight)"
                            : undefined,
                        letterSpacing:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-letter-spacing)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-letter-spacing)"
                            : undefined,
                        lineHeight:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "var(--laptop-body-b2-line-height)"
                            : screenWidth >= 1920
                            ? "var(--web-body-b2-line-height)"
                            : undefined,
                      }}
                    >
                      /Next service
                    </div>
                  </div>
                  <p
                    className="design-stickiness-2"
                    style={{
                      fontFamily:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-font-family)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-font-family)"
                          : undefined,
                      fontSize:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-font-size)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-font-size)"
                          : undefined,
                      fontStyle:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-font-style)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-font-style)"
                          : undefined,
                      fontWeight:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-font-weight)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-font-weight)"
                          : undefined,
                      letterSpacing:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-letter-spacing)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-letter-spacing)"
                          : undefined,
                      lineHeight:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "var(--laptop-body-b2-line-height)"
                          : screenWidth >= 1920
                          ? "var(--web-body-b2-line-height)"
                          : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "520px" : screenWidth >= 1920 ? "651px" : undefined,
                    }}
                  >
                    Design stickiness and retention for web and mobile customer apps with our proven and
                    tested&nbsp;&nbsp;Customer Experience Design process, builds behavioural engagement by leveraging
                    Design Thinking for an end-to-end view of the customer acquisition and retention journey.
                  </p>
                </div>
                <Button color="white" size="large" text="Know more" />
              </div>
              <div
                className="service-thumbnail-3"
                style={{
                  height:
                    screenWidth >= 1440 && screenWidth < 1920 ? "580px" : screenWidth >= 1920 ? "730px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "430px" : screenWidth >= 1920 ? "540px" : undefined,
                }}
              >
                <div
                  className="overlap-group-21"
                  style={{
                    height:
                      screenWidth >= 1440 && screenWidth < 1920 ? "579px" : screenWidth >= 1920 ? "730px" : undefined,
                    width: screenWidth >= 1440 && screenWidth < 1920 ? "429px" : undefined,
                  }}
                >
                  <div
                    className="background-3"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "556px" : screenWidth >= 1920 ? "700px" : undefined,
                      left:
                        screenWidth >= 1440 && screenWidth < 1920 ? "23px" : screenWidth >= 1920 ? "30px" : undefined,
                      top:
                        screenWidth >= 1440 && screenWidth < 1920 ? "23px" : screenWidth >= 1920 ? "30px" : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "406px" : screenWidth >= 1920 ? "510px" : undefined,
                    }}
                  />
                  <img
                    className="illustartion-3"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "556px" : screenWidth >= 1920 ? "700px" : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "406px" : screenWidth >= 1920 ? "510px" : undefined,
                    }}
                    alt="Illustartion"
                    src={
                      screenWidth >= 1440 && screenWidth < 1920
                        ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/illustartion-1.svg"
                        : screenWidth >= 1920
                        ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/illustartion.svg"
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {screenWidth < 744 && (
          <>
            <div className="frame-59">
              <div className="text-wrapper-176">Design Systems for scale</div>
              <p className="add-consistency-to-3">
                Add consistency to the scaling up of User Experience with an organized <br />
                assembly of guidelines, components and documentation.
              </p>
            </div>
            <div className="design-system-banner-4" />
            <div className="mobile-header">
              <img
                className="LOGO-6"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/logo.svg"
              />
              <div className="navigation-bar-6">
                <div className="MENU">
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
              </div>
              <img
                className="line-77"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-309.svg"
              />
            </div>
            <div className="group-169">
              <div className="overlap-17">
                <div className="service-thumbnail-wrapper">
                  <div className="service-thumbnail-4">
                    <div className="overlap-group-22">
                      <div className="background-4" />
                      <div className="mask-group-wrapper">
                        <img
                          className="mask-group-14"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/mask-group-3@2x.png"
                        />
                      </div>
                      <div className="background-5" />
                    </div>
                  </div>
                </div>
                <Button className="button-8" color="white" size="small" text="Know more" />
              </div>
            </div>
            <div className="group-170">
              <div className="text-wrapper-177">/Next service</div>
              <div className="text-wrapper-178">Web and mobile apps</div>
            </div>
            <MobileFooter
              className="mobile-footer-instance"
              group="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group-1@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};
