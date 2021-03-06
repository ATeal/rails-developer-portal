import classNames from "classnames";
import * as React from "react";

import { defaultFlexContainer } from "../styles/vadsUtils";

import flagIcon from "../../../../../node_modules/uswds/src/img/favicons/favicon-40.png";
import dotGovIcon from "../assets/icon-dot-gov.svg";
import httpsIcon from "../assets/icon-https.svg";
import "./Banner.scss";

function GuidanceBox(
  props: React.PropsWithChildren<{ icon: string; title: string; id?: string }>
) {
  return (
    <div
      id={props.id}
      className={classNames(
        "vads-l-col--12",
        "medium-screen:vads-l-col--6",
        "vads-u-display--flex",
        "vads-u-align-content--flex-start",
        "vads-u-line-height--4",
        "medium-screen:vads-u-padding-x--1p5"
      )}
    >
      <img
        className={classNames(
          "va-api-banner-icon",
          "vads-u-margin-right--1",
          "vads-u-margin-top--0p5"
        )}
        src={props.icon}
        alt="Dot Gov"
      />
      <div className="vads-u-margin-bottom--1p5">
        <div>
          <strong>{props.title}</strong>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

interface IBannerState {
  accordionVisible: boolean;
}

export default class Banner extends React.Component<{}, IBannerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      accordionVisible: false
    };
  }

  public render() {
    return (
      <section>
        <div
          className={classNames(
            "site-guidance",
            "vads-u-background-color--gray-dark"
          )}
        >
          <header className={classNames("va-api-banner-header")}>
            <div
              className={classNames(
                "va-api-banner-inner",
                "vads-u-max-width--100",
                "vads-u-color--white",
                "medium-screen:vads-u-padding-x--4"
              )}
            >
              <div
                className={classNames(
                  defaultFlexContainer(true),
                  "vads-u-padding-y--0p25"
                )}
              >
                <div>
                  <img
                    src={flagIcon}
                    alt="US flag"
                    className={classNames(
                      "va-api-banner-icon",
                      "vads-u-margin-left--1p5",
                      "vads-u-margin-right--1",
                      "vads-u-margin-top--neg1",
                      "medium-screen:vads-u-margin-left--0",
                      "medium-screen:vads-u-margin-top--0"
                    )}
                  />
                </div>
                <div
                  className={classNames(
                    "site-notice-text",
                    defaultFlexContainer(true),
                    "vads-u-margin-left--1",
                    "vads-u-font-size--sm",
                    "small-desktop-screen:vads-u-max-width--none"
                  )}
                >
                  <div>
                    An official website of the United States government.
                  </div>
                  <button
                    className={classNames(
                      "va-api-site-guidance-button",
                      "vads-u-color--white",
                      "vads-u-font-size--sm",
                      "vads-u-margin--0",
                      "vads-u-margin-top--0p25",
                      "vads-u-padding--0",
                      "small-desktop-screen:vads-u-margin-left--1",
                      "small-desktop-screen:vads-u-margin-top--0"
                    )}
                    onClick={this.toggleAccordionVisible}
                    aria-expanded={
                      this.state.accordionVisible ? "true" : "false"
                    }
                  >
                    <span
                      className={classNames(
                        "vads-u-font-weight--normal",
                        "vads-u-text-decoration--underline"
                      )}
                    >
                      Here's how you know
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={classNames(
                  "usa-accordion-content",
                  "vads-l-grid-container",
                  "vads-u-background-color--gray-dark"
                )}
                aria-hidden={this.state.accordionVisible ? "false" : "true"}
              >
                <div className="vads-l-row">
                  <GuidanceBox
                    id="dot-gov-guidance"
                    icon={dotGovIcon}
                    title="The .gov means it's official"
                  >
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you're on a
                    federal government site.
                  </GuidanceBox>
                  <GuidanceBox
                    id="https-guidance"
                    icon={httpsIcon}
                    title="The site is secure."
                  >
                    <span>
                      The <strong>https://</strong> ensures that you're
                      connecting to the official website and that any
                      information you provide is encrypted and sent securely.
                    </span>
                  </GuidanceBox>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    );
  }

  private toggleAccordionVisible = () => {
    this.setState(state => {
      return { accordionVisible: !state.accordionVisible };
    });
  };
}
