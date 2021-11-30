import Head from 'next/head'

import Module from '../components/Module'
import { GITHUB_URL, LINKDIN_URL } from '../constants/url'

const About = () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <Module>
      <h1>About</h1>
      <p>Hi, my name is Johnson. I&apos;m a software developer.</p>
      <p>
        For my works, please visit my <a href={LINKDIN_URL}>LinkedIn</a> or{' '}
        <a href={GITHUB_URL}>Github</a>.
      </p>
    </Module>
  </>
)

export default About
