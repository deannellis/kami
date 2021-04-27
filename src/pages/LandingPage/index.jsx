import React from "react";

import PageLayout from "../../components/PageLayout";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import storybookScreencap from "../../images/storybook_screencap.png";

const techInfo = [
  {
    title: "Formik",
    description: (
      <p>
        Kami uses <a href="https://formik.org/">Formik</a> to create custom
        inputs and forms. Building advanced forms with input validation is now
        effortless.
      </p>
    ),
  },
  {
    title: "TypeScript",
    description: (
      <p>
        Get all the benefits of IntelliSense with components that are statically
        typed with <a href="https://www.typescriptlang.org/">TypeScript</a>,
        making them easy to read, understand, and use.
      </p>
    ),
  },
  {
    title: "Snowpack",
    description: (
      <p>
        Instant startup, lightning-fast refreshes, and hot module replacement
        are all included with the{" "}
        <a href="https://www.snowpack.dev/">Snowpack</a> build tool. Experience
        the difference.
      </p>
    ),
  },
];
const LandingPage = () => (
  <PageLayout layout="no-pad">
    <section className="landing-page__hero">
      <div className="animation">
        <div className="animation__triangle-01" />
        <div className="animation__triangle-02" />
        <div className="animation__triangle-04" />
        <div className="animation__triangle-03" />
        <div className="animation__triangle-05" />
        <div className="animation__rectangle" />
      </div>
      <h1 className="animation__title">kami</h1>
    </section>
    <section className="landing-page__intro">
      <h1>My goal with kami was threefold:</h1>
      <ul>
        <li>To create a boilerplate project for future React applications</li>
        <li>
          To capture UI patterns I have implemeneted many times and provide a
          base design system that is easily adpated
        </li>
        <li>To try new technologies & best practices</li>
      </ul>
    </section>
    <section className="landing-page__technologies">
      {techInfo.map(({ title, description }) => (
        <div>
          <Icon title={`${title} Mark`} size={80} />
          {description}
        </div>
      ))}
    </section>
    <section className="landing-page__storybook">
      <div>
        <p>
          Kami is set up with <a href="https://storybook.js.org/">Storybook</a>:
          a great way to build and document UI components. Go a step further and
          deploy your Storybook to{" "}
          <a href="https://www.chromatic.com/">Chromatic</a> to instantly get
          visual regression testing and a continuous integration workflow, where
          you can review UI changes with your team before commiting.
        </p>
        <a href="https://60876ffa514a8d002188dbcf-xctqpzojhf.chromatic.com/">
          <Button variant="outline">View Storybook</Button>
        </a>
      </div>
      <div>
        <img src={storybookScreencap} alt="Storybook screen example" />
      </div>
    </section>
  </PageLayout>
);

export default LandingPage;
