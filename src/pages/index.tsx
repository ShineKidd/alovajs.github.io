import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Copy from '@site/static/img/copy.svg';
import Github from '@site/static/img/github.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import { useState } from 'react';
import SupportList from '../components/SupportList';
import FeatureBlock, { ArrowTextLink } from './_indexComponent/FeatureBlock';
import styles from './_indexComponent/index.module.css';
import Intro from './_indexComponent/Intro';
import UserDescription from './_indexComponent/UserDescription';
import { CoreDevs, DeveloperComments, Project, Strategy, VideoPath } from './constants';

const buttons = [
  {
    text: <Translate id="homepage.Getting Started">Getting Started</Translate>,
    type: 'primary',
    style: 'ctw-button-primary',
    link: '/tutorial/getting-started/introduce'
  },
  {
    text: <Translate id="homepage.Examples">Examples</Translate>,
    type: 'secondary',
    style: 'ctw-button-secondary',
    link: '/examples'
  }
];
const installCmd = 'npm i alova';

function FeatureButton({
  icon,
  text,
  className,
  onClick,
  ...otherProps
}: {
  icon?: string;
  text: string;
  className?: string;
  onClick?: React.DOMAttributes<any>['onClick'];
}) {
  const buttonStyles = [
    className ?? '',
    'group/button text-left px-6 py-4 text-white rounded-lg border-primary-100 flex items-center border-[2px] bg-primary-100/20 transition cursor-pointer',
    /* dark state */
    'dark:border-slate-800 dark:bg-transparent',
    /* hover state */
    'hover:border-white data-[select=true]:border-primary-500'
  ].join(' ');

  const textStyles = [
    'text-slate-700 dark:text-slate-200 md:text-base text-sm',
    /* hover state */
    'group-hover/button:text-black dark:group-hover/button:text-white'
  ].join(' ');

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      {...otherProps}>
      {icon ? <span className="mr-2">{icon}</span> : null}
      <span className={textStyles}>{text}</span>
    </button>
  );
}

function HomepageHeader() {
  const { isDarkTheme } = useColorMode();
  return (
    <header className="container mx-auto antialiased text-slate-500 dark:text-slate-400">
      <div className="flex flex-col mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 justify-between md:mt-32 mt-16 mx-5 md:mx-0">
          <div className="relative">
            <div className="font-sans md:text-6xl text-4xl font-bold leading-tight">
              <p className={styles.titleGradient}>
                <Translate id="homepage.title.Creative">Creative</Translate>
              </p>
              <p className="text-slate-900 tracking-normal dark:text-slate-50">
                <Translate id="homepage.title.Next Generation Request Tool">
                  Next Generation Request Tool
                </Translate>
              </p>
            </div>
            <p className="mt-4 max-w-3xl text-lg space-y-6">
              <Translate id="homepage.tagline">
                Extremely improve your API using efficiency and save brainpower Just one step
              </Translate>
            </p>
            <div className="flex flex-col md:items-stretch items-center">
              <div className="mt-8 flex gap-x-4">
                {buttons.map(({ text, style, link }, i) => (
                  <Link
                    key={link}
                    className={style}
                    to={link}>
                    {text}
                  </Link>
                ))}
              </div>

              <div className="ctw-card flex items-center justify-between mt-4 border border-primary-100 dark:border-primary-900 bg-primary-100/20 dark:bg-white/5 text-slate-500 max-w-sm font-mono text-sm py-2 px-4 w-[200px] rounded-md">
                <div className="flex gap-2 items-center text-gray-800 dark:text-gray-400">
                  <span className="select-none">$</span>
                  <span>{installCmd}</span>
                </div>
                <button
                  className="ctw-link w-[16px] h-[16px]"
                  onClick={() => copy(installCmd)}>
                  <Copy />
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full md:max-w-[1000px] h-[430px]">
            <div className={styles.bgImage}></div>
            <div
              style={{
                transform: 'translateX(-5%)'
              }}
              className="relative overflow-hidden h-full w-full">
              <img
                style={{
                  transform: 'rotate(12deg) skew(-24deg, 0deg)'
                }}
                className="absolute top-0 left-0 w-full h-full"
                src={isDarkTheme ? '/img/header-image-dark.svg' : '/img/header-image.svg'}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const changableVideo = {
    locateApiByUrl: VideoPath.locateApiByUrl,
    useAndFindApi: VideoPath.useAndFindApi
  } as const;

  const { siteConfig } = useDocusaurusContext();
  const [showingVideo, setShowingVideo] =
    useState<keyof typeof changableVideo>('locateApiByUrl');

  return (
    <Layout
      wrapperClassName={clsx('use-tailwind', styles.decoratedPurple)}
      title={
        siteConfig.title +
        ' - ' +
        translate({
          message: 'Lightweight request strategy library',
          id: 'homepage.title'
        })
      }
      description="alova.js a lightweight request strategy library">
      <div className="dark:bg-[#040f26] overflow-hidden">
        <HomepageHeader></HomepageHeader>
        <main className="mx-auto mt-20 md:mt-40">
          {/* Automatic Generate */}
          <section className="container mx-auto py-20 flex flex-col md:flex-row gap-16 justify-between">
            <div className="flex flex-col items-start md:max-w-[500px]">
              <Intro
                section={translate({
                  message: 'Automatic Generate',
                  id: 'homepage.automaticGenerate.sectionTitle'
                })}
                title={translate({
                  message: 'Use APIs while searching',
                  id: 'homepage.automaticGenerate.title'
                })}
                description={translate({
                  message: `Quickly find APIs in editor, and enjoy full type hints even in js projects with the API code automatically generated by alova's extension.`,
                  id: 'homepage.automaticGenerate.description'
                })}
              />
              <div className="flex flex-col gap-5 mt-10 w-full md:w-[400px]">
                <FeatureButton
                  icon="🔍"
                  text={translate({
                    message: 'Locate API by its url or description',
                    id: 'homepage.automaticGenerate.Locate API by its url or description'
                  })}
                  onClick={() => setShowingVideo('locateApiByUrl')}
                  data-select={showingVideo === 'locateApiByUrl'}
                />
                <FeatureButton
                  icon="📦"
                  text={translate({
                    message: 'API Parameters and Response at a glance',
                    id: 'homepage.automaticGenerate.API Parameters and Response at a glance'
                  })}
                  onClick={() => setShowingVideo('useAndFindApi')}
                  data-select={showingVideo === 'useAndFindApi'}
                />
              </div>
            </div>
            <div className="flex-1 max-w-full md:max-w-[800px]">
              <div
                style={{
                  background:
                    'linear-gradient(135deg, #2C92FF 0%, #711EFF 41%, #FF41C6 71%, #FF772E 100%)'
                }}
                className="relative pt-8 px-4 md:px-12 rounded-3xl flex flex-col items-center">
                <div className="border-gray-200/40 border border-b-0 bg-[rgba(228,228,228,0.3)] h-6 rounded-t-xl w-11/12"></div>
                <video
                  src={changableVideo[showingVideo]}
                  className="w-full rounded-t-lg opacity-80 block"
                  autoPlay
                  muted
                  controls={false}></video>
              </div>
            </div>
          </section>

          {/* Request Strategy */}
          <div className="bg-gray-100/30 dark:bg-gray-500/10">
            <section className="container mx-auto py-16 flex flex-col gap-16 justify-between">
              <Intro
                section={translate({
                  message: 'Request Strategy',
                  id: 'homepage.requestStrategy.sectionTitle'
                })}
                title={translate({
                  message: 'Complex request scenes killer',
                  id: 'homepage.requestStrategy.title'
                })}
                description={translate({
                  message: `Request in various complex scenes by one line of code`,
                  id: 'homepage.requestStrategy.description'
                })}
              />

              <div className="w-full flex flex-col md:!grid grid-cols-4 md:grid-cols-12 gap-6">
                {Strategy.map(({ title, type, description, className, snippet, to }) => (
                  <FeatureBlock
                    title={title}
                    to={to}
                    type={type}
                    className={className + ' dark:bg-[#040f26]'}
                    description={description}
                    snippet={snippet}
                    key={title}
                    showLearnMore
                  />
                ))}
                <div className={clsx('relative col-span-4 row-span-1', styles.borderGradient)}>
                  <FeatureBlock
                    title={translate({
                      message: 'Learn total 20+ strategies',
                      id: 'homepage.requestStrategy.More Strategy.title'
                    })}
                    className="dark:bg-[#040f26] items-center h-full w-full rounded-2xl">
                    <div className="flex flex-1 flex-wrap gap-y-4 mt-5 leading-[16px] w-full justify-around text-sm">
                      <ArrowTextLink to="/tutorial/client/strategy/">
                        <Translate id="homepage.requestStrategy.More Strategy.Client">
                          Client strategies
                        </Translate>
                      </ArrowTextLink>
                      <ArrowTextLink to="/tutorial/server/strategy/">
                        <Translate id="homepage.requestStrategy.More Strategy.Server">
                          Server strategies
                        </Translate>
                      </ArrowTextLink>
                    </div>
                  </FeatureBlock>
                </div>
              </div>
            </section>
          </div>

          {/* Flexible */}
          <section className="container mx-auto py-16 flex flex-col gap-16 justify-between">
            <Intro
              section={translate({
                message: 'Flexible',
                id: 'homepage.Flexible.sectionTitle'
              })}
              title={translate({
                message: 'Runs in any JS environment with any request tool',
                id: 'homepage.Flexible.title'
              })}
              description={translate({
                message: `Use hooks originated from functional components, but alova innovatively made it compatible with options and class-style UI frameworks, which means that alova's use hooks are almost not restricted by JS environments and UI frameworks, and can be used together with your familiar request tools.`,
                id: 'homepage.Flexible.description'
              })}
              className="max-w-[600px]"
            />
            <div className="flex gap-10 justify-between">
              <SupportList></SupportList>
            </div>
          </section>

          {/* Join the community */}
          <section className="container mx-auto py-16 flex flex-col mt-10 md:mt-32 gap-24 justify-between">
            <Intro
              section={translate({
                message: 'Join the community',
                id: 'homepage.Join the community.sectionTitle'
              })}
              title={translate({
                message: 'Trusted by developers around the world',
                id: 'homepage.Join the community.title'
              })}
              description={translate({
                message: `Open source projects dependent on alova`,
                id: 'homepage.Join the community.description'
              })}
              className="items-center text-center"
            />

            {/* Projects */}
            <div className="self-center flex gap-10 md:gap-20 justify-between">
              {Project.map(item => (
                <UserDescription
                  avatar={item.avatar}
                  avatarSize={54}
                  name={item.name}
                  key={item.name}
                  to={item.to}
                  vertical
                />
              ))}
            </div>

            {/* Developers */}
            <div className="flex flex-col md:!grid grid-cols-2 gap-14 self-center justify-between">
              {DeveloperComments.map((item, index) => (
                <div
                  className="col-span-1 max-w-[500px]"
                  key={index}>
                  <UserDescription
                    avatar={item.avatar}
                    avatarRadius={9999}
                    name={item.name}
                    description={item.description}
                  />
                  <div className="text-gray-400 mt-4">{item.children}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Alova team */}
          <section className="container mx-auto py-14 flex flex-col mt-10 md:mt-32 gap-16 items-center">
            <Intro
              section={translate({
                message: 'Alova team',
                id: 'homepage.Alova team.sectionTitle'
              })}
              title={translate({
                message: 'Meet the core members',
                id: 'homepage.Alova team.title'
              })}
              className="items-center text-center"
            />
            <div className="flex flex-col sm:!grid grid-cols-3 gap-4 md:gap-12 w-full">
              {CoreDevs.map((item, index) => (
                <div
                  className="ctw-card flex flex-col items-center p-12 col-span-1 rounded-lg border border-primary-100 dark:border-transparent"
                  key={index}>
                  <UserDescription
                    avatar={item.avatar}
                    avatarRadius={9999}
                    name={item.name}
                    description={item.description}
                    key={item.name}
                    vertical
                  />
                  <a
                    className="ctw-link dark:ctw-link-dark mt-4 h-[20px] w-[20px]"
                    href={item.url}
                    target="_blank">
                    <Github />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Try it NOW */}
          <section className="container mx-auto">
            <div className="flex flex-col py-10 mt-0 md:mt-20 mb-20 items-center rounded-lg bg-[url(/img/bg-card.svg)] dark:bg-[url(/img/bg-card-dark.svg)]">
              <Intro
                section={translate({
                  message: 'Try it NOW',
                  id: 'homepage.Try It Now.sectionTitle'
                })}
                sectionClassName="text-white dark:text-primary-500"
                title={translate({
                  message: 'Take your development efficiency to the next level',
                  id: 'homepage.Try It Now.title'
                })}
                className="items-center text-white text-center"
              />
              <div className="mt-8 flex gap-x-4">
                {buttons.map(({ text, style, link, type }, i) => (
                  <Link
                    key={link}
                    className={clsx(
                      style,
                      type === 'secondary'
                        ? 'text-white hover:text-white hover:border-white border-white/20'
                        : 'bg-white text-primary-500 hover:text-primary-600 hover:!bg-white/80 dark:bg-primary-500 dark:text-white dark:hover:!bg-primary-600 dark:hover:text-white'
                    )}
                    to={link}>
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
